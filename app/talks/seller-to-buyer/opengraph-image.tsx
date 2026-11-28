import { caseStudyOg, ogSize } from "@/lib/og"
import { site } from "@/lib/site"

export const dynamic = "force-static"
export const size = ogSize
export const contentType = "image/png"
export const alt = `Seller and buyer experience, by ${site.name}`

export default function Image() {
  return caseStudyOg(
    "Seller and buyer experience",
    "One journey from seller to buyer: product pages, checkout and the Order portal.",
    "/projects/buyer-journey/cover.webp",
    "Case study walkthrough",
  )
}
