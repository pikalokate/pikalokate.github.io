"""Small recording helper: CDP screencast frames + injected cursor + privacy blur."""
import base64, os, shutil, subprocess, time
import imageio_ffmpeg

CURSOR_JS = r"""
(() => {
  if (window.__cur) return;
  const c = document.createElement('div'); window.__cur = c;
  c.innerHTML = '<svg width="22" height="22" viewBox="0 0 24 24"><path d="M4 2l15 11-6.5 1.2L16 21l-3 1.4-3.4-6.9L4 20z" fill="#111" stroke="#fff" stroke-width="1.5" stroke-linejoin="round"/></svg>';
  Object.assign(c.style, {position:'fixed', left:'-40px', top:'-40px', zIndex:2147483647, pointerEvents:'none', transition:'transform .08s'});
  const add = () => document.body && document.body.appendChild(c);
  add(); new MutationObserver(() => { if (!c.isConnected) add(); }).observe(document.documentElement, {childList:true, subtree:true});
  addEventListener('mousemove', e => { c.style.left = e.clientX - 3 + 'px'; c.style.top = e.clientY - 2 + 'px'; }, true);
  addEventListener('mousedown', () => c.style.transform = 'scale(.85)', true);
  addEventListener('mouseup', () => c.style.transform = '', true);
})();
"""

class Recorder:
    def __init__(self, page, frames_dir):
        self.page, self.dir = page, os.path.abspath(frames_dir)
        shutil.rmtree(self.dir, ignore_errors=True); os.makedirs(self.dir)
        self.frames = []; self.cdp = page.context.new_cdp_session(page); self.on = False
        self.cdp.on('Page.screencastFrame', self._frame)
        self.x, self.y = 700, 450

    def _frame(self, ev):
        self.cdp.send('Page.screencastFrameAck', {'sessionId': ev['sessionId']})
        if not self.on: return
        p = os.path.join(self.dir, f'{len(self.frames):05d}.jpg')
        with open(p, 'wb') as f: f.write(base64.b64decode(ev['data']))
        self.frames.append((p, time.time()))

    def start(self):
        self.on = True
        self.cdp.send('Page.startScreencast', {'format': 'jpeg', 'quality': 92, 'everyNthFrame': 1, 'maxWidth': 2880, 'maxHeight': 1800})

    def stop(self):
        time.sleep(0.4); self.on = False; self.cdp.send('Page.stopScreencast')

    def hold(self, s): self.page.wait_for_timeout(int(s * 1000))

    def move(self, x, y, steps=22):
        ensure_cursor(self.page)
        self.page.mouse.move(x, y, steps=steps); self.x, self.y = x, y

    def to(self, locator, steps=22):
        locator.scroll_into_view_if_needed(); bb = locator.bounding_box()
        self.move(bb['x'] + bb['width'] / 2, bb['y'] + bb['height'] / 2, steps)

    def click(self, locator, pause=0.25):
        self.to(locator); self.hold(pause); self.page.mouse.down(); self.page.mouse.up()

    def type(self, locator, text, delay=55):
        self.click(locator); locator.press_sequentially(text, delay=delay)

    def encode(self, out_mp4, width=1680, tail=1.2):
        """Turn timestamped frames into a constant-30fps H.264 mp4."""
        lst = os.path.join(self.dir, 'list.txt')
        with open(lst, 'w') as f:
            for i, (p, t) in enumerate(self.frames):
                nxt = self.frames[i + 1][1] if i + 1 < len(self.frames) else t + tail
                f.write(f"file '{p}'\nduration {max(nxt - t, 0.001):.4f}\n")
            f.write(f"file '{self.frames[-1][0]}'\n")
        ff = imageio_ffmpeg.get_ffmpeg_exe()
        subprocess.run([ff, '-y', '-loglevel', 'error', '-f', 'concat', '-safe', '0', '-i', lst,
                        '-vf', f'scale={width}:-2:flags=lanczos,fps=30,format=yuv420p',
                        '-c:v', 'libx264', '-preset', 'slow', '-crf', '20', '-color_range', 'tv',
                        '-movflags', '+faststart', out_mp4], check=True)

def ensure_cursor(page):
    try: page.evaluate("(()=>{" + CURSOR_JS.replace("if (window.__cur) return;", "if (window.__cur && window.__cur.isConnected) return;") + "})()")
    except Exception: pass

def setup(page, blur_behind_dialog=True):
    page.on('load', lambda: ensure_cursor(page))
    if blur_behind_dialog:
        page.add_init_script(r"""
          addEventListener('DOMContentLoaded', () => {
            const s = document.createElement('style');
            s.textContent = 'body:has([role=dialog]) main{filter:blur(7px)}';
            document.head.appendChild(s);
          });""")

def encode_dir(frames_dir, out_mp4, width=1680):
    """Rebuild a video from saved frames, using file times as timestamps."""
    import glob
    r = Recorder.__new__(Recorder); r.dir = os.path.abspath(frames_dir)
    fs = sorted(glob.glob(os.path.join(r.dir, '*.jpg')))
    r.frames = [(f, os.path.getmtime(f)) for f in fs]
    r.encode(os.path.abspath(out_mp4), width)

def blur_rows_except(page, keep):
    """Blur list rows (links to other records) so only `keep` (a string or list) stays readable."""
    keeps = [keep] if isinstance(keep, str) else list(keep)
    page.evaluate("""keeps => {
      const run = () => document.querySelectorAll('main a[href*="/products/"], main a[href*="/customers/"], main a[href*="/orders/"]').forEach(a => {
        const row = a.closest('tr,[role=row]') || a.parentElement.parentElement;
        if (keeps.some(k => row.innerText.includes(k))) { row.style.filter = ''; return; }
        row.style.filter = 'blur(5px)';
      });
      run(); new MutationObserver(run).observe(document.body, {childList: true, subtree: true});
    }""", keeps)

def blur_options_except(page, keeps):
    """Blur dropdown rows shaped like 'Name - ID - …' unless they contain one of `keeps`."""
    page.evaluate("""keeps => {
      const run = () => document.querySelectorAll('body *').forEach(e => {
        if (e.children.length || !e.offsetParent) return;
        const t = e.textContent || '';
        if (!/ - /.test(t) || keeps.some(k => t.includes(k))) return;
        if (e.closest('[data-keep]')) return;
        e.style.filter = 'blur(5px)';
      });
      run(); new MutationObserver(run).observe(document.body, {childList: true, subtree: true, characterData: true});
    }""", keeps)

def blur_text(page, needles):
    """Blur any leaf element whose text contains one of `needles` (e.g. a work email)."""
    page.evaluate("""needles => {
      const run = () => document.querySelectorAll('body *').forEach(e => {
        if (e.children.length) return;
        if (needles.some(n => (e.textContent || '').includes(n))) e.style.filter = 'blur(5px)';
      });
      run(); new MutationObserver(run).observe(document.body, {childList: true, subtree: true, characterData: true});
    }""", needles)
