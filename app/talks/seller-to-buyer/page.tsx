// The shared view: the same page as Kate's, without live links or copy fields.
import type { Metadata } from "next"
import Talk from "@/components/talk/Talk"

export const metadata: Metadata = {
  title: "Seller and buyer experience",
  description: "One journey from seller to buyer: product pages, checkout and the Order portal, with the UX decisions behind them.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "Seller and buyer experience · Kate Pikalo",
    description: "One journey from seller to buyer: product pages, checkout and the Order portal, with the UX decisions behind them.",
    url: "/talks/seller-to-buyer/",
  },
}

export default function Page() {
  return <Talk />
}
