import Link from "next/link";
import { APP_REGISTER_URL, pageMetadata, WA_LINK } from "@/lib/seo";
import { PricingFAQ } from "./PricingFAQ";

export const metadata = pageMetadata({
  title: "Pricing",
  description:
    "Transparent USD pricing for your WhatsApp Ghost Employee. Starter $29, Business $79, Agency $199. 14-day free trial. Stripe + cards + COD supported on all plans.",
  path: "/pricing",
});

const PLANS = [
  {
    name: "Starter",
    sub: "For small businesses just getting started",
    currency: "$",
    amount: "29",
    primary: false,
    cta: "Start 14-day free trial",
    note: "No credit card required",
    includes: [
      "1 WhatsApp number",
      "1,000 AI conversations / month",
      "Voice note understanding (multilingual)",
      "Stripe + cards + COD",
      "1 industry blueprint",
      "Knowledge base (1 file)",
      "Payment confirmation capture",
      "Email support",
    ],
    excludes: [
      "Human handoff & live inbox",
      "Business Pulse AI",
      "Lead qualification scoring",
      "Multi-location routing",
    ],
  },
  {
    name: "Business",
    sub: "For businesses serious about growth",
    currency: "$",
    amount: "79",
    primary: true,
    cta: "Start 14-day free trial",
    note: "Most popular · No credit card",
    includes: [
      "Everything in Starter",
      "5,000 AI conversations / month",
      "All industry blueprints",
      "Unlimited knowledge base files",
      "Human handoff + live inbox",
      "Business Pulse AI (daily WhatsApp report at 8 AM)",
      "Smart follow-up engine (cart recovery)",
      "Lead qualification (AI-scored 🔥/🟡/❄️)",
      "CRM export (Google Sheets + Zapier)",
      "Multi-location routing (up to 5 branches)",
      "Campaign engine",
      "Priority support",
    ],
    excludes: [],
  },
  {
    name: "Agency",
    sub: "For digital agencies reselling to clients",
    currency: "$",
    amount: "199",
    primary: false,
    cta: "Contact sales",
    note: "Minimum 3-month commitment",
    includes: [
      "Everything in Business",
      "20,000 AI conversations / month",
      "Up to 50 client bots",
      "White-label dashboard (your logo + colors)",
      "Custom domain support",
      "Public REST API + HMAC webhooks",
      "Agency revenue dashboard",
      "Sub-account management",
      "Hide all Waintel branding",
      "Dedicated support channel",
    ],
    excludes: [],
  },
];

const META_PRICING = [
  { type: "Service / customer-initiated", usd: "$0.00", note: "Within the 24-hour customer service window" },
  { type: "Utility (transactional)", usd: "$0.005", note: "Order updates, shipping notifications, etc." },
  { type: "Marketing (promotional)", usd: "$0.0125", note: "Outbound campaigns, broadcasts" },
  { type: "Authentication (OTP)", usd: "$0.0028", note: "OTP / login codes" },
];

const CheckIcon = () => (
  <svg width="17" height="12" viewBox="0 0 17 12" fill="none">
    <path d="M1 6L6 11L16 1" stroke="#1D9E75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const XIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M3 3l8 8M11 3l-8 8" stroke="#B2B2DD" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export default function PricingPage() {
  return (
    <div>
      {/* HEADER */}
      <section className="bg-white pb-10 pt-28 sm:pt-32 lg:pt-36">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="mb-12 text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-stellar-pill bg-brand-50 px-4 py-2 text-[13px] font-semibold text-brand-700">
              💚 Plans for every business
            </div>
            <h1 className="mb-6 text-[40px] font-bold leading-[1.2] text-ink-900 sm:text-[48px] lg:text-[56px]">
              Transparent Pricing. <span className="text-brand-500">No Surprises.</span>
            </h1>
            <p className="mx-auto max-w-[640px] text-[16px] leading-[1.6] text-ink-500 sm:text-[18px]">
              See exactly what you pay — and exactly what Meta charges per conversation.
              Start free for 14 days. Cancel anytime.
            </p>
            <p className="mx-auto mt-4 max-w-[600px] text-[14px] leading-[1.6] text-ink-500 sm:text-[16px]">
              <strong className="text-ink-900">All plans include multilingual AI, payment-in-chat, and voice note understanding.</strong>
            </p>
          </div>

          {/* Pricing grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {PLANS.map((plan) => (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-[20px] border-2 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] ${
                  plan.primary ? "border-brand-500" : "border-ink-100"
                }`}
              >
                {plan.primary && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-stellar-pill bg-brand-500 px-4 py-1 text-[12px] font-bold uppercase tracking-wider text-white">
                    Most Popular
                  </div>
                )}

                <div className="mb-2 text-[16px] font-bold text-ink-900">{plan.name}</div>
                <p className="mb-5 min-h-[40px] text-[13px] text-ink-500">{plan.sub}</p>

                <div className="mb-6 flex items-baseline">
                  <span className="text-[24px] font-semibold text-ink-900">{plan.currency}</span>
                  <span className="mx-1 text-[40px] font-bold leading-none text-ink-900">{plan.amount}</span>
                  <span className="text-[16px] font-normal text-ink-500">/month</span>
                </div>

                <Link
                  href={plan.name === "Agency" ? "/contact" : APP_REGISTER_URL}
                  {...(plan.name !== "Agency" && { target: "_blank", rel: "noopener noreferrer" })}
                  className={`mb-3 ${plan.primary ? "btn-primary-block" : "btn-outline"}`}
                >
                  {plan.cta}
                </Link>
                <p className="mb-6 text-center text-[12px] text-ink-500">{plan.note}</p>

                <ul className="m-0 list-none space-y-3 p-0">
                  {plan.includes.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-[14px] leading-[1.4] text-ink-700">
                      <span className="mt-0.5 flex-shrink-0"><CheckIcon /></span>
                      <span>{f}</span>
                    </li>
                  ))}
                  {plan.excludes.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-[14px] leading-[1.4] text-ink-300 line-through">
                      <span className="mt-1 flex-shrink-0"><XIcon /></span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* META PRICING TRANSPARENCY */}
      <section className="bg-ink-50 py-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="mb-10 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-stellar-pill bg-white px-4 py-2 text-[13px] font-semibold text-ink-700">
              💰 Hidden cost transparency
            </div>
            <h2 className="home-section-title mb-3">What does Meta charge?</h2>
            <p className="mx-auto max-w-[640px] text-[16px] leading-[1.6] text-ink-500 sm:text-[18px]">
              We show you exactly what Meta WhatsApp Cloud API charges per conversation —
              no hidden markup. Most small businesses stay under the free tier.
            </p>
          </div>

          <div className="overflow-hidden rounded-stellar-card bg-white">
            <table className="w-full">
              <thead className="bg-ink-50">
                <tr>
                  <th className="p-4 text-left text-[12px] font-semibold uppercase tracking-wider text-ink-500 sm:p-5">Conversation Type</th>
                  <th className="p-4 text-left text-[12px] font-semibold uppercase tracking-wider text-ink-500 sm:p-5">Meta charges (USD)</th>
                  <th className="hidden p-4 text-left text-[12px] font-semibold uppercase tracking-wider text-ink-500 lg:table-cell sm:p-5">Notes</th>
                </tr>
              </thead>
              <tbody>
                {META_PRICING.map((row, i) => (
                  <tr key={row.type} className={i !== META_PRICING.length - 1 ? "border-b border-ink-100" : ""}>
                    <td className="p-4 text-[14px] font-semibold text-ink-900 sm:p-5">{row.type}</td>
                    <td className="p-4 text-[14px] text-ink-700 sm:p-5">{row.usd}</td>
                    <td className="hidden p-4 text-[13px] text-ink-500 lg:table-cell sm:p-5">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-6 text-center text-[14px] text-ink-500">
            🎁 <strong className="text-ink-900">First 1,000 service conversations / month are FREE from Meta</strong> — most small businesses never pay extra.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <PricingFAQ />

      {/* FINAL CTA */}
      <section className="sec-y-sp">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="rounded-stellar-card bg-brand-500 px-6 py-12 text-center text-white sm:px-16 sm:py-16">
            <h2 className="mb-4 text-[32px] font-bold leading-[1.2] text-white sm:text-[40px] lg:text-[44px]">
              Ready to hire your Ghost Employee?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-[16px] leading-[1.6] text-white/90 sm:text-[18px]">
              14-day free trial. No card required. Live in 10 minutes.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href={APP_REGISTER_URL} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-stellar-pill bg-white px-8 py-4 text-[16px] font-semibold text-brand-600 hover:bg-ink-50"
              >
                Start free trial
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none"><path d="M6.5 10.5L9.5 7.5L6.5 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="square" /></svg>
              </Link>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-stellar-pill border-2 border-white bg-transparent px-8 py-4 text-[16px] font-semibold text-white hover:bg-white hover:text-brand-500"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.768.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
                </svg>
                WhatsApp us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
