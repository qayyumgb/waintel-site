import Link from "next/link";
import { APP_URL, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Pricing",
  description:
    "Simple, transparent pricing for WhatsApp AI agents. Start free for 7 days. Plans from $29/month for small businesses up to $199/month for agencies with white-label.",
  path: "/pricing",
});

interface Plan {
  name: string;
  tagline: string;
  price: string;
  perMonth: string;
  description: string;
  features: string[];
  cta: string;
  ctaHref: string;
  badge?: string;
  highlighted?: boolean;
  enterprise?: boolean;
}

const PLANS: Plan[] = [
  {
    name: "Starter",
    tagline: "Small businesses",
    price: "$29",
    perMonth: "/month",
    description: "Solo founders, single-location shops, freelancers replying to WhatsApp daily.",
    features: [
      "1 WhatsApp number",
      "500 AI conversations / month",
      "1 knowledge base file",
      "Voice note understanding",
      "Email support",
      "Multi-language (Urdu, English, Arabic)",
    ],
    cta: "Start free trial",
    ctaHref: `${APP_URL}/register?plan=starter`,
  },
  {
    name: "Business",
    tagline: "Growing teams",
    price: "$79",
    perMonth: "/month",
    description: "Multi-product stores, growing service businesses, teams of 2–20.",
    features: [
      "3 WhatsApp numbers",
      "5,000 conversations / month",
      "Unlimited knowledge files",
      "Voice notes + image understanding",
      "Live human handoff",
      "Live inbox for your team",
      "All industry templates",
      "CRM + Google Sheets integration",
      "Priority support",
    ],
    cta: "Start free trial",
    ctaHref: `${APP_URL}/register?plan=business`,
    badge: "Most Popular",
    highlighted: true,
  },
  {
    name: "Agency",
    tagline: "White-label resellers",
    price: "$199",
    perMonth: "/month",
    description: "Marketing agencies and consultants reselling Waintel under their own brand.",
    features: [
      "Unlimited WhatsApp numbers",
      "Unlimited conversations",
      "🏢 White-label branding (your logo, colors, domain)",
      "👥 Resell to your own clients",
      "💰 Set your own client pricing & keep the margin",
      "📊 Multi-client dashboard & revenue tracking",
      "Public API access (developer keys + webhooks)",
      "Conversation Intelligence engine",
      "Dedicated success manager",
    ],
    cta: "Start free trial",
    ctaHref: `${APP_URL}/register?plan=agency`,
  },
  {
    name: "Enterprise",
    tagline: "Custom",
    price: "Custom",
    perMonth: "",
    description: "Banks, hospitals, government, and businesses with 100k+ conversations / month.",
    features: [
      "Volume discount on conversations",
      "Custom AI fine-tuning on your data",
      "On-premise deployment option",
      "SOC 2, ISO 27001, GDPR, HIPAA support",
      "Dedicated infrastructure",
      "SLA + 24/7 phone support",
      "Custom integrations (SAP, Oracle, etc.)",
      "Dedicated account team",
    ],
    cta: "Talk to sales",
    ctaHref: "/contact",
    enterprise: true,
  },
];

const FAQ = [
  {
    q: "What counts as a 'conversation'?",
    a: "A conversation is a 24-hour window with one customer. Unlimited messages within that window count as one conversation. This matches how Meta charges for WhatsApp Business API, so our pricing stays transparent and predictable.",
  },
  {
    q: "What happens after the 7-day free trial?",
    a: "After 7 days (or 200 free messages, whichever comes first), the bot stops sending replies until you upgrade. Your conversations and data are kept — when you subscribe, the bot picks up exactly where it left off.",
  },
  {
    q: "Can I switch plans later?",
    a: "Yes, anytime. Upgrade or downgrade from your billing page. Changes take effect at the next billing cycle — no partial-month refunds, but no surprise charges either.",
  },
  {
    q: "Do you charge extra for messages beyond the plan limit?",
    a: "No surprise fees. If you hit your limit, the bot keeps tracking activity but stops sending replies until the next month or until you upgrade. We never auto-charge overage.",
  },
  {
    q: "How is this different from a generic chatbot?",
    a: "Waintel is purpose-built for Pakistan and MENA businesses. Pre-trained on Roman Urdu, JazzCash/Easypaisa flows, local addresses, and industry-specific qualification (real estate, healthcare, education, etc.). Generic chatbots from Western companies don't understand the way your customers actually message.",
  },
  {
    q: "Do I need technical skills to set this up?",
    a: "No. The dashboard is point-and-click. Connect WhatsApp via QR code, pick your industry template, paste your FAQ document, customize tone — done. Most customers go live in under 30 minutes.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. Cancel from your billing page in one click. No commitments, no exit interviews. Your subscription stays active until the end of your current billing period.",
  },
];

export default function PricingPage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="bg-hero-gradient pt-12 pb-24 lg:pt-20 lg:pb-32">
        <div className="container text-center">
          <span className="eyebrow-light">Pricing</span>
          <h1 className="mt-5 text-display-xl text-white text-balance">
            Simple pricing.{" "}
            <span className="text-brand-300">Pay only when it works.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-[18px] leading-relaxed text-white/85">
            Start with a 7-day free trial. No credit card. Pick a plan when you've seen the bot close real sales.
          </p>
        </div>
      </section>

      {/* ── PLANS ─────────────────────────────────────────────────────── */}
      <section className="-mt-20 pb-20">
        <div className="container">
          <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
            {PLANS.map((plan) => (
              <article
                key={plan.name}
                className={`relative flex flex-col rounded-2xl border p-7 transition ${
                  plan.highlighted
                    ? "border-brand-500 bg-white shadow-soft ring-1 ring-brand-500/20"
                    : "border-ink-100 bg-white shadow-soft"
                }`}
              >
                {plan.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-500 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-cta">
                    {plan.badge}
                  </span>
                )}

                <div>
                  <h3 className="text-[20px] font-bold text-ink-900">{plan.name}</h3>
                  <p className="mt-1 text-[12px] font-semibold uppercase tracking-wider text-ink-400">
                    {plan.tagline}
                  </p>
                </div>

                <div className="mt-5">
                  <div className="flex items-baseline gap-1">
                    <span className="text-[40px] font-bold tracking-tight text-ink-900">
                      {plan.price}
                    </span>
                    {plan.perMonth && (
                      <span className="text-[14px] text-ink-400">{plan.perMonth}</span>
                    )}
                  </div>
                  <p className="mt-3 text-[13.5px] leading-relaxed text-ink-500">
                    {plan.description}
                  </p>
                </div>

                <ul className="mt-6 flex-1 space-y-3">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5 text-[13.5px] text-ink-700">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        className="mt-1 shrink-0 text-brand-500"
                        aria-hidden
                      >
                        <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={plan.ctaHref}
                  className={`mt-7 inline-flex items-center justify-center rounded-xl py-3 text-[14px] font-semibold transition-colors ${
                    plan.highlighted
                      ? "bg-brand-500 text-white shadow-cta hover:bg-brand-600"
                      : plan.enterprise
                        ? "bg-ink-900 text-white hover:bg-ink-800"
                        : "border border-ink-200 bg-white text-ink-900 hover:bg-ink-50"
                  }`}
                >
                  {plan.cta}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPARISON BANNER ─────────────────────────────────────────── */}
      <section className="bg-ink-50/40 py-16">
        <div className="container">
          <div className="rounded-2xl border border-ink-100 bg-white p-8 sm:p-12">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <span className="eyebrow">Why Waintel</span>
                <h2 className="mt-3 text-display-md text-balance">
                  Cheaper than hiring a junior salesperson, available 10× the hours.
                </h2>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { stat: "Rs. 25k+", label: "Junior salary / month in Pakistan" },
                  { stat: "8 hrs", label: "Hours a human salesperson works / day" },
                  { stat: "$29", label: "Waintel Starter / month" },
                  { stat: "24 hrs", label: "Hours Waintel responds / day" },
                ].map((s) => (
                  <div key={s.label} className="rounded-xl bg-ink-50 p-4">
                    <div className="text-[22px] font-bold text-ink-900">{s.stat}</div>
                    <div className="mt-1 text-[13px] text-ink-500">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────────────────── */}
      <section className="section bg-white">
        <div className="container max-w-4xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Frequently asked</span>
            <h2 className="mt-4 text-display-lg text-balance">Pricing questions answered</h2>
          </div>

          <div className="mt-12 space-y-4">
            {FAQ.map((item) => (
              <details
                key={item.q}
                className="group rounded-xl border border-ink-100 bg-white p-6 transition open:bg-ink-50/40"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 text-[16px] font-semibold text-ink-900">
                  {item.q}
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    className="shrink-0 text-ink-400 transition-transform group-open:rotate-180"
                    aria-hidden
                  >
                    <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </summary>
                <p className="mt-4 text-[15px] leading-relaxed text-ink-600">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────────────── */}
      <section className="bg-ink-50/40 py-20">
        <div className="container max-w-2xl text-center">
          <h2 className="text-display-md text-balance">Ready to never miss a customer message again?</h2>
          <p className="mx-auto mt-4 max-w-md text-[16px] text-ink-500">
            7 days free. No credit card. Live in minutes.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link href="/signup" className="btn-primary">Start free trial</Link>
            <Link href="/contact" className="btn-secondary">Talk to sales</Link>
          </div>
        </div>
      </section>
    </>
  );
}
