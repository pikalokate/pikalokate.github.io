"use client"

import { useEffect, useState } from "react"

/** Sticky list of sections; the one being read is highlighted. */
export default function SectionNav({ items }: { items: { id: string; label: string }[] }) {
  const [active, setActive] = useState(items[0]?.id)

  useEffect(() => {
    const onScroll = () => {
      // The last section whose top has passed the upper third of the screen.
      const line = window.innerHeight / 3
      let current = items[0]?.id
      for (const { id } of items) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= line) current = id
      }
      setActive(current)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [items])

  return (
    <nav aria-label="Sections" className="sticky top-28">
      <ol className="space-y-0.5 border-l border-border">
        {items.map((it, i) => {
          const on = it.id === active
          return (
            <li key={it.id}>
              <a
                href={`#${it.id}`}
                aria-current={on ? "true" : undefined}
                className={`-ml-px flex gap-3 border-l py-1.5 pl-4 text-[13px] transition-colors duration-300 ${
                  on ? "border-foreground text-foreground" : "border-transparent text-subtle hover:text-muted-foreground"
                }`}
              >
                <span className="tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                {it.label}
              </a>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
