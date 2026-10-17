// Demo-data layer for Billpro staging captures. Inject with context.add_init_script().
// Swaps names, emails, product names, gateway IDs and money totals in the browser only; nothing is saved on staging.
(() => {
  if (window.__demo) return; window.__demo = true;
  const NAMES = ["Olivia Bennett","Lucas Moreau","Amara Okafor","Noah Fischer","Sofia Romano","Ethan Clarke","Mia Lindqvist","Leo Navarro","Hannah Weber","Daniel Costa","Chloe Martin","Jonas Berg","Isla Murphy","Mateo Garcia","Freya Hansen","Samuel Price","Elena Petrova","Oscar Dubois","Grace Turner","Hugo Laurent","Zara Ahmed","Felix Wagner","Ava Jensen","Liam Walsh","Nina Kowalski","Marco Rossi","Ruby Evans","Theo Novak","Lena Schmidt","Adam Brooks","Julia Santos","Max Keller","Emily Hart","David Silva","Clara Vogel","Ryan Hughes","Alice Fontaine","Tom Becker","Maya Patel","Erik Larsen"];
  const PRODUCTS = ["Nova Wireless Earbuds","Studio Monthly Plan","Pro Yoga Membership","Organic Coffee Box","Design Course, 6 Parts","Smart Desk Lamp","Cloud Storage 1 TB","Language Lessons Pack","Linen Bed Set","Fitness Coaching","Ceramic Mug Set","Photo Editing Plan","Running Shoes","Weekly Meal Kit","Leather Wallet","Online Piano Course","Plant Care Kit","Team Workspace Plan","Travel Backpack","Skincare Set"];
  const COMPANIES = ["Northwind Goods","Bright Studio Ltd","Lumen Labs","Harbor & Co","Pine Street Shop"];
  const h = s => { let x = 0; for (const c of s) x = (x * 31 + c.charCodeAt(0)) >>> 0; return x; };
  const pick = (arr, s) => arr[h(s.trim().toLowerCase()) % arr.length];
  const email = n => n.toLowerCase().replace(/[^a-z ]/g, "").split(" ").join(".") + "@example.com";
  const hex = s => { let out = "", x = h(s); for (let i = 0; i < s.length; i++) { x = (Math.imul(x, 1103515245) + 12345) >>> 0; x = (x ^ (x >>> 7)) >>> 0; out += /[0-9a-f]/.test(s[i]) ? "0123456789abcdef"[x % 16] : s[i]; } return out; };
  const KPI = { "Initial": "48,210.00", "Repeated": "126,845.40", "Declined": "9,312.75", "Refunded": "2,140.00" };
  const setText = (el, t) => { if (el.textContent !== t) el.textContent = t; };
  const leafs = root => [...root.querySelectorAll("*")].filter(e => !e.children.length && e.textContent.trim());
  const run = () => {
    const main = document.querySelector("main") || document.body;
    // tables by column header
    document.querySelectorAll("table").forEach(t => {
      const heads = [...t.querySelectorAll("thead th")].map(th => th.innerText.trim().toLowerCase());
      const people = heads.some(x => ["uid", "customer id", "spid", "order id"].includes(x));
      t.querySelectorAll("tbody tr").forEach(tr => {
        const tds = [...tr.children]; let rowName = null;
        heads.forEach((hd, i) => {
          const td = tds[i]; if (!td) return;
          if ((hd === "name" && people) || hd === "customer") {
            const ls = leafs(td);
            if (ls.length) { const last = ls[ls.length - 1]; if (!last.dataset.d) { last.dataset.d = 1; setText(last, pick(NAMES, last.textContent)); } rowName = last.textContent; }
            if (ls.length > 1) ls.slice(0, -1).forEach(e => { if (!e.dataset.d) { e.dataset.d = 1; setText(e, pick(COMPANIES, e.textContent)); } });
          }
          if (hd === "product name" || hd === "product") leafs(td).forEach(e => { if (!e.dataset.d) { e.dataset.d = 1; if (!/^Nova /.test(e.textContent)) setText(e, pick(PRODUCTS, e.textContent)); } });
          if (hd === "gateway id") leafs(td).forEach(e => { if (!e.dataset.d) { e.dataset.d = 1; setText(e, hex(e.textContent)); } });
        });
        heads.forEach((hd, i) => { if (hd === "email" && tds[i] && rowName) leafs(tds[i]).forEach(e => setText(e, email(rowName))); });
      });
    });
    // customer links outside tables (order pages)
    main.querySelectorAll('a[href*="/customers/"]').forEach(a => { if (a.closest("table") || a.dataset.d) return; const l = leafs(a); if (l.length) { a.dataset.d = 1; l.forEach(e => setText(e, pick(NAMES, e.textContent))); } });
    // any remaining emails
    leafs(main).forEach(e => { const t = e.textContent; if (/@/.test(t) && !/example\.com/.test(t)) setText(e, t.replace(/[\w.+-]+@[\w.-]+\.\w+/g, m => email(pick(NAMES, m)))); });
    // known real names outside tables. Pass them in at recording time (window.__hideNames) so they never live in the repo.
    const hide = window.__hideNames || [];
    leafs(main).forEach(e => { if (hide.includes(e.textContent.trim())) setText(e, pick(NAMES, e.textContent)); });
    // money KPIs
    if (/all-processed/.test(location.pathname)) leafs(main).forEach(e => { const v = KPI[e.textContent.trim()]; if (!v) return; const card = e.parentElement; const num = leafs(card.parentElement).find(x => /^[\d,.]+$/.test(x.textContent.trim())); if (num) setText(num, v); });
  };
  const go = () => { run(); new MutationObserver(() => { clearTimeout(window.__dt); window.__dt = setTimeout(run, 30); run(); }).observe(document.body, { childList: true, subtree: true, characterData: true }); };
  if (document.body) go(); else addEventListener("DOMContentLoaded", go);
})();
