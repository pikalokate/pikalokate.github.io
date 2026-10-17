import type { Study } from "@/components/case-study/CaseStudy"
import Media from "@/components/case-study/Media"
import { Decision, H3, Lead, List, P, Pills, Quote, Split, Stats } from "@/components/case-study/blocks"

const study: Study = {
  eyebrow: "Case study · Billing platform · UX",
  headline: "Making a complex billing platform clear and easy to use every day",
  summary: (
    <>
      Billpro lets online merchants sell with single payments, instalments, subscriptions and usage-based billing. The old
      platform could do all of this, but it was hard to understand and hard to use: every option on screen at once, and
      flows that mixed everything together. I redesigned the platform, the screens and the logic behind the flows, so every
      merchant, new or experienced, can create products, orders and customers and find their way every day. Later I started shipping new features myself, in code
      with AI. The biggest one is product pages.
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
    <>A clear start. New merchants see three first actions and short guides as soon as they log in.</>,
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
            ]}
          />
        </>
      ),
    },
    {
      id: "role",
      nav: "My role",
      title: "I owned the design. Later I also shipped code",
      body: (
        <>
          <P>
            I&rsquo;m the only designer at the company. I started Billpro in Figma: the user journeys and the logic behind
            them, every screen, and the design system. The developers built it, front end and back end. Later I moved to
            designing and building in code with AI, and now I ship new features to the app myself.
          </P>
          <Split
            cols={[
              {
                title: "What I owned",
                items: [
                  "A review of the old platform: where the journey breaks",
                  "New flows for Home, products, orders, customers and many more",
                  "Lists, order pages, payment views and the dashboard",
                  "Every screen in Figma, desktop and mobile",
                  "The design system: components, states and colour tokens",
                  "Product pages: scope, flows, design and front-end code",
                  "Webhook screens: a working prototype in code",
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
          <P>
            I ship front-end code: screens and components. The developers review it and connect the APIs and the logic behind
            it.
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
            orders, customers, products with taxes, discounts, fees, groups and units, three payment views, a dashboard and
            alerts.
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
            Merchants spend most of their time in lists: orders, customers and products. So every list follows the same pattern.
            Four summary cards on top, like Active, Complete, Failed and Suspended. Then filters, a date range and search. Then
            the table, with a status icon at the start of each row. Learn one list, and you know them all.
          </P>
          <Media
            src="/projects/billpro/list-orders.webp"
            alt="Orders list: four summary cards (Active, Complete, Failed, Suspended), filters, date and search, and a table with created date, IDs, customer, order type, value, currency, payment count and amount paid."
            width={2880}
            height={1800}
            caption="Orders: summary cards, filters and search, then the table. Products and customers work the same way."
          />
          <H3>One order, every detail in its place</H3>
          <P>
            An order can run for months, so its page has to hold a lot without feeling heavy. A side menu splits it into seven
            parts: Summary, Customer, Cards, Billing Events, Products, Order Logs, and Notes &amp; Tags. Billing Events shows every
            payment in the schedule, paid or planned. When a payment needs attention, the actions are right above the list.
          </P>
          <Media
            src="/projects/billpro/order-summary.webp"
            alt="Order Summary of a subscription order: side menu with Summary, Customer, Cards, Billing Events, Products, Order Logs and Notes & Tags. The summary shows status Active, the customer, order type, channel, auto retry, dates, interval and amounts."
            width={2880}
            height={2512}
            caption="Order Summary: the status, the customer and the key facts first, then dates and amounts. The other six parts are one click away."
          />
          <H3>Following the money</H3>
          <P>
            Payments have their own section, built around the questions merchants ask about money. Each view answers one of them:
          </P>
          <List
            items={[
              <>
                <b className="font-medium">Pending Orders: who hasn&rsquo;t paid yet?</b> Orders waiting for their first payment,
                how long they&rsquo;ve waited, and how many reminder emails went out.
              </>,
              <>
                <b className="font-medium">All Processed: what came in?</b> Every payment, with totals on top for first payments,
                repeat payments, declines and refunds.
              </>,
              <>
                <b className="font-medium">Billing Exceptions: what failed?</b> Recurring payments that didn&rsquo;t go through,
                with the retry count and whether automatic retry is on.
              </>,
            ]}
          />
          <Media
            src="/projects/billpro/pay-processed.webp"
            alt="All Processed: totals for initial, repeated, declined and refunded payments, and a table of payments with gateway ID, order type and amount."
            width={2880}
            height={1800}
            caption="All Processed: every payment, with the totals on top."
          />
          <P>
            The same status icons, colours and table parts run through all of these views. They come from the design system
            described below.
          </P>
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
            This was more than new screens. To make the journeys simpler, the platform had to work differently: the purchase
            type now decides which fields you see, recurring products have separate initial and recurring amounts, a missing
            tax, unit or product can be created without leaving the form, and an order takes its setup from the
            product. I designed these rules together with the screens, and the developers built them into the app.
          </P>
          <Decision
            n={1}
            title="A Home that tells you where to start"
            options="Open on the dashboard with charts. Open on an empty list of orders. A Home page built for getting started."
            chose="A new Home page with three big actions in the order you need them: Add Order, Add Customer, Add Product. Below them, a short overview and a Learning Center with guides and videos for each billing type."
            why="A new merchant has no data yet, so charts tell them nothing. What they need is the next step, and a place to learn without calling us."
            tradeoff="Experienced merchants scroll past the guides. I kept them below the actions and the overview, so they never get in the way."
          >
            <Media
              src="/projects/billpro/home.webp"
              alt="The new Billpro Home: 'Hi Kate', buttons Add Order, Add Customer and Add Product, an overview of orders, customers and products, and a Learning Center with six guide cards."
              width={2880}
              height={2228}
              caption="Home: three first actions, a quick overview, and guides for single payment, instalment, subscription and metered billing."
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
              Extra fields like long description and group stay behind &ldquo;More options&rdquo;. In code, I later cut one
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
                <P>Compare it with the old form above. This isn&rsquo;t the same form with a new look: the fields follow the purchase type, and initial and recurring amounts are calculated separately.</P>
              </div>
            </div>
          </Decision>

          <Decision
            n={4}
            title="Rebuild order creation around what the merchant has, and what they don’t"
            options="Keep the old order form and tidy it up. Split it into a long wizard. Rebuild the flow so the merchant never has to leave it."
            chose="A new Add Order flow. If the product doesn’t exist yet, the merchant creates it right inside the order with the + button, just like a new customer. Before, there was no way to add a product from the order: they had to leave it and start again. Fee, discount and tax per product are hidden until you need them, behind one “Show” link. And with product groups, a merchant adds a whole group of products in one go instead of one by one."
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
              { value: "4", label: "short steps to a new product" },
              { value: "6", label: "photos per product page" },
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
            alt="Recording of the buyer side: the buyer browses the photos, picks the colour Black, presses Continue to payment, fills in name, email, address, country and postal code, agrees to the terms, and reaches the checkout with the card form and Pay Now."
            width={1440}
            height={900}
            caption="The buyer side, from the link to checkout: photos, options, customer details, then the card form. The order summary stays on the left the whole way."
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
            why="Merchants needed product pages right away. Simple options cover most cases today, and the data can grow into full variants later without changing the page."
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
          <div className="my-10 grid gap-6 sm:grid-cols-2">
            <Media
              src="/projects/billpro/ds-cover.webp"
              alt="Billpro design system cover with inputs, a select with search, multi-select tags and buttons in several states."
              frame="crop"
              width={1920}
              height={1080}
            />
            <Media
              src="/projects/billpro/ds-status.webp"
              alt="Status set: order statuses, billing event statuses, transaction results and badges, each with an icon and a label."
              frame="crop"
              width={1439}
              height={1626}
            />
            <Media
              src="/projects/billpro/ds-datepicker.webp"
              alt="Date pickers: single date, date range with presets like Today and This week, and time selection."
              frame="crop"
              width={1664}
              height={2000}
            />
            <Media
              src="/projects/billpro/ds-card.webp"
              alt="Payment card rows with card brand, masked number, expiry and status badges such as Default, Expired and 3DS."
              frame="crop"
              width={1373}
              height={1350}
            />
          </div>
          <P>
            The shared names paid off. When we launched our new brand, Onbold, I changed the colour values behind the tokens in
            one commit and kept their names, so every screen moved to the new look and no component broke.
          </P>
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
