import Link from "next/link";
import { WhatsAppMockup } from "@/components/WhatsAppMockup";
import { APP_URL, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: undefined, // use default site title
  description:
    "Turn WhatsApp into your best salesperson. AI agents qualify leads, take orders, book appointments, and recover lost sales — 24/7 in Urdu, English, Hindi, and Arabic. Built for Pakistan and MENA businesses.",
  path: "/",
});

const FEATURES = [
  {
    icon: "🎯",
    title: "AI Lead Qualification",
    body: "Every conversation gets a 1–10 intent score. Hot leads alert your team instantly. No more guessing who to call.",
  },
  {
    icon: "🔥",
    title: "Smart Follow-ups",
    body: "Recover abandoned carts and warm leads with AI-personalized follow-up messages. A/B tested. Trackable revenue.",
  },
  {
    icon: "📍",
    title: "Multi-location Routing",
    body: "One WhatsApp number for all your branches. AI detects customer location and routes to the nearest open branch.",
  },
  {
    icon: "📢",
    title: "Outbound Campaigns",
    body: "Schedule WhatsApp blasts to segmented audiences. Track delivery, replies, and conversions per campaign.",
  },
  {
    icon: "🧠",
    title: "Conversation Intelligence",
    body: "Daily AI analysis surfaces what your bot couldn't answer, customer sentiment, and competitor mentions.",
  },
  {
    icon: "🔌",
    title: "Public API + Webhooks",
    body: "Send messages, query data, and receive real-time events from your existing CRM, dashboard, or app.",
  },
];

const INDUSTRIES = [
  { tag: "🏘️", name: "Real Estate", body: "Qualify property buyers by area, budget, timeline. Auto-route to the right consultant." },
  { tag: "🏥", name: "Healthcare", body: "Book appointments, send medication reminders, triage symptoms — for clinics, hospitals, pharmacies." },
  { tag: "🛒", name: "E-commerce", body: "Take orders directly in WhatsApp. JazzCash, Easypaisa, COD — all integrated. Recover abandoned carts." },
  { tag: "🎓", name: "Education", body: "Handle admission inquiries, course details, exam schedules, and enrollments — 24/7." },
  { tag: "🏨", name: "Hotels", body: "Take bookings, send check-in instructions, recommend nearby attractions — in your guests' language." },
  { tag: "🤝", name: "Agencies", body: "Resell Waintel under your own brand. White-label dashboard, multi-client billing, your margin." },
];

const STATS = [
  { value: "10×", label: "More leads captured" },
  { value: "24/7", label: "Always responding" },
  { value: "5 sec", label: "Average reply time" },
  { value: "9 industries", label: "Pre-built templates" },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="relative -mt-[72px] overflow-hidden bg-hero-gradient pt-[72px]">
        {/* Subtle dot pattern overlay */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
          aria-hidden
        />

        <div className="container relative grid items-center gap-16 py-16 lg:grid-cols-12 lg:py-28">
          <div className="lg:col-span-7">
            <div className="eyebrow-light">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-300" aria-hidden />
              Built for Pakistan & MENA
            </div>

            <div className="mt-6 h-px w-full max-w-2xl bg-white/15" aria-hidden />

            <h1 className="mt-6 text-display-xl text-white text-balance">
              Turn WhatsApp into your{" "}
              <span className="text-brand-300">best salesperson.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-[18px] leading-relaxed text-white/85">
              Waintel is a WhatsApp AI agent platform that qualifies leads, takes orders, books
              appointments, and recovers lost sales — 24/7, in your customers' language. Built specifically for Pakistan and MENA businesses.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link href="/signup" className="btn-primary !bg-white !text-brand-700 hover:!bg-brand-50">
                Start 7-day free trial
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" aria-hidden>
                  <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link href="/pricing" className="btn-ghost-light">See pricing</Link>
            </div>

            <p className="mt-5 text-[13px] text-white/60">
              No credit card required · 200 free messages · Setup in 5 minutes
            </p>
          </div>

          <div className="lg:col-span-5">
            <WhatsAppMockup />
          </div>
        </div>

        {/* Trust strip */}
        <div className="relative border-t border-white/10 bg-black/20 py-6 backdrop-blur-sm">
          <div className="container grid grid-cols-2 gap-6 sm:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-[26px] font-bold text-white">{s.value}</div>
                <div className="mt-0.5 text-[12px] text-white/60">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROBLEM / SOLUTION ─────────────────────────────────────────── */}
      <section className="section bg-white">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">The problem</span>
            <h2 className="mt-4 text-display-lg text-balance">
              Customers message you on WhatsApp.{" "}
              <span className="text-ink-400">Most never get a reply in time.</span>
            </h2>
            <p className="mt-5 text-[17px] text-ink-500">
              By the time you check your phone, they've messaged a competitor. Your team is buried in chats, ad spend is wasted, and you have no idea which leads are actually serious.
            </p>
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {[
              { stat: "80%+", label: "of WhatsApp inquiries don't convert because of slow / no reply" },
              { stat: "5 min", label: "is the average customer patience window before they message a competitor" },
              { stat: "0", label: "actionable signals you get from WhatsApp without an AI agent" },
            ].map((card) => (
              <div key={card.label} className="rounded-2xl border border-ink-100 p-8 text-center">
                <div className="text-display-md text-brand-500">{card.stat}</div>
                <p className="mt-3 text-[15px] text-ink-600">{card.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES ──────────────────────────────────────────────────── */}
      <section id="features" className="section bg-ink-50/40 scroll-mt-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Platform</span>
            <h2 className="mt-4 text-display-lg text-balance">Everything you need to sell on WhatsApp</h2>
            <p className="mt-5 text-[17px] text-ink-500">
              Six core modules working together. Designed for Pakistani and MENA businesses, ready out of the box.
            </p>
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f) => (
              <div key={f.title} className="card-feature">
                <div className="text-[28px]">{f.icon}</div>
                <h3 className="mt-4 text-[18px] font-bold text-ink-900">{f.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-ink-500">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ─────────────────────────────────────────────────── */}
      <section id="industries" className="section bg-white scroll-mt-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Made for your industry</span>
            <h2 className="mt-4 text-display-lg text-balance">
              Pre-built for the way you actually do business
            </h2>
            <p className="mt-5 text-[17px] text-ink-500">
              No generic AI. Each industry gets a tailored system prompt, qualification flow, and conversation patterns proven to convert.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {INDUSTRIES.map((ind) => (
              <article
                key={ind.name}
                className="rounded-2xl border border-ink-100 p-7 transition hover:border-brand-200 hover:shadow-soft"
              >
                <div className="flex items-center gap-3">
                  <span className="text-[28px]">{ind.tag}</span>
                  <h3 className="text-[18px] font-bold text-ink-900">{ind.name}</h3>
                </div>
                <p className="mt-3 text-[14px] leading-relaxed text-ink-500">{ind.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ───────────────────────────────────────────────── */}
      <section className="section bg-ink-900 text-white">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow-light">How it works</span>
            <h2 className="mt-4 text-display-lg text-white text-balance">
              From signup to first sale in 30 minutes
            </h2>
          </div>

          <div className="mt-16 grid gap-10 lg:grid-cols-3">
            {[
              { num: "01", title: "Connect WhatsApp", body: "Scan a QR code with your phone or connect via Meta Cloud API. Live in 5 minutes." },
              { num: "02", title: "Train the AI", body: "Pick your industry, paste your FAQs, customize the bot's tone and language. No coding." },
              { num: "03", title: "Watch sales close", body: "Bot replies 24/7, qualifies every lead, takes orders, and pings you when a hot prospect appears." },
            ].map((step) => (
              <div key={step.num}>
                <div className="text-[14px] font-bold text-brand-300">STEP {step.num}</div>
                <h3 className="mt-3 text-[24px] font-bold text-white">{step.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-white/70">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────────────── */}
      <section className="section bg-white">
        <div className="container">
          <div className="rounded-3xl bg-hero-gradient px-8 py-16 text-center sm:px-16">
            <h2 className="text-display-lg text-white text-balance">
              Stop losing customers to slow replies.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-[17px] text-white/85">
              Try Waintel free for 7 days — no credit card needed. Set up in minutes, see results in the first conversation.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link href="/signup" className="btn-primary !bg-white !text-brand-700 hover:!bg-brand-50">
                Start free trial
              </Link>
              <Link href={`${APP_URL}/login`} className="btn-ghost-light">
                I already have an account
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
