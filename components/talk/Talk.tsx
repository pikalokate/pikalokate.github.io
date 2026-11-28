// One talk, two views: the public view (images only) and the presenter view (Kate's notes and live links, local only).
// Presenter-only data lives in app/talks/seller-to-buyer/presenter/notes.ts and is passed in as `notes`.
import Media from "@/components/case-study/Media"
import CopyField from "./CopyField"
import PhoneToggle from "./PhoneToggle"
import MoreAboutMe from "./MoreAboutMe"

export type PresenterNotes = Record<
  string,
  { links?: { label: string; href: string }[]; copy?: { label: string; value: string }[] }
>

type Chapter = {
  id: string
  part: "Intro" | "Seller" | "Buyer" | "How I work" | "Before: Figma" | "Order portal" | "Close"
  title: string
  min: number
  optional?: boolean
  lead?: string
  points?: string[]
  body?: React.ReactNode
}

const journey = ["Seller creates a product or order", "Buyer opens the product page", "Pays at checkout", "Manages the order in the portal"]

const BJ = "/projects/buyer-journey"
const T = "/talks/seller-to-buyer"

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid max-w-[880px] gap-1 border-t border-border py-4 sm:grid-cols-[140px_1fr] sm:gap-6">
      <p className="text-[13px] text-muted-foreground">{label}</p>
      <div className="text-[16px] leading-7">{children}</div>
    </div>
  )
}

// A compact map of the page: every block, each one a jump link.
function Overview() {
  const list = (items: { id: string; title: string }[], from = 1) => (
    <ol className="mt-2 space-y-0.5">
      {items.map((x, i) => (
        <li key={x.id}>
          <a href={`#${x.id}`} className="flex gap-2.5 text-[13.5px] leading-[1.6] hover:underline">
            <span className="w-5 shrink-0 text-muted-foreground tabular-nums">{String(i + from).padStart(2, "0")}</span>
            <span>{x.title}</span>
          </a>
        </li>
      ))}
    </ol>
  )
  return (
    <nav className="mt-8 max-w-[880px] rounded-xl bg-[#f6f6f7] px-5 py-4">
      <p className="text-[12px] text-muted-foreground">On this page</p>
      <div className="sm:columns-2 sm:gap-8">
        {list(chapters.slice(1).map((c) => ({ id: c.id, title: c.title.split(":")[0] })), 2)}
      </div>
    </nav>
  )
}

const chapters: Chapter[] = [
  {
    id: "intro",
    part: "Intro",
    title: "One journey, from the seller to the buyer",
    min: 2,
    lead: "How a seller creates a product page and gets paid, and how the buyer pays and then manages the order. One journey across two of our platforms, on desktop and mobile.",
    points: [
      "My role: Lead Product Designer, UX and UI end to end. I work with front-end and back-end developers, the operations team and the CEO.",
      "Onbold is a Merchant of Record: we take care of payments, tax and legal for online sellers, so they can just sell.",
      "Seller side: the Onbold app, a big platform where sellers run their business: payments, dashboards, customers, products and orders. Here I focus on creating product pages and orders.",
      "Buyer side: the product page, checkout, and how buyers find their order again.",
      "Order portal: where buyers manage their order themselves: update their card, download invoices, cancel a subscription and more.",
      "How I work: from Figma to code with AI, and sharing working prototypes with the team.",
    ],
    body: <Overview />,
  },
  {
    id: "app",
    part: "Seller",
    title: "The Onbold app: a big platform for sellers",
    min: 1,
    lead: "Sellers run their whole business here: payments, dashboards, settlement reports, customers, products and orders.",
    points: ["Here I focus on two parts: products that become product pages, and orders that become payment links."],
    body: (
      <Media
        src={`${T}/app-tour.mp4`}
        poster={`${T}/app-tour-poster.webp`}
        alt="A tour of the Onbold app: Home, the Dashboard with orders, payments and weekly transactions, an order summary and its customer, Customers, and All Processed payments."
        width={1440}
        height={900}
        caption="A short tour of the Onbold app: Home, Dashboard, an order, customers and payments."
      />
    ),
  },
  {
    id: "product",
    part: "Seller",
    title: "Create a product page",
    min: 4,
    lead: "A seller creates a product and gets a link they can post anywhere.",
    body: (
      <>
        <Media
          src={`${T}/product-create.mp4`}
          poster={`${T}/product-create-poster.webp`}
          alt="Creating AirPods Pro in the Onbold app: name and descriptions, Single Payment, price 249, then the product page step with six photos and the colours White, Black and Silver."
          width={1440}
          height={900}
          caption="Four short steps: basics, purchase type, price, product page."
        />
        <Row label="Purchase type">
          Sellers choose how buyers pay: a single payment or a subscription. The type decides which price fields appear, so the
          seller only fills in what applies to their product.
        </Row>
        <Media
          src={`${T}/product-details.webp`}
          alt="Product details of AirPods: status, descriptions, Single Payment, price €39.99, and the product page link with a copy button."
          width={2880}
          height={2600}
          caption="Product details: the link is ready to copy."
        />
        <Row label="Product page">
          A page the seller can share with anyone, or place anywhere: their website, social media, a message. Photos and options
          like colour are added in the same flow, and the link is ready to copy on the product.
        </Row>
        <Row label="How I built it">
          I designed and built this last step and the product details in our real code repository, with AI, and sent them to
          developers as a pull request. They connected the real logic. No handoff file in between, so it reached sellers faster.
        </Row>
      </>
    ),
  },
  {
    id: "page",
    part: "Buyer",
    title: "The product page, and what I'd improve next",
    min: 4,
    lead: "Where the buyer lands: photos, options like colour, quantity, and one button to continue to payment.",
    body: (
      <>
        <Media
          src={`${BJ}/hero-flow.mp4`}
          poster={`${BJ}/product-page-poster.webp`}
          alt="The buyer journey on desktop: the product page, picking a colour, Continue to payment, customer information with address search, checkout with VAT, and Payment successful."
          width={1440}
          height={900}
          caption="Product page, customer information, checkout."
        />
        <Row label="Neutral by design">
          Many sellers with very different brands use the same page: orange, blue, green, dark, light. So the page stays calm and
          neutral, and the seller&apos;s photos carry the brand. One design works for every store.
        </Row>
        <Row label="Today">
          Options like colour are plain names today. The buyer picks one and it goes with the order, but the photo doesn&apos;t
          change: pick Black, and the gallery can still show white.
        </Row>
        <Row label="Why we shipped it">
          Linking each colour to its own photos needs new back-end logic. Sellers needed product pages right away, so I agreed the
          scope with the developers, the CEO and the team: ship options as names now, link photos next.
        </Row>
        <Row label="How I handled it">
          I made sure the buyer still confirms their choice before paying. The order summary shows the chosen colour and quantity as
          text, with no product photo that could be wrong. And on mobile, the next step opens with those details first (see Checkout
          on mobile).
        </Row>
        <Row label="Future requests">
          <ul className="list-disc space-y-1 pl-5">
            <li>Colours as colour circles, not words. Already built in the code; waiting for the logic.</li>
            <li>Each colour linked to its photos, so the gallery changes when the buyer picks a colour.</li>
            <li>The chosen photo in the next steps and in the order summary, where today there is only text.</li>
            <li>The seller&apos;s logo on the page, so buyers who come from social media recognise the store.</li>
          </ul>
        </Row>
      </>
    ),
  },
  {
    id: "mobile",
    part: "Buyer",
    title: "Checkout on mobile: each step has one job",
    min: 4,
    lead: "I decided what each step shows first, so the buyer checks the right thing at the right moment, and doesn't make mistakes. Tap a phone to open or close its section.",
    body: (
      <>
        <div className="mt-10 mb-10 grid gap-12 sm:grid-cols-2">
          <PhoneToggle
            step="Step 2 · Customer information"
            title="Check the product"
            toggle={["Show order summary", "Hide order summary"]}
            closed={{
              src: `${BJ}/m-customer.webp`,
              alt: "Customer information on a phone: product, colour and quantity on top, the price summary folded.",
              text: "There is no photo here, so the product comes first: name, colour, quantity. The buyer checks they picked the right one.",
            }}
            open={{
              src: `${BJ}/m-customer-summary.webp`,
              alt: "The same screen with the order summary open: products, tax to be calculated at checkout, subtotal.",
              text: "The price is one tap away. Tax says “To be calculated at checkout”, because we don't know it yet.",
            }}
          />
          <PhoneToggle
            step="Step 3 · Checkout"
            title="Check the price"
            toggle={["Show product", "Hide product"]}
            closed={{
              src: `${BJ}/m-checkout.webp`,
              alt: "Checkout on a phone: card fields, full price with VAT open, and a Pay €156.09 button.",
              text: "Tax depends on the buyer's country, and our tax service can only calculate it here. So the full price with tax is open, and the final amount is on the Pay button.",
            }}
            open={{
              src: `${BJ}/m-checkout-product.webp`,
              alt: "The same checkout with the product details open under the price.",
              text: "The product details are still there if the buyer wants one last check, but folded. The price matters most here.",
            }}
          />
        </div>
        <Row label="Step 2: check the product">
          Photos don&apos;t follow the colour yet, so the buyer could pick Black while seeing a white photo. That&apos;s why this step
          opens with the product details: name, colour and quantity. The buyer confirms they chose the right thing before going on.
        </Row>
        <Row label="Step 3: check the price">
          Tax depends on the buyer&apos;s country, and it&apos;s only calculated here. Before this step the price says &ldquo;To be
          calculated at checkout&rdquo;. Now the full price with tax is open, and the final amount is on the Pay button. No surprise
          at the last moment.
        </Row>
        <Row label="Why it matters">
          Each step asks the buyer to check one thing, when it&apos;s final. So they feel sure about what they&apos;re buying and
          what they&apos;re paying. It also fits the small screen: one block above the form, not two.
        </Row>
        <Row label="Charge appears as">
          We are the Merchant of Record, so the bank statement shows our name, not the seller&apos;s. The checkout shows the exact
          line, ONBOLD.NET*NOVAAUDIO, before the buyer pays. Later the charge looks familiar, so fewer buyers ask their bank for the
          money back (a chargeback).
        </Row>
      </>
    ),
  },
  {
    id: "preview",
    part: "How I work",
    title: "The checkout prototype I made for the team",
    min: 3,
    lead: "Checkout shows different legal texts and tick boxes, depending on what the seller sells and how they set up their profile.",
    body: (
      <>
        <Media
          src={`${T}/checkout-preview.mp4`}
          poster={`${T}/checkout-preview-poster.webp`}
          alt="The checkout with a Preview panel: switching supplier terms and withdrawal options changes the legal lines and tick boxes, then the screens after a successful and a failed payment."
          width={1440}
          height={900}
          caption="Switch an option, see exactly what the buyer gets."
        />
        <Row label="Many cases">
          Seller terms, a separate tick box, digital content, services, the right to withdraw: each setting in the seller&apos;s
          profile adds or removes a line on checkout.
        </Row>
        <Row label="How I share it">
          Next to the ticket, I built a Preview panel into the real checkout. Developers, operations and the CEO click any setting
          and see exactly what the buyer gets, and the screens after a successful or failed payment.
        </Row>
        <Row label="Documented in code">
          I build the logic myself, inside the real code. And I document every decision right next to it, so the team can always
          see what shows, when, and why.
        </Row>
        <Row label="Why">
          We agree on every case before the logic is built, and developers see which setting each line connects to.
        </Row>
        <Media
          src={`${T}/seller-settings-edit.webp`}
          alt="Seller profile settings in edit mode: purchase types, supplier product terms, product type, withdrawal treatment with a statutory exception, change-of-mind refunds, who pays the return (no return required) and tax."
          width={2880}
          height={4794}
          caption="The seller's profile settings. Each choice here changes what the buyer sees at checkout."
        />
        <Row label="One setting, one line">
          Every option in the seller&apos;s profile maps to one line or one tick box on checkout. The preview and these settings use the
          same names, so developers can wire each case to its setting.
        </Row>
      </>
    ),
  },
  {
    id: "order",
    part: "Seller",
    title: "Create an order and send it as a link",
    min: 3,
    optional: true,
    lead: "Back in the Onbold app, the second way to sell. For sellers who already know the buyer, like call centres: they build the order and send it to the buyer to pay.",
    body: (
      <>
        <Media
          src={`${T}/order-create.mp4`}
          poster={`${T}/order-create-poster.webp`}
          alt="Add Order in the Onbold app: the + next to Customer opens Add Customer, then a customer is picked; the + next to Product opens Add Product, then AirPods is picked and the summary updates."
          width={1440}
          height={900}
          caption="A + next to the customer and the product: add what's missing without leaving the order."
        />
        <Row label="Before">
          The old order form was uncomfortable to use. There was no way to add a product from inside the order: if it was missing,
          the seller had to leave, create it, come back and start again, and lose what they had filled in.
        </Row>
        <Row label="Add in place">
          A + next to the customer and the product opens a short form in a window, and the new item goes straight into the order.
          The seller never leaves the page.
        </Row>
        <Row label="Only what's needed">
          Most orders need just a customer, a product and a quantity. Fee, discount and tax for each product stay folded behind
          &ldquo;Show Fee and Discount&rdquo;, there when needed and out of the way when not.
        </Row>
        <Row label="More products, faster">
          &ldquo;Add More Products&rdquo; puts several items in one order. Sellers can sort products into groups, then switch the
          picker from List to Group to find the right one faster.
        </Row>
        <Row label="Always clear">
          The summary on the right updates with every change: product total, fees, discounts, tax and the total. The seller sees
          what the buyer will pay before sending the link.
        </Row>
        <Row label="Why it matters">
          Order creation is the task sellers repeat most. Every time they had to stop and leave, they lost their work and their
          trust in the tool.
        </Row>
      </>
    ),
  },
  {
    id: "board",
    part: "Buyer",
    title: "Every way into the Order portal, on one map",
    min: 2,
    lead: "After paying, buyers need to find their order again. I mapped every way in, so the whole team sees the same picture.",
    body: (
      <>
        <Media
          src={`${BJ}/journey-board.webp`}
          alt="A journey board: product pages, orders and onbold.net on the left, connected by lines to checkouts, emails and the Order portal."
          width={1934}
          height={2399}
          caption="Product pages, orders, emails and onbold.net all lead to the same portal."
        />
        <Row label="Every screen">
          Each way in is drawn step by step with real screens: product page, customer information, checkout, successful and failed
          payment, the emails, onbold.net and the Order portal. For single payments and for subscriptions.
        </Row>
        <Row label="Connected to the app">
          The seller&apos;s settings from the Onbold app sit on top, with lines to the checkout screens they change. You can follow
          one setting to every line it adds for the buyer.
        </Row>
        <Row label="Why it shows">
          Numbered pins on the screens, each with a note: what the element is, when it shows, and why. Colours group them by topic:
          terms, withdrawal, product type, returns and refunds.
        </Row>
        <Row label="Every version">
          Options side by side: address fields by country, a successful and a failed payment, one order found, several, or none.
        </Row>
        <Row label="For the whole team">
          Developers, operations and the CEO use it as our shared reference and leave comments right on the board. A new question
          gets answered on the map first, then in the product.
        </Row>
      </>
    ),
  },
  {
    id: "net",
    part: "Buyer",
    title: "onbold.net: find your order",
    min: 3,
    lead: "For a buyer who sees ONBOLD.NET on their card statement, or bought through a partner platform: enter your email, get a code, see your order.",
    body: (
      <>
        <Media
          src={`${BJ}/net-find.mp4`}
          poster={`${BJ}/net-find-poster.webp`}
          alt="onbold.net: enter an email, enter the code, a searching animation, then the order."
          width={1440}
          height={900}
          caption="Email, code, order."
        />
        <Row label="Ways out">
          After the code, one order opens straight in the portal, several show a list to choose from, and none shows help and
          another way to search.
        </Row>
        <Row label="Privacy">
          The code proves the inbox belongs to the buyer, and the screen says the same thing whether we find orders or not. So nobody
          can use the page to check someone else&apos;s purchases.
        </Row>
        <Row label="Waiting">The search screen shows the work is happening, so the wait feels short. Clean, minimal style.</Row>
        <Row label="Help and support">
          onbold.net is also the buyer&apos;s help page: support contacts, a form for a charge they don&apos;t recognise, and clear
          next steps for common problems, like a family member who used their card.
        </Row>
        <Row label="Built in code">I built onbold.net fully in code with AI, and it went into the live product.</Row>
      </>
    ),
  },
  {
    id: "setup",
    part: "How I work",
    title: "How I work now: from Figma to code",
    min: 2,
    lead: "onbold.net is a good example of how I work today: I built it fully in code. For many years before, I designed in Figma.",
    body: (
      <>
        <Row label="Before">
          Years of Figma: design systems, prototypes with every flow connected, and files set up so developers could find their way.
          Developers then rebuilt each screen in code.
        </Row>
        <Row label="Now">
          I work inside our product repositories with Claude Code. I build full features, from screens to the logic behind them,
          and send them as pull requests. Developers review the code, connect the APIs and ship it.
        </Row>
        <Row label="Prototypes in code">
          For bigger or riskier ideas, I build working prototypes in the real code, like the checkout preview and the withdrawal
          flow. The team clicks through the real thing, not a picture of it.
        </Row>
        <Row label="My setup">
          Several AI chats at once, each with its own task: different parts of a feature in parallel, my Linear tasks kept up to
          date, and my work committed to GitHub with notes for developers.
        </Row>
        <Row label="My rules">
          I make the design decisions; AI helps me build them. I review every screen, and developers review every pull request
          before it goes live.
        </Row>
      </>
    ),
  },
  {
    id: "why",
    part: "Order portal",
    title: "Why we built the Order portal",
    min: 1,
    lead: "Buying was easy. What happened after paying wasn't: buyers had nowhere to manage their order.",
    body: (
      <>
        <Row label="Before">
          A buyer couldn&apos;t cancel a subscription alone, add a new card when theirs expired, or download an invoice. Each of these
          became a message to the seller.
        </Row>
        <Row label="How we knew">
          Our operations team works with sellers every day. The same requests kept coming back: cancel this subscription, change
          this card, send this invoice. Each one was a call or a message, and each one took someone&apos;s time.
        </Row>
        <Row label="Who did the work">
          Sellers changed cards and plans by hand inside our platform. When they couldn&apos;t, they asked our operations team, who did
          it for them. That happened a few times a week, and every time it was slow for the buyer and extra work for everyone else.
        </Row>
        <Row label="The idea">
          Not a faster support process, but tools for buyers to do it themselves. One page per order, with no account to create.
        </Row>
        <Row label="Result">
          Buyers update cards, cancel subscriptions and download invoices alone. Our operations team gets far fewer calls, and
          sellers spend less time on after-sale requests. And because buyers can update an expiring card themselves, sooner, we
          see fewer failed payments and fewer cancellations.
        </Row>
      </>
    ),
  },
  {
    id: "figma",
    part: "Before: Figma",
    title: "Where it started: the Order portal in Figma",
    min: 2,
    lead: "The Order portal was built years ago, when I worked in Figma. Our seller platforms started in Figma too.",
    body: (
      <>
        <div className="grid items-end gap-x-6 sm:grid-cols-[2.2fr_1fr] [&_figure]:my-4">
          <Media src={`${BJ}/portal-failed-dark.webp`} alt="Order portal: a failed order with a Failed badge and a red Update Card button under the saved card, and unpaid invoices marked in the list." width={2880} height={2273} caption="Failed payment: the fix comes first." />
          <Media src={`${T}/email-card-expired.webp`} alt="Email: your payment card has expired, with an Update Card button." width={1204} height={1666} caption="And an email with the same fix." />
        </div>
        <Row label="When things go wrong">
          When a card expires or a payment fails, the fix comes first: a red Update Card button right under the card, and an email
          with the same button. I use red only for real problems, so a healthy order stays calm.
        </Row>
        <Media
          src={`${T}/ds-figma.webp`}
          alt="The BillPro Design System file in Figma: the Pages list on the left, the Inputs page open on the canvas with every field type and state."
          width={2880}
          height={1506}
          caption="Our design system in Figma. Inputs is one page of 28."
        />
        <Row label="The design system">
          <span className="text-[22px] font-medium">28 component pages</span>
          <br />
          About 200 component sets and 1,500 components: buttons, inputs, tables, filters, date pickers, statuses, cards and more. One
          system, so every screen across our platforms works the same way.
        </Row>
        <Media
          src="/projects/billpro/prototype.webp"
          alt="The Order Summary page in Figma in prototype view: dozens of desktop and mobile screens, connected by hundreds of blue prototype links."
          frame="crop"
          width={2400}
          height={1599}
          caption="One of my Figma prototypes: 127 screens and 608 links, so every path could be clicked before it was built."
        />
      </>
    ),
  },
  {
    id: "portal",
    part: "Order portal",
    title: "The Order portal today",
    min: 2,
    lead: "One page per order. The buyer solves it alone, so sellers and our operations team don't have to.",
    body: (
      <>
        <Media
          src={`${BJ}/portal-subscription.mp4`}
          poster={`${BJ}/portal-subscription-poster.webp`}
          alt="The Order portal for a subscription: order details, invoices, change card and cancel."
          width={1440}
          height={900}
          caption="Details, invoices, change card, cancel."
        />
        <Row label="What buyers do">
          See the order details, download invoices and receipts, update or add a card, and cancel a subscription. The actions
          depend on the order: a one-off purchase doesn&apos;t show subscription actions.
        </Row>
      </>
    ),
  },
  {
    id: "now",
    part: "Order portal",
    title: "What I'm building now: withdrawal and refunds",
    min: 3,
    lead: "A complex flow with legal rules: the buyer's right to withdraw, returns and refunds. The rules differ for goods, digital content and services.",
    body: (
      <>
        <Media
          src={`${T}/proto-notes.webp`}
          alt="My Order portal prototype with a settings bar on top and coloured dots next to each element."
          width={2880}
          height={1800}
          caption="My prototype, in the portal code: every state at once, with coloured notes."
        />
        <Row label="Start from the rules">
          The legal rules come first: what the buyer can ask for, by when, and who pays the return. Each screen follows one rule, so
          nothing appears that the law or the seller&apos;s settings don&apos;t allow.
        </Row>
        <Row label="Every state at once">
          A bar on top switches between one real situation and all of them together. It&apos;s how I check that the states don&apos;t
          clash before anyone builds them.
        </Row>
        <Row label="Notes on the screen">
          Each coloured dot says when an element shows and where its data comes from. Developers read the same notes I do.
        </Row>
      </>
    ),
  },
  {
    id: "close",
    part: "Close",
    title: "What I hope you take away",
    min: 1,
    points: [
      "I design the whole journey, seller to buyer, including the moments when things go wrong.",
      "As Lead Product Designer, I decide what's best for the user experience, and agree timing and technical limits with the team.",
      "I build in code with AI, on top of many years of design in Figma.",
    ],
    body: (
      <MoreAboutMe className="mt-10" />
    ),
  },
]

export default function Talk({ notes }: { notes?: PresenterNotes }) {
  return (
    <main className="mx-auto w-full max-w-[1120px] px-5 pb-32 sm:px-8">
      <header className="pt-14 sm:pt-20">
        <p className="text-[13px] text-muted-foreground">
          Kate Pikalo · Lead Product Designer
        </p>
        <h1 className="mt-4 max-w-[820px] text-[40px] leading-[1.05] font-medium tracking-[-0.035em] sm:text-[60px]">
          Seller and buyer experience
        </h1>
        <p className="mt-5 max-w-[640px] text-[18px] leading-7 text-muted-foreground">
          From a product the seller creates, to the page the buyer pays on, to the portal where they manage the order.
        </p>
        <ol className="mt-8 flex flex-col items-start gap-2 text-[14px] sm:flex-row sm:flex-wrap sm:items-center">
          {journey.map((step, i) => (
            <li key={step} className="flex items-center gap-2">
              {/* Phones: numbered steps in a column. Wider screens: one row with arrows. */}
              <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-[#f0f0f0] text-[12px] text-muted-foreground sm:hidden">{i + 1}</span>
              <span className="rounded-full border border-border px-3.5 py-1.5">{step}</span>
              {i < journey.length - 1 && <span className="hidden text-muted-foreground sm:inline">→</span>}
            </li>
          ))}
        </ol>
      </header>

      <div className="mt-14">
          {chapters.map((c, i) => {
            return (
              <section key={c.id} id={c.id} className="scroll-mt-8 border-t border-border pt-10 pb-16">
                <p className="text-[13px] text-muted-foreground">
                  {String(i + 1).padStart(2, "0")} · {c.part}
                  
                </p>
                <h2 className="mt-2 text-[28px] leading-tight font-medium tracking-[-0.02em]">{c.title}</h2>
                {notes?.[c.id]?.links && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {notes[c.id].links!.map((l) => (
                      <a key={l.href + l.label} href={l.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-full bg-[#111] px-3.5 py-1.5 text-[13px] font-medium text-white hover:bg-[#333]">
                        {l.label} ↗
                      </a>
                    ))}
                  </div>
                )}
                {c.lead && <p className="mt-4 max-w-[760px] text-[18px] leading-8">{c.lead}</p>}
                {notes?.[c.id]?.copy && (
                  <div className="mt-6 grid max-w-[760px] gap-2">
                    {notes[c.id].copy!.map((f) => (
                      <CopyField key={f.label} label={f.label} value={f.value} />
                    ))}
                  </div>
                )}
                {c.points && (
                  <ul className="mt-4 max-w-[760px] list-disc space-y-2 pl-5 text-[16px] leading-7">
                    {c.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                )}
                {c.body}
              </section>
            )
          })}
      </div>
    </main>
  )
}
