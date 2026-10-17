"use client"

import { useEffect } from "react"

/**
 * Fades and lifts every [data-reveal] element into place the first time it scrolls into view,
 * including the ones already on screen when the page opens. Used on the homepage only.
 * Content stays visible without JavaScript or with reduced motion, because the hidden
 * starting state only applies once <html> has the "reveal" class.
 */
export default function ScrollReveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return
    const root = document.documentElement
    // The page adds this class before first paint; add it again in case it was removed.
    root.classList.add("reveal")
    const items = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]:not(.revealed)"))

    const io = new IntersectionObserver(
      (entries) => {
        for (const en of entries) {
          if (!en.isIntersecting) continue
          en.target.classList.add("revealed")
          io.unobserve(en.target)
        }
      },
      { rootMargin: "0px 0px -8% 0px" },
    )
    for (const el of items) io.observe(el)
    return () => {
      io.disconnect()
      root.classList.remove("reveal")
    }
  }, [])
  return null
}
