import type { Study } from "@/components/case-study/CaseStudy"
import Media from "@/components/case-study/Media"
import { Decision, H3, Lead, List, P, Pills, Quote, Split, Stats } from "@/components/case-study/blocks"

const study: Study = {
  eyebrow: "Case study · Buyer experience · Self-service",
  headline: "One place where buyers manage what they bought",
  summary: (
    <>
      Our merchants sell through checkouts, order links and product pages. But once a buyer paid, they had nowhere to go. To
      cancel a subscription or change a card, they had to ask the merchant, and the merchant had to ask us. I designed the Order
      Portal, where buyers do it all themselves. Every email, every checkout and our buyer help site lead
      there.
    </>
  ),
  meta: [
    { label: "My role", value: "Product design: flows, UI and emails. Later, front-end code with AI" },
    { label: "Team", value: "CEO, operations team, an outside development team for version 1, our front-end developers" },
    { label: "Stage", value: "Live, with new features coming" },
    { label: "Platform", value: "Web, desktop and mobile, light and dark" },
  ],
  hero: {
    src: "/projects/buyer-journey/checkout-to-portal.mp4",
    poster: "/projects/buyer-journey/checkout-to-portal-poster.webp",
    alt: "Screen recording: a buyer opens an order link for Nova Wireless Earbuds, agrees to the terms, enters card details, sees Payment Successful, and clicks Go to Order Portal. The portal shows the order as Complete, the buyer's details and a paid invoice.",
    width: 1440,
    height: 900,
    caption:
      "From an order link to the Order Portal: pay, and land on your order.",
  },
  results: [
    <>Buyers manage their orders on their own: cancel, change a card, download invoices and receipts.</>,
    <>Merchants no longer pass these requests to us, and our operations team gets far fewer calls.</>,
    <>Every way in, from email to checkout to onbold.net, ends on the same page.</>,
  ],
  sections: [
    {
      id: "problem",
      nav: "Problem",
      title: "After paying, buyers had nowhere to go",
      body: (
        <>
          <Lead>
            Our merchants create orders and product pages in our platform and send buyers a link to pay. That part worked. What
            happened after payment didn&rsquo;t.
          </Lead>
          <P>
            A buyer with a subscription couldn&rsquo;t cancel it alone. A buyer whose card expired couldn&rsquo;t add a new
            one. A buyer who needed an invoice for their accountant couldn&rsquo;t download it. Each of these became a message
            to the merchant.
          </P>
          <P>
            Merchants fixed some of it themselves in our platform. For the rest, they contacted our operations team and asked
            us to make the change. Either way, it was slow for the buyer and extra work for the merchant and for us.
          </P>
          <Quote>
            The fix wasn&rsquo;t a faster support process. It was giving buyers the tools to do it themselves, and taking this
            work off merchants.
          </Quote>
          <H3>Constraints</H3>
          <List
            items={[
              <>
                <b className="font-medium">Four kinds of order.</b> Single payment, instalment, subscription and metered billing
                each need different actions. Cancelling makes sense for a subscription, not for a one-off purchase.
              </>,
              <>
                <b className="font-medium">No accounts.</b> Buyers buy from the merchant, not from us. Nobody wants to create a
                login just to download a receipt.
              </>,
              <>
                <b className="font-medium">Money and trust.</b> The page shows real payments and card details, so it has to feel
                safe and be clear about who sold what.
              </>,
            ]}
          />
        </>
      ),
    },
    {
      id: "role",
      nav: "My role",
      title: "I designed it in Figma. Now I build it in code",
      body: (
        <>
          <P>
            The portal has two stages, and my way of working changed between them.
          </P>
          <P>
            <b className="font-medium">Version 1, in Figma.</b> I scoped the portal with our CEO, who had the idea, and with our
            operations team, who knew every request buyers sent. Then I designed every flow and every scenario: each purchase
            type, each state, and each email. An outside development team built the first version. I set up the Figma file so they
            could find their way, and I had calls with their developers to walk through the flows.
          </P>
          <P>
            <b className="font-medium">Now, in code.</b> We no longer work with that team. I design new portal features directly
            in code with AI and send them as pull requests. Our front-end developers review them and connect the real logic. The
            light theme was built this way, and so was onbold.net, our buyer help site.
          </P>
          <Split
            cols={[
              {
                title: "What I owned",
                items: [
                  "Scope and user flows, with the CEO and operations",
                  "Every portal screen and state, desktop and mobile",
                  "Checkout screens and the success and failed pages",
                  "The design of 23 lifecycle emails, each linking to the portal",
                  "Light theme, in code",
                  "onbold.net: design and front-end code",
                  "A preview tool for developers, in code",
                ],
              },
              {
                title: "What others did",
                items: [
                  "CEO: the idea and the direction",
                  "Operations: what buyers ask for, and where they get stuck",
                  "Underwriting: the text of the emails",
                  "Outside development team: built version 1",
                  "Our front-end developers: payments, APIs, and review of my pull requests",
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
              <b className="font-medium">A buyer can finish alone.</b> The common tasks, like cancel, change card and download an
              invoice, take a few clicks and no message to anyone.
            </>,
            <>
              <b className="font-medium">Easy to find.</b> Wherever the buyer starts, an email, a checkout or a bank statement,
              there&rsquo;s a short path to their order.
            </>,
            <>
              <b className="font-medium">Only what fits.</b> Each order shows only the actions that make sense for its type and
              state.
            </>,
            <>
              <b className="font-medium">Less work for us.</b> Fewer requests reaching merchants and our operations team.
            </>,
          ]}
        />
      ),
    },
    {
      id: "portal",
      nav: "The portal",
      title: "One page for every order",
      body: (
        <>
          <Lead>
            The Order Portal opens on the order itself: its status, the card it&rsquo;s paid with, who bought and who sold, and
            every invoice. Everything a buyer might need is on one page.
          </Lead>
          <Media
            src="/projects/buyer-journey/portal-subscription.mp4"
            poster="/projects/buyer-journey/portal-subscription-poster.webp"
            alt="Recording of a subscription in the Order Portal: the buyer opens an invoice with Download Receipt and Download Invoice, goes back, opens Add Payment Method, then opens the menu and starts Cancel Subscription. A window asks to confirm, and the buyer keeps the subscription."
            width={1440}
            height={900}
            caption="A monthly subscription in the portal: open an invoice, add a card, cancel (or keep) the subscription."
          />
          <H3>What a buyer can do</H3>
          <List
            items={[
              <>
                <b className="font-medium">Every order:</b> see the status and the details, view each invoice, and download the
                invoice, the receipt and an order summary as PDFs.
              </>,
              <>
                <b className="font-medium">Subscriptions:</b> cancel from the menu, with a clear &ldquo;Keep&rdquo; or
                &ldquo;Cancel&rdquo; step so nobody cancels by mistake.
              </>,
              <>
                <b className="font-medium">Subscriptions, instalments and metered billing:</b> add a new card, or update the
                card when a payment fails.
              </>,
              <>
                <b className="font-medium">Questions:</b> the merchant&rsquo;s details and contact link are one tab away.
              </>,
            ]}
          />
          <div>
            <Media
              src="/projects/buyer-journey/portal-invoice-light.webp"
              alt="Invoice page: a card with Invoice Paid, €9.99, order reference and date, and buttons Download Receipt and Download Invoice. On the right, the summary, items and payment record."
              width={2880}
              height={1800}
              caption="One invoice: paid, with the receipt and invoice to download."
            />
            <Media
              src="/projects/buyer-journey/portal-details-light.webp"
              alt="Order details page: Order Active, €9.99, Download Summary. On the right, the order summary, the item, totals, initial and subscription amounts, amount paid, refunds and skipped payments, and the card used."
              width={2880}
              height={1800}
              caption="Order details: what was bought, what&rsquo;s been paid, and with which card."
            />
          </div>

          <Decision
            n={1}
            title="When a payment fails, put the fix on top"
            options="Show the failed payment in the invoice list only. Send the buyer to contact the merchant. Make the problem and the fix the first thing on the page."
            chose="A failed order gets a red Failed badge and a red Update Card button right under the card. Unpaid invoices are marked in the list, with a retry icon."
            why="A failed payment is the moment a buyer is most likely to give up, or to call. If the fix is the first thing they see, most of them just fix it."
            tradeoff="Red draws a lot of attention. I kept it for real problems only, so a normal, healthy order stays calm and neutral."
          >
            <Media
              src="/projects/buyer-journey/portal-failed-dark.webp"
              alt="A failed order: Failed badge, the saved card with a red Update Card button, customer details, and an invoice history with three unpaid invoices that have a retry icon."
              width={2880}
              height={2273}
              caption="Failed payment: the fix comes first."
            />
          </Decision>
        </>
      ),
    },
    {
      id: "ways-in",
      nav: "Ways in",
      title: "Every way in leads to the same page",
      body: (
        <>
          <Lead>
            A portal only helps if buyers can find it. So I looked at every place a buyer meets us, and made each one point to
            their order.
          </Lead>
          <List
            items={[
              <>
                <b className="font-medium">A link from the merchant.</b> The merchant creates an order in our platform and shares
                it by email, link or QR code. The buyer pays, then lands in the portal.
              </>,
              <>
                <b className="font-medium">A product page.</b> The merchant creates a page for a product in our platform and
                can put it anywhere, like Instagram or other social media. Buyers open it, check out and pay.
              </>,
              <>
                <b className="font-medium">A checkout inside another platform.</b> Platforms connect our checkout through the API.
                After payment, the buyer gets the same portal.
              </>,
              <>
                <b className="font-medium">Emails.</b> Every email about an order has a button to the portal.
              </>,
              <>
                <b className="font-medium">onbold.net.</b> Our help site for everyone who buys through Onbold. Any buyer can
                find their orders there with just their email.
              </>,
            ]}
          />

          <Decision
            n={2}
            title="Every email leads back to the order"
            options="Plain notification emails with a support address. A link hidden in the text. A clear action at the end of every email."
            chose="I designed 23 lifecycle emails, from “Your order is ready” to “Your card has expired” and “Your subscription was cancelled”. The text came from our underwriting team. Each email ends with one main button, and the button changes with the moment: Proceed to Checkout when an order is ready to pay, Update Card when a card has expired, Order Portal after a payment. Every one of them opens the buyer's order."
            why="An email is where buyers notice that something needs doing. If the button takes them straight to the fix, they don't have to reply to anyone."
          >
            <div className="my-10 grid items-start gap-6 sm:grid-cols-3">
              <Media
                src="/projects/buyer-journey/email-order-ready.webp"
                alt="Email: Your order is ready. Order ID, greeting, product and merchant, and a dark block with the amount due and a Proceed to Checkout button."
                frame="crop"
                width={1396}
                height={2056}
                caption="Order ready → checkout"
              />
              <Media
                src="/projects/buyer-journey/email-payment-received.webp"
                alt="Email: Your payment was received. Payment details and a dark block with the amount paid and an Order Portal button."
                frame="crop"
                width={1396}
                height={2056}
                caption="Payment received → portal"
              />
              <Media
                src="/projects/buyer-journey/email-card-expired.webp"
                alt="Email: Your payment card has expired. The expired card with a red badge, and a dark block with an Update Card button."
                frame="crop"
                width={1396}
                height={2056}
                caption="Card expired → update card"
              />
            </div>
            <P>
              The emails follow the same theme as the portal, dark or light. So when a buyer clicks &ldquo;Update Card&rdquo;,
              the page they land on already feels familiar.
            </P>
            <P>
              The first portal was dark only. I built a light theme in code, so merchants can choose how their buyers&rsquo;
              experience looks, and pick what suits their store. Each merchant chooses the theme in their profile. Light is the
              default, and a small preview shows what their buyers will see.
            </P>
            <Media
              src="/projects/buyer-journey/theme-setting.webp"
              alt="Merchant profile, Theme tab: 'Choose how Customer Portal looks', with two preview cards, Light (clean and simple, selected) and Dark (high-contrast)."
              frame="crop"
              width={2140}
              height={870}
              caption="The theme setting in the merchant&rsquo;s profile."
            />
          </Decision>
        </>
      ),
    },
    {
      id: "onbold-net",
      nav: "onbold.net",
      title: "onbold.net: help for every Onbold buyer",
      body: (
        <>
          <Lead>
            onbold.net is our help site for everyone who buys through Onbold, our Merchant of Record brand. Any buyer can open
            it, enter their email, and reach their orders. It&rsquo;s one more way into the portal, with no link needed.
          </Lead>
          <Media
            src="/projects/buyer-journey/net-find.mp4"
            poster="/projects/buyer-journey/net-find-poster.webp"
            alt="Recording of onbold.net: the buyer types an email and clicks Find Order. The field turns into an animated dotted sphere with the words Searching, Checking and Sending code. A Check your email card appears, the buyer enters a 6-digit code, and a list titled Choose an Order shows several orders with their status."
            width={1440}
            height={900}
            caption="Find your order: email, a 6-digit code, then your orders."
          />
          <Decision
            n={3}
            title="Find the order by email, and never say if it exists"
            options="Ask for an order number. Ask for an email and show the orders right away. Ask for an email, then send a code to that inbox."
            chose="The buyer enters the email they used to pay. We send a 6-digit code to that inbox. The screen always says the same thing: “If we can match that address to an Order, we'll send you a secure way to continue.” After the code: one order opens straight in the portal, several show a short list to choose from, and none shows help and another way to search."
            why="Buyers rarely remember an order number, but they know their email. The 6-digit code is there for security: it proves the inbox is theirs, so nobody can use the page to check someone else's purchases. For the same reason, the screen never confirms whether an email has orders."
            tradeoff="One more step, waiting for the code. The animation in between shows the search is working, so the wait feels short."
          >
            <div className="my-10 grid gap-6 sm:grid-cols-2">
              <Media
                src="/projects/buyer-journey/net-orders.webp"
                alt="Choose an Order: 'We found 11 Orders for several@example.com'. Order cards with the shop name, type badge, status badge, price, date and reference, and a View Order button."
                width={2880}
                height={1800}
                caption="Several orders: pick the one you need help with."
              />
              <Media
                src="/projects/buyer-journey/net-notfound.webp"
                alt="Order not found: an empty orders illustration and a message that the purchase may have been made with a different email, with the buyer support address and a Back to home button."
                width={2880}
                height={1440}
                caption="No orders: a calm message and the next step."
              />
            </div>
          </Decision>
          <H3>&ldquo;I don&rsquo;t recognise this charge&rdquo;</H3>
          <P>
            Sometimes the card owner didn&rsquo;t buy anything. A child or a partner used their card but typed their own email.
            The card owner sees &ldquo;ONBOLD.NET&rdquo; and the shop name on their statement, and doesn&rsquo;t know what the
            charge is. For them, the home page has a second path. It shows what
            the statement line usually looks like, then opens a short form: name, email, date, amount and the last four digits of
            the card. Our buyer support team finds the payment and writes back.
          </P>
          <Media
            src="/projects/buyer-journey/net-charge.mp4"
            poster="/projects/buyer-journey/net-charge-poster.webp"
            alt="Recording of onbold.net: the buyer scrolls to 'I don't recognise an Onbold charge', looks at the example statement line ONBOLD.NET*SELLERNAME €49.95, clicks Check a transaction, fills in name, email, date, last four digits and amount, and sends it. A confirmation says 'We'll contact you soon'."
            width={1440}
            height={900}
            caption="Check a transaction: a short form instead of a dispute with the bank."
          />
          <div className="my-10 grid items-center gap-6 sm:grid-cols-2">
            <Media
              src="/projects/buyer-journey/net-hero-mobile.webp"
              alt="onbold.net on a phone: Track your Order, an email field with an arrow button, and the How can we help section."
              frame="phone"
              width={1170}
              height={2532}
            />
            <div>
              <P>
                Most people check a strange charge on their phone, inside their banking app. So the site was built for mobile
                first: on a phone, &ldquo;I need help with a purchase&rdquo; comes first, fields are big enough that the phone
                doesn&rsquo;t zoom, and the form opens as a full page.
              </P>
              <P>
                A clear answer here helps everyone. The buyer gets peace of mind, and the seller avoids a chargeback: a dispute
                the buyer would otherwise open with their bank.
              </P>
            </div>
          </div>
        </>
      ),
    },
    {
      id: "code",
      nav: "Built in code",
      title: "From Figma files to pull requests",
      body: (
        <>
          <Lead>
            Version 1 of the portal came from my Figma files. Everything new now starts in code. I build the real screens with
            AI, open a pull request, and our developers connect the logic.
          </Lead>
          <Stats
            items={[
              { value: "2 days", label: "from scoping to a working prototype of onbold.net" },
              { value: "½ day+", label: "of scoping the functionality first" },
            ]}
          />
          <H3>onbold.net, built by me</H3>
          <P>
            The Track your order experience on onbold.net took me about two days, from scoping to a working prototype pushed to
            GitHub. I spent a bit more than the first half day on scoping the functionality: Track your order at the top, an
            option for a charge you don&rsquo;t recognise, whether that should be a form and how it should work, and whether we
            need a verification code. Then I built it in VS Code with Claude Code: the home page, the code flow, the order list,
            the not-found page, the charge form, the FAQ and the legal pages. It works on any screen size. Our developers connect
            the real logic for the live site.
          </P>
          <P>
            Coding with AI made the building part fast. That&rsquo;s why the scoping mattered most: once the decisions were
            clear, the screens followed quickly.
          </P>
          <div className="my-10 grid gap-6 sm:grid-cols-2">
            <Media
              src="/projects/buyer-journey/net-hero.webp"
              alt="onbold.net home page: an animated dot grid at the top, the title Track your Order, and an email field with a Find Order button."
              width={2880}
              height={1800}
            />
            <Media
              src="/projects/buyer-journey/net-help.webp"
              alt="How can we help: two cards. 'I don't recognise an Onbold charge' with an example statement line and Check a transaction. 'I need help with a purchase' with a list of what buyers can do and a Find Order button."
              width={2880}
              height={1800}
            />
          </div>
          <H3>Making the rules easy to build</H3>
          <P>
            With Onbold as the legal seller, the checkout has to show the right legal text for each product. Does the seller have
            its own terms? Should the buyer tick a separate box to accept them? Is it digital content, where the buyer gives up
            the 14-day right to withdraw? Each answer adds or removes a line or a tick box. Merchants set these options in their
            profile in the Onbold app.
          </P>
          <P>
            The rules are written in a ticket, as always. But this many combinations are hard to picture from text alone. So I
            also built a small preview panel into my checkout prototype. A developer can click any setting and see exactly what the checkout shows, and what comes after a
            successful or failed payment. Each choice is saved in the link, so we can share one exact case with each other.
          </P>
          <Media
            src="/projects/buyer-journey/dev-preview.mp4"
            poster="/projects/buyer-journey/dev-preview-poster.webp"
            alt="Recording of the Onbold checkout for Nova Wireless Earbuds with the Preview panel open. Clicking seller terms options and withdrawal options adds or removes agreement lines and tick boxes above the Pay Now button. The last clicks switch to the screens after a successful and a failed payment."
            width={1440}
            height={900}
            caption="The preview panel: every legal setting, one click each. A tool for developers, not part of the live checkout."
          />
          <P>
            With the ticket and the preview side by side, developers can check every case and wire it to the matching setting in
            the merchant&rsquo;s profile.
          </P>
          <div className="my-10 grid items-center gap-6 sm:grid-cols-2">
            <Media
              src="/projects/buyer-journey/onbold-terms-settings.webp"
              alt="Onbold merchant profile settings. Supplier Product Terms: the toggle is on and Separate assent is chosen, with a terms URL. Withdrawal Treatment: the toggle is on and Digital content immediate is chosen, among Goods standard, Not consumer, Service immediate and Statutory exception."
              frame="crop"
              width={1660}
              height={1948}
            />
            <div>
              <P>
                The same options in the merchant&rsquo;s profile in the Onbold app. Here, the seller&rsquo;s terms need a separate
                tick box, and the product is digital content supplied right away.
              </P>
              <P>
                In the preview, the same two choices add two tick boxes to the checkout. One setting in the app, one visible result
                for the buyer.
              </P>
            </div>
          </div>
          <Pills items={["Vue 3", "TypeScript", "Tailwind CSS", "Vite", "GitHub pull requests", "Claude as pair programmer"]} />
        </>
      ),
    },
    {
      id: "mobile",
      nav: "Mobile",
      title: "On a phone, too",
      body: (
        <div className="grid items-center gap-6 sm:grid-cols-2">
          <Media
            src="/projects/buyer-journey/portal-mobile.webp"
            alt="The Order Portal on a phone: Order Manager header, Active status with a menu, the saved card with Add Payment Method, Customer and Merchant tabs, and billing history."
            frame="phone"
            width={1170}
            height={2532}
          />
          <div>
            <P>
              Buyers open portal links from emails, so often on a phone. On mobile the side panel becomes a small header, and the
              order reads top to bottom: status, card, details, invoices.
            </P>
            <P>Every action from the desktop is still there, one thumb away.</P>
          </div>
        </div>
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
              <b className="font-medium">Buyers help themselves.</b> They cancel subscriptions, change cards, and download
              invoices and receipts without writing to anyone.
            </>,
            <>
              <b className="font-medium">Merchants are out of the loop.</b> They no longer pass buyer requests on to us.
            </>,
            <>
              <b className="font-medium">Less work for operations.</b> Our team gets far fewer calls about buyers&rsquo;
              orders.
            </>,
            <>
              <b className="font-medium">One place, many doors.</b> Emails, checkouts, product pages and onbold.net all lead to
              the same order page, for both Billpro and Onbold.
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
        <P>
          The portal keeps growing as we add new ways to sell. Withdrawal is being built now: buyers of Onbold orders will be
          able to return a purchase within the legal 14 days, right from the portal. After that comes delivery, which we&rsquo;re
          scoping now: buyers will check and manage their delivery in the same place. I&rsquo;m building these the same way, as
          working screens in code, ready for our developers to connect.
        </P>
      ),
    },
  ],
}

export default study
