export const site = {
  name: "Kate Pikalo",
  role: "Head of Product Design",
  intro: "I design fintech products and build the interface in code with AI.",
  description:
    "Kate Pikalo, Head of Product Design in fintech and payments. I design products in Figma and in code, and ship front-end code to our real product with AI.",
  tagline: "Senior Product Designer · Builds in code with AI",
  location: "Barcelona, Spain",
  /** Short strong points under the name. Written for a lead designer who doesn't know Kate yet. */
  strengths: [
    {
      title: "Prototype and ship in code",
      text: "I build working prototypes in code with AI and push front-end code (screens and components) to our real product. Developers connect the APIs and logic.",
    },
    {
      title: "Strong UX/UI background",
      text: "Before code, I spent about 10 years in design: user flows, prototypes and design systems in Figma, and visual design in Adobe tools. Code builds on that craft.",
    },
    {
      title: "Own the design decisions",
      text: "As Head of Product Design, I own UX, UI and visual style across three fintech platforms. I shape direction together with the CEO, operations and developers.",
    },
    {
      title: "Fintech and payments",
      text: "Payments, billing, merchant onboarding, acquiring, checkout and Merchant of Record. I turn complex money flows into simple steps.",
    },
  ],
  about: [
    "I'm Head of Product Design at a fintech company in Barcelona. We provide payment services for merchants: a billing platform for one-off, instalment, subscription and usage-based payments, merchant accounts for card acceptance, and a Merchant of Record service that sells on the merchant's behalf and takes on payments, tax and compliance. I design both sides: the B2B tools merchants run their business in, and the checkout and order pages their customers use. I own UX, UI and visual style across all of it, and I work every day with our developers, the operations team and the CEO.",
    "I hold a master's degree in fine arts and started my career in a creative agency, working on brand and strategy. Then I moved into product design and worked on crypto and fintech products. For years I designed full platforms in Figma. Now I design and build in code with AI, so ideas get tested with real interactions, and developers get screens that already work. Strong design thinking comes first; code is how I get it to users faster.",
  ],
  github: { label: "GitHub", handle: "pikalokate", url: "https://github.com/pikalokate" },
  linkedin: { label: "LinkedIn", handle: "pikalokateryna", url: "https://www.linkedin.com/in/pikalokateryna/" },
}

export type Project = {
  slug: string
  /** Clear name for the card and the case-study title. */
  title: string
  /** One short line under the title on the homepage card. */
  summary: string
  /** Link-preview text (LinkedIn, Slack). */
  description: string
  /** Card image in /public, 4:3. Projects without one show a grey placeholder. */
  cover?: string
  /** Phone-size card image, 2:1, zoomed out so more of the screen shows. */
  coverMobile?: string
  /** Unlisted projects get a page but no homepage card. */
  unlisted?: boolean
}

// Order = homepage order (four cards in one row).
export const projects: Project[] = [
  {
    slug: "onbold-ai",
    title: "AI payment readiness check for online stores",
    summary: "Shows what a payment provider would flag, and how to fix it.",
    description: "Onbold AI: a tool that shows online stores what a payment provider would flag, and how to fix it.",
    cover: "/projects/onbold-ai/cover.webp",
  },
  {
    slug: "billpro",
    title: "Payments and billing platform for merchants",
    summary: "Redesign and new features for a complex billing platform.",
    description: "Redesigning a complex payments and billing platform and shipping new features, from Figma to code with AI.",
    cover: "/projects/billpro/cover.webp",
    coverMobile: "/projects/billpro/cover-mobile.webp",
  },
  {
    slug: "buyer-journey",
    title: "Buyer journey from checkout to order portal",
    summary: "Checkout, order lookup and a self-service portal for buyers.",
    description: "The Order Portal: one place where buyers manage what they bought. Cancel a subscription, change a card, download invoices, without asking anyone.",
    cover: "/projects/buyer-journey/cover.webp",
    coverMobile: "/projects/buyer-journey/cover-mobile.webp",
  },
  {
    slug: "lytro",
    title: "Mobile wallet for everyday money, built on stablecoins",
    summary: "A mobile app for paying with stablecoins. Unreleased concept.",
    description: "Lytro: a stablecoin mobile app that feels like normal money. Research, every flow and the design system. Concept, paused before launch.",
    cover: "/projects/lytro/cover.webp",
    coverMobile: "/projects/lytro/cover-mobile.webp",
  },
]

export const listedProjects = projects.filter((p) => !p.unlisted)
