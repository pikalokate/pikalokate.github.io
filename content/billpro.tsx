import type { Study } from "@/components/case-study/CaseStudy"
import Media from "@/components/case-study/Media"
import { Decision, H3, Lead, List, P, Pills, Quote, Split, Stats } from "@/components/case-study/blocks"

const study: Study = {
  eyebrow: "Case study · Billing platform · UX",
  headline: "Turning a hard-to-use billing platform into one merchants can run every day",
  summary: (
    <>
      Billpro lets online merchants sell with single payments, instalments, subscriptions and usage-based billing. It
      replaced an older platform that could do a lot but was hard to use: every option on screen at once, and flows that
      mixed everything together. I redesigned the flows and the logic behind them, added new features, and fixed many small
      details along the way, all in Figma. Since 2026 I also ship features myself, in code with AI, like product pages.
    </>
  ),
  meta: [
    { label: "My role", value: "Product design: UX, UI and the design system. Front-end code for new features" },
    { label: "Team", value: "CEO, operations team, two front-end developers, one back-end developer, me" },
    { label: "Stage", value: "Live, with new features shipping" },
    { label: "Platform", value: "Web app for merchants, plus pages for their buyers" },
  ],
  hero: {
    src: "/projects/billpro/product-create.mp4",
    poster: "/projects/billpro/product-create-poster.webp",
    alt: "Screen recording: from Home, the merchant adds a product in four short steps (name, purchase type, price, product page with six photos and a colour option), then copies the product page link.",
    width: 1440,
    height: 900,
    caption:
      "Adding a product in the new Billpro: four short steps, one decision each. The last step creates a product page, a feature I built in code.",
  },
  results: [
    <>A platform that&rsquo;s easier to use every day: clear flows for products, orders and customers, one decision at a time.</>,
    <>A clear start. New merchants see three steps to their first order and short guides as soon as they log in.</>,
    <>Product pages, from idea to code by me: I scoped, designed and built both the merchant side and the buyer side.</>,
  ],
  sections: [
    {
      id: "problem",
      nav: "Problem",
      title: "A powerful platform that was hard to use",
      body: (
        <>
          <Lead>
            Before Billpro, the company ran billing.gg. It could do a lot: one-off payments, instalments, subscriptions and
            metered billing, with fees, discounts and taxes on top. But every option was on screen at once.
          </Lead>
          <P>
            To add one product, a merchant filled in one long form with six blocks. The order form had its own payment settings:
            split payments, a deposit, an interval, and a currency next to every amount. Lists, details and settings worked the
            same way: a lot of information, and little help to read it. It was hard to tell which fields mattered and which you
            could skip.
          </P>
          <P>
            This wasn&rsquo;t only a problem on day one. Merchants use the platform every day to create products and orders,
            manage customers and check payments. When every task feels this heavy, people make mistakes and need help, and our
            operations team spent a lot of time explaining how the platform works.
          </P>
          <Media
            src="/projects/billpro/old-product.webp"
            alt="Part of the old billing.gg New Product form: pricing with discount, fee and tax, then payment configuration with four types, deposit, balance, split, interval, two lock switches and a long summary."
            width={1370}
            height={1085}
            caption="Before: the bottom half of New Product on billing.gg. The purchase type comes after the price, and every type opens more fields below."
          />
          <Media
            src="/projects/billpro/old-order.webp"
            alt="The old billing.gg New Order form: customer, product with discount, fee and tax, split payment settings with deposit, balance, instalment amount and currency fields, memo, tags and a 12-line summary."
            width={1380}
            height={1338}
            caption="Before: New Order on billing.gg. Split payment settings, with a currency next to every amount."
          />
          <H3>Constraints</H3>
          <List
            items={[
              <>
                <b className="font-medium">Four billing types.</b> Single payment, instalments, subscriptions and metered billing
                each work differently, and every flow had to handle all of them.
              </>,
              <>
                <b className="font-medium">Money on the line.</b> A wrong interval or a missing tax means a wrong charge to a
                real customer. Simpler could never mean less clear.
              </>,
              <>
                <b className="font-medium">A small team.</b> One designer, two front-end developers and one back-end developer
                for the whole platform.
              </>,
              <>
                <b className="font-medium">No time to rebuild everything.</b> We couldn&rsquo;t rewrite the whole platform at once,
                so every change to the logic had to be worth the time it took to build.
              </>,
            ]}
          />
        </>
      ),
    },
    {
      id: "role",
      nav: "My role",
      title: "I designed the platform. Now I also ship code",
      body: (
        <>
          <P>
            I&rsquo;m the only designer at the company. I designed Billpro in Figma: the user journeys and the logic behind
            them, every screen and the design system. The developers built it. Later I moved to designing and building in code
            with AI, and now I also ship features to the app myself.
          </P>
          <Split
            cols={[
              {
                title: "What I owned",
                items: [
                  "A review of the old platform: where the journey breaks",
                  "New flows and features across the whole platform: Home, dashboard, products, orders, customers, payments, taxes and settings",
                  "Every screen, desktop and mobile, as clickable prototypes in Figma",
                  "Which changes to build first, agreed with the developers",
                  "The design system: components, states and colour tokens",
                  "Product pages: scope, flows, design and front-end code",
                ],
              },
              {
                title: "What the team did",
                items: [
                  "Operations team: the merchants’ voice, their needs and where they get stuck",
                  "CEO: priorities and feedback",
                  "Front-end developers: built the app and the components in Storybook",
                  "…and reviewed my pull requests and connected the real logic",
                  "Back-end developer: the new logic and APIs behind the new flows",
                ],
              },
            ]}
          />
        </>
      ),
    },
    {
      id: "goals",
      nav: "Goals",
      title: "What success looked like",
      body: (
        <List
          items={[
            <>
              <b className="font-medium">Clear every day.</b> Products, orders, customers and payments are easy to read and easy
              to create, for new and experienced merchants alike.
            </>,
            <>
              <b className="font-medium">One decision at a time.</b> The merchant only sees the fields that matter for what
              they&rsquo;re selling.
            </>,
            <>
              <b className="font-medium">Numbers you can trust.</b> Before saving, it&rsquo;s clear what the customer pays now
              and what they pay every period.
            </>,
            <>
              <b className="font-medium">A clear start.</b> From the first login, it&rsquo;s clear what to do first, second and
              third.
            </>,
          ]}
        />
      ),
    },
    {
      id: "insights",
      nav: "Insights",
      title: "Where merchants got stuck",
      body: (
        <>
          <P>
            I went through the old platform screen by screen, and I worked closely with our operations team, who hears every
            merchant question. Four patterns came up again and again.
          </P>
          <H3>The most important choice came last</H3>
          <P>
            What you sell, a one-off, an instalment, a subscription or metered billing, decides which fields you need. On the old
            form it sat near the bottom, after the price. So merchants filled in fields that didn&rsquo;t apply, then had to go
            back.
          </P>
          <H3>Once or every month?</H3>
          <P>
            A product had one fee and one discount. For a subscription, nobody could tell if they were charged once or every
            period. That&rsquo;s exactly the kind of doubt that ends in a phone call.
          </P>
          <H3>Words that need a manual</H3>
          <P>
            Two switches, &ldquo;Lock Pricing&rdquo; and &ldquo;Lock Payments Configuration&rdquo;, sat in different blocks of
            the same form. Their names didn&rsquo;t say what would be locked, or for whom.
          </P>
          <H3>Leaving the page to finish the task</H3>
          <P>
            Taxes, units and products had to exist before you could use them. One missing tax meant leaving the form,
            creating it on another page, and starting again.
          </P>
          <Quote>Ask one question at a time, in the order the merchant thinks about it, and keep the answer in sight.</Quote>
        </>
      ),
    },
    {
      id: "decisions",
      nav: "Key decisions",
      title: "Four decisions that made it simple",
      body: (
        <>
          <P>
            Simpler screens weren&rsquo;t enough. Some journeys needed the platform to work differently: the purchase type now
            decides which fields you see, recurring products get separate initial and recurring amounts, and a missing tax,
            unit or product can be created without leaving the form. We couldn&rsquo;t change everything at once, so for each
            change I weighed how much it helps merchants against how long it takes to build, and agreed the order with the
            developers.
          </P>
          <Decision
            n={1}
            title="A Home that tells you where to start"
            options="Open on the dashboard with charts. Open on an empty list of orders. A Home page built for getting started."
            chose="A new Home page. New merchants see a “How to Get Started” banner with three steps in the right order: create a product, add a customer, create an order. Every merchant gets quick Add buttons, a short overview, and a Learning Center with guides and videos for each billing type."
            why="A new merchant has no data yet, so charts tell them nothing. What they need is the next step, and a place to learn without calling us."
            tradeoff="Experienced merchants don’t need the steps. The banner shows only in a merchant’s first month, and the guides sit below the overview, so they never get in the way."
          >
            <Media
              src="/projects/billpro/home.webp"
              alt="The new Billpro Home for a new merchant: Add buttons, a 'How to Get Started' banner with three connected steps (Create a Product, Add a Customer, Create an Order), an overview of orders, customers and products, and a Learning Center with six guide cards."
              width={2880}
              height={2726}
              caption="Home for a new merchant: the three steps to a first order, a quick overview, and guides for every billing type."
            />
          </Decision>

          <Decision
            n={2}
            title="Ask what you sell first. Everything else follows"
            options="Keep one long form and tidy it up. Hide fields in collapsible blocks. Make the purchase type the first real question and build the rest around it."
            chose="The purchase type comes right after the name: Single Payment, Instalment, Subscription or Metered, each with one line that explains it. The price step then shows only the fields for that type."
            why="It’s the question merchants already think about first. Once it’s answered, the form can stop asking about things that don’t apply."
            tradeoff="One more click before the price. In return, the price step is short and every field on it matters."
          >
            <div className="my-10 grid gap-6 sm:grid-cols-2">
              <Media
                src="/projects/billpro/m1-basics.webp"
                alt="Add Product, first step: product name, an auto-generated product ID, short description, unit with Add Unit, and More Options."
                frame="crop"
                width={1392}
                height={1456}
              />
              <Media
                src="/projects/billpro/m2-type.webp"
                alt="Add Product, purchase type step: four options with a short explanation each. Subscription is selected."
                frame="crop"
                width={1392}
                height={1344}
              />
            </div>
            <P>
              In the live app the whole flow is a short window with four steps: details, purchase type, price, and product page.
              Extra fields like long description and group stay behind &ldquo;More options&rdquo;. Later, in code, I cut one
              more step from the subscription flow by moving the charge interval into the price step.
            </P>
          </Decision>

          <Decision
            n={3}
            title="Show what the customer pays now, and what they pay every period"
            options="One total, like before. A long summary list. Two clear numbers: initial and recurring."
            chose="For recurring products, every amount is split into Initial and Recurring: subtotal, fees, discounts and total. The lock switches got plain names: Lock Price and Lock Charge Interval. Tax, units and fees can be added right inside the form with “+ Add”."
            why="For a subscription, the first payment and the monthly payment are often different. Showing both removes the “once or every month?” doubt, and adding a missing tax in place means you never lose your work."
            tradeoff="Two columns of numbers take more space. They only appear for products that recur. A single payment shows one total."
          >
            <div className="my-10 grid items-center gap-6 sm:grid-cols-2">
              <Media
                src="/projects/billpro/m3-price-sub.webp"
                alt="Add Product, price step for a subscription: price, currency, charge interval, initial and recurring subtotal, tax with Add Tax, initial and recurring total, Lock Price and Lock Charge Interval."
                frame="crop"
                width={1392}
                height={1868}
              />
              <div>
                <P>
                  The price step for a £12 monthly subscription. The charge interval sits with the price, initial and recurring
                  amounts are side by side, and a missing tax can be added without leaving.
                </P>
              </div>
            </div>
          </Decision>

          <Decision
            n={4}
            title="Rebuild order creation around what the merchant has, and what they don’t"
            options="Keep the old order form and tidy it up. Split it into a long wizard. Rebuild the flow so the merchant never has to leave it."
            chose="A new Add Order flow. If the product doesn’t exist yet, the merchant creates it right inside the order with the + button, just like a new customer. Before, there was no way to add a product from the order: they had to leave it and start again. Fee, discount and tax per product are hidden until you need them, behind one “Show” link. And with product groups, merchants sort their products into their own categories, then switch the picker to Group and find the right product faster."
            why="Order creation is the task merchants repeat most. Every time they had to stop, leave and come back, they lost their work and their trust in the tool. Now the common order takes a customer, a product and a quantity, and everything else is there when needed."
            tradeoff="Creating a customer or a product inside an order needs smaller forms in a window. I kept them to the key fields, and the full forms stay on their own pages."
          >
            <Media
              src="/projects/billpro/order-create.mp4"
              poster="/projects/billpro/order-create-poster.webp"
              alt="Recording: from Home, Add Order. The merchant searches and picks a customer, searches and picks a product, opens fee, discount and tax, and the summary updates to £129.00."
              width={1440}
              height={900}
              caption="Add Order: pick a customer, pick a product, open fee, discount and tax only if needed, and check the summary."
            />
          </Decision>
        </>
      ),
    },
    {
      id: "platform",
      nav: "The platform",
      title: "A big platform, not just two forms",
      body: (
        <>
          <Lead>
            Product and order creation are the heart of this story. But Billpro is a full back office, and I designed all of it:
            orders, customers, products with taxes, discounts, fees, groups and units, payment views, a dashboard, alerts,
            and profile and user settings.
          </Lead>
          <Media
            src="/projects/billpro/platform-tour.mp4"
            poster="/projects/billpro/platform-tour-poster.webp"
            alt="Recording of a walk through Billpro: the orders list, one order with its summary and billing events, the customers list and a customer account, products, taxes, all processed payments, and the dashboard."
            width={1440}
            height={900}
            caption="A walk through the platform: orders, one order in detail, customers, products and taxes, payments, and the dashboard. Other merchants’ data is blurred."
          />
          <H3>Tables people work in every day</H3>
          <P>
            Merchants spend most of their time in lists: orders, customers, products, payments. So every list page has the same
            structure. On top, a small dashboard with the key numbers for that list. Below it, the tools for that table: filters
            made for its data, a date picker and search. Then the table itself. Once you know one page, you can find your way
            around all of them.
          </P>
          <Media
            src="/projects/billpro/pay-processed.webp"
            alt="All Processed payments: key numbers on top for initial, repeated, declined and refunded payments, then filters, date and search, then a table of payments with gateway ID, order type and amount."
            width={2880}
            height={1800}
            caption="All Processed payments: key numbers on top, then filters, date and search, then the table. Every list page works the same way."
          />
          <H3>One order, every detail in its place</H3>
          <P>
            An order can run for months, so its page has to hold a lot without feeling heavy. A side menu splits it into seven
            parts: Summary, Customer, Cards, Billing Events, Products, Order Logs, and Notes &amp; Tags. Billing Events shows every
            payment in the schedule, paid or planned. When a payment needs attention, the actions are right above the list.
          </P>
          <Media
            src="/projects/billpro/order-summary.webp"
            alt="Order Summary of a subscription order: side menu with seven parts, status Active, the customer, order type, channel, auto retry, and the key dates."
            width={2880}
            height={1800}
            caption="Summary: the status and the key facts first."
          />
          <Media
            src="/projects/billpro/order-events.webp"
            alt="Billing Events of an instalment order: actions above the list, and a table of scheduled and completed payments with amount, status and dates. The customer name is blurred."
            width={2880}
            height={1800}
            caption="Billing Events: every payment in the schedule, with the actions above."
          />
          <P>
            The same status icons, colours and table parts run through all of these views. They come from the design system
            described below.
          </P>
        </>
      ),
    },
    {
      id: "system",
      nav: "Design system",
      title: "One system behind every screen",
      body: (
        <>
          <P>
            All of this sits on the Billpro design system. I designed it in Figma: around 200 component sets and 1,500
            components, from buttons, inputs, selects and date pickers to tables, filters, summary cards, payment cards, and a
            full set of status icons for orders, payments and billing events. The developers built the
            components in Storybook, with colour tokens that use the same names as my Figma variables.
          </P>
          <Media
            src="/projects/billpro/ds-board.webp"
            alt="Billpro design system board: a list of 28 component groups on the left, and on the right buttons in every style and state, a date picker with range presets, an open filter panel, a data table with selection, a tooltip and an expanded row, order status badges, an input in five states, and toast messages."
            frame="crop"
            width={2400}
            height={3260}
            caption="A slice of the library in Figma: 28 component groups, and a few of them up close with their states."
          />
          <P>
            The shared names paid off. When we launched our new brand, Onbold, I changed the colour values behind the tokens in
            one commit and kept their names, so every screen moved to the new look and no component broke.
          </P>
        </>
      ),
    },
    {
      id: "prototyping",
      nav: "Prototyping",
      title: "Before code: big prototypes in Figma",
      body: (
        <>
          <P>
            Before I moved to code, I designed Billpro in Figma, and not as static screens. I built full clickable prototypes,
            so the team could click through a flow before it was built, and we could find problems early.
          </P>
          <Media
            src="/projects/billpro/prototype.webp"
            alt="The Order Summary page in Figma in prototype view: dozens of desktop and mobile screens, connected by hundreds of blue prototype links."
            frame="crop"
            width={2400}
            height={1599}
            caption="One page of the Figma file, Order Summary, with its prototype links drawn from the file: more than 120 screens and 600 connections, desktop and mobile."
          />
          <P>
            Every tab, modal and state is connected, on desktop and on mobile. The prototype was the spec. It showed the developers not only what each screen looks like, but how the whole flow behaves.
          </P>
        </>
      ),
    },
    {
      id: "code",
      nav: "Built in code",
      title: "Product pages: scoped, designed and built by me in code",
      body: (
        <>
          <Lead>
            A product page gives a merchant a link they can post anywhere. Customers open it, see the product and pay. No website
            or checkout integration needed. Turn it on, add photos and options, and share the link.
          </Lead>
          <P>
            I scoped the feature, designed the user flows, and built both sides in code with AI. On the merchant side, a new last
            step in Add Product and a product page section in the product details and edit views. On the buyer side, the page
            where a customer sees the product and starts checkout. I sent each part as a pull request. A developer reviewed the
            code and connected the real logic.
          </P>
          <Stats
            items={[
              { value: "2", label: "sides I built: merchant and buyer" },
              { value: "1", label: "link to share anywhere" },
            ]}
          />
          <H3>The merchant side</H3>
          <div className="my-10 grid gap-6 sm:grid-cols-2">
            <Media
              src="/projects/billpro/m4-product-page.webp"
              alt="Add Product, last step: Enable Product page, six uploaded photos, and an attribute called Colour with the values White, Black and Silver."
              frame="crop"
              width={1392}
              height={2060}
              caption="The last step of Add Product: switch it on, upload up to six photos, add options."
            />
            <Media
              src="/projects/billpro/details-pp.webp"
              alt="Product details: the Product page section with the shareable link and a copy button, the six images, and the Colour attribute."
              frame="crop"
              width={1790}
              height={1354}
              caption="Product details: the link with a copy button, the photos and the options."
            />
          </div>
          <H3>The buyer side</H3>
          <Media
            src="/projects/billpro/buyer-flow.mp4"
            poster="/projects/billpro/buyer-flow-poster.webp"
            alt="Recording of the buyer side: the buyer browses the photos, keeps the colour White, presses Continue to payment, fills in name, email, address, country and postal code, agrees to the terms, types a test card (the Visa logo appears), and presses Pay Now."
            width={1440}
            height={900}
            caption="The buyer side, from the link to payment: photos, options, customer details, then the card. The order summary stays on the left the whole way. Recorded on staging with a test card."
          />
          <H3>Rebuilt for mobile</H3>
          <P>
            Buyers often open a link like this on a phone, from a message or a social post. So I rebuilt the mobile views for a
            better experience, not just a smaller desktop. The page is one column with the photo first and a full-width button.
            In checkout, the order summary becomes a small box at the top that you can open to check your order again, so the
            card form is the first thing you see.
          </P>
          <div className="my-10 grid gap-6 sm:grid-cols-3">
            <Media
              src="/projects/billpro/mob-1-product.webp"
              alt="Product page on a phone: photo, merchant, product name, price, description, colour and quantity, and a full-width Continue to payment button."
              frame="phone"
              width={780}
              height={1688}
              caption="1. The product"
            />
            <Media
              src="/projects/billpro/mob-2-details.webp"
              alt="Customer details on a phone: the order summary card on top, then first name, last name, email, phone and address."
              frame="phone"
              width={780}
              height={1688}
              caption="2. Customer details"
            />
            <Media
              src="/projects/billpro/mob-3-checkout.webp"
              alt="Checkout on a phone: a collapsed Summary box with £129.00 at the top, then card number, expiry date, CVV, cardholder name and a Pay Now button."
              frame="phone"
              width={780}
              height={1688}
              caption="3. Checkout, with the summary folded into a box"
            />
          </div>

          <Decision
            n={5}
            title="Ship options as names now, link them to photos later"
            options="Wait and build full variants, where each colour has its own photos. Ship simple options now: a name and a list of values."
            chose="Options are plain names for now, like Colour: White, Black, Silver. The buyer picks one and it goes with the order, but it doesn’t switch the photo. I agreed this scope with the developers, the CEO and the team."
            why="Linking each option to its own photos needs extra logic, and the developers didn’t have time to build it before launch. Merchants needed product pages right away, so we shipped plain options first and added the photo link to the plan as a next task."
            tradeoff="When a buyer picks Black, the gallery still shows the white photo. Linking each option to its own photos is the next step."
          />

          <H3>How I work in the code</H3>
          <P>
            I work on my own branch, with AI as my pair programmer. I build the real screens with our own components and mock
            data, check them in the browser and on mobile, then open a pull request. A developer reviews it and connects the
            API.
          </P>
          <Pills items={["Vue 3", "TypeScript", "Tailwind CSS", "Storybook", "GitHub pull requests", "Claude as pair programmer"]} />
        </>
      ),
    },
    {
      id: "outcome",
      nav: "Outcome",
      title: "What changed",
      body: (
        <List
          items={[
            <>
              <b className="font-medium">Easier to use, every day.</b> Creating products, orders and customers is clear and
              quick, and merchants need much less help from our operations team.
            </>,
            <>
              <b className="font-medium">A clear start for new merchants.</b> Home and the Learning Center show them what to do
              first, and where to learn more.
            </>,
            <>
              <b className="font-medium">Every billing type, one simple flow.</b> Single payment, instalment, subscription and
              metered products are all created the same way.
            </>,
            <>
              <b className="font-medium">A new way to sell.</b> Product pages give merchants a shareable link with photos and
              options, built and shipped by me.
            </>,
          ]}
        />
      ),
    },
    {
      id: "next",
      nav: "What's next",
      title: "What's next",
      body: (
        <>
          <P>
            Billpro is a long-running product, and we keep adding to it. Next for product pages: link each option to its own
            photos, so picking a colour shows that colour, and add delivery, so buyers can choose between different delivery
            options on the page. And I keep shipping new screens the way I built product pages:
            designed in code, reviewed by developers, live in the app.
          </P>
        </>
      ),
    },
  ],
}

export default study
