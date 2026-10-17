"use client"

import { useEffect, useRef } from "react"
import { asset } from "@/lib/asset"

type Frame = "desktop" | "phone" | "crop"

const frameClass: Record<Frame, string> = {
  desktop: "overflow-hidden rounded-xl border border-border bg-frame",
  // Crops already show the card's own border, so no second frame.
  crop: "overflow-hidden rounded-xl bg-frame",
  phone: "mx-auto w-full max-w-[300px] overflow-hidden rounded-[28px] border border-border bg-frame",
}

type Props = {
  src: string
  alt: string
  caption?: React.ReactNode
  frame?: Frame
  /** Video only: still image shown before playback. */
  poster?: string
  width: number
  height: number
}

/** A screenshot or a muted, looping screen recording that plays only while on screen. */
export default function Media({ src, alt, caption, frame = "desktop", poster, width, height }: Props) {
  const isVideo = src.endsWith(".mp4")
  const ref = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const v = ref.current
    if (!v) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) v.play().catch(() => {})
        else v.pause()
      },
      { threshold: 0.35 },
    )
    io.observe(v)
    return () => io.disconnect()
  }, [])

  return (
    <figure className="my-10">
      <div className={frameClass[frame]}>
        {isVideo ? (
          <video
            ref={ref}
            src={asset(src)}
            poster={poster ? asset(poster) : undefined}
            width={width}
            height={height}
            muted
            loop
            playsInline
            controls={false}
            preload="metadata"
            aria-label={alt}
            className="block h-auto w-full"
          />
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={asset(src)} alt={alt} width={width} height={height} loading="lazy" decoding="async" className="block h-auto w-full" />
        )}
      </div>
      {caption ? <figcaption className="mt-3 text-[13px] leading-[1.5] text-muted-foreground">{caption}</figcaption> : null}
    </figure>
  )
}
