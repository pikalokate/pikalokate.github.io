import type { Study } from "@/components/case-study/CaseStudy"
import Media from "@/components/case-study/Media"
import { Decision, H3, LinkButton, Lead, List, P, Pills, Quote, Split, Stats } from "@/components/case-study/blocks"

const REPO = "https://github.com/pikalokate/onbold-ai"

const study: Study = {
  eyebrow: "Onbold AI · Case study · Merchant acquisition",
  headline: "A free check that shows merchants what a payment provider would flag",
  summary: (
    <>
      Onbold needed a way to bring merchants in from ads. Instead of a plain landing page, we gave them something useful first. A
      merchant pastes their store URL and, in seconds, sees their website the way a payment provider&rsquo;s underwriter would: a
      readiness score, the risks, and how to fix each one. I designed it and built the whole experience in code with AI. It became
      the interface of the live product.
    </>
  ),
  meta: [
    { label: "My role", value: "Product design and the coded prototype, end to end" },
    { label: "Team", value: "CEO, front-end developer, me" },
    { label: "Timeline", value: "First version in about 2 weeks · live since June 2026" },
    { label: "Platform", value: "Web, desktop and mobile · also built into onbold.com" },
  ],
  hero: {
    src: "/projects/onbold-ai/flow.mp4",
    poster: "/projects/onbold-ai/report.webp",
    alt: "Screen recording: a merchant enters a store URL, watches the scan, and the report fills in. One answer in the chat moves the score up.",
    width: 1680,
    height: 1050,
    caption: "The full flow in 35 seconds: paste a URL, watch the scan, then chat while the report updates.",
  },
  results: [
    <>Live at onbold.ai since June 2026. Merchants apply through it.</>,
    <>My prototype was the source of truth. The live product&rsquo;s interface was ported from it, frame for frame.</>,
    <>The first working version took about two weeks, with no Figma. The repository was the design file.</>,
  ],
  sections: [
    {
      id: "problem",
      nav: "Problem",
      title: "Ads need a reason to click, and merchants need help",
      body: (
        <>
          <Lead>
            Onbold is our new Merchant of Record brand. We were about to start ads, and we needed a page that brings merchants in
            and gets them to apply.
          </Lead>
          <P>
            A normal landing page asks for trust before it gives anything back. But the merchants we want are often the ones who
            were just declined, by Stripe or by a bank, and they don&rsquo;t know why. They search Google and Reddit for &ldquo;how
            to get a merchant account&rdquo; or &ldquo;declined by Stripe&rdquo;.
          </P>
          <P>
            Before approving a merchant, a payment provider looks at their website. It checks legal pages, company details,
            refund and shipping policies, and claims like &ldquo;10,000 happy customers&rdquo;. Merchants never see this check.
            They only see the result.
          </P>
          <H3>The idea</H3>
          <P>
            The first idea came from the CEO: a readiness check for merchants. Instead of a plain page, give them a free, useful
            tool that shows their website through an underwriter&rsquo;s eyes. Then Onbold can help, because we already
            understand the business.
          </P>
          <P>
            We scoped the details together, and many of the ideas in the product were mine: a &ldquo;How to fix&rdquo; panel
            for every risk, the names of the report sections, how the red flags are shown, the grey &ldquo;what we
            found&rdquo; area, and the live log of scan steps while the site is being read.
          </P>
          <H3>Constraints</H3>
          <List
            items={[
              <>
                <b className="font-medium">A regulated area.</b> We can&rsquo;t promise approval. Every word on the report has to
                be true for a risk team.
              </>,
              <>
                <b className="font-medium">A new brand, with ads starting soon.</b> The first version had to be clear and
                trustworthy from day one.
              </>,
              <>
                <b className="font-medium">A small team.</b> One designer, and one front-end developer for the production app.
              </>,
            ]}
          />
        </>
      ),
    },
    {
      id: "role",
      nav: "My role",
      title: "I designed it and built it in code. The developer made it real",
      body: (
        <>
          <P>
            The CEO brought the first idea, and we scoped it together. My focus was making the tool truly useful, so a merchant
            feels that we understand their business and wants to keep going with us.
          </P>
          <Split
            cols={[
              {
                title: "What I owned",
                items: [
                  "The product flow, from landing page to the last message",
                  "The live report: score, facts, risks, findings and fixes",
                  "Copy and tone for every risk and every state",
                  "The idea to add “How to fix” to every risk",
                  "Names of the report sections, the grey “what we found” area and the scan log",
                  "Motion, the score animations and the scan sequence",
                  "Mobile, rebuilt as its own experience, not a squeezed desktop",
                  "A working prototype in code: 89 commits, all mine",
                ],
              },
              {
                title: "What the team did",
                items: [
                  "CEO: the first idea, priorities and feedback. We scoped the features together",
                  "Front-end developer: moved my prototype into the production app",
                  "…and built the real logic: reading the site, the AI, the rules",
                  "…plus the CRM, the emails and the team’s admin side",
                ],
              },
            ]}
          />
          <P>
            I ship front-end code: screens, components and motion. On this project the developer connected the data and the logic
            behind them.
          </P>
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
                <b className="font-medium">Give value before asking.</b> The merchant gets a real read of their business before we
                ask for a name or an email.
              </>,
              <>
                <b className="font-medium">Show that we understand them, fast.</b> The first report appears within about 15
                seconds of pasting a URL.
              </>,
              <>
                <b className="font-medium">Turn a visit into an application.</b> The end of the flow collects contact details,
                and the case goes to our team.
              </>,
              <>
                <b className="font-medium">Easy to share.</b> One link that we, or anyone, can drop into a Reddit thread where a
                merchant asks why they were declined.
              </>,
            ]}
          />
          <P>
            We measure it by two numbers in the live product: how many analyses start, and how many end with contact details.
          </P>
        </>
      ),
    },
    {
      id: "insights",
      nav: "Insights",
      title: "What shaped the design",
      body: (
        <>
          <H3>A decline feels personal</H3>
          <P>
            Merchants who were declined feel judged. Red warnings and &ldquo;3 issues found&rdquo; read like a failed exam. So I
            set one rule for the whole report:
          </P>
          <Quote>Show a merchant exactly what a payment provider sees, in a way that leaves them feeling equipped, not accused.</Quote>
          <H3>Underwriters check a short, known list</H3>
          <P>
            Most of what an underwriter looks at is on the public website: legal pages, company details, contact options, refund
            and shipping policies, and marketing claims. That meant we could read it automatically and explain each point in
            plain words.
          </P>
          <H3>Waiting is where trust is lost</H3>
          <P>
            Reading a site takes time. A spinner for ten seconds feels broken, and the merchant leaves before the report appears.
            I could only test how that wait feels by building it, not by drawing it.
          </P>
        </>
      ),
    },
    {
      id: "decisions",
      nav: "Key decisions",
      title: "Five decisions that made it work",
      body: (
        <>
          <Decision
            n={1}
            title="Chat and report side by side, so every answer changes the report"
            options="A one-time audit page. A chat only. The report stacked under the chat as one long scroll. Tabs to switch between them."
            chose="A fixed split: chat on the left, the report on the right. Each answer patches the report live. New items glow for a moment, solved items are struck through, and the report scrolls to what changed."
            why="Talking changes the report. If the report is hidden behind a tab or below the chat, the merchant never sees cause and effect, and the chat feels like a form."
            tradeoff="The split needs a wide screen. Mobile had to work differently (decision 5)."
          >
            <Media
              src="/projects/onbold-ai/report.webp"
              alt="Desktop analysis screen: chat on the left, the report on the right with the readiness score and six fact cards."
              width={2400}
              height={1500}
              caption="The analysis screen. The first message explains what was found and asks one question. The report on the right shows the business, markets, payment methods, legal pages and contact details."
            />
          </Decision>

          <Decision
            n={2}
            title="Show the reasoning, not a spinner"
            options="A spinner with “Analysing…”. A progress bar only. Showing the steps."
            chose="15 named steps in 4 groups: scanning the website, identifying the business model, checking compliance signals, estimating risk. Finished groups fold into one grey line, and step times vary slightly, so it reads like real work."
            why="Reading a website takes time, and we can’t let the merchant leave. The steps show that something real is happening and keep them a little entertained while they wait. The wait also becomes the first proof that we understand payments. The merchant sees words like “Classifying MCC category” and “Verifying refund & shipping policy”, and knows exactly what is being checked."
            tradeoff="More text on screen during the wait. I kept each step to a few words and folded finished groups away."
          >
            <Media
              src="/projects/onbold-ai/scanning.webp"
              alt="The scan in progress: three of four groups of steps shown, with a progress bar at 67%."
              width={2400}
              height={1500}
              caption="Never show a spinner where you can show reasoning."
            />
          </Decision>

          <Decision
            n={3}
            title="Risks a payment provider would flag, each with a way to fix it"
            options="A red-flags list only, which was the first plan. “Detected risks” with red badges. A pass/fail checklist."
            chose={
              <>
                Adding &ldquo;How to fix&rdquo; was my idea. At first we planned only a red-flags area. I suggested pairing every
                risk with a &ldquo;How to fix&rdquo; panel with concrete steps, so the report is useful, not scary. The section is
                called &ldquo;Risks a payment provider would flag&rdquo;, severity uses soft rose, amber and yellow pills, and
                anything we couldn&rsquo;t find shows in grey, never red.
              </>
            }
            why="The same seven findings can make a merchant feel accused or equipped. Red says “you failed”; grey says “not found yet”. And we never promise approval: we explain what to fix, and that Onbold will guide them through it."
            tradeoff="Soft colours can make a high risk feel less urgent. I kept the severity label on every row and sorted by severity, high first."
          >
            <Media
              src="/projects/onbold-ai/risks.webp"
              alt="Risk list: a High risk 'Missing company details in footer' with its 'How to fix' panel open, and two Medium risks below."
              frame="crop"
              width={1968}
              height={1260}
              caption="Each risk says what we saw, why it matters to an underwriter, and what to change."
            />
          </Decision>

          <Decision
            n={4}
            title="A score you can feel going up"
            options="No score. A bare percentage. A score with named levels that moves as you talk."
            chose="A Commerce Readiness Score with four named levels: Work needed, Good Foundation, Strong and High. It never starts at zero, it rises with each answer, and crossing into a new level plays a small sparkle."
            why="On its own, 62% reads like a bad grade. “Good Foundation” reads like a starting point. And progress you can feel is the best reason to answer one more question."
            tradeoff="A score can sound like a promise. The note under each level talks about what is in place, never about approval."
          >
            <Media
              src="/projects/onbold-ai/score.webp"
              alt="Readiness score card at 68%, level Strong, with four level bars."
              frame="crop"
              width={1968}
              height={400}
              caption="After one answer the score moves from Good Foundation to Strong."
            />
          </Decision>

          <Decision
            n={5}
            title="On mobile, the report becomes a file you open"
            options="Shrink the desktop split. Stack the report under the chat. Put the report behind a tab."
            chose="I rebuilt the logic for mobile, not just the layout. The chat is the main screen. When an answer changes the report, a report card appears in the conversation, with a line under it that says what changed, like “Your readiness score went up” or “1 flag resolved · New insight added”. Tap it, the full report opens, and one tap brings you back to the chat."
            why="On desktop, motion shows what changed, because the report is always in view. On a phone there is no room for that, so the words have to say it. The merchant decides when to look, and never loses their place in the conversation."
            tradeoff="The report is one tap away instead of always visible. The change line under each card makes up for it: you know what changed before you open it."
          >
            <div className="my-10 grid gap-6 sm:grid-cols-2">
              <Media
                src="/projects/onbold-ai/mobile.mp4"
                poster="/projects/onbold-ai/mobile-chat.webp"
                alt="Mobile recording: after an answer a report card appears with a line saying what changed; the report opens full screen and the user goes back to the chat. A second answer adds a card saying 1 flag resolved."
                frame="phone"
                width={780}
                height={1688}
              />
              <Media
                src="/projects/onbold-ai/mobile-chat.webp"
                alt="Mobile chat with an Onbold report card and the line '1 flag resolved · New insight added' under it."
                frame="phone"
                width={780}
                height={1688}
              />
            </div>
            <P>Answer, see what changed, open the report, come back. The report works like a document that keeps updating.</P>
          </Decision>

          <H3>One more detail: the end is not a dead end</H3>
          <P>
            After the questions, the chat collects name, email, company
            and country. Then it confirms the case is ready for review and offers three articles to read while the merchant
            waits. They also get an email from Onbold with the findings, and our team picks up the case.
          </P>
          <Media
            src="/projects/onbold-ai/finish.mp4"
            poster="/projects/onbold-ai/finish-poster.webp"
            alt="Recording of the end of the flow: contact questions, a confirmation message, blog cards, and the score reaching 100%."
            width={1680}
            height={1050}
            caption="Contact details, confirmation and reading while you wait. The score and the steps reach the end together."
          />
        </>
      ),
    },
    {
      id: "code",
      nav: "Built in code",
      title: "Built in code with AI. The repository was the design file",
      body: (
        <>
          <P>
            I didn&rsquo;t design this in Figma. I built it in Visual Studio Code with AI as my pair programmer: React, Tailwind and
            Framer Motion. Static mockups can&rsquo;t tell you whether a ten-second wait feels considered or broken, or whether a
            score animation feels earned. A working prototype can.
          </P>
          <Stats
            items={[
              { value: "89", label: "commits, all mine" },
              { value: "~2", label: "weeks to the first working version, then steady improvements" },
              { value: "0", label: "Figma files" },
              { value: "2", label: "surfaces: landing page and analysis" },
            ]}
          />
          <H3>From prototype to product</H3>
          <P>
            There was no handoff document. The developer worked from my code. The first commit of the live product says it was
            ported from my prototype &ldquo;with visual parity&rdquo;, and later specs name my screens as the &ldquo;source of
            truth&rdquo;, with motion matched frame for frame. The copy, layout, steps, fact cards, animations, mobile card and blog
            cards all came across.
          </P>
          <P>
            Even the data shape carried over. My prototype used a fixed structure for facts, risks and findings, and the developer
            mapped the real data into that same structure.
          </P>
          <H3>What the live product adds</H3>
          <P>In simple terms, the production version:</P>
          <List
            items={[
              "Reads up to seven pages of the store: home, terms, privacy, refunds, shipping, about and contact.",
              "Runs simple rules first, so real findings appear within a second.",
              "Uses AI (Claude) to understand the business and write clear text for each risk.",
              "Lets fixed rules, not the AI, decide the readiness status. Facts from the website win over AI guesses.",
              "Sends the lead to our CRM, emails the merchant a summary and alerts the team.",
            ]}
          />
          <Pills items={["React 19", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion", "Three.js shaders", "Claude as pair programmer"]} />
          <div className="mt-8 flex flex-wrap gap-3">
            <LinkButton href={REPO}>Prototype on GitHub</LinkButton>
            <LinkButton href="https://onbold.ai">onbold.ai</LinkButton>
          </div>
        </>
      ),
    },
    {
      id: "website",
      nav: "onbold.com",
      title: "The check also lives on onbold.com, a website I built in code",
      body: (
        <>
          <Lead>
            The check didn&rsquo;t stay on one landing page. It&rsquo;s also built into onbold.com, our main website, which I
            built in code with AI: more than 30 pages.
          </Lead>
          <H3>One field, everywhere a merchant might start</H3>
          <P>
            The home page and many other pages open with the same &ldquo;enter your website&rdquo; field as onbold.ai, with the
            same animated placeholder and orange avatar. The dark band at the bottom of the pages has it too. A merchant types
            their store URL, presses Start, and goes straight into the analysis. So whatever page they land on, the first step is
            the useful one.
          </P>
          <Media
            src="/projects/onbold-ai/site-hero.webp"
            alt="The top of the onbold.com home page: the headline 'Global Commerce Starts Here', a short line about Onbold, and the website field with a Start button, above a coded dashboard preview."
            width={2880}
            height={1300}
            caption="onbold.com home: the readiness check is the first thing on the page."
          />
          <H3>A full website, built fast</H3>
          <P>
            Onbold was a new brand and needed a real website quickly: pages for sellers, buyers, pricing, the product, five
            industries, the company, trust and the legal side. There was no time for a long Figma phase, so I built it straight
            in code with AI. I committed every page: the header and footer, the home page, the seller and buyer pages, the
            product pages, the industry pages, pricing, company, contact and the legal pages.
          </P>
          <P>
            I wanted the site to feel alive, not like a long document. Every page opens with its own top section and its own
            motion: a soft moving colour wash, an aurora behind the prices, a headline that types itself, shapes that drift, a
            moving line of words. Further down, the pages show the product with small UI previews I built in code, like the
            dashboard on the home page.
          </P>
          <Media
            src="/projects/onbold-ai/site-tour.mp4"
            poster="/projects/onbold-ai/site-tour-poster.webp"
            alt="Recording: the top sections of seven onbold.com pages, one after another (home, sellers, pricing, how Onbold works, commerce, partners, buyers), each with its own entrance animation."
            width={1440}
            height={900}
            caption="The tops of seven onbold.com pages. Each one has its own animation."
          />
          <H3>How I worked fast: ready animations, adapted with AI</H3>
          <P>
            For motion I used 21st.dev, a library of ready UI components and animations. Each one comes with a ready prompt for
            an AI coding tool. I picked the effects I liked there, for example a shader background from its Shader Builder, and
            used AI to move them into our site: from React to Vue, in our brand colours, and light enough to load fast. So I
            didn&rsquo;t write every animation from zero, and I could spend my time on the pages and the story instead.
          </P>
          <P>
            I built the pages, the design system behind them (colours, type, motion and section blocks) and the link-preview
            images. A front-end developer set up the hosting, the checks that run on every change, SEO, analytics and
            accessibility. The text was written and approved with the team before I built the pages.
          </P>
          <Stats
            items={[
              { value: "30+", label: "pages I built in code" },
              { value: "5", label: "industry pages, from SaaS to dropshipping" },
              { value: "1", label: "field that starts the check on every page" },
              { value: "21st.dev", label: "ready animations, adapted with AI" },
            ]}
          />
          <Pills items={["Nuxt", "Vue", "Tailwind CSS", "Storybook", "21st.dev", "Claude as pair programmer"]} />
          <div className="mt-8 flex flex-wrap gap-3">
            <LinkButton href="https://onbold.com">onbold.com</LinkButton>
          </div>
        </>
      ),
    },
    {
      id: "outcome",
      nav: "Outcome",
      title: "What shipped",
      body: (
        <>
          <List
            items={[
              <>
                <b className="font-medium">Live since June 2026</b>
                 at onbold.ai, built as the landing page for our ads.
              </>,
              <>
                <b className="font-medium">Built into onbold.com.</b> The same check starts from the home page and many other
                pages of our main website, which I built in code.
              </>,
              <>
                <b className="font-medium">Merchants apply through it.</b> Every application lands in one internal platform where the team reviews the case and the findings.
              </>,
              <>
                <b className="font-medium">One design, two worlds.</b> The same flow helps the merchant and qualifies the lead for
                us, with no extra form.
              </>,
              <>
                <b className="font-medium">It keeps growing.</b> The same flow is now becoming Onbold&rsquo;s onboarding, where
                merchants go on to apply in full.
              </>,
            ]}
          />
        </>
      ),
    },
  ],
}

export default study
