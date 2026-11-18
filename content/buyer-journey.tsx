import type { Study } from "@/components/case-study/CaseStudy"
import Media from "@/components/case-study/Media"
import { Decision, H3, Lead, List, P, Pills, Quote, Split, Stats } from "@/components/case-study/blocks"

const study: Study = {
  eyebrow: "Case study · Checkout and self-service · Onbold",
  headline: "From the first click to managing the order, without asking anyone",
  summary: (
    <>
      Our merchants sell through product pages, order links and API integrations with their own stores. I designed the whole path a
      buyer takes: the Order Portal, where buyers manage what they bought on their own, a checkout that works on a phone, and
      most recently product pages, which I built in code. Before the portal, every change after payment was done by hand, by the merchant or by our
      operations team.
    </>
  ),
  meta: [
    { label: "My role", value: "Product design, UX first: user flows, every state, UI and emails. Front-end code with AI" },
    { label: "Team", value: "CEO, operations team, an outside development team for version 1, our front-end developers" },
    { label: "Stage", value: "Live, with new features coming" },
    { label: "Platform", value: "Web, desktop and mobile" },
  ],
  live: [{ label: "onbold.net", href: "https://onbold.net" }],
  hero: {
    src: "/projects/buyer-journey/hero-flow.mp4",
    poster: "/projects/buyer-journey/product-page-poster.webp",
    alt: "Screen recording of the whole buyer path for Nova Wireless Earbuds: the buyer looks through the photos and keeps the colour White, fills in name, email and phone, picks Spain, finds the address with the address search, continues to checkout, where VAT is added and the total is €156.09, enters the card and presses Pay €156.09. The Payment successful screen appears with a Go to Order Portal button.",
    width: 1440,
    height: 900,
    caption: "The whole path: product page, customer information, checkout with tax, payment successful.",
  },
  results: [
    <>Buyers manage orders on their own: cancel a subscription, change a card, download invoices and receipts.</>,
    <>Requests that reached our operations team a few times a week are now handled by buyers in their own portal.</>,
    <>Every way in, one place to land: product pages, order links, API integrations, 23 emails and onbold.net.</>,
  ],
  sections: [
    {
      id: "problem",
      nav: "Problem",
      title: "After paying, buyers had nowhere to go",
      body: (
        <>
          <Lead>
            Our merchants create orders in our platform and send buyers a link to pay, or connect their own store to our checkout
            through the API. That part worked. What happened after payment didn&rsquo;t.
          </Lead>
          <P>
            A buyer with a subscription couldn&rsquo;t cancel it alone. A buyer whose card expired couldn&rsquo;t add a new
            one. A buyer who needed an invoice couldn&rsquo;t download it. Each of these became a message to the merchant.
          </P>
          <P>
            At that time, many of our merchants were call centres that sold by phone. They made every change by hand inside our
            platform: added a new card, picked which saved card to charge, cancelled a plan. When they couldn&rsquo;t, they contacted our
            operations team, who did it for them. That happened a few times a week, and every time it was slow for the buyer and
            extra work for everyone else.
          </P>
          <Quote>
            The fix wasn&rsquo;t a faster support process. It was giving buyers the tools to do it themselves.
          </Quote>
          <H3>Constraints</H3>
          <List
            items={[
              <>
                <b className="font-medium">Different kinds of order.</b> A one-off purchase and a subscription need different
                actions. Cancelling makes sense for a subscription, not for a pair of earbuds.
              </>,
              <>
                <b className="font-medium">No accounts.</b> Buyers buy from the merchant, not from us. Nobody wants to create a
                login just to download a receipt.
              </>,
              <>
                <b className="font-medium">Tax depends on the buyer.</b> Our tax engine, Sphere, calculates tax from the
                buyer&rsquo;s country. So the final price is only known once the buyer has entered their address.
              </>,
              <>
                <b className="font-medium">Money and trust.</b> These pages show real payments and card details, so they have to
                feel safe and be clear about who sold what.
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
            <b className="font-medium">Version 1, in Figma.</b> I scoped the portal with our CEO, who had the idea, with some input
            from our operations team on the most common buyer requests. Then I designed every flow and every scenario: each purchase
            type, each state, and each email. An outside development team built the first version. I set up the Figma file so they
            could find their way, and I had calls with their developers to walk through the flows.
          </P>
          <P>
            <b className="font-medium">Now, in code.</b> We no longer work with that team. I design new features directly in code
            with AI and send them as pull requests. Our front-end developers review them and connect the real logic. The product
            page, its checkout, the address search and onbold.net were all built this way.
          </P>
          <Split
            cols={[
              {
                title: "What I owned",
                items: [
                  "Scope and user flows, with the CEO",
                  "Product page and checkout, desktop and mobile, in code",
                  "Every portal screen and state",
                  "The design of 23 lifecycle emails, each linking to the portal",
                  "onbold.net: design and front-end code",
                  "The journey map the team works from",
                ],
              },
              {
                title: "What others did",
                items: [
                  "CEO: the idea and the direction",
                  "Operations: input on the most common buyer requests",
                  "Underwriting: the text of the emails",
                  "Outside development team: built version 1 of the portal",
                  "Our front-end developers: payments, tax, APIs, and review of my pull requests",
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
              <b className="font-medium">Zero messages for common tasks.</b> Cancel, change a card and download an invoice take a
              few clicks, with no message to the merchant or to us.
            </>,
            <>
              <b className="font-medium">No surprise at payment.</b> The buyer sees the final price, with tax, before they pay.
            </>,
            <>
              <b className="font-medium">A short path from anywhere.</b> Wherever the buyer starts, an email, a checkout or a
              bank statement, their order is a few steps away.
            </>,
            <>
              <b className="font-medium">Less work for us.</b> Fewer buyer requests reaching merchants and our operations team.
            </>,
          ]}
        />
      ),
    },
    {
      id: "product-page",
      nav: "Product page",
      title: "The newest way to buy: a product page",
      body: (
        <>
          <Lead>
            Product pages are our newest feature. A merchant turns one on in our app, adds photos and options, and gets a link
            they can post anywhere, like Instagram or a message. The buyer opens it, picks a colour and a quantity, and pays.
          </Lead>
          <P>
            I designed and built product pages fully in code myself, inside our company&rsquo;s buyer portal repository: the
            page, the customer step and the checkout, on desktop and mobile. I sent the work as pull requests, and our developers
            connected the real logic.
          </P>
          <Media
            src="/projects/buyer-journey/product-page.webp"
            alt="Product page on desktop: a large photo of white Nova Wireless Earbuds with six thumbnails below, and on the right the seller, the name, €129.00, 'Price excludes tax. Tax will be calculated at checkout.', the description, colour White, Black or Silver, quantity, and a Continue to payment button."
            width={2880}
            height={1800}
            caption="A product page: photos, options, and one button to pay."
          />
          <Decision
            n={1}
            title="Ship options as names now, link them to photos later"
            options="Wait and build full variants, where each colour has its own photos. Ship simple options now: a name and a list of values."
            chose="Options are plain names for now, like Colour: White, Black, Silver. The buyer picks one and it goes with the order, but it doesn’t switch the photo. I agreed this scope with the developers, the CEO and the team."
            why="Linking each option to its own photos needs extra logic, and the developers didn’t have time to build it before launch. Merchants needed product pages right away, so we shipped plain options first and added the photo link to the plan."
            tradeoff="When a buyer picks Black, the gallery can still show a white photo. So in the order summary I show the chosen colour and quantity as text, and I hid the small product photo there until photos follow the options."
          />
        </>
      ),
    },
    {
      id: "mobile",
      nav: "Mobile checkout",
      title: "On a phone, each step has one job",
      body: (
        <>
          <Lead>
            A phone has no room for a summary next to the form. So instead of shrinking the desktop, I asked what the buyer
            needs to check at each step, and showed only that.
          </Lead>
          <Decision
            n={2}
            title="Check the product first, then check the price"
            options="Show the full order summary at the top of every step. Hide the summary completely on mobile. Give each step one thing to check."
            chose={
              <>
                <b className="font-medium">Customer information: check the product.</b> At the top, a small card shows the
                product name, the colour and the quantity, so the buyer can see they picked the right thing. The full price
                breakdown is folded behind &ldquo;Show order summary&rdquo;.
                <br />
                <br />
                <b className="font-medium">Checkout: check the price.</b> Here it&rsquo;s the opposite. The summary shows the
                full price with tax, and the final amount is written on the Pay button. The product details fold behind
                &ldquo;Show product&rdquo;.
              </>
            }
            why="Two reasons. Space: a phone can show one block above the form, not two. And timing: on the customer step, tax isn’t calculated yet, because it depends on the buyer’s country. A total there would not be the final price. At checkout, tax is known, so that’s where the buyer should look at the money, and the Pay button repeats it."
            tradeoff="The full breakdown is one tap away on the first step. That’s on purpose: the number there could still change, so I didn’t want the buyer to focus on it."
          >
            <div className="my-10 grid gap-6 sm:grid-cols-3">
              <Media
                src="/projects/buyer-journey/m-product.webp"
                alt="Product page on a phone: photo, seller, Nova Wireless Earbuds, €129.00, 'Price excludes tax. Tax will be calculated at checkout.', description, colour White, Black or Silver, quantity, and a full-width Continue to payment button."
                frame="phone"
                width={1170}
                height={2532}
                caption="1. The product"
              />
              <Media
                src="/projects/buyer-journey/m-customer.webp"
                alt="Customer information on a phone: a small card on top with Nova Wireless Earbuds, €129.00, colour White and quantity 1, and a Show order summary link. Below, the form."
                frame="phone"
                width={1170}
                height={2532}
                caption="2. Check the product"
              />
              <Media
                src="/projects/buyer-journey/m-customer-summary.webp"
                alt="The same card opened: products 129.00, tax 'To be calculated at checkout', subtotal €129.00, and Hide order summary."
                frame="phone"
                width={1170}
                height={2532}
                caption="Opened: tax comes at checkout"
              />
            </div>
            <div className="my-10 grid gap-6 sm:grid-cols-3">
              <Media
                src="/projects/buyer-journey/m-checkout.webp"
                alt="Checkout on a phone: card number, expiry date, CVV and cardholder name, then a summary with products 129.00, VAT 21% 27.09 and total €156.09, a Show product link, how the charge appears on the card statement, and a Pay €156.09 button."
                frame="phone"
                width={1170}
                height={2532}
                caption="3. Check the price"
              />
              <Media
                src="/projects/buyer-journey/m-checkout-product.webp"
                alt="The same checkout with the product opened: Nova Wireless Earbuds €129.00, colour White, quantity 1, and Hide product."
                frame="phone"
                width={1170}
                height={2532}
                caption="The product, one tap away"
              />
            </div>
          </Decision>
          <H3>Finding the address faster</H3>
          <P>
            The address is the longest part of the form, and on a phone it&rsquo;s the most typing. So I added &ldquo;Find
            your address&rdquo;, an address search by Google: the buyer starts typing, picks their address from a short list,
            and the street, postal code, city and province fill in on their own. If the address isn&rsquo;t found, the fields
            are right below.
          </P>
          <div className="mx-auto max-w-[300px]">
            <Media
              src="/projects/buyer-journey/m-address.mp4"
              poster="/projects/buyer-journey/m-address-poster.webp"
              alt="Phone recording of Find your address: the buyer taps the field and types 'Carrer de Balmes 120', a list of matching addresses from Google appears, the buyer taps the Barcelona one, and address line 1, postal code 08008, city Barcelona and province Catalunya fill in."
              frame="phone"
              width={780}
              height={1688}
              caption="Type, pick, done: the fields fill in on their own."
            />
          </div>
        </>
      ),
    },
    {
      id: "portal",
      nav: "The portal",
      title: "After paying, one page for every order",
      body: (
        <>
          <Lead>
            After payment, the buyer goes straight to the Order Portal. It opens on the order itself: its status, the card
            it&rsquo;s paid with, who bought and who sold, and every invoice.
          </Lead>
          <Media
            src="/projects/buyer-journey/order-checkout.mp4"
            poster="/projects/buyer-journey/order-checkout-poster.webp"
            alt="Screen recording of a checkout from an order link: on the left, the amount to pay €156.09 with the item, VAT and how the charge appears on the statement; on the right, 'Alex, your order is ready' and the card form. The buyer enters the card, presses Pay €156.09, and sees Payment Successful with a Go to Order Portal button."
            width={1440}
            height={900}
            caption="A checkout from an order the merchant sent: pay, then go straight to the order."
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
                <b className="font-medium">Subscriptions and instalments:</b> add a new card, or update the card when a payment
                fails.
              </>,
              <>
                <b className="font-medium">Questions:</b> the merchant&rsquo;s details and contact link are one tab away.
              </>,
            ]}
          />
          <Media
            src="/projects/buyer-journey/portal-subscription.mp4"
            poster="/projects/buyer-journey/portal-subscription-poster.webp"
            alt="Recording of a subscription in the Order Portal: the buyer opens an invoice with Download Receipt and Download Invoice, goes back, opens Add Payment Method, then opens the menu and starts Cancel Subscription. A window asks to confirm, and the buyer keeps the subscription."
            width={1440}
            height={900}
            caption="A monthly subscription in the portal: open an invoice, add a card, cancel (or keep) the subscription."
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
            n={3}
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
          <H3>On a phone</H3>
          <P>
            Buyers often open the portal from an email, so on a phone. The side panel becomes a small header, the card fills the
            width, and the page reads top to bottom: status, card, details, invoices. Order details and each invoice open as their
            own page, with the downloads at the top.
          </P>
          <div className="my-10 grid gap-6 sm:grid-cols-3">
            <Media
              src="/projects/buyer-journey/m-portal-main.webp"
              alt="Order Portal on a phone: Nova Audio, order status Active, order reference, View Order Details, the saved Visa card ending 0091 with Add Payment Method, Customer, Merchant and Seller tabs, the buyer's details, and billing history with a paid invoice."
              frame="phone"
              width={1170}
              height={2532}
              caption="1. The order"
            />
            <Media
              src="/projects/buyer-journey/m-portal-details.webp"
              alt="Order details on a phone: Order Active, €96.80 paid so far, order reference, created date, payment method, a Download Summary button, then the order summary with Nova Care Plan at €10.00 a month."
              frame="phone"
              width={1170}
              height={2532}
              caption="2. Order details"
            />
            <Media
              src="/projects/buyer-journey/m-portal-invoice.webp"
              alt="Invoice on a phone: Invoice Paid, €12.10, order reference and date paid, then the summary with invoice and receipt numbers and the Nova Care Plan item."
              frame="phone"
              width={1170}
              height={2532}
              caption="3. An invoice"
            />
          </div>
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
                <b className="font-medium">A product page.</b> The buyer pays, then lands in the portal.
              </>,
              <>
                <b className="font-medium">A link from the merchant.</b> The merchant creates an order in our app and shares it by
                email, link or QR code. Same checkout, same portal.
              </>,
              <>
                <b className="font-medium">An API integration.</b> Many merchants connect their own website or store to our
                checkout through the API, and a big share of our orders comes this way. These buyers never see a page from us
                before they pay, so the emails and onbold.net are how they find their order later. After payment, they get the
                same portal.
              </>,
              <>
                <b className="font-medium">A store plugin.</b> Merchants with an online store can add our checkout as a plugin.
                After checkout, their buyers land in the same portal.
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
            n={4}
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
            it, enter their email, and reach their orders. It matters most for buyers who paid on a merchant&rsquo;s own store through our API: they never saw an Onbold page, but our name is on their card statement.
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
            n={5}
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
      id: "map",
      nav: "Journey map",
      title: "One map of every path",
      body: (
        <>
          <Lead>
            With this many ways in, it&rsquo;s easy to lose track of what a buyer sees where. So I keep a journey map: one big
            board with every path, built from real screens.
          </Lead>
          <P>
            The board shows how a buyer reaches their order: from a product page, from an order the merchant created and
            shared, and from onbold.net. Each path goes through its real screens, with the success and failed results, and they
            all end in the same &ldquo;payment received&rdquo; email and the same portal. We also use it to check every piece of legal
            information: what the buyer must see, where, and in which situation, and which setting in the merchant&rsquo;s profile
            in our app turns it on. For the team it answers the everyday questions fast: what does this buyer see next, and which
            setting changes it?
          </P>
          <P>
            I built it in code, next to the product, so I update a screen the moment it changes. I use it to plan a feature, and
            developers, the CEO and operations use it to check a flow before it&rsquo;s built.
          </P>
          <Media
            src="/projects/buyer-journey/journey-board.webp"
            alt="A zoomed-out journey board: on the left, the product page flow for a single payment and a subscription on desktop and mobile; in the middle, checkout from an order created by the merchant; on the right, the onbold.net tracking flows. Lines from all of them meet at a payment received email and the Order Portal main screen at the bottom."
            frame="crop"
            width={1934}
            height={2399}
            caption="The journey map, zoomed out: product page, order link and onbold.net, all ending in the portal."
          />
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
            successful or failed payment. Each choice is saved in the link, so we can share one exact case with each other. I also document every situation for developers: notes right in the code, next to each rule, and
            written documents that explain what to show, when, and which setting controls it.
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
      id: "outcome",
      nav: "Outcome",
      title: "What changed",
      body: (
        <>
          <Stats
            items={[
              { value: "6 ways in", label: "product pages, order links, API, store plugin, emails, onbold.net. One portal." },
              { value: "5 tasks", label: "buyers now do alone: cancel, add or change a card, download invoices, receipts and the order summary" },
            ]}
          />
          <List
          items={[
            <>
              <b className="font-medium">Buyers help themselves.</b> They cancel subscriptions, change cards, and download
              invoices and receipts without writing to anyone.
            </>,
            <>
              <b className="font-medium">Merchants are out of the loop.</b> They no longer change cards and plans by hand, or
              pass buyer requests on to us.
            </>,
            <>
              <b className="font-medium">Less work for operations.</b> Requests used to reach our team a few times a week. Now we
              get far fewer.
            </>,
            <>
              <b className="font-medium">One place, many doors.</b> Product pages, order links, API integrations, store plugins,
              emails and onbold.net all lead to the same order page, for both Billpro and Onbold.
            </>,
          ]}
          />
        </>
      ),
    },
    {
      id: "next",
      nav: "What's next",
      title: "What's next",
      body: (
        <P>
          I&rsquo;m working on the next part of the portal right now: withdrawal, refunds and delivery. Buyers of Onbold orders
          will be able to return a purchase within the legal 14 days, ask for a refund, and check their delivery, all from the
          same page. On product pages, each option will get its own photos. I&rsquo;m building these the same way, as working
          screens in code, ready for our developers to connect.
        </P>
      ),
    },
  ],
}

export default study
