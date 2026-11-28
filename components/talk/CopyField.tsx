"use client"

import { useState } from "react"

/** One value Kate pastes into the live app during the call: click anywhere on it to copy. */
export default function CopyField({ label, value }: { label: string; value: string }) {
  const [done, setDone] = useState(false)
  const copy = () => {
    navigator.clipboard.writeText(value).then(() => {
      setDone(true)
      setTimeout(() => setDone(false), 1200)
    })
  }
  return (
    <button
      type="button"
      onClick={copy}
      className="flex w-full items-start justify-between gap-4 rounded-lg border border-border bg-white px-3.5 py-2.5 text-left hover:border-foreground/30"
    >
      <span className="min-w-0">
        <span className="block text-[12px] text-muted-foreground">{label}</span>
        <span className="mt-0.5 block text-[14px] leading-5 whitespace-pre-line">{value}</span>
      </span>
      <span className={`flex size-10 shrink-0 items-center justify-center self-center rounded-lg ${done ? "text-[#16a34a]" : "text-foreground"}`} aria-label={done ? "Copied" : "Copy"}>
        {done ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12.5l4.5 4.5L19 7.5" />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <rect x="8.5" y="8.5" width="12" height="12" rx="2.5" />
            <path d="M15.5 8.5V6a2.5 2.5 0 0 0-2.5-2.5H6A2.5 2.5 0 0 0 3.5 6v7A2.5 2.5 0 0 0 6 15.5h2.5" />
          </svg>
        )}
      </span>
    </button>
  )
}
