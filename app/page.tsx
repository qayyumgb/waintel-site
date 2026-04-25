import Link from "next/link";
import { APP_URL, pageMetadata } from "@/lib/seo";
import {
  HomeIcon, StethoscopeIcon, ShoppingBagIcon, GraduationIcon, HotelIcon, SparklesIcon,
  ChatIcon, PhoneIcon, CardIcon, PlugIcon,
  TargetIcon, CartIcon, CalendarIcon, RefreshIcon,
  GlobeIcon, BoltIcon, MapPinIcon,
  ShieldIcon, KeyIcon, ZapSmallIcon, PlugSmallIcon,
} from "@/components/Icons";

export const metadata = pageMetadata({
  description:
    "Turn WhatsApp into your best salesperson. AI agents qualify leads, take orders, book appointments, and recover lost sales — 24/7 in Urdu, English, Hindi, and Arabic. Built for Pakistan and MENA businesses.",
  path: "/",
});

const ArrowRight = ({ className = "" }: { className?: string }) => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" className={className}>
    <path d="M6.5 10.5L9.5 7.5L6.5 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
  </svg>
);

const CheckIcon = ({ color = "#1D9E75" }: { color?: string }) => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
    <path d="M4 7.5L7 10L11 5" stroke={color} strokeWidth="2" />
  </svg>
);

const PRODUCT_CARDS = [
  { title: "Lead Qualification",  desc: "Auto-qualify every inbound, score by intent, and route only serious buyers to your team.", Icon: TargetIcon },
  { title: "Order Taking",        desc: "Customers order on WhatsApp, you get clean structured orders in your dashboard or CRM.",      Icon: CartIcon },
  { title: "Appointment Booking", desc: "AI checks your calendar, books slots, sends reminders, handles reschedules — fully automatic.", Icon: CalendarIcon },
  { title: "Cart Recovery",       desc: "Bring back lost customers with personalized WhatsApp follow-ups that actually convert.",      Icon: RefreshIcon },
];

const WHY_CHOOSE = [
  { title: "5 native languages", desc: "Urdu, English, Hindi, Arabic, Punjabi — natively trained, not translated.",            Icon: GlobeIcon },
  { title: "10-minute setup",    desc: "Connect WhatsApp, pick your industry, paste your FAQs. Live the same day.",            Icon: BoltIcon },
  { title: "Built for the region", desc: "Local payments, PKR pricing, MENA-trained — built by people who understand the market.", Icon: MapPinIcon },
];

const INDUSTRIES = [
  { title: "Real Estate",            desc: "Qualify property buyers, schedule viewings, follow up automatically.",       Icon: HomeIcon },
  { title: "Healthcare",             desc: "Book appointments, send reminders, answer FAQs in patients' language.",       Icon: StethoscopeIcon },
  { title: "E-commerce",             desc: "Take orders, recover abandoned carts, handle delivery questions.",            Icon: ShoppingBagIcon },
  { title: "Education",              desc: "Enroll students, share class info, collect fees on WhatsApp.",                Icon: GraduationIcon },
  { title: "Hotels",                 desc: "Confirm bookings, upsell add-ons, answer guest questions 24/7.",              Icon: HotelIcon },
  { title: "& any service business", desc: "Salons, gyms, restaurants — if you talk to customers, we close them.",        Icon: SparklesIcon },
];

const CHANNELS = [
  { label: "WhatsApp Cloud API",   Icon: ChatIcon },
  { label: "Baileys (any number)", Icon: PhoneIcon },
  { label: "Stripe billing",       Icon: CardIcon },
  { label: "REST API + Webhooks",  Icon: PlugIcon },
];

const HERO_FEATURES = [
  { Icon: ShieldIcon,    label: "200 free messages" },
  { Icon: KeyIcon,       label: "No credit card" },
  { Icon: ZapSmallIcon,  label: "10-min setup" },
  { Icon: PlugSmallIcon, label: "Works with your CRM" },
];

export default function HomePage() {
  return (
    <div>
      {/* ====================================================================
          HERO BANNER
      ===================================================================== */}
      <section className="hero-bg relative -mt-[76px] min-h-[700px] overflow-hidden pt-[76px]">
        <div className="mx-auto max-w-[1300px] px-6 pb-14 pt-14 sm:pb-20 sm:pt-20">
          <div className="max-w-[733px]">
            <div className="mb-5 inline-flex items-center gap-2 text-[14px] text-white">
              <ShieldIcon size={16} />
              <span>WhatsApp AI built for revenue</span>
            </div>

            <div className="mb-5 h-px w-full bg-white/25" />

            <h1 className="mb-0 leading-[1.05]">
              <span className="block text-[34px] font-bold text-white sm:text-[44px] lg:text-[56px]">
                Turn WhatsApp into your
              </span>
              <span className="block text-[34px] font-bold text-white sm:text-[44px] lg:text-[56px]">
                <span className="text-brand-highlight">best salesperson.</span>
              </span>
            </h1>

            <p className="mt-5 mb-6 max-w-[700px] text-[14px] font-normal leading-[1.5] text-white/95 sm:text-[16px]">
              Waintel AI agents qualify leads, take orders, book appointments, and recover
              lost sales — 24/7 in your customers' language. Built for Pakistan and MENA
              businesses, ready in days, not months.
            </p>

            <div className="mb-6 flex flex-wrap items-center gap-4">
              <Link href={`${APP_URL}/register`} className="btn-dark">
                Start your free trial
                <ArrowRight />
              </Link>
              <Link href="/pricing" className="btn-ghost-light">
                See pricing
              </Link>
            </div>

            <div className="mb-6 flex flex-wrap items-center gap-2.5">
              {HERO_FEATURES.map((f) => (
                <div key={f.label} className="feature-pill-light">
                  <f.Icon size={15} />
                  <span>{f.label}</span>
                </div>
              ))}
            </div>

            <div className="feature-pill">
              <MapPinIcon size={15} className="text-brand-500" />
              <span className="font-semibold">Built for Pakistan & MENA</span>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          ECOSYSTEM
      ===================================================================== */}
      <section className="relative -mt-[60px] rounded-t-[44px] bg-ink-50 pt-20 sm:px-0">
        <div className="mx-auto max-w-[1300px] px-6">
          <div className="mx-auto mb-10 max-w-[900px] text-center">
            <h2 className="home-section-title mb-4">The Waintel platform</h2>
            <p className="text-[16px] leading-[1.6] text-ink-500 sm:text-[20px]">
              <strong className="block font-bold text-ink-900">
                One AI agent. Every channel that matters. End-to-end automation.
              </strong>
              From first message to closed deal — your AI handles every conversation,<br className="hidden lg:inline" />
              while your team handles only the exceptions.
            </p>
          </div>

          <div className="mb-12 flex flex-wrap items-center justify-center gap-4 sm:gap-7">
            {CHANNELS.map((c) => (
              <div key={c.label} className="inline-flex items-center gap-2.5 rounded-stellar-pill bg-white px-6 py-2 text-[14px] text-ink-900">
                <c.Icon size={18} className="text-brand-500" />
                <span>{c.label}</span>
              </div>
            ))}
          </div>

          <div id="features" className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {PRODUCT_CARDS.map((c) => (
              <div
                key={c.title}
                className="group flex min-h-[160px] cursor-pointer flex-col rounded-[40px] border border-transparent bg-white p-8 transition-all duration-200 hover:border-brand-500 hover:bg-[rgba(29,158,117,0.07)]"
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-[12px] bg-brand-500 text-white">
                    <c.Icon size={22} />
                  </span>
                  <h3 className="text-[18px] font-semibold leading-[1.5] text-ink-900">{c.title}</h3>
                </div>
                <p className="m-0 text-[14px] font-normal leading-[1.4] text-ink-400">{c.desc}</p>
                <button className="mt-4 inline-flex w-fit items-center gap-1.5 border-0 bg-transparent p-0 py-2 text-left text-[14px] font-semibold text-brand-500">
                  Learn more
                  <ArrowRight />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          FEATURED PRODUCT
      ===================================================================== */}
      <section className="bg-ink-50 sec-bottom-sp pt-3">
        <div className="mx-auto max-w-[1300px] px-6">
          <div className="flex flex-col items-stretch overflow-hidden rounded-stellar-card bg-white lg:flex-row lg:items-end">
            <div className="flex-1 p-8 sm:p-12 lg:p-20">
              <div className="mb-6 flex flex-col items-start gap-6 sm:flex-row sm:items-center">
                <div className="flex h-[70px] w-[70px] flex-shrink-0 items-center justify-center rounded-[15px] border-2 border-brand-500 bg-ink-50">
                  <ChatIcon size={36} className="text-brand-500" />
                </div>
                <h2 className="home-section-title">
                  Waintel AI Agent<br />
                  <span className="text-ink-900">— Built to close.</span>
                </h2>
              </div>

              <p className="mb-6 text-[16px] leading-[1.7] text-ink-500">
                Waintel's AI doesn't just reply — it qualifies leads, takes orders,
                books appointments, and recovers lost sales. It speaks your customer's
                language, understands your industry, and escalates to your team only
                when it actually matters.
              </p>

              <ul className="mb-6 list-none space-y-2 p-0">
                {[
                  "All Waintel templates pre-trained for your industry",
                  "Plug into any CRM (HubSpot, Pipedrive, Zoho, Sheets)",
                  "Frustration detection — auto-escalate before customers churn",
                  "Real-time lead scoring with reasons attached",
                  "Works with your existing WhatsApp number",
                ].map((f) => (
                  <li key={f} className="flex items-center gap-2.5 pb-2 text-[14px] text-ink-900">
                    <CheckIcon />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <Link href={`${APP_URL}/register`} className="btn-primary">
                Get started
                <ArrowRight />
              </Link>
            </div>

            <div className="flex flex-1 justify-center lg:justify-end">
              <ChatPreview />
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          ECO-AT-A-GLANCE
      ===================================================================== */}
      <section className="bg-ink-50 pb-24">
        <div className="mx-auto max-w-[1300px] px-6">
          <div className="rounded-stellar-card bg-white px-6 py-12 text-center sm:px-16 sm:py-20 lg:px-24 lg:py-[90px]">
            <h2 className="home-section-title mb-4">The Waintel ecosystem at a glance</h2>
            <p className="mx-auto mb-10 max-w-[800px] text-[16px] text-ink-400 sm:text-[20px]">
              Lead, qualify, book, sell, follow up — all in one WhatsApp thread, all powered by your AI agent.
            </p>

            <div className="relative mx-auto mt-6 inline-block w-full max-w-[900px]">
              <EcosystemDiagram />
            </div>

            <p className="mt-12 text-[14px] text-ink-400">
              <strong className="text-ink-900">Waintel.ai</strong> connects every channel, every customer, every conversation — into one closed-loop revenue engine.
            </p>
          </div>
        </div>
      </section>

      {/* ====================================================================
          WHY CHOOSE
      ===================================================================== */}
      <section className="bg-ink-50 sec-bottom-sp">
        <div className="mx-auto max-w-[1300px] px-6">
          <h2 className="home-section-title mb-8 text-center">Why choose Waintel</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {WHY_CHOOSE.map((c) => (
              <div
                key={c.title}
                className="group flex min-h-[160px] cursor-pointer flex-col rounded-[40px] border border-transparent bg-transparent p-8 transition-all duration-200 hover:border-brand-500 hover:bg-[rgba(29,158,117,0.07)]"
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-[12px] bg-brand-500 text-white">
                    <c.Icon size={22} />
                  </span>
                  <h3 className="text-[18px] font-semibold leading-[1.5] text-ink-900">{c.title}</h3>
                </div>
                <p className="m-0 text-[14px] leading-[1.4] text-ink-400">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          INDUSTRIES — green icon-square + white outline icon
      ===================================================================== */}
      <section id="industries" className="bg-ink-50 sec-bottom-sp">
        <div className="mx-auto max-w-[1300px] px-6">
          <div className="rounded-stellar-card bg-white p-6 text-center sm:p-12 lg:p-20">
            <div className="mb-12">
              <h2 className="home-section-title">Built for the way you sell</h2>
              <p className="mx-auto mt-4 max-w-2xl text-[16px] leading-[1.6] text-ink-500 sm:text-[20px]">
                Industry-trained agents that<br className="hidden lg:inline" /> understand your products and your customers.
              </p>
            </div>

            <div className="mx-auto mb-12 grid grid-cols-1 justify-center gap-6 md:grid-cols-3">
              {INDUSTRIES.map((c) => (
                <div key={c.title} className="flex max-w-[380px] flex-col items-center justify-self-center rounded-stellar-md bg-ink-50 p-8 text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-[16px] bg-brand-500 text-white">
                    <c.Icon size={30} />
                  </div>
                  <h3 className="mb-4 text-[18px] font-bold leading-[1.4] text-ink-900">{c.title}</h3>
                  <p className="m-0 text-[14px] leading-[1.6] text-ink-500">{c.desc}</p>
                </div>
              ))}
            </div>

            <div className="flex justify-center">
              <Link href={`${APP_URL}/register`} className="btn-primary-lg">
                Start your free trial
                <ArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          MADE IN PAKISTAN
      ===================================================================== */}
      <section className="bg-ink-50 sec-bottom-sp">
        <div className="mx-auto max-w-[1300px] px-6">
          <div className="relative flex flex-col items-center justify-between gap-8 overflow-hidden rounded-stellar-card bg-white px-6 py-10 sm:flex-row sm:px-20 sm:py-16">
            <div className="flex w-[180px] flex-shrink-0 items-center justify-center">
              <div className="flex h-[120px] w-[120px] items-center justify-center rounded-full bg-brand-500 text-white sm:h-[160px] sm:w-[160px]">
                <MapPinIcon size={64} />
              </div>
            </div>

            <div className="max-w-[612px] flex-1 text-center">
              <h2 className="mb-4 text-[32px] font-bold text-ink-900 sm:text-[36px]">
                Made in Pakistan
              </h2>
              <p className="mb-6 text-[16px] leading-[1.7] text-ink-500 sm:text-[18px]">
                Waintel is built by people who understand how business actually works
                in Pakistan and MENA. Native Urdu, Hindi, Arabic, English, and Punjabi —
                with local payment methods and local pricing.
              </p>
              <div className="inline-flex items-center gap-2.5 rounded-stellar-pill border border-ink-50 bg-gradient-to-r from-white to-ink-50 px-6 py-3 text-[16px] font-semibold text-ink-900">
                <GlobeIcon size={18} className="text-brand-500" />
                <span>Built for Pakistan & MENA</span>
              </div>
            </div>

            <div className="hidden w-[220px] flex-shrink-0 items-center justify-end sm:flex">
              <DotPattern />
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          FINAL CTA
      ===================================================================== */}
      <section className="bg-ink-50 sec-bottom-sp">
        <div className="mx-auto max-w-[1300px] px-6">
          <div className="flex flex-col items-center gap-0 overflow-hidden rounded-stellar-card bg-white px-6 pt-12 text-center sm:px-20 sm:pt-16">
            <div className="text-center">
              <h2 className="mb-4 text-[34px] font-bold leading-[1.3] text-ink-900 sm:text-[40px] lg:text-[44px]">
                Stop losing customers on WhatsApp.
              </h2>
              <p className="mx-auto mb-7 max-w-2xl text-[16px] leading-[1.6] text-ink-500 sm:text-[18px]">
                Every reply you miss is a customer your competitor wins.<br />
                Start free — 200 messages on us, no card required.
              </p>
              <Link href={`${APP_URL}/register`} className="btn-primary-lg">
                Get started
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3.33 8h9.34M12.67 8L8 3.33M12.67 8L8 12.67" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>

            <div className="relative -top-10 mt-8 w-full">
              <DotsBackground />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ----- Helper components ----- */

function ChatPreview() {
  return (
    <div className="w-full max-w-[420px] p-6 sm:p-10">
      <div className="overflow-hidden rounded-[24px] bg-ink-50 shadow-soft">
        <div className="flex items-center gap-3 border-b border-ink-100 bg-white px-5 py-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-500 text-white font-bold">W</div>
          <div className="flex-1">
            <div className="text-[14px] font-semibold text-ink-900">Waintel AI</div>
            <div className="text-[11px] text-brand-500">● Online</div>
          </div>
        </div>
        <div className="space-y-3 p-5">
          <div className="max-w-[80%] rounded-[16px] rounded-bl-[4px] bg-white px-4 py-3 text-[13px] text-ink-900 shadow-sm">
            Hi! I saw your ad for the 3-bed apartment in DHA. Is it still available?
          </div>
          <div className="ml-auto max-w-[85%] rounded-[16px] rounded-br-[4px] bg-brand-500 px-4 py-3 text-[13px] text-white">
            Yes, it's available! 1,800 sq ft, 3 beds, 3 baths. Want to schedule a viewing this week?
          </div>
          <div className="max-w-[70%] rounded-[16px] rounded-bl-[4px] bg-white px-4 py-3 text-[13px] text-ink-900 shadow-sm">
            Yes please. Saturday morning?
          </div>
          <div className="ml-auto max-w-[85%] rounded-[16px] rounded-br-[4px] bg-brand-500 px-4 py-3 text-[13px] text-white">
            Booked for Saturday 11:00 AM. Sara from our team will WhatsApp you Friday to confirm.
          </div>
        </div>
        <div className="flex items-center gap-2 border-t border-ink-100 bg-white px-4 py-3">
          <input disabled placeholder="Message…" className="flex-1 rounded-stellar-pill bg-ink-50 px-4 py-2 text-[13px] text-ink-500" />
          <button className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-500 text-white" aria-label="Send">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M5 12l14-7-7 14-2-5-5-2z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /></svg>
          </button>
        </div>
      </div>
    </div>
  );
}

function EcosystemDiagram() {
  return (
    <svg viewBox="0 0 900 360" className="w-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="hub" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1D9E75" />
          <stop offset="100%" stopColor="#0F6E56" />
        </linearGradient>
      </defs>
      {[
        [120, 90], [320, 60], [580, 60], [780, 90],
        [120, 270], [320, 300], [580, 300], [780, 270],
      ].map(([x, y], i) => (
        <line key={i} x1={x} y1={y} x2={450} y2={180} stroke="#1D9E75" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.35" />
      ))}

      <g transform="translate(370, 100)">
        <rect width="160" height="160" rx="80" fill="url(#hub)" />
        <text x="80" y="92" textAnchor="middle" fill="white" fontSize="22" fontWeight="700">Waintel</text>
        <text x="80" y="115" textAnchor="middle" fill="white" fontSize="13" opacity="0.85">AI Agent</text>
      </g>

      {[
        { x: 60, y: 50, label: "WhatsApp" },
        { x: 260, y: 20, label: "Leads" },
        { x: 520, y: 20, label: "Orders" },
        { x: 720, y: 50, label: "Bookings" },
        { x: 60, y: 230, label: "CRM" },
        { x: 260, y: 260, label: "Campaigns" },
        { x: 520, y: 260, label: "Intelligence" },
        { x: 720, y: 230, label: "Analytics" },
      ].map((n) => (
        <g key={n.label} transform={`translate(${n.x},${n.y})`}>
          <rect width="120" height="60" rx="14" fill="white" stroke="#EAEAF0" strokeWidth="1.5" />
          <text x="60" y="36" textAnchor="middle" fontSize="14" fill="#0B1319" fontWeight="600">{n.label}</text>
        </g>
      ))}
    </svg>
  );
}

function DotPattern() {
  return (
    <svg viewBox="0 0 200 180" className="w-full" xmlns="http://www.w3.org/2000/svg">
      {Array.from({ length: 14 }).map((_, r) =>
        Array.from({ length: 16 }).map((__, c) => {
          const cx = c * 12 + 6;
          const cy = r * 12 + 6;
          const isCore = Math.abs(cx - 100) < 50 && Math.abs(cy - 90) < 50;
          return (
            <circle
              key={`${r}-${c}`}
              cx={cx}
              cy={cy}
              r={isCore ? 2.5 : 1.5}
              fill={isCore ? "#1D9E75" : "#D6D6E0"}
              opacity={isCore ? 1 : 0.7}
            />
          );
        })
      )}
    </svg>
  );
}

function DotsBackground() {
  return (
    <svg viewBox="0 0 1200 200" className="w-full" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      {Array.from({ length: 8 }).map((_, r) =>
        Array.from({ length: 50 }).map((__, c) => {
          const cx = c * 24 + 12;
          const cy = r * 24 + 12;
          return <circle key={`${r}-${c}`} cx={cx} cy={cy} r="1.5" fill="#D6D6E0" />;
        })
      )}
    </svg>
  );
}
