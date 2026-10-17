import { ImageResponse } from "next/og"
import { site } from "@/lib/site"
import contributions from "@/data/contributions.json"

export const ogSize = { width: 1200, height: 630 }

// Same colours as the calendar on the homepage (GitHub light palette).
const SWATCHES = ["#ebedf0", "#c6e48b", "#7bc96f", "#239a3b", "#196127"]
const HOST = new URL(process.env.SITE_URL ?? "https://pikalokate.github.io").host

// A flat GitHub calendar: one column per week, one square per day.
function Calendar({ cell, gap }: { cell: number; gap: number }) {
  const days = contributions.days
  const max = Math.max(1, ...days.map((d) => d.count))
  const level = (n: number) => (n === 0 ? 0 : Math.min(4, Math.ceil((n / max) * 4)))
  const pad = new Date(days[0].date + "T00:00:00Z").getUTCDay()
  const cells = [...Array(pad).fill(null), ...days]
  const weeks: (typeof days[number] | null)[][] = []
  for (let i = 0; i < cells.length; i += 7) weeks.push(cells.slice(i, i + 7))
  return (
    <div style={{ display: "flex", gap }}>
      {weeks.map((w, i) => (
        <div key={i} style={{ display: "flex", flexDirection: "column", gap }}>
          {w.map((d, j) => (
            <div key={j} style={{ width: cell, height: cell, borderRadius: 2, background: d ? SWATCHES[level(d.count)] : "transparent" }} />
          ))}
        </div>
      ))}
    </div>
  )
}

// Link-preview card: an eyebrow, a big title, a short line, and Kate's GitHub calendar at the bottom.
export function ogImage(eyebrow: string, title: string, line: string) {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#ffffff", color: "#171717", padding: "64px 72px 56px", fontFamily: "sans-serif" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 26, color: "#737373" }}>{eyebrow}</div>
          <div style={{ display: "flex", marginTop: 22, fontSize: 68, letterSpacing: -2.5, lineHeight: 1.06, maxWidth: 1000 }}>{title}</div>
          <div style={{ display: "flex", marginTop: 22, fontSize: 28, lineHeight: 1.35, color: "#525252", maxWidth: 940 }}>{line}</div>
        </div>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
          <Calendar cell={14} gap={3} />
        </div>
        <div style={{ position: "absolute", top: 64, right: 72, display: "flex", fontSize: 22, color: "#a3a3a3" }}>{HOST}</div>
      </div>
    ),
    ogSize,
  )
}

export const homeOg = () => ogImage(site.role, site.name, site.intro)
