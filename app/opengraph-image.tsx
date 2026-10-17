import { homeOg, ogSize } from "@/lib/og"
import { site } from "@/lib/site"

export const dynamic = "force-static"
export const size = ogSize
export const contentType = "image/png"
export const alt = `${site.name}, ${site.role}`

export default function Image() {
  return homeOg()
}
