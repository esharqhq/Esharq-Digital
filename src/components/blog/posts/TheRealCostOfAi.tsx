import type { Language } from "@/lib/dictionaries";
import { BlogHero } from "../BlogHero";
import { SectionLabel } from "../SectionLabel";
import { JourneyStep } from "../JourneyStep";
import { BigNumbers } from "../BigNumbers";
import { Callout } from "../Callout";
import { ToolGrid } from "../ToolGrid";
import { BarChart } from "../BarChart";
import { Timeline } from "../Timeline";
import { ComparisonTable } from "../ComparisonTable";
import { Mirror } from "../Mirror";
import { PositionGrid } from "../PositionGrid";
import { BlogProse, BlogStrong, BlogEm } from "../BlogProse";
import { BlogAuditForm } from "../BlogAuditForm";
import { getDictionary } from "@/lib/getDictionary";

export default async function TheRealCostOfAi({ lang }: { lang: Language }) {
  const dict = await getDictionary(lang);
  return (
    <article className="pb-20">
      <BlogHero
        eyebrow="The honest truth about AI"
        title={
          <>
            You have the tools.
            <br />
            <span className="text-[#27DFE9] not-italic">
              That&apos;s not the problem.
            </span>
          </>
        }
        subtitle="Every week we talk to business owners who are paying for ChatGPT, Canva, Midjourney, and three other tools — and still don't have consistent content, a working website, or measurable growth. The tools aren't broken. Something else is."
        meta="Scroll to see the real numbers — then decide"
      />

      {/* Section 1: Journey */}
      <section className="py-16 md:py-20 border-b border-white/10">
        <SectionLabel>What actually happens when you go DIY</SectionLabel>
        <BlogProse>
          Here&apos;s the scenario. You&apos;re a business owner. You&apos;ve
          heard AI can do everything. You decide to{" "}
          <BlogStrong>build your digital presence yourself using AI tools</BlogStrong>.
          Reasonable. Let&apos;s follow that decision through three months.
        </BlogProse>

        <div className="mt-10">
          <JourneyStep
            label="MONTH 01"
            title="You decide to build a website with AI"
            desc="You sign up for Lovable or Bolt.new. The demo looks incredible. You start prompting. The first version comes out half-working. You iterate. And iterate. Each prompt burns credits."
            costs={[
              { tone: "money", label: "Lovable Pro: $25/mo — 100 credits" },
              { tone: "money", label: "Credit overrun: +$40–80 avg" },
              { tone: "money", label: "ChatGPT Plus for copy: $20/mo" },
              { tone: "money", label: "Canva Pro for assets: $15/mo" },
              { tone: "time", label: "~35–60 hrs of your time" },
              { tone: "energy", label: "Learning curve: steep" },
            ]}
            totals={[
              { label: "Tools", value: "$100–140", danger: true },
              { label: "Time cost @ $60/hr", value: "$2,100–3,600", danger: true },
              { label: "Iterations before usable result", value: "30–80 prompts", danger: true },
            ]}
          />

          <JourneyStep
            label="MONTH 02"
            title="You set up a content pipeline"
            desc="Website's live (sort of). Now you need content. ChatGPT for captions, Midjourney for visuals, Canva for formatting, Buffer for scheduling. Four tabs open. Four workflows that don't talk to each other."
            costs={[
              { tone: "money", label: "Midjourney Standard: $30/mo" },
              { tone: "money", label: "ChatGPT Plus: $20/mo" },
              { tone: "money", label: "Canva Pro: $15/mo" },
              { tone: "money", label: "Buffer/Later: $15–18/mo" },
              { tone: "time", label: "~3–5 hrs/week = 12–20 hrs/mo" },
              { tone: "energy", label: "Constant context-switching" },
            ]}
            totals={[
              { label: "Tools", value: "$80–83", danger: true },
              { label: "Time cost", value: "$720–1,200", danger: true },
              { label: "Output quality", value: "inconsistent", danger: true },
            ]}
          />

          <JourneyStep
            label="MONTH 03"
            title="You try video content — and discover Runway"
            desc="You want video reels. Everyone says Runway. You sign up. The Standard plan gives you 625 credits. One 10-second Gen-4 clip = ~120 credits. You get 5 clips — and a non-expert needs 3–5 attempts per usable clip. Your credits are gone in week one."
            costs={[
              { tone: "money", label: "Runway Pro: $28/mo (2,250 credits)" },
              { tone: "money", label: "Credits per usable 10s clip: ~360–600" },
              { tone: "money", label: "Real output: 4–6 quality clips/mo" },
              { tone: "money", label: "ElevenLabs voiceover: $22/mo" },
              { tone: "time", label: "~2 hrs per usable clip" },
              { tone: "energy", label: "High frustration, low yield" },
            ]}
            totals={[
              { label: "Tools", value: "$50–80+", danger: true },
              { label: "Time cost", value: "$480–960", danger: true },
              { label: "Expected usable clips", value: "4–6", danger: true },
            ]}
          />
        </div>

        <BigNumbers
          items={[
            {
              value: "$4,900",
              label: (
                <>
                  Real 3-month cost
                  <br />
                  (tools + time)
                </>
              ),
            },
            {
              value: "120+",
              label: (
                <>
                  Hours spent on tasks
                  <br />
                  that should be automated
                </>
              ),
            },
            {
              value: "$0",
              accent: true,
              label: (
                <>
                  Revenue generated
                  <br />
                  from the effort above
                </>
              ),
            },
          ]}
        />

        <Callout>
          The tools are real. The results are not the problem. The problem is
          that using AI tools and running an AI-powered system are completely
          different skills — and one of them takes months to learn.
        </Callout>
      </section>

      {/* Section 2: Tool credit truth */}
      <section className="py-16 md:py-20 border-b border-white/10">
        <SectionLabel>What the credits actually buy you</SectionLabel>
        <BlogProse>
          Every tool has a headline price. Here&apos;s what you actually get for
          that price — and what a non-expert user realistically produces per
          month.
        </BlogProse>

        <ToolGrid
          items={[
            {
              name: "Runway Pro — $28/mo",
              price: "2,250 credits",
              reality: (
                <>
                  One 10s Gen-4 clip = ~120 credits
                  <br />
                  Non-expert needs 3–5 tries per clip
                  <br />
                  <span className="text-red-400">
                    Real output: 4–6 usable clips/month
                  </span>
                </>
              ),
            },
            {
              name: "Midjourney Standard — $30/mo",
              price: "~200 fast hrs",
              reality: (
                <>
                  Non-expert needs 8–15 generations per on-brand image
                  <br />
                  Prompt engineering gap is significant
                  <br />
                  <span className="text-red-400">
                    Real output: ~40–60 usable images/month
                  </span>
                </>
              ),
            },
            {
              name: "Lovable Pro — $25/mo",
              price: "100 credits",
              reality: (
                <>
                  Each meaningful build interaction = 1–3 credits
                  <br />
                  A basic 5-page site needs 40–80 interactions
                  <br />
                  <span className="text-red-400">
                    Real cost to finish a site: $70–150+
                  </span>
                </>
              ),
            },
            {
              name: "ElevenLabs Creator — $22/mo",
              price: "100,000 chars",
              reality: (
                <>
                  1 min voiceover ≈ 900 chars
                  <br />
                  30 reels/month × 30s voice = ~45,000 chars
                  <br />
                  <span className="text-[#27DFE9]">
                    Plan covers it — this one is fine
                  </span>
                </>
              ),
            },
            {
              name: "ChatGPT Plus — $20/mo",
              price: "Soft limits apply",
              reality: (
                <>
                  Heavy use hits GPT-4o rate limits within days
                  <br />
                  Switches to slower model automatically
                  <br />
                  <span className="text-red-400">
                    Power users regularly need API top-ups
                  </span>
                </>
              ),
            },
            {
              name: "Cursor Pro — $20/mo",
              price: "~500 requests",
              reality: (
                <>
                  Premium model choice matters: Claude Sonnet = 225 req, Gemini
                  = 550 req for same $20
                  <br />
                  <span className="text-red-400">
                    Most users don&apos;t know this until it&apos;s gone
                  </span>
                </>
              ),
            },
          ]}
        />
      </section>

      {/* Section 3: Time cost */}
      <section className="py-16 md:py-20 border-b border-white/10">
        <SectionLabel>The real cost: your time</SectionLabel>
        <BlogProse>
          Money is the visible cost. Time is the one that actually kills you.
          Here&apos;s how long each task realistically takes a non-expert using
          AI tools — before they become efficient.
        </BlogProse>

        <BarChart
          rows={[
            { label: "1 social post", value: "45–90 min", width: 38, color: "red", caption: "prompt → fix → format" },
            { label: "20 posts/month", value: "15–25 hrs", width: 75, color: "red", caption: "full content month" },
            { label: "1 video reel", value: "2–4 hrs", width: 55, color: "amber", caption: "gen → iterate → edit" },
            { label: "5-page website", value: "35–60 hrs", width: 92, color: "red", caption: "build → debug → refine" },
            { label: "Learning curve", value: "2–3 months", width: 65, color: "amber", caption: "before consistent output" },
            { label: "Esharq equiv.", value: "<30 min/wk", width: 10, color: "green", caption: "your oversight only" },
          ]}
        />

        <Callout>
          A founder&apos;s time is worth $50–75/hour minimum. Every hour spent
          prompting, iterating, and fixing AI output is an hour not spent
          selling, building relationships, or running the business.
        </Callout>
      </section>

      {/* Section 4: Timeline */}
      <section className="py-16 md:py-20 border-b border-white/10">
        <SectionLabel>The DIY timeline — honestly</SectionLabel>
        <Timeline
          items={[
            {
              when: "Week 1–2",
              title: "Excitement phase",
              desc: "Tools are set up. First outputs look promising. You're convinced this will work.",
              tags: [
                { label: "$150–200 spent on subs" },
                { label: "No output yet" },
              ],
            },
            {
              when: "Week 3–4",
              title: "Reality check",
              desc: "First real outputs are off-brand or low quality. You realise prompting is a skill. You start watching tutorials.",
              tags: [
                { label: "Credits running low", tone: "bad" },
                { label: "8–12 hrs lost" },
                { label: "0 published pieces" },
              ],
            },
            {
              when: "Month 2",
              title: "The grind",
              desc: "Content is going out but inconsistently. Quality is uneven. You're spending more time managing tools than running the business. Credits get topped up.",
              tags: [
                { label: "+$80–120 credit overruns", tone: "bad" },
                { label: "15–20 hrs/month consumed", tone: "bad" },
                { label: "Some posts live" },
              ],
            },
            {
              when: "Month 3",
              title: "Fatigue or upgrade",
              desc: "Either you give up on certain tools, or you upgrade to higher tiers to get consistent output. The real monthly cost has grown significantly.",
              tags: [
                { label: "Real monthly spend: $300–600", tone: "bad" },
                { label: "Time cost: $900–1,500", tone: "bad" },
                { label: "Still no system" },
              ],
            },
            {
              when: (
                <>
                  Month 1<br />w/ Esharq
                </>
              ),
              active: true,
              title: "System already running",
              desc: "Content pipeline live. Consistent posts. Website built or optimised. You review and approve — the system handles everything else.",
              tags: [
                { label: "$800–1,500 all-in", tone: "good" },
                { label: "<30 min/week from you", tone: "good" },
                { label: "Results from week 2", tone: "good" },
              ],
            },
          ]}
        />
      </section>

      {/* Section 5: Head-to-head */}
      <section className="py-16 md:py-20 border-b border-white/10">
        <SectionLabel>3-month head-to-head comparison</SectionLabel>
        <ComparisonTable
          headers={["What you're getting", "DIY with AI tools", "Esharq managed"]}
          rows={[
            {
              label: "Monthly tool cost",
              left: { text: "$200–350 (subscriptions only)", tone: "warn" },
              right: { text: "$0 — included", tone: "good" },
            },
            {
              label: "Credit overruns",
              left: { text: "$80–200 extra, unpredictable", tone: "bad" },
              right: { text: "None — our infrastructure", tone: "good" },
            },
            {
              label: "Your time per month",
              left: { text: "15–30 hours", tone: "bad" },
              right: { text: "Under 2 hours (approvals)", tone: "good" },
            },
            {
              label: "Time cost @ $60/hr",
              left: { text: "$900–1,800", tone: "bad" },
              right: { text: "$60–120", tone: "good" },
            },
            {
              label: "Real 3-month total",
              left: { text: "$3,900–6,600", tone: "bad" },
              right: { text: "$2,400–4,500", tone: "good" },
            },
            {
              label: "Output consistency",
              left: { text: "Varies with your energy", tone: "warn" },
              right: { text: "System — not dependent on you", tone: "good" },
            },
            {
              label: "Brand consistency",
              left: { text: "Depends on prompt skill", tone: "warn" },
              right: { text: "Built into the workflow", tone: "good" },
            },
            {
              label: "Learning curve cost",
              left: { text: "2–3 months, full price", tone: "bad" },
              right: { text: "We already paid that", tone: "good" },
            },
            {
              label: "Results timeline",
              left: { text: "Month 3+ (if consistent)", tone: "warn" },
              right: { text: "Week 2–3", tone: "good" },
            },
            {
              label: "Social comment replies",
              left: { text: "Manual or ignored", tone: "bad" },
              right: { text: "Automated — same day", tone: "good" },
            },
          ]}
        />
      </section>

      {/* Section 6: Mirror */}
      <section className="py-16 md:py-20 border-b border-white/10">
        <Mirror headline={`"But I want to learn how to use AI myself."`}>
          <p>
            Good. You should. And if that&apos;s genuinely what you&apos;re
            optimizing for — learning — then yes, go build it yourself.
            That&apos;s a valid goal. Spend the 3 months, burn the credits,
            figure out the prompts.{" "}
            <BlogEm>There is real value in understanding how these tools work.</BlogEm>
          </p>
          <p>
            But if your goal is <BlogEm>results</BlogEm> — consistent content,
            a working website, a social media presence that grows — then the
            DIY route is the expensive, slow path. You&apos;d be paying more
            (in time + money) to arrive at a destination we can get you to in
            week one.
          </p>
          <p>
            Most founders discover this at month 3, after $4,000+ and a lot of
            frustration. We&apos;re just telling you now, before you spend it.
          </p>
        </Mirror>
      </section>

      {/* Section 7: Position grid */}
      <section className="py-16 md:py-20 border-b border-white/10">
        <SectionLabel>What you&apos;re actually choosing between</SectionLabel>
        <PositionGrid
          cells={[
            {
              tag: "DIY path",
              tone: "bad",
              items: [
                "Pay for 5–6 tools, use 3 of them",
                "Burn credits learning to prompt correctly",
                "Spend 15–30 hrs/month on execution",
                "Get inconsistent output for 2–3 months",
                "No strategy connecting the tools",
                "Quality depends on your energy level",
              ],
            },
            {
              tag: "Esharq managed",
              tone: "good",
              items: [
                "One retainer — all tools included",
                "Optimized pipeline built over months of iteration",
                "Under 2 hrs/month from you — approvals only",
                "Consistent output from week 2",
                "Strategy, execution, and analytics unified",
                "System runs even when you're offline",
              ],
            },
          ]}
        />

        <p className="mt-8 text-[15px] md:text-base text-white/55 leading-[1.8]">
          We&apos;re not cheaper because we cut corners. We&apos;re cheaper
          because we built the system once — across multiple clients — and you
          benefit from that infrastructure. The learning curve, the tool
          stack, the prompt library, the workflows:{" "}
          <BlogStrong>already built. Already optimized.</BlogStrong>
        </p>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20">
        <SectionLabel>Next step</SectionLabel>
        <h2 className="text-3xl md:text-[44px] leading-tight mb-4 italic text-[#C8ECED] font-black uppercase tracking-tight">
          Let&apos;s look at your setup.
          <br />
          <span className="text-[#27DFE9] not-italic">No pitch. Just numbers.</span>
        </h2>
        <p className="text-sm md:text-[15px] text-white/55 max-w-xl leading-[1.75] mb-10">
          Tell us what you&apos;re working on. We&apos;ll come back with an
          honest breakdown: what you&apos;re spending now, what&apos;s actually
          working, and what Esharq would do differently. You decide if the
          math makes sense.
        </p>
        <BlogAuditForm dict={dict.blog.audit} />
      </section>
    </article>
  );
}
