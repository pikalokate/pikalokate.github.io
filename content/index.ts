import type { Study } from "@/components/case-study/CaseStudy"
import billpro from "./billpro"
import buyerJourney from "./buyer-journey"
import lytro from "./lytro"
import onboldAi from "./onbold-ai"

// Written case studies by slug. Projects without an entry show a title-only page.
export const studies: Record<string, Study> = {
  billpro,
  "buyer-journey": buyerJourney,
  lytro,
  "onbold-ai": onboldAi,
}
