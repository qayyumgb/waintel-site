import Link from "next/link";
import { APP_URL, pageMetadata } from "@/lib/seo";
import { PricingFAQ } from "./PricingFAQ";

export const metadata = pageMetadata({
  title: "Pricing",
  description:
    "Simple, transparent pricing for WhatsApp AI agents. Start free for 7 days. Plans from $29/month for small businesses up to $199/month for agencies with white-label.",
  path: "/pricing",
});

const PLANS = [
  {
    name: "Starter",
    currency: "$",
    amount: "29",
    description: "Try Waintel risk-free with everything you need to close your first deals.",
    cta: "Start free",
    primary: false,
    features: [
      "1,000 AI messages / month",
      "1 WhatsApp number",
      "1 industry template",
      "Email support",
    ],
  },
  {
    name: "Business",
    currency: "$",
    amount: "79",
    description: "For growing businesses that need real automation and CRM sync.",
    cta: "Start free",
    primary: false,
    features: [
      "5,000 AI messages / month",
      "3 WhatsApp numbers",
      "All industry templates",
      "CRM integrations",
      "Priority support",
    ],
  },
  {
    name: "Agency",
    currency: "$",
    amount: "199",
    description: "Manage multiple clients from one dashboard, with full white-label.",
    cta: "Start free",
    primary: false,
    features: [
      "20,000 AI messages / month",
      "10 WhatsApp numbers",
      "White-label dashboard",
      "Public API + webhooks",
      "Dedicated support manager",
    ],
  },
  {
    name: "Enterprise",
    currency: "",
    amount: "Custom",
    description: "Best value. Unlimited scale, dedicated infra, and SLA-backed support.",
    cta: "Contact sales",
    primary: true,
    features: [
      "Unlimited AI messages",
      "Unlimited WhatsApp numbers",
      "Dedicated infrastructure",
      "Custom industry training",
      "99.9% uptime SLA",
    ],
  },
];

const CheckIcon = () => (
  <svg width="17" height="12" viewBox="0 0 17 12" fill="none">
    <path d="M1 6L6 11L16 1" stroke="#1D9E75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const GlobeIcon = () => (
  <svg width="24" height="17" viewBox="0 0 24 17" fill="none">
    <path
      d="M12.0039 8.72295V8.73586M15.6479 5.07109C16.6141 6.03968 17.1569 7.3532 17.1569 8.72279C17.1569 10.0924 16.6141 11.4059 15.6479 12.3745M19.2931 1.41797C20.2504 2.37722 21.0097 3.51602 21.5278 4.76937C22.0459 6.02271 22.3125 7.36604 22.3125 8.72266C22.3125 10.0793 22.0459 11.4226 21.5278 12.6759C21.0097 13.9293 20.2504 15.0681 19.2931 16.0273M8.35476 12.3745C7.38851 11.4059 6.84571 10.0924 6.84571 8.72279C6.84571 7.3532 7.38851 6.03968 8.35476 5.07109M4.7069 16.0273C3.74963 15.0681 2.99029 13.9293 2.47222 12.6759C1.95415 11.4226 1.6875 10.0793 1.6875 8.72266C1.6875 7.36604 1.95415 6.02271 2.47222 4.76937C2.99029 3.51602 3.74963 2.37722 4.7069 1.41797"
      stroke="#1D9E75"
      strokeWidth="1.66667"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function PricingPage() {
  return (
    <div>
      {/* ---------- HEADER ---------- */}
      <section className="bg-white pb-10 pt-28 sm:pt-32 lg:pt-36">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="mb-12 text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-stellar-pill bg-brand-50 px-4 py-2 text-[13px] font-semibold text-brand-700">
              💚 Plans for every business
            </div>
            <h1 className="mb-6 text-[40px] font-bold leading-[1.2] text-ink-900 sm:text-[48px] lg:text-[56px]">
              Plans Made Simple
            </h1>
            <p className="mx-auto max-w-[600px] text-[16px] leading-[1.6] text-ink-500 sm:text-[18px]">
              Pricing designed to give you maximum AI capability without breaking the bank.
              Start free for 7 days. Upgrade or cancel anytime.
            </p>
            <p className="mx-auto mt-4 max-w-[600px] text-[14px] leading-[1.6] text-ink-500 sm:text-[16px]">
              <strong className="text-ink-900">All plans include 5 languages, lead scoring, and CRM-ready data.</strong>
            </p>
          </div>

          {/* Pricing grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {PLANS.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-[20px] border-2 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] sm:p-6 ${
                  plan.primary ? "border-brand-500" : "border-ink-100"
                }`}
              >
                {/* Plan name pill */}
                <div className="mb-6 flex min-h-[72px] items-center justify-between gap-1 rounded-[16px] bg-ink-50 px-4 py-3">
                  <h3 className="text-[16px] font-bold text-ink-900">{plan.name}</h3>
                  <div className="flex items-center gap-2">
                    {plan.primary && (
                      <span className="whitespace-nowrap rounded-stellar-pill bg-brand-500 px-2.5 py-2 text-[12px] font-semibold text-white">
                        Best Value
                      </span>
                    )}
                    <div className="rounded-[15px] bg-white p-2">
                      <GlobeIcon />
                    </div>
                  </div>
                </div>

                {/* Price */}
                <div className="mb-6 flex items-baseline">
                  {plan.currency && (
                    <span className="text-[24px] font-semibold text-ink-900">{plan.currency}</span>
                  )}
                  <span className="mx-1 text-[32px] font-bold leading-none text-ink-900">
                    {plan.amount}
                  </span>
                  {plan.currency && (
                    <span className="text-[16px] font-normal text-ink-500">/mo</span>
                  )}
                </div>

                <p className="mb-6 min-h-[48px] text-[14px] leading-[1.5] text-ink-500">
                  {plan.description}
                </p>

                <Link
                  href={plan.name === "Enterprise" ? "mailto:hello@waintel.io" : `${APP_URL}/register`}
                  className={`mb-6 ${plan.primary ? "btn-primary-block" : "btn-outline"}`}
                >
                  {plan.cta}
                </Link>

                <ul className="m-0 list-none p-0">
                  {plan.features.map((f) => (
                    <li key={f} className="mb-4 flex items-start gap-3 text-[15px] leading-[1.4] last:mb-0">
                      <span className="mt-0.5 flex-shrink-0">
                        <CheckIcon />
                      </span>
                      <span className="text-ink-500">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- WHAT YOU GET ---------- */}
      <section className="sec-y-sp">
        <div className="mx-auto max-w-[1200px] px-6">
          <h2 className="home-section-title mb-12 text-center">Built to Close, Not Just Chat</h2>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            {[
              {
                title: "AI that actually qualifies",
                desc: "Goes beyond canned replies. Our agents ask the right questions, score the lead, and only forward serious buyers to your team.",
                icon: (
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <path d="M18.9 37.7C12.9 35.8 7.9 31.7 4.9 26.1C1.9 20.6 1.2 14 3 8C9.2 8.3 15.3 6.1 20 2C24.7 6.1 30.8 8.3 37 8C38.4 12.6 38.3 17.5 36.8 22.1M26 34l4 4 8-8" stroke="#1D9E75" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ),
              },
              {
                title: "Zero downtime",
                desc: "Customers don't wait. Your AI replies in under 2 seconds, 24/7. Whether you're sleeping, at lunch, or out of office.",
                icon: (
                  <svg width="32" height="40" viewBox="0 0 32 40" fill="none">
                    <path d="M18 2v14h12L14 38V24H2L18 2z" stroke="#1D9E75" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ),
              },
              {
                title: "5 languages, native",
                desc: "Urdu, Hindi, Arabic, English, Punjabi. Not translated — actually trained. Your customers feel like they're talking to a local.",
                icon: (
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <path d="M3 14h33M3 26h33M19 2c-3.4 5.4-5.2 11.6-5.2 18s1.8 12.6 5.2 18M21 2c3.4 5.4 5.2 11.6 5.2 18s-1.8 12.6-5.2 18M2 20c0 9.9 8.1 18 18 18s18-8.1 18-18S29.9 2 20 2 2 10.1 2 20z" stroke="#1D9E75" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ),
              },
            ].map((f) => (
              <div key={f.title} className="rounded-stellar-card bg-ink-50 p-10 text-center">
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-white">
                  {f.icon}
                </div>
                <h4 className="mb-3 text-[22px] font-bold text-ink-900 sm:text-[24px]">{f.title}</h4>
                <p className="text-[15px] leading-[1.6] text-ink-500 sm:text-[16px]">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <PricingFAQ />

      {/* ---------- FINAL CTA ---------- */}
      <section className="sec-y-sp">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="overflow-hidden rounded-stellar-card bg-brand-500 px-8 pt-12 pb-0 text-white sm:px-16 sm:pt-14 lg:px-20">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-20">
              <div>
                <h2 className="mb-6 text-[32px] font-bold leading-[1.2] text-white sm:text-[40px] lg:text-[44px]">
                  Ready to turn WhatsApp into your best salesperson?
                </h2>
                <p className="mb-8 text-[16px] leading-[1.6] text-white/90 sm:text-[18px]">
                  Waintel gives you the AI, the templates, and the playbook — starting today.
                  200 free messages, no card required.
                </p>
                <Link
                  href={`${APP_URL}/register`}
                  className="inline-flex items-center gap-2 rounded-stellar-pill border-2 border-white bg-transparent px-8 py-4 text-[16px] font-semibold text-white transition-all hover:bg-white hover:text-brand-500"
                >
                  Start free trial
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                    <path d="M6.5 10.5L9.5 7.5L6.5 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
                  </svg>
                </Link>
              </div>
              <div className="hidden h-full items-end lg:flex">
                {/* CSS-only hero illustration: a friendly chat bubble */}
                <div className="ml-auto flex h-[280px] w-[280px] items-center justify-center">
                  <svg viewBox="0 0 240 240" className="h-full w-full opacity-95">
                    <circle cx="120" cy="120" r="110" fill="rgba(255,255,255,0.1)" />
                    <circle cx="120" cy="120" r="80" fill="rgba(255,255,255,0.18)" />
                    <g transform="translate(60 60)">
                      <rect width="120" height="100" rx="20" fill="white" />
                      <path d="M40 100l10 20 18-20z" fill="white" />
                      <rect x="20" y="22" width="80" height="8" rx="4" fill="#1D9E75" />
                      <rect x="20" y="40" width="60" height="8" rx="4" fill="#7BE5BF" />
                      <rect x="20" y="58" width="70" height="8" rx="4" fill="#7BE5BF" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
