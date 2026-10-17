import type { Study } from "@/components/case-study/CaseStudy"
import Media from "@/components/case-study/Media"
import { Decision, H3, LinkButton, Lead, List, P, Pills, Split, Stats } from "@/components/case-study/blocks"

const SITE = "https://lytro.figma.site/"

// Flow recordings are 1040×900 at 2x: the phone on the right, the steps on the left.
const flow = { width: 2080, height: 1800 }

const study: Study = {
  eyebrow: "Lytro · Case study · Concept, paused before launch",
  headline: "A stablecoin app that feels like normal money",
  summary: (
    <>
      Lytro is a mobile app for people who live and earn across borders. It keeps money in stablecoins, but people see euros and
      dollars, not crypto. I researched payment apps on my own, then proposed and designed every flow: sign-up, the identity
      check, Home, six ways to add money, sending, converting and a virtual card. The app is a concept, paused before launch.
    </>
  ),
  meta: [
    { label: "My role", value: "Product design end to end: research, flows, UI, design system, landing page" },
    { label: "Team", value: "CEO, a partner crypto company, me" },
    { label: "Timeline", value: "Late 2025 – early 2026 · concept" },
    { label: "Platform", value: "Mobile app, plus a landing page in Figma Sites" },
  ],
  hero: {
    src: "/projects/lytro/hero.webp",
    alt: "Five Lytro screens: Home with balance and quick actions, Add funds with five payment methods, choosing a recipient, a pending transfer to a person without the app, and the virtual card.",
    width: 2400,
    height: 1080,
    caption: "Home, add funds, send, a transfer waiting to be claimed, and the virtual card.",
  },
  results: [
    <>More than 15 flows designed end to end, with every step and state, from the first screen to the success message.</>,
    <>A wide study of payment and crypto apps: about 290 screenshots. I also tested apps with real money.</>,
    <>A landing page I built in Figma Sites, my first step from drawing to building.</>,
  ],
  sections: [
    {
      id: "problem",
      nav: "Problem",
      title: "Money that moves with you, without the crypto part",
      body: (
        <>
          <Lead>
            Freelancers with clients abroad, digital nomads and creators paid by many platforms all have the same problem: getting
            paid and paying across countries is slow, and bank accounts get blocked or closed when life moves abroad.
          </Lead>
          <P>
            Stablecoins can help. A stablecoin like EURC keeps the value of the euro, and it moves in minutes, in any country. But
            crypto apps are hard for normal people: wallet addresses, networks, private keys and the fear of losing money.
          </P>
          <H3>The idea</H3>
          <P>
            Lytro was the CEO&rsquo;s idea, together with a partner crypto company: a stablecoin app that feels like any money app.
            You add money, send it, convert it and pay with a card. The stablecoin works in the background.
          </P>
          <H3>Constraints</H3>
          <List
            items={[
              <>
                <b className="font-medium">A regulated area.</b> Identity checks, legal documents and agreements with partners
                are required before real money can move.
              </>,
              <>
                <b className="font-medium">A new product.</b> No users yet and no research team, so the research was mine to do.
              </>,
              <>
                <b className="font-medium">Crypto must not feel risky.</b> Every screen has to show what happens to the money,
                what it costs and when it arrives.
              </>,
            ]}
          />
        </>
      ),
    },
    {
      id: "role",
      nav: "My role",
      title: "I shaped the product, not only the screens",
      body: (
        <>
          <P>
            The CEO explained how the stablecoin side should work and set the priorities. I researched how payment apps work,
            suggested the features and flows Lytro should have, and designed all of them. Then we chose together, with the partner
            team, which ones to focus on first.
          </P>
          <Split
            cols={[
              {
                title: "What I owned",
                items: [
                  "Research of payment, stablecoin and crypto apps",
                  "The feature list and every flow, which I proposed",
                  "All screens and states in Figma, about 130 frames",
                  "UI and visual style",
                  "The landing page, built in Figma Sites",
                ],
              },
              {
                title: "What the team did",
                items: [
                  "CEO: the idea, how the stablecoin side works, priorities",
                  "Partner crypto company: the crypto side of the product",
                  "Together: which flows and features to build first",
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
        <>
          <List
            items={[
              <>
                <b className="font-medium">Feels like normal money.</b> You can add, send and spend without knowing anything about
                crypto.
              </>,
              <>
                <b className="font-medium">Many ways in and out.</b> People across countries pay in different ways, so there are
                several ways to add money and to send it.
              </>,
              <>
                <b className="font-medium">No surprises.</b> The fee and the arrival time show before you confirm, and the status
                shows after.
              </>,
              <>
                <b className="font-medium">Ready to build.</b> Every step and state is designed, including empty, waiting and
                success screens.
              </>,
            ]}
          />
          <P>
            Lytro didn&rsquo;t launch. The project is paused because a crypto company needs a lot of legal documents and
            agreements before it can open, and that takes time.
          </P>
        </>
      ),
    },
    {
      id: "research",
      nav: "Research",
      title: "I learned payment apps from the inside",
      body: (
        <>
          <P>
            Before I design anything, I study how other products solve the same problem. For Lytro, I studied payment apps flow by
            flow: how they sign you up, check your identity, add money, send it and show what happened. I saved every step as a
            screenshot, so I could compare apps side by side.
          </P>
          <Stats
            items={[
              { value: "~290", label: "screenshots of other apps" },
              { value: "3", label: "apps studied in depth: Skrill, Wise, Revolut" },
              { value: "Many", label: "more apps: stablecoin apps and crypto wallets" },
              { value: "€", label: "real money tests in the apps" },
            ]}
          />
          <H3>Skrill: the closest competitor</H3>
          <P>
            Skrill works with crypto and stablecoins, not only bank money, so it was the closest to Lytro. I studied how it adds
            funds, sends money back to your own accounts and handles crypto. Its flows helped most with Lytro&rsquo;s add funds and
            send flows.
          </P>
          <Media
            src="/projects/lytro/research.webp"
            alt="Three screens from the Skrill app: starting the identity check, the home screen with Add, Transfer and Exchange, and a rewards screen."
            frame="crop"
            width={1600}
            height={1060}
            caption="A small part of my Skrill study: the identity check, home, and rewards."
          />
          <H3>Wise: clear cards and &ldquo;Send again&rdquo;</H3>
          <P>
            Two ideas came from Wise. Its card area is very clear: the main actions are right there, and you can copy your card
            details in one tap. Lytro&rsquo;s card works the same way. Wise also has &ldquo;Send again&rdquo; on the home screen. We
            repeat the same payments all the time, like rent every month, so one tap to repeat a payment saves real time. I brought
            it to Lytro&rsquo;s Home.
          </P>
          <H3>Revolut: every detail of moving money</H3>
          <P>
            Revolut has the most options of any payment app, so I used it to learn the details: sending and adding money, moving it
            between accounts, IBAN and card top-ups, and what sign-up and the identity check ask for.
          </P>
          <P>
            I also studied many other apps, including stablecoin apps and crypto wallets. In all of them I tested with real money,
            sending between my own accounts, to see every screen, including the waiting and success states. Wise, Skrill and
            Revolut are the ones that shaped the most decisions.
          </P>
        </>
      ),
    },
    {
      id: "decisions",
      nav: "Key decisions",
      title: "Five decisions that shaped the app",
      body: (
        <>
          <Decision
            n={1}
            title="Sign up with what you already use: email, phone or Telegram"
            options="A crypto wallet set-up with addresses and keys. Email only. Sign-up through a messenger only."
            chose="An account like any money app. You start with an email or a phone number and a 6-digit code, or continue with Telegram. Then a passcode, Face ID and notifications, and you add the second contact later in the flow. Log in works with the same options, plus Face ID."
            why="Many people who use crypto live in Telegram channels. They are the best place to promote Lytro, and a Telegram login meets them where they already are. Everyone else gets the familiar email or phone flow."
            tradeoff="Two flows (email first or phone first) mean more screens to design and maintain. I kept the steps the same in both, so it feels like one flow."
          >
            <Media
              src="/projects/lytro/signup.mp4"
              poster="/projects/lytro/signup-poster.webp"
              alt="Recording of the sign-up flow: email or phone with a Telegram option, 6-digit code, passcode, Face ID, notifications, the second contact, profile, and the empty Home."
              width={flow.width}
              height={flow.height}
              caption="Sign-up from the first screen to an empty Home, in about 20 seconds."
            />
            <Media
              src="/projects/lytro/login.webp"
              alt="Three log-in screens: email or phone with Face ID and Telegram options, the 6-digit code, and the Face ID prompt."
              frame="crop"
              width={1600}
              height={1140}
              caption="Log in: email or phone with a code, Telegram, or Face ID."
            />
          </Decision>

          <Decision
            n={2}
            title="Check identity after sign-up, not before"
            options="Ask for documents inside sign-up, before you see the app. Or let people in first and verify later."
            chose="You create the account and land on Home. A “Set up your account” card shows your progress and the next step: verify your identity, then add your first funds. The check itself is a short flow: pick a document, take a photo, take a selfie, done."
            why="People see the product before they hand over a passport. The rules still apply: you verify to use all features, and the card on Home keeps that step in view. The document and selfie check is done by an outside verification service, so I designed the screens around it: tips before each photo, and a clear result."
            tradeoff="Some people will look around and leave without verifying. The progress card on Home is there to bring them back."
          >
            <Media
              src="/projects/lytro/kyc.mp4"
              poster="/projects/lytro/kyc-poster.webp"
              alt="Recording of the identity check: the setup card on Home, what you will need, picking a document, photo tips, the selfie step, verification passed, and the next step to add funds."
              width={flow.width}
              height={flow.height}
              caption="From the card on Home to “Verification passed”. The photo steps are left out here."
            />
          </Decision>

          <Decision
            n={3}
            title="Home: everything important on one screen"
            options="A minimal wallet with only the balance. A feed of activity. A full home screen built around what people do most."
            chose="The balance with four quick actions on top: Send, Receive, Convert, Add funds. Then accounts in each currency, recent activity, Send again, a currency calculator, spending analytics, and Lytro features at the bottom. New users see a simpler Home with the setup card."
            why="People who live across countries check two things most: how much they have, and how much it is worth in another currency. So the balance, the currency accounts and the calculator are on Home. Send again comes from my Wise research, for payments you repeat every month."
            tradeoff="It’s a long screen. I ordered it by how often people need each part: actions first, features to discover last."
          >
            <Media
              src="/projects/lytro/home.mp4"
              poster="/projects/lytro/home-poster.webp"
              alt="Recording that scrolls through Home: balance and quick actions, EUR and USD accounts, recent activity, Send again, the currency calculator, analytics and Lytro features."
              width={flow.width}
              height={flow.height}
              caption="The full Home screen, section by section."
            />
            <Media
              src="/projects/lytro/home-states.webp"
              alt="Two Home screens side by side: a new account at €0.00 with the setup card, and an active account with activity."
              frame="crop"
              width={1600}
              height={1666}
              caption="Home for a new user (left) and for an active one (right)."
            />
          </Decision>

          <Decision
            n={4}
            title="Six ways to add money, in one simple list"
            options="One main method, like card only. A separate screen for each kind of method. One list for all of them."
            chose="One list: card, bank transfer through your bank app, manual bank transfer, crypto wallet and voucher, with a PaysafeCard voucher as its own flow. Each row shows the same two facts under the name: the fee and how fast the money arrives."
            why="Our users live in different countries and pay in different ways. Showing the fee and the speed on every row lets them compare before they choose. Several methods leave Lytro for a moment (your bank app, a card check, the PaysafeCard page), so I designed the moments you leave and come back too."
            tradeoff="More choice means more to read. Every row has the same structure, so the list is quick to scan."
          >
            <Media
              src="/projects/lytro/addfunds-card.mp4"
              poster="/projects/lytro/addfunds-card-poster.webp"
              alt="Recording of adding funds by card: Add funds on Home, the list of methods, entering 100 EUR, card details, approving in the bank app, returning to Lytro, and Funds added."
              width={flow.width}
              height={flow.height}
              caption="Adding funds with a card, including the step in the bank app and the way back."
            />
            <Media
              src="/projects/lytro/voucher.mp4"
              poster="/projects/lytro/voucher-poster.webp"
              alt="Recording of adding funds with a voucher: choose Voucher, enter the 16-digit PIN, review the 5 EUR fee, redeeming, and Funds added."
              width={flow.width}
              height={flow.height}
              caption="A voucher: the fee is shown before you confirm, so you know you get 95 EUR, not 100."
            />
            <Media
              src="/projects/lytro/add-methods.webp"
              alt="Four add funds screens: choosing your bank, manual bank transfer details with copy buttons, a crypto wallet QR code, and the PaysafeCard amount screen."
              frame="crop"
              width={2000}
              height={1097}
              caption="The other ways in: your bank app, a manual transfer, a crypto wallet and PaysafeCard."
            />
          </Decision>

          <Decision
            n={5}
            title="Send to anyone, even if they don’t have Lytro"
            options="Send only to other Lytro users. Send only to bank accounts. Send to a phone, an email or a Telegram name, and let the money wait for the person."
            chose="Two paths. “Myself” sends to your own bank account (inside or outside Europe) or your crypto wallet. “Someone else” sends to a phone number, an email or a Telegram name. If the person has no account yet, the money waits for them. They get a link by SMS or Telegram, and you see the status and the date when the money comes back if nobody claims it."
            why="Not all friends and clients have Lytro. Waiting money with a claim link means you can still pay them, and every payment also invites a new user. For crypto, the confirm screen warns that crypto transfers can’t be reversed."
            tradeoff="Money that waits needs clear rules: who sees what, and what happens if nobody claims it. I designed the status screen to answer those questions."
          >
            <Media
              src="/projects/lytro/send-someone.mp4"
              poster="/projects/lytro/send-someone-poster.webp"
              alt="Recording of sending to a phone number: Send on Home, Someone else, Phone or email, adding the number, entering the amount, sent, and the status showing the money waits for the recipient."
              width={flow.width}
              height={flow.height}
              caption="Sending to a phone number. The person gets a link to claim the money."
            />
            <Media
              src="/projects/lytro/send-myself.mp4"
              poster="/projects/lytro/send-myself-poster.webp"
              alt="Recording of sending to your own bank account: Myself, bank or crypto wallet, bank details inside Europe, amount and exchange rate, confirm and send with every detail, sent, and status."
              width={flow.width}
              height={flow.height}
              caption="Sending to your own bank account. The confirm screen shows every detail before the money moves."
            />
            <div className="my-10 grid gap-6">
              <Media
                src="/projects/lytro/send-telegram.webp"
                alt="Three screens of sending to a Telegram name: adding the username, sent with a share link, and the pending status."
                frame="crop"
                width={1600}
                height={1140}
                caption="Telegram: add a username, share the link, follow the status."
              />
              <Media
                src="/projects/lytro/send-crypto.webp"
                alt="Three screens of sending to a crypto wallet: the amount in EURC, the confirm screen with a warning that crypto transfers can't be reversed, and the status."
                frame="crop"
                width={1600}
                height={1140}
                caption="A crypto wallet: a clear warning before you confirm."
              />
            </div>
          </Decision>

          <H3>Two more pieces: convert and the virtual card</H3>
          <P>
            Convert moves money between currencies, with the rate and the fee shown before you confirm. The virtual card follows
            what I liked in Wise: the main actions on top (card details and freeze card), and every card detail can be copied in
            one tap.
          </P>
          <Media
            src="/projects/lytro/card.webp"
            alt="Three virtual card screens: getting the card, the card with Card details and Freeze card actions, and the card details sheet with copy buttons."
            frame="crop"
            width={1600}
            height={1140}
            caption="The virtual card: get it, manage it, copy its details."
          />
          <div className="mx-auto max-w-75">
            <Media
              src="/projects/lytro/convert.webp"
              alt="The Convert screen: 1,200.00 EUR to 1,388.13 USD, with the rate and a 4.60 EUR fee."
              frame="crop"
              width={900}
              height={1740}
              caption="Convert: the rate and the fee before you tap Review."
            />
          </div>
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
            I built a design system for Lytro alongside the screens: buttons, inputs, dropdowns, radio buttons, toggles, icons, the header, the navigation bar and the numeric keyboard used on every amount
            screen.
          </P>
          <P>
            Buttons and inputs have every state: normal, pressed, focused, loading, disabled and error. That made the flows faster to
            design and kept them consistent, from sign-up to the last success screen.
          </P>
          <Media
            src="/projects/lytro/ds.webp"
            alt="Design system: buttons in five states (active, pressed, focused, loading, disabled) and inputs in five states (default, typing, filled, disabled, invalid)."
            width={1800}
            height={1185}
            caption="Buttons and inputs, with all their states."
          />
        </>
      ),
    },
    {
      id: "landing",
      nav: "Landing page",
      title: "A landing page that explains Lytro in one scroll",
      body: (
        <>
          <P>
            I also designed and built the landing page, in Figma Sites. It tells the story in a few steps: &ldquo;Money that moves
            with you&rdquo;, the problem, who Lytro is for, what Lytro is not (not a bank, not DeFi, not a loophole), and the main
            features.
          </P>
          <P>
            My favourite part is &ldquo;Everything you need to manage money globally&rdquo;: a grid of feature cards, with animated
            coins for currencies and real screens from the app for vouchers, adding funds and the crypto wallet.
          </P>
          <Media
            src="/projects/lytro/landing.mp4"
            poster="/projects/lytro/landing-poster.webp"
            alt="Recording of the Lytro landing page: the hero 'Money that moves with you', then a scroll to the 'Everything you need to manage money globally' section with animated coins."
            width={1440}
            height={900}
            caption="The top of the page, then my favourite section."
          />
          <H3>My first steps from drawing to building</H3>
          <P>
            Lytro was fully designed in Figma, but this is also where I started using Figma Sites and Figma Make. Building the page
            myself, instead of handing over a mockup, was a small first step toward how I work today: designing and building in code
            with AI.
          </P>
          <Pills items={["Figma", "Figma prototyping", "Figma Sites", "Figma Make", "Design system"]} />
          <div className="mt-8 flex flex-wrap gap-3">
            <LinkButton href={SITE}>Lytro landing page</LinkButton>
          </div>
        </>
      ),
    },
    {
      id: "outcome",
      nav: "Outcome",
      title: "Where it stands",
      body: (
        <>
          <P>
            Lytro is paused before launch. A real stablecoin app needs a lot of legal documents and agreements, so the launch is on
            hold. The design work is complete:
          </P>
          <List
            items={[
              <>
                <b className="font-medium">Every main flow,</b> from sign-up and the identity check to adding, sending and
                converting money, and the virtual card.
              </>,
              <>
                <b className="font-medium">Every state,</b> including empty Home, waiting, pending and success screens.
              </>,
              <>
                <b className="font-medium">A design system</b> behind every screen.
              </>,
              <>
                <b className="font-medium">A live landing page</b> that explains the product.
              </>,
              <>
                <b className="font-medium">The research</b> behind it: about 290 screenshots of other apps.
              </>,
            ]}
          />
        </>
      ),
    },
  ],
}

export default study
