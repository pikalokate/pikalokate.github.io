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
    { label: "My role", value: "Product design: UX and user flows, UI and the design system. Front-end code for new features" },
    { label: "Team", value: "CEO, operations team, two front-end developers, one back-end developer, me" },
    { label: "Stage", value: "Live for years, used by merchants every day, with new features shipping" },
    { label: "Platform", value: "Web app for merchants and our own team, on desktop and phone" },
  ],
  live: [{ label: "bill.pro", href: "https://bill.pro" }],
  hero: {
    src: "/projects/billpro/product-create.mp4",
    poster: "/projects/billpro/product-create-poster.webp",
    alt: "Screen recording: from the Products list, the merchant presses + and adds a product in four short steps. Details: name, short description, unit and long description. Then purchase type, price, and the product page with five photos and a Colour option. After Finish, the merchant opens the new product and scrolls through its details, photos and options.",
    width: 1440,
    height: 900,
    caption:
      "Adding a product in the new Billpro: four short steps, one decision each. The last step creates a product page, a feature I built in code.",
  },
  results: [
    <>No more demo calls for most new merchants. They create their first products and orders on their own.</>,
    <>A subscription product went from 23 fields on one long page to short steps with 6 fields at most.</>,
    <>One place for the whole job: customers, products, orders, payment links and payments, on desktop and phone.</>,
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
            manage customers and check payments. When every task feels this heavy, people make mistakes and need help.
          </P>
          <P>
            And that help had a cost. Our operations team is already busy with merchants every day: calls with new merchants
            who want to join and with merchants already on the platform, and about 100 merchant emails a day, about all kinds
            of things. On top of that, every new merchant needed a long demo call before they could start, and every screen
            that wasn&rsquo;t clear added more &ldquo;how do I&rdquo; questions to an already full day.
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
                  "New flows and features across the whole platform: Home, dashboard, products, orders, customers, payments, taxes, settings and many more",
                  "Every screen, desktop and mobile, as clickable prototypes in Figma",
                  "Views for merchants and for our own team",
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
      title: "What success looked like, and how I checked it",
      body: (
        <>
          <P>
            I set targets I could check with the people who hear every merchant question: our operations team.
          </P>
          <List
            items={[
              <>
                <b className="font-medium">No demo needed to start.</b> A new merchant can create a first customer, product and
                order alone, from Home.{" "}
                <span className="text-muted-foreground">
                  Checked by: does the operations team still need a demo call for new merchants?
                </span>
              </>,
              <>
                <b className="font-medium">Fewer &ldquo;how do I&rdquo; questions.</b> Everyday tasks shouldn&rsquo;t need
                support.{" "}
                <span className="text-muted-foreground">
                  Checked by: what the operations team hears on calls and in their daily emails from merchants.
                </span>
              </>,
              <>
                <b className="font-medium">Only the fields that matter.</b> The merchant sees only what applies to what
                they&rsquo;re selling.{" "}
                <span className="text-muted-foreground">Checked by: counting the fields on every step, old against new.</span>
              </>,
              <>
                <b className="font-medium">Numbers you can trust.</b> Before saving, it&rsquo;s clear what the customer pays now
                and what they pay every period.{" "}
                <span className="text-muted-foreground">
                  Checked by: every recurring flow shows both amounts before the merchant saves.
                </span>
              </>,
              <>
                <b className="font-medium">Works where merchants are.</b> Every flow works on a phone, not only on a laptop.{" "}
                <span className="text-muted-foreground">Checked by: designing and prototyping every screen for mobile too.</span>
              </>,
            ]}
          />
        </>
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
            merchant question. I also studied Stripe, our main competitor, from the inside: how it handles creating products,
            customers, payment links and checkout. It showed me what merchants already expect from a billing platform, and where
            we could be simpler. Four patterns came up again and again.
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
            developers and the CEO.
          </P>
          <Decision
            n={1}
            title="A Home that tells you where to start"
            options="Open on the dashboard with charts. Open on an empty list of orders. A Home page built for getting started."
            rejected="A new merchant has no data yet, so a dashboard shows empty charts. An empty orders list says what’s missing, but not how to get there: you can’t create an order before you have a customer and a product."
            chose="A new Home page. New merchants see a “How to Get Started” banner with three steps in the right order: create a product, add a customer, create an order. Every merchant gets quick Add buttons, a short overview, and a Learning Center with guides and videos for each billing type."
            why="What a new merchant needs is the next step, and a place to learn without calling us. The guides cover a big part of what the demo call used to explain."
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
            options="Keep one long form for every type and tidy it up. Hide fields in collapsible blocks. Ask for the purchase type first and show only what that type needs."
            rejected="A tidier long form still shows every field to everyone: a merchant selling a single item still sees deposits, intervals and recurring amounts. Collapsible blocks hide fields, but the merchant still has to know which blocks matter for their type, and that was the question they couldn’t answer."
            chose="Each purchase type gets only its own fields. The merchant picks Single Payment, Instalment, Subscription or Metered, each with one line that explains it. A single payment then asks for a price, a currency and a tax, and that’s it. A subscription adds its charge interval and its first and recurring amounts. Nothing from the other types shows up."
            why="It’s the question merchants already think about first. Once it’s answered, the form stops asking about things that don’t apply, so creating a product no longer feels like a long, heavy form where you have to fill in everything."
            tradeoff="One more choice before the price. In return, the price part is short and every field on it matters."
          >
            <div className="my-10 grid items-start gap-6 sm:grid-cols-2">
              <Media
                src="/projects/billpro/m2-type.webp"
                alt="Add Product, purchase type: four options with a short explanation each. Subscription is selected."
                frame="crop"
                width={1392}
                height={1344}
                caption="First, what you sell."
              />
              <Media
                src="/projects/billpro/m3-price-single.webp"
                alt="Add Product, price for a single payment: price, currency, subtotal, tax with Add Tax, total and Lock Price. No interval, deposit or recurring amounts."
                frame="crop"
                width={1392}
                height={1700}
                caption="A single payment: only price and tax."
              />
            </div>
            <P>
              I counted the fields for the same subscription product, old against new. Nothing was taken away: group, notes, fee
              and discount are still there, behind &ldquo;More options&rdquo; and &ldquo;Show&rdquo;, for the merchants who need
              them.
            </P>
            <Stats
              items={[
                { value: "23", label: "fields and switches on one page in the old form" },
                { value: "11", label: "in the new flow, across three short steps" },
                { value: "6", label: "at most on one screen" },
                { value: "0", label: "fields removed: the rest are one click away" },
              ]}
            />
            <P>
              Later, in code, I made the subscription even shorter by moving the charge interval next to the price.
            </P>
          </Decision>

          <Decision
            n={3}
            title="Show what the customer pays now, and what they pay every period"
            options="One total, like before. A long summary list. Two clear numbers: initial and recurring."
            rejected="One total hides the exact thing merchants were unsure about. A long summary list has the answer, but buried among ten other lines."
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
            rejected="Tidying up the old form kept the real problem: you couldn’t add a product from inside an order. A long wizard would slow down the task merchants repeat most, when most orders only need a customer and a product."
            chose="A new Add Order flow. If the product doesn’t exist yet, the merchant creates it right inside the order with the + button, just like a new customer. Before, there was no way to add a product from the order: they had to leave it and start again. Fee, discount and tax per product are hidden until you need them, behind one “Show” link. And with product groups, merchants sort their products into their own categories, then switch the picker to Group and find the right product faster."
            why="Order creation is the task merchants repeat most. Every time they had to stop, leave and come back, they lost their work and their trust in the tool. Now the common order takes a customer, a product and a quantity, and everything else is there when needed."
            tradeoff="Creating a customer or a product inside an order needs smaller forms in a window. I kept them to the key fields, and the full forms stay on their own pages."
          >
            <Media
              src="/projects/billpro/order-create.mp4"
              poster="/projects/billpro/order-create-poster.webp"
              alt="Recording: from Home, Add Order. The merchant searches and picks a customer, searches and picks a product, opens fee, discount and tax, and the summary updates to £129.00. Then scrolls down, presses Add Order, and Payment Details opens."
              width={1440}
              height={900}
              caption="Add Order: pick a customer, pick a product, open fee, discount and tax only if needed, check the summary, and add the order."
            />
          </Decision>
        </>
      ),
    },
    {
      id: "journey",
      nav: "Full journey",
      title: "One full journey, from a new customer to a paid order",
      body: (
        <>
          <P>
            The decisions above are parts of one job. Here it is from start to finish, the way a merchant does it: add a new
            customer, add a product, create an order, send the payment link, and see the payment arrive.
          </P>
          <Media
            src="/projects/billpro/e2e.mp4"
            poster="/projects/billpro/e2e-poster.webp"
            alt="Recording of the full journey. The merchant adds a customer, Ella Ward, from the quick Add menu. Then adds a product, Nova Travel Pouch, as a single payment of £29 in three steps. Then creates an order for Ella with that product. The app opens Payment Details, and the merchant opens the payment link with its QR code. The buyer opens the link, agrees to the terms, enters a card and pays. Payment Successful. Back in Billpro, the payment is at the top of All Processed."
            width={1440}
            height={900}
            caption="The whole job in about a minute: customer, product, order, payment link, payment. Everything starts from the same + menu."
          />
          <P>
            After an order is created, the merchant lands on Payment Details, with three ways to get paid: take the card right
            there (useful for merchants who sell by phone), send the link by email, or show a link and QR code. The buyer pays on
            a page with the order summary next to the card form, and the payment shows up in Billpro straight away.
          </P>
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
          <H3>Two kinds of users: merchants and our own team</H3>
          <P>
            Billpro isn&rsquo;t only for merchants. Our own team works in it too, with more tools: they see every merchant
            profile, where each one is in onboarding, and which payment provider it&rsquo;s live on, and they can open any
            profile to help. Merchant users see different things depending on their role. So the same screens have to work for
            different people with different permissions.
          </P>
          <Media
            src="/projects/billpro/admin-profiles.webp"
            alt="Profiles, the admin view for our own team: counts on top for registered, onboarding, live on Stripe and live on Pay.on, then filters, date and search, and a table of merchant profiles with company and trading name, website, created date, registered country and status."
            width={2880}
            height={1800}
            caption="The admin view: every merchant profile, with the same list layout merchants know from their own pages."
          />
          <H3>When things go wrong</H3>
          <P>
            A billing platform lives in its edge cases as much as in its happy paths. Forms say what&rsquo;s wrong next to the
            field, in plain words, and the Add button stays off until the required fields are right, so a merchant can&rsquo;t
            save a half-finished customer. A search with no results says so, and the numbers on top follow the search. And
            failed payments have their own page, Billing Exceptions, with the retry count and whether auto retry is on.
          </P>
          <div className="my-10 grid items-start gap-6 sm:grid-cols-2">
            <Media
              src="/projects/billpro/edge-errors.webp"
              alt="Add Customer with errors: last name is empty with 'Last name is required.', and the email 'jordan.ellis@' with 'Enter a valid email.'"
              frame="crop"
              width={1480}
              height={1700}
              caption="Errors next to the field, in plain words."
            />
            <Media
              src="/projects/billpro/edge-empty.webp"
              alt="Orders list searched for a name with no orders: the key numbers drop to zero and the table says 'No results found.'"
              width={2880}
              height={1000}
              caption="No results: the numbers on top follow the search too."
            />
          </div>
          <Media
            src="/projects/billpro/edge-exceptions.webp"
            alt="Billing Exceptions: counts on top for total, hard declines, auto retry on and auto retry off, then a table of failed payments with retry count, auto retry, order type and amount."
            width={2880}
            height={1800}
            caption="Billing Exceptions: every failed payment in one list, with its retries and whether the platform will try again."
          />
          <H3>Built for phones too</H3>
          <P>
            The old platform had no mobile pages at all. The company wasn&rsquo;t focused on mobile, so on a phone some pages
            were simply broken. When I joined, I designed mobile views that people can really use, and from the start I told
            the team that mobile matters. Every page now has a mobile layout, not a shrunk desktop: lists keep the key columns
            and let you swipe the key numbers, the dashboard stacks its charts, and forms become one column with the summary at
            the end.
          </P>
          <div className="my-10 grid items-start gap-6 sm:grid-cols-3">
            <Media
              src="/projects/billpro/mob-orders.webp"
              alt="Orders on a phone: a menu bar on top, key numbers you can swipe, filters, date and search, and a table with complete, pending, failed and active orders, each with its created date and time, UID and amount paid."
              frame="phone"
              width={780}
              height={1688}
              caption="Orders"
            />
            <Media
              src="/projects/billpro/mob-dashboard.webp"
              alt="Dashboard on a phone: Orders by Status as a large donut chart with active, failed, paused, pending and suspended counts, then Status Changes Today."
              frame="phone"
              width={780}
              height={1688}
              caption="Dashboard"
            />
            <Media
              src="/projects/billpro/mob-new-order.webp"
              alt="Add Order on a phone: customer Alex Morgan, order ID, currency, List or Group switch, product Nova Wireless Earbuds, quantity and amount."
              frame="phone"
              width={780}
              height={1688}
              caption="Add Order"
            />
          </div>
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
          <H3>Built for other people to use</H3>
          <P>
            I designed the system so the team can build without waiting for me. Every component comes with its states, like
            hover, disabled, error and loading, so developers don&rsquo;t have to guess. Patterns repeat across the platform:
            every list page has the same header, filters, key numbers on top and table, so a new list is mostly assembled, not
            designed. When I built product pages in code, I used the same components from Storybook, and the new brand used the
            same tokens.
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
            I scoped the feature, designed the user flows, and built it in code with AI. In Billpro, that&rsquo;s a new last step
            in Add Product and a product page section in the product details and edit views. I sent each part as a pull request.
            A developer reviewed the code and connected the real logic.
          </P>
          <P>
            You&rsquo;ve seen the desktop version in the video at the top. I built every part for phones too, so a merchant can
            set up a product page and share its link from their phone.
          </P>
          <div className="my-10 grid items-start gap-6 sm:grid-cols-3">
            <Media
              src="/projects/billpro/mob-product-step.webp"
              alt="Add Product on a phone, last step: Enable Product page switched on, the upload area, five photos with room for one more, and the start of Attributes."
              frame="phone"
              width={780}
              height={1688}
              caption="Last step of Add Product"
            />
            <Media
              src="/projects/billpro/mob-product-details.webp"
              alt="Product Details on a phone: Nova Wireless Earbuds, Active, product ID, short and long description, unit, group and purchase type, one under another."
              frame="phone"
              width={780}
              height={1688}
              caption="Product details"
            />
            <Media
              src="/projects/billpro/mob-product-page.webp"
              alt="The product page part of Product Details on a phone: Enable Product page, the shareable link with a copy button, five photos in a grid, and the Colour options White, Black and Silver."
              frame="phone"
              width={780}
              height={1688}
              caption="The link, photos and options"
            />
          </div>
          <P>
            I also designed and built the page buyers see, and the checkout behind it. That part of the story is in the{" "}
            <a href="/projects/buyer-journey/" className="underline underline-offset-4 hover:no-underline">
              buyer journey case study
            </a>
            .
          </P>

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
              <b className="font-medium">No more demo calls for most new merchants.</b> Before, every new merchant needed a long
              demo call to learn the platform. Now most start on their own, with Home and the Learning Center. We still present
              the platform to very big clients, but as a sales meeting, not because it&rsquo;s hard to use.
            </>,
            <>
              <b className="font-medium">Merchants feel sure of what they&rsquo;re doing.</b> The first product and the first
              order make sense without help, and the everyday work is easy to read: where to find things, what each field means,
              and what the customer will pay. Merchants need much less help from our operations team.
            </>,
            <>
              <b className="font-medium">Everything in one place.</b> Customers, products, orders, payment links, payments and
              failed payments, in one platform that works the same way on every page, on desktop and on a phone.
            </>,
            <>
              <b className="font-medium">Every billing type, one simple flow.</b> Single payment, instalment, subscription and
              metered products are all created the same way, with only the fields that apply.
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
      id: "hindsight",
      nav: "What I'd change",
      title: "What I'd change today, and am changing now",
      body: (
        <>
          <Lead>
            I don&rsquo;t have to guess what I&rsquo;d do differently. The app I&rsquo;m working on now is built on the Billpro
            base, with the same functionality, and it lets me make the changes I would make to Billpro today.
          </Lead>
          <H3>A sidebar, not a header menu</H3>
          <P>
            When we started the rebuild, the CEO, the developers and I agreed to move fast and rebuild first the flows merchants
            use every day: orders, products, payments. Even then I wanted a sidebar for the navigation, like modern platforms
            such as Stripe have, instead of a menu in the header. The developers said it would take much more time, and the
            platform had a lot of hard functionality to build first. So we agreed: navigation stays in the header, and the
            sidebar waits.
          </P>
          <P>
            It was the right call for that moment, but it had a cost. A header has room for only a few links, so many pages sit
            in dropdowns and the profile menu. In the new app, the sidebar is finally there. Every page is one click away,
            grouped by what you do: overview, manage, business. On a phone, it becomes a top bar with a full-screen menu.
          </P>
          <Media
            src="/projects/billpro/ob-orders.webp"
            alt="The new app's Orders page with a sidebar on the left: the organisation and profile at the top, Create new, then Overview (Home, Dashboard, Alerts), Manage (Orders, Products, Customers, Payments) and Business (Reports, Settings). The page shows smaller key numbers, filters, search and a compact orders table."
            width={2880}
            height={1800}
            caption="The app I’m working on now: the same platform, with a sidebar. Every page is one click away."
          />
          <H3>Organisations: many profiles, one place</H3>
          <P>
            In Billpro, every merchant profile stands alone. But a business can run several brands or shops, each with its own
            profile. In the new app I added a level above profiles: the organisation. It has its own home with totals across all
            its profiles, its own users and its own settlements. The switcher sits at the top of the sidebar, so moving between
            profiles is one step.
          </P>
          <Media
            src="/projects/billpro/ob-switcher.webp"
            alt="The sidebar's profile menu open over the Dashboard: All organisations, Organisation overview, Switch profile with a list of the organisation's two profiles and a tick next to the current one, the user's name and Sign out."
            width={2880}
            height={1800}
            caption="Switching profile from the sidebar: the organisation’s profiles, with a tick on the one you’re in."
          />
          <H3>Product creation on one page, not in a window</H3>
          <P>
            Today I would keep the same four steps for creating a product, but not in a window. Each step would appear on one
            page, one after another, as the merchant goes. At the end, they see everything together, check it, and create the
            product. In a window you can only see the step you&rsquo;re on: to check the price you set two steps ago, you have
            to go back. On one page, nothing is hidden, and the final check is easy.
          </P>
          <H3>Calmer and more compact</H3>
          <P>
            Merchants look at these screens all day, so the new app is calmer: softer, neutral colours instead of bright blue,
            Inter instead of Poppins, and lighter status badges. It&rsquo;s also more compact: smaller page titles, filters,
            fields and buttons, shorter table rows, and small dashboard cards with thin charts. More fits on one screen, and
            nothing shouts.
          </P>
          <H3>More focus on mobile</H3>
          <P>
            When I started on Billpro, about three years ago, I already told the team that mobile matters, and I gave every
            page a mobile view. But the main focus was still desktop. A payments platform is full of heavy tables that are easier to check on a big screen,
            and our merchants mostly worked on desktop. That has changed: people now check everything on their phones first.
            So today mobile is one of my main focuses. In the new app, the phone layout is designed on its own, not squeezed
            from the desktop: smaller key numbers that fit in one row, compact charts, tables that keep only the columns you
            need, and a full-screen menu that&rsquo;s easy to tap.
          </P>
          <div className="my-10 grid items-start gap-6 sm:grid-cols-3">
            <Media
              src="/projects/billpro/ob-mob-dashboard.webp"
              alt="Dashboard in the new app on a phone: small cards with thin donut charts for orders by status, status changes, payments processed and payments captured, each with its numbers beside the chart."
              frame="phone"
              width={780}
              height={1688}
              caption="Dashboard"
            />
            <Media
              src="/projects/billpro/ob-mob-orders.webp"
              alt="Orders in the new app on a phone: small key numbers in one row, filters, date and search, and a compact table with status, created date, UID and amount paid."
              frame="phone"
              width={780}
              height={1688}
              caption="Orders"
            />
            <Media
              src="/projects/billpro/ob-mob-menu.webp"
              alt="The phone menu in the new app: the organisation and profile at the top, then Overview, Manage and Business groups with large rows that are easy to tap."
              frame="phone"
              width={780}
              height={1688}
              caption="Menu"
            />
          </div>
          <H3>Start in code earlier</H3>
          <P>
            The sidebar waited because every change had to wait for a developer. Today I build changes like these myself, in
            code with AI, and send them as pull requests. If I started Billpro again, I&rsquo;d work this way from the start.
          </P>
        </>
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
