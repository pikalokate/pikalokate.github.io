// Online copy of Kate's view, in case localhost fails during the call. Links unlock only with the key in Kate's link.
import type { Metadata } from "next"
import UnlockedTalk from "@/components/talk/UnlockedTalk"

export const metadata: Metadata = {
  title: "Seller and buyer experience",
  robots: { index: false, follow: false },
}

export default function Page() {
  return <UnlockedTalk />
}
