import Link from "next/link";
import { APP_URL, pageMetadata, SITE_URL } from "@/lib/seo";
import {
  TargetIcon, CartIcon, CalendarIcon, RefreshIcon,
  ChatIcon, GlobeIcon, BoltIcon, PlugIcon,
  ShieldIcon,
} from "@/components/Icons";

export const metadata = pageMetadata({
  title: "Features",
  description:
    "Every capability in Waintel — from AI lead qualification and order taking to appointment booking, conversation intelligence, and the public REST API. Built for WhatsApp Business and Cloud API.",
  path: "/features",
});

const ArrowRight = () => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
    <path d="M6.5 10.5L9.5 7.5L6.5 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
  </svg>
);

const CheckIcon = () => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
    <path d="M4 7.5L7 10L11 5" stroke="#1D9E75" strokeWidth="2" />
  </svg>
);

interface FeatureBlock {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
  Icon: React.ComponentType<{ size?: number; className?: string }>;
  visual: React.ReactNode;
}

const FEATURES: FeatureBlock[] = [
  {
    id: "lead-qualification",
    eyebrow: "Lead Qualification",
    title: "Qualify every lead in under 60 seconds.",
    description:
      "Waintel asks the right questions, scores intent, and only escalates serious buyers. Your sales team stops wasting time on tire-kickers.",
    bullets: [
      "Industry-aware questioning (real estate, healthcare, e-commerce, more)",
      "Lead score with explainable reasons attached",
      "Auto-route by ZIP, language, budget, or any custom field",
      "Push qualified leads to HubSpot, Pipedrive, Zoho, or Sheets",
    ],
    Icon: TargetIcon,
    visual: <LeadQualVisual />,
  },
  {
    id: "order-taking",
    eyebrow: "Order Taking",
    title: "Customers order on WhatsApp, you get clean data.",
    description:
      "AI walks the customer through your menu or catalog, confirms quantities and delivery details, and drops a structured order into your dashboard or CRM.",
    bullets: [
      "Natural-language ordering — no menu navigation",
      "Quantity, variant, add-on, delivery address all captured",
      "Stripe payment link sent in-thread, or COD support",
      "Order webhook to your fulfillment system",
    ],
    Icon: CartIcon,
    visual: <OrderTakingVisual />,
  },
  {
    id: "appointment-booking",
    eyebrow: "Appointment Booking",
    title: "Book the calendar without back-and-forth.",
    description:
      "AI checks your real calendar, offers slots, books, sends reminders, and handles reschedules — all on WhatsApp, all without your team lifting a finger.",
    bullets: [
      "Live calendar sync (Google Calendar, Outlook, Calendly)",
      "Multi-staff availability with skill/service routing",
      "Auto reminders 24h and 1h before",
      "One-tap reschedule and cancel handling",
    ],
    Icon: CalendarIcon,
    visual: <BookingVisual />,
  },
  {
    id: "cart-recovery",
    eyebrow: "Cart Recovery",
    title: "Bring back the customers you almost lost.",
    description:
      "Abandoned carts, ghosted leads, post-purchase upsells — Waintel runs personalized WhatsApp campaigns that close the loop without spamming your list.",
    bullets: [
      "Trigger sequences on cart abandonment, no-reply, post-purchase",
      "AI-personalized messaging per recipient",
      "Delivery throttle + opt-out handling built in",
      "Per-campaign open/reply/conversion analytics",
    ],
    Icon: RefreshIcon,
    visual: <CartRecoveryVisual />,
  },
  {
    id: "intelligence",
    eyebrow: "Conversation Intelligence",
    title: "See what customers are really saying.",
    description:
      "Waintel analyzes every conversation overnight: knowledge gaps, sentiment shifts, competitor mentions, and your peak demand windows.",
    bullets: [
      "Knowledge gap detection — find what your AI can't answer yet",
      "Sentiment trend per customer, per cohort",
      "Competitor mention tracker (you choose who to watch)",
      "Weekly digest delivered to your inbox every Monday",
    ],
    Icon: ChatIcon,
    visual: <IntelligenceVisual />,
  },
  {
    id: "languages",
    eyebrow: "Native Languages",
    title: "5 languages, native — not translated.",
    description:
      "Urdu, Hindi, Arabic, English, Punjabi — natively trained on real conversations. Your AI auto-detects the customer's language and replies in kind.",
    bullets: [
      "Auto language detection per message",
      "Code-mix friendly (Urdu+English, Hindi+English)",
      "Per-industry vocabulary and tone",
      "Custom glossary upload for your brand voice",
    ],
    Icon: GlobeIcon,
    visual: <LanguagesVisual />,
  },
  {
    id: "fast-setup",
    eyebrow: "10-minute Setup",
    title: "Live the same day. No engineers required.",
    description:
      "Connect WhatsApp via QR or Cloud API, pick your industry template, paste your FAQs and tone — your AI is closing within the hour.",
    bullets: [
      "QR-code WhatsApp connection (any number, no Meta approval needed)",
      "Pre-trained industry templates ready out of the box",
      "Tone presets — friendly, formal, energetic",
      "Sandbox mode to test before going live",
    ],
    Icon: BoltIcon,
    visual: <SetupVisual />,
  },
  {
    id: "api",
    eyebrow: "Public API + Webhooks",
    title: "Plug Waintel into your stack in an afternoon.",
    description:
      "Full REST API for messages, contacts, orders, leads, and campaigns. HMAC-signed webhooks for every event you care about. Agency-tier feature.",
    bullets: [
      "REST endpoints for all core resources",
      "Webhooks: message.in, lead.qualified, order.placed, campaign.completed",
      "API keys with per-key scope and rate limits",
      "Sliding-window rate limit, with usage analytics in dashboard",
    ],
    Icon: PlugIcon,
    visual: <ApiVisual />,
  },
];

export default function FeaturesPage() {
  return (
    <div>
      {/* JSON-LD: tells Google this is a product features page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Features | Waintel.ai",
            url: `${SITE_URL}/features`,
            mainEntity: FEATURES.map((f) => ({
              "@type": "Thing",
              name: f.eyebrow,
              description: f.description,
            })),
          }),
        }}
      />

      {/* HERO */}
      <section className="hero-bg relative -mt-[76px] overflow-hidden pt-[76px]">
        <div className="mx-auto max-w-[1300px] px-6 py-16 sm:py-24">
          <div className="mx-auto max-w-[860px] text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-stellar-pill bg-white/10 px-4 py-1.5 text-[13px] font-semibold text-white backdrop-blur-sm">
              <ShieldIcon size={14} />
              <span>Every capability, in one platform</span>
            </div>
            <h1 className="mb-5 text-[34px] font-bold leading-[1.1] text-white sm:text-[44px] lg:text-[56px]">
              Everything you need to turn WhatsApp into{" "}
              <span className="text-brand-highlight">your best salesperson.</span>
            </h1>
            <p className="mx-auto max-w-[680px] text-[15px] leading-[1.6] text-white/95 sm:text-[17px]">
              Eight core capabilities, one dashboard, one AI. From first inbound message
              to closed deal — automated, intelligent, and built for the way you sell.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link href={`${APP_URL}/register`} className="btn-dark">
                Start your free trial
                <ArrowRight />
              </Link>
              <Link href="/pricing" className="btn-ghost-light">
                See pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* JUMP NAV */}
      <section className="-mt-[60px] rounded-t-[44px] bg-ink-50 pt-12 sm:pt-16">
        <div className="mx-auto max-w-[1300px] px-6">
          <div className="rounded-stellar-md bg-white p-6 sm:p-8">
            <p className="mb-4 text-[12px] font-semibold uppercase tracking-wider text-ink-400">
              Jump to
            </p>
            <div className="flex flex-wrap gap-2">
              {FEATURES.map((f) => (
                <a
                  key={f.id}
                  href={`#${f.id}`}
                  className="inline-flex items-center gap-2 rounded-stellar-pill bg-ink-50 px-4 py-2 text-[13px] font-semibold text-ink-900 transition-colors hover:bg-brand-50 hover:text-brand-700"
                >
                  <f.Icon size={16} className="text-brand-500" />
                  <span>{f.eyebrow}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ALTERNATING FEATURE BLOCKS */}
      <div className="bg-ink-50 pb-20 pt-12 sm:pb-24">
        <div className="mx-auto flex max-w-[1300px] flex-col gap-8 px-6">
          {FEATURES.map((f, i) => {
            const reversed = i % 2 === 1;
            return (
              <section
                key={f.id}
                id={f.id}
                className="scroll-mt-[100px] overflow-hidden rounded-stellar-card bg-white"
              >
                <div className={`flex flex-col items-stretch ${reversed ? "lg:flex-row-reverse" : "lg:flex-row"}`}>
                  {/* Text side */}
                  <div className="flex-1 p-8 sm:p-12 lg:p-16">
                    <div className="mb-5 inline-flex items-center gap-2 rounded-stellar-pill bg-brand-50 px-4 py-1.5 text-[12px] font-semibold uppercase tracking-wider text-brand-700">
                      <f.Icon size={14} />
                      <span>{f.eyebrow}</span>
                    </div>
                    <h2 className="mb-4 text-[28px] font-bold leading-[1.2] text-ink-900 sm:text-[32px] lg:text-[36px]">
                      {f.title}
                    </h2>
                    <p className="mb-6 text-[15px] leading-[1.6] text-ink-500 sm:text-[16px]">
                      {f.description}
                    </p>
                    <ul className="m-0 list-none space-y-3 p-0">
                      {f.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-3 text-[14px] leading-[1.5] text-ink-900 sm:text-[15px]">
                          <span className="mt-1 flex-shrink-0">
                            <CheckIcon />
                          </span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Visual side */}
                  <div className="flex flex-1 items-center justify-center bg-ink-50 p-8 sm:p-12 lg:p-16">
                    {f.visual}
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </div>

      {/* FINAL CTA */}
      <section className="bg-ink-50 sec-bottom-sp">
        <div className="mx-auto max-w-[1300px] px-6">
          <div className="rounded-stellar-card bg-white px-6 py-12 text-center sm:px-20 sm:py-16">
            <h2 className="mb-4 text-[34px] font-bold leading-[1.3] text-ink-900 sm:text-[40px] lg:text-[44px]">
              See it work on your own WhatsApp number.
            </h2>
            <p className="mx-auto mb-7 max-w-2xl text-[16px] leading-[1.6] text-ink-500 sm:text-[18px]">
              200 free messages, no card. Live in 10 minutes.
            </p>
            <Link href={`${APP_URL}/register`} className="btn-primary-lg">
              Start your free trial
              <ArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ----- Visual mockups (no external images) ----- */

function MiniBubble({ side, color, children }: { side: "in" | "out"; color: "white" | "green"; children: React.ReactNode }) {
  const cls =
    side === "in"
      ? "rounded-bl-[4px] bg-white text-ink-900 shadow-sm"
      : "ml-auto rounded-br-[4px] bg-brand-500 text-white";
  void color;
  return (
    <div className={`max-w-[85%] rounded-[14px] px-4 py-2.5 text-[13px] leading-[1.4] ${cls}`}>
      {children}
    </div>
  );
}

function MockCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`w-full max-w-[400px] rounded-[24px] border border-ink-100 bg-white p-5 shadow-soft ${className}`}>
      {children}
    </div>
  );
}

function LeadQualVisual() {
  return (
    <MockCard>
      <div className="mb-3 text-[12px] font-semibold uppercase tracking-wider text-ink-400">Lead detail</div>
      <div className="mb-2 text-[18px] font-bold text-ink-900">Ahmed Khan</div>
      <div className="mb-4 text-[13px] text-ink-500">+92 300 1234567 · DHA Phase 5</div>
      <div className="mb-3 flex items-center justify-between rounded-stellar-md bg-brand-50 px-4 py-3">
        <span className="text-[13px] font-semibold text-brand-700">Score</span>
        <span className="text-[20px] font-bold text-brand-700">87 / 100</span>
      </div>
      <div className="space-y-1.5 text-[12px] text-ink-500">
        <div className="flex justify-between"><span>Budget confirmed</span><span className="font-semibold text-ink-900">2.5 Cr</span></div>
        <div className="flex justify-between"><span>Timeline</span><span className="font-semibold text-ink-900">Within 30 days</span></div>
        <div className="flex justify-between"><span>Visit booked</span><span className="font-semibold text-brand-500">Yes</span></div>
      </div>
    </MockCard>
  );
}

function OrderTakingVisual() {
  return (
    <MockCard>
      <div className="mb-3 text-[12px] font-semibold uppercase tracking-wider text-ink-400">Order #1042</div>
      <div className="space-y-2.5 text-[13px]">
        <div className="flex justify-between"><span className="text-ink-900">2× Chicken Biryani</span><span className="font-semibold">Rs 1,200</span></div>
        <div className="flex justify-between"><span className="text-ink-900">1× Karahi (half)</span><span className="font-semibold">Rs 1,800</span></div>
        <div className="flex justify-between"><span className="text-ink-900">3× Coke 500ml</span><span className="font-semibold">Rs 270</span></div>
      </div>
      <div className="mt-4 border-t border-ink-100 pt-3">
        <div className="flex justify-between text-[15px] font-bold text-ink-900">
          <span>Total</span><span>Rs 3,270</span>
        </div>
        <div className="mt-2 text-[12px] text-ink-500">COD · DHA Phase 5 · Deliver by 9:30 PM</div>
      </div>
    </MockCard>
  );
}

function BookingVisual() {
  return (
    <MockCard>
      <div className="mb-3 text-[12px] font-semibold uppercase tracking-wider text-ink-400">Booked</div>
      <div className="mb-1 text-[18px] font-bold text-ink-900">Saturday, 27 March</div>
      <div className="mb-4 text-[14px] text-brand-500">11:00 AM — Property viewing</div>
      <div className="grid grid-cols-7 gap-1 text-center text-[11px]">
        {["M","T","W","T","F","S","S"].map((d, i) => (
          <div key={`${d}${i}`} className="text-ink-400">{d}</div>
        ))}
        {Array.from({length:7}).map((_, i) => (
          <div key={i} className={`rounded-md py-1.5 ${i === 5 ? "bg-brand-500 font-bold text-white" : "bg-ink-50 text-ink-900"}`}>
            {21 + i}
          </div>
        ))}
      </div>
      <div className="mt-3 text-[12px] text-ink-500">Reminder will be sent Friday 10:00 AM</div>
    </MockCard>
  );
}

function CartRecoveryVisual() {
  return (
    <MockCard>
      <div className="mb-3 text-[12px] font-semibold uppercase tracking-wider text-ink-400">Recovery sequence</div>
      <div className="space-y-2.5">
        <MiniBubble side="out" color="green">Hey Sara, you left a Karahi in your cart 🤔 want me to confirm it?</MiniBubble>
        <MiniBubble side="in" color="white">yes please, just got busy</MiniBubble>
        <MiniBubble side="out" color="green">Done — order placed for Rs 1,800. Payment link below 👇</MiniBubble>
      </div>
      <div className="mt-3 text-[12px] font-semibold text-brand-500">+ 1 sale recovered</div>
    </MockCard>
  );
}

function IntelligenceVisual() {
  return (
    <MockCard>
      <div className="mb-3 text-[12px] font-semibold uppercase tracking-wider text-ink-400">Weekly digest</div>
      <div className="space-y-3">
        <div>
          <div className="mb-1 text-[12px] font-semibold text-ink-500">Top knowledge gap</div>
          <div className="text-[14px] text-ink-900">"Do you offer weekend appointments?" · 12 unanswered</div>
        </div>
        <div>
          <div className="mb-1 text-[12px] font-semibold text-ink-500">Sentiment trend</div>
          <div className="text-[14px] text-ink-900">+8% positive vs last week</div>
        </div>
        <div>
          <div className="mb-1 text-[12px] font-semibold text-ink-500">Competitor mentions</div>
          <div className="text-[14px] text-ink-900">"BookMyClinic" · 7 mentions, mostly pricing</div>
        </div>
      </div>
    </MockCard>
  );
}

function LanguagesVisual() {
  return (
    <MockCard>
      <div className="mb-3 text-[12px] font-semibold uppercase tracking-wider text-ink-400">Same conversation, 3 languages</div>
      <div className="space-y-2.5">
        <MiniBubble side="in" color="white">Salam! Property available hai abhi?</MiniBubble>
        <MiniBubble side="out" color="green">Walaikum salam! Ji haan, available hai. Visit kab kar saktay hain?</MiniBubble>
        <MiniBubble side="in" color="white">مرحبا، هل الشقة لا تزال متاحة؟</MiniBubble>
        <MiniBubble side="out" color="green">أهلاً بك، نعم لا تزال متاحة. متى تود تحديد موعد للزيارة؟</MiniBubble>
      </div>
    </MockCard>
  );
}

function SetupVisual() {
  return (
    <MockCard>
      <div className="mb-3 text-[12px] font-semibold uppercase tracking-wider text-ink-400">Setup wizard</div>
      <div className="space-y-2.5">
        {[
          { n: 1, t: "Connect WhatsApp", done: true },
          { n: 2, t: "Pick industry template", done: true },
          { n: 3, t: "Paste FAQs + tone", done: true },
          { n: 4, t: "Go live", done: false },
        ].map((s) => (
          <div key={s.n} className="flex items-center gap-3">
            <div className={`flex h-7 w-7 items-center justify-center rounded-full text-[12px] font-bold ${s.done ? "bg-brand-500 text-white" : "bg-ink-100 text-ink-500"}`}>
              {s.done ? "✓" : s.n}
            </div>
            <span className={`text-[14px] ${s.done ? "text-ink-900 line-through opacity-60" : "font-semibold text-ink-900"}`}>{s.t}</span>
          </div>
        ))}
      </div>
      <div className="mt-3 text-[12px] text-ink-500">Avg setup time: 9 min 12 sec</div>
    </MockCard>
  );
}

function ApiVisual() {
  return (
    <MockCard className="font-mono">
      <div className="mb-3 font-sans text-[12px] font-semibold uppercase tracking-wider text-ink-400">POST /v1/messages/send</div>
      <div className="rounded-stellar-md bg-ink-900 p-4 text-[12px] leading-[1.5] text-white">
        <div><span className="text-brand-highlight">curl</span> -X POST \</div>
        <div className="pl-4">https://api.waintel.io/v1/messages/send \</div>
        <div className="pl-4">-H "Authorization: Bearer wt_..." \</div>
        <div className="pl-4">-d '{`{"to":"+92...","text":"Hi"}`}'</div>
      </div>
      <div className="mt-3 font-sans text-[12px] text-ink-500">→ <span className="font-semibold text-brand-500">200</span> message_id: msg_abc123</div>
    </MockCard>
  );
}
