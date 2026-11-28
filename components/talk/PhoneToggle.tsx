"use client"

import { useState } from "react"
import { asset } from "@/lib/asset"

type Props = {
  step: string
  title: string
  closed: { src: string; alt: string; text: string }
  open: { src: string; alt: string; text: string }
  /** The label of the fold on the real screen, e.g. "Show order summary". */
  toggle: [string, string]
}

/** A phone screen with the same fold as the real page: tap to open or close it, and the explanation changes with it. */
export default function PhoneToggle({ step, title, closed, open, toggle }: Props) {
  const [isOpen, setOpen] = useState(false)
  const s = isOpen ? open : closed
  return (
    <div className="flex flex-col items-center gap-6">
      <div className="w-full max-w-[280px]">
        <p className="text-[13px] text-muted-foreground">{step}</p>
        <p className="mt-1 text-[17px] font-medium">{title}</p>
      </div>
      {/* A simple phone: dark frame, status bar with the island, and a screen that scrolls like the real one. */}
      <div className="w-full max-w-[300px] rounded-[50px] bg-[#111] p-[11px] shadow-[0_10px_24px_-12px_rgba(0,0,0,0.35)] ring-1 ring-black/10">
        <div className="relative flex aspect-[9/19.5] flex-col overflow-hidden rounded-[40px] bg-white">
          <div className="relative flex h-[38px] shrink-0 items-center justify-between px-7 text-[12px] font-medium">
            <span>9:41</span>
            <span className="absolute top-[9px] left-1/2 h-[22px] w-[78px] -translate-x-1/2 rounded-full bg-[#111]" />
            <span className="flex items-center gap-1">
              <span className="h-[9px] w-[15px] rounded-[3px] border border-foreground/70 p-px">
                <span className="block h-full w-3/4 rounded-[1px] bg-foreground/80" />
              </span>
            </span>
          </div>
          <button
            type="button"
            onClick={() => setOpen(!isOpen)}
            className="min-h-0 flex-1 cursor-pointer overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            aria-label={isOpen ? toggle[1] : toggle[0]}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={asset(s.src)} alt={s.alt} width={1170} height={2532} className="block h-auto w-full" />
          </button>
          <span className="pointer-events-none absolute bottom-[7px] left-1/2 h-[4px] w-[100px] -translate-x-1/2 rounded-full bg-[#111]/80" />
        </div>
      </div>
      <div className="w-full max-w-[280px]">
        <button
          type="button"
          onClick={() => setOpen(!isOpen)}
          className="inline-flex items-center gap-2 rounded-full border border-border px-3.5 py-1.5 text-[14px] hover:bg-[#f5f5f5]"
        >
          {isOpen ? toggle[1] : toggle[0]}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform ${isOpen ? "rotate-180" : ""}`}>
            <path d="M6 9l6 6 6-6" />
          </svg>
        </button>
        <p className="mt-3 text-[15px] leading-6 text-muted-foreground">{s.text}</p>
      </div>
    </div>
  )
}
