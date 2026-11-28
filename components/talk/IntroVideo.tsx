"use client"
// The intro video with its own plain subtitles (the browser's built-in ones can't be styled well) and a CC toggle.
import { useEffect, useRef, useState } from "react"

export default function IntroVideo({ src, poster, captions }: { src: string; poster: string; captions: string }) {
  const video = useRef<HTMLVideoElement>(null)
  const [text, setText] = useState("")
  const [on, setOn] = useState(true)

  useEffect(() => {
    const v = video.current
    if (!v) return
    const track = v.textTracks[0]
    if (!track) return
    track.mode = "hidden"
    const onCue = () => {
      const cue = track.activeCues?.[0] as VTTCue | undefined
      setText(cue?.text ?? "")
    }
    // If the player's own captions menu turns them on, keep ours and hide the built-in ones.
    const onChange = () => {
      if (track.mode === "showing") {
        track.mode = "hidden"
        setOn(true)
      }
    }
    track.addEventListener("cuechange", onCue)
    v.textTracks.addEventListener("change", onChange)
    return () => {
      track.removeEventListener("cuechange", onCue)
      v.textTracks.removeEventListener("change", onChange)
    }
  }, [])

  return (
    <div className="relative mt-10 overflow-hidden rounded-2xl border border-border bg-white shadow-[0_30px_80px_-30px_rgba(0,0,0,0.25)]">
      <video ref={video} className="block aspect-video w-full" src={src} poster={poster} controls playsInline preload="metadata">
        <track kind="captions" src={captions} srcLang="en" label="English" default />
      </video>
      {on && text && (
        <div className="pointer-events-none absolute inset-x-0 bottom-[4%] flex justify-center px-4">
          <span className="max-w-[90%] bg-black/80 px-2 py-0.5 text-center text-[13px] leading-snug text-white sm:text-[15px]">
            {text}
          </span>
        </div>
      )}
      <button
        type="button"
        onClick={() => setOn(!on)}
        aria-pressed={on}
        className={`absolute top-3 right-3 rounded-md border px-2 py-0.5 text-[12px] font-medium ${
          on ? "border-black bg-black text-white" : "border-border bg-white/90 text-muted-foreground"
        }`}
      >
        CC
      </button>
    </div>
  )
}
