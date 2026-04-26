import Link from "next/link";
import { APP_REGISTER_URL, pageMetadata, SITE_URL } from "@/lib/seo";
import { WhatsAppConversation, type WAMessage } from "@/components/WhatsAppConversation";
import {
  ChatIcon, CardIcon, RefreshIcon, TargetIcon, BoltIcon, MapPinIcon, PlugIcon, ShieldIcon,
} from "@/components/Icons";

export const metadata = pageMetadata({
  title: "Features",
  description:
    "Every Ghost Employee capability — Voice Notes, Payment-in-chat, Business Pulse AI, Smart Follow-up, Lead Qualification, Multi-location Routing, Agency White-label, Public API.",
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

const VOICE_CHAT: WAMessage[] = [
  { side: "in", type: "voice", durationSec: 12, time: "10:14", status: "read" },
  { side: "out", type: "text", text: "Hi! Thanks for asking about the 3-bed downtown property.\n\nWhat's your approximate budget?", time: "10:14" },
];

const COMMERCE_CHAT: WAMessage[] = [
  { side: "in", type: "text", text: "I'd like 2 chicken pasta", time: "20:14", status: "read" },
  { side: "out", type: "text", text: "Total: $24.50 (incl. delivery)\n\nstripe.com/wt/ord/1042 — tap to pay", time: "20:14" },
  { side: "in", type: "image", placeholder: "easypaisa", time: "20:18", status: "read" },
  { side: "out", type: "text", text: "✓ Paid! ETA 25 minutes.", time: "20:18" },
];

const PULSE_CHAT: WAMessage[] = [
  { side: "out", type: "text", text: "🌅 Good morning, Daniel!\n\nYour business yesterday:\n📦 Orders: 47 (+12%)\n💰 Revenue: $1,820\n💬 Chats: 312 (94% by Ghost Employee)\n🚨 Missed: 2\n\n💡 Insight: Lasagna sold out by 8 PM — 7 customers asked after. Worth more stock?", time: "08:00" },
];

const FOLLOWUP_CHAT: WAMessage[] = [
  { side: "out", type: "text", text: "Hi Sara, you asked about the lasagna yesterday. 👋\n\nTonight's lasagna is $12 (10% off — limited time).\n\nOrder one?", time: "13:42" },
  { side: "in", type: "text", text: "yes please, just got busy yesterday", time: "13:43", status: "read" },
];

const FEATURES: FeatureBlock[] = [
  {
    id: "voice-notes",
    eyebrow: "Voice Note Intelligence",
    title: "Customers speak. Your bot listens.",
    description:
      "A huge share of WhatsApp traffic is voice notes. Most bots ignore them. Waintel transcribes and replies in the same language — under 4 seconds.",
    bullets: [
      "Whisper-powered transcription, accurate across accents",
      "Auto language detection per message",
      "Replies in the same language the customer used",
      "Cost is fractions of a cent per voice note — negligible vs. lost sale",
    ],
    Icon: ChatIcon,
    visual: <FeatureMockup messages={VOICE_CHAT} businessName="Northbridge Properties" />,
  },
  {
    id: "payments-in-chat",
    eyebrow: "Payment-in-Chat",
    title: "Complete transactions inside WhatsApp.",
    description:
      "Customer says 'I want to order' → bot confirms items → collects address → sends a Stripe payment link → customer pays → confirmation captured → order confirmed. All inside WhatsApp.",
    bullets: [
      "Stripe + cards globally",
      "Cash on delivery flow with confirmation",
      "Per-merchant payment configuration",
      "Regional payment methods supported on request",
    ],
    Icon: CardIcon,
    visual: <FeatureMockup messages={COMMERCE_CHAT} businessName="Bella's Bistro" />,
  },
  {
    id: "business-pulse",
    eyebrow: "Business Pulse AI",
    title: "Daily business briefing at 8 AM. On WhatsApp.",
    description:
      "Every morning you wake up knowing exactly how your business performed yesterday. Orders, revenue, missed sales, AI-generated insights — delivered to your personal WhatsApp at the time you choose. No dashboard login needed.",
    bullets: [
      "Daily summary of orders, revenue, conversations handled",
      "AI-generated insights on what to improve",
      "Sent to YOUR WhatsApp (not customer-facing)",
      "Configurable time, timezone-aware",
    ],
    Icon: RefreshIcon,
    visual: <FeatureMockup messages={PULSE_CHAT} businessName="Waintel Pulse" />,
  },
  {
    id: "follow-up",
    eyebrow: "Smart Follow-up Engine",
    title: "15-25% of lost sales — recovered.",
    description:
      "Customer asks about pricing then disappears. Old way: sale lost forever. Waintel way: bot waits 30 mins, 2 hours, 24 hours — then sends a perfectly timed message referencing exactly what they asked about. A/B tested message variants pick the best automatically.",
    bullets: [
      "Configurable trigger windows (cart abandon, no-reply, post-purchase)",
      "AI-personalized message per recipient",
      "A/B/C testing of variants with auto-winner",
      "Conversion tracking per campaign",
    ],
    Icon: BoltIcon,
    visual: <FeatureMockup messages={FOLLOWUP_CHAT} businessName="Bella's Bistro" />,
  },
  {
    id: "lead-qualification",
    eyebrow: "Lead Qualification",
    title: "Only talk to serious buyers.",
    description:
      "For each industry, the bot collects the right qualifying info before alerting your team. You receive only 🔥 Hot Leads. The bot handles the rest.",
    bullets: [
      "Industry-aware qualifying questions",
      "Lead score 1-10 with explainable reasons attached",
      "Auto-label: 🔥 Hot / 🟡 Warm / ❄️ Cold",
      "Push to HubSpot, Pipedrive, Zoho, Google Sheets via webhooks",
    ],
    Icon: TargetIcon,
    visual: <LeadQualMockup />,
  },
  {
    id: "multi-location",
    eyebrow: "Multi-Location Routing",
    title: "One number. Multiple branches. Smart routing.",
    description:
      "Customer says 'do you have a downtown branch?' → bot detects the location → responds with that branch's address, hours, phone. If that branch is closed, automatically routes to the nearest open branch.",
    bullets: [
      "AI-powered location detection from natural language",
      "Per-branch hours, menus, contact info",
      "Auto-fallback to nearest open branch",
      "Service-aware routing (e.g. 'cardiology downtown' → right doctor at downtown branch)",
    ],
    Icon: MapPinIcon,
    visual: <BranchRoutingMockup />,
  },
  {
    id: "agency",
    eyebrow: "Agency White-Label",
    title: "Sell Waintel as your own product.",
    description:
      "Digital agencies can resell Waintel under their own brand, logo, and domain. Your clients see your brand. You keep the margin. Manage up to 50 client bots from one dashboard.",
    bullets: [
      "Custom logo, primary color, custom domain",
      "Client management dashboard with per-client revenue",
      "Sub-account creation in one click",
      "Hide all Waintel branding (Agency tier only)",
    ],
    Icon: ShieldIcon,
    visual: <AgencyMockup />,
  },
  {
    id: "api",
    eyebrow: "Public API + Webhooks",
    title: "Plug Waintel into your stack in an afternoon.",
    description:
      "Full REST API for messages, contacts, orders, leads, and campaigns. HMAC-signed webhooks for every event. Agency-tier feature.",
    bullets: [
      "REST endpoints for all core resources",
      "Webhooks: message.in, lead.qualified, order.placed, campaign.completed",
      "API keys with per-key scope and rate limits",
      "Sliding-window rate limit + usage analytics",
    ],
    Icon: PlugIcon,
    visual: <ApiMockup />,
  },
];

export default function FeaturesPage() {
  return (
    <div>
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

      <section className="hero-bg relative -mt-[76px] overflow-hidden pt-[76px]">
        <div className="mx-auto max-w-[1300px] px-6 py-16 sm:py-24">
          <div className="mx-auto max-w-[860px] text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-stellar-pill bg-white/10 px-4 py-1.5 text-[13px] font-semibold text-white backdrop-blur-sm">
              <ShieldIcon size={14} />
              <span>Every capability your Ghost Employee needs</span>
            </div>
            <h1 className="mb-5 text-[34px] font-bold leading-[1.1] text-white sm:text-[44px] lg:text-[56px]">
              Built for{" "}
              <span className="text-brand-highlight">how real businesses sell.</span>
            </h1>
            <p className="mx-auto max-w-[680px] text-[15px] leading-[1.6] text-white/95 sm:text-[17px]">
              No feature exists without a real business reason. Voice notes,
              payment-in-chat, multilingual, multi-location — every capability built
              for the way customers actually message businesses on WhatsApp.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link href={APP_REGISTER_URL} target="_blank" rel="noopener noreferrer" className="btn-dark">
                Start free trial — 10 min setup
                <ArrowRight />
              </Link>
              <Link href="/pricing" className="btn-ghost-light">
                See pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

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

                  <div className="flex flex-1 items-center justify-center bg-ink-50 p-8 sm:p-12 lg:p-16">
                    {f.visual}
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </div>

      <section className="bg-ink-50 sec-bottom-sp">
        <div className="mx-auto max-w-[1300px] px-6">
          <div className="rounded-stellar-card bg-brand-500 px-6 py-12 text-center text-white sm:px-20 sm:py-16">
            <h2 className="mb-4 text-[32px] font-bold leading-[1.3] text-white sm:text-[40px] lg:text-[44px]">
              See it work on your own WhatsApp number.
            </h2>
            <p className="mx-auto mb-7 max-w-2xl text-[16px] leading-[1.6] text-white/90 sm:text-[18px]">
              14-day free trial. No card required. Live in 10 minutes.
            </p>
            <Link
              href={APP_REGISTER_URL} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-stellar-pill border-2 border-white bg-transparent px-8 py-4 text-[16px] font-semibold text-white transition-all hover:bg-white hover:text-brand-500"
            >
              Start your free trial
              <ArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureMockup({ messages, businessName }: { messages: WAMessage[]; businessName: string }) {
  return (
    <div className="scale-90">
      <WhatsAppConversation
        businessName={businessName}
        businessSubtitle="online · Ghost Employee active"
        messages={messages}
      />
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

function LeadQualMockup() {
  return (
    <MockCard>
      <div className="mb-3 text-[12px] font-semibold uppercase tracking-wider text-ink-400">Lead detail</div>
      <div className="mb-1 flex items-center justify-between">
        <span className="text-[18px] font-bold text-ink-900">Daniel Hayes</span>
        <span className="rounded-stellar-pill bg-[#FFE5E5] px-3 py-1 text-[11px] font-bold text-[#D71F1F]">🔥 HOT</span>
      </div>
      <div className="mb-4 text-[13px] text-ink-500">+1 555 0123 · Downtown district</div>
      <div className="mb-3 flex items-center justify-between rounded-stellar-md bg-brand-50 px-4 py-3">
        <span className="text-[13px] font-semibold text-brand-700">Score</span>
        <span className="text-[20px] font-bold text-brand-700">87 / 100</span>
      </div>
      <div className="space-y-1.5 text-[12px] text-ink-500">
        <div className="flex justify-between"><span>Budget</span><span className="font-semibold text-ink-900">$650K</span></div>
        <div className="flex justify-between"><span>Timeline</span><span className="font-semibold text-ink-900">Within 30 days</span></div>
        <div className="flex justify-between"><span>Visit booked</span><span className="font-semibold text-brand-500">Saturday 11 AM</span></div>
      </div>
    </MockCard>
  );
}

function BranchRoutingMockup() {
  return (
    <MockCard>
      <div className="mb-4 text-[12px] font-semibold uppercase tracking-wider text-ink-400">Multi-branch routing</div>
      <div className="space-y-3">
        {[
          { city: "Downtown", status: "Open · 24/7", routed: true },
          { city: "Westside", status: "Closed · opens 10 AM", routed: false },
          { city: "Northgate", status: "Open · until 11 PM", routed: false },
          { city: "Eastpark", status: "Open · until 11 PM", routed: false },
        ].map((b) => (
          <div key={b.city} className={`flex items-center justify-between rounded-stellar-md px-4 py-3 ${b.routed ? "bg-brand-500 text-white" : "bg-ink-50 text-ink-900"}`}>
            <div>
              <div className="text-[14px] font-semibold">{b.city}</div>
              <div className={`text-[11px] ${b.routed ? "text-white/85" : "text-ink-500"}`}>{b.status}</div>
            </div>
            {b.routed && <span className="text-[11px] font-bold">→ ROUTED</span>}
          </div>
        ))}
      </div>
      <div className="mt-3 text-[11px] text-ink-500">Customer said: "do you deliver downtown?"</div>
    </MockCard>
  );
}

function AgencyMockup() {
  return (
    <MockCard>
      <div className="mb-4 text-[12px] font-semibold uppercase tracking-wider text-ink-400">Agency dashboard · Your brand</div>
      <div className="space-y-2.5">
        {[
          { client: "Bella's Bistro",          margin: "$92" },
          { client: "Northbridge Properties",  margin: "$148" },
          { client: "Wellbridge Clinic",       margin: "$76" },
          { client: "Northgate Academy",       margin: "$104" },
        ].map((c) => (
          <div key={c.client} className="flex items-center justify-between rounded-stellar-md bg-ink-50 px-4 py-3 text-[13px]">
            <span className="font-semibold text-ink-900">{c.client}</span>
            <span className="font-bold text-brand-500">+{c.margin}/mo</span>
          </div>
        ))}
      </div>
      <div className="mt-3 border-t border-ink-100 pt-3 text-right">
        <div className="text-[11px] text-ink-500">Monthly profit</div>
        <div className="text-[18px] font-bold text-brand-500">$420</div>
      </div>
    </MockCard>
  );
}

function ApiMockup() {
  return (
    <MockCard className="font-mono">
      <div className="mb-3 font-sans text-[12px] font-semibold uppercase tracking-wider text-ink-400">POST /v1/messages/send</div>
      <div className="rounded-stellar-md bg-ink-900 p-4 text-[12px] leading-[1.5] text-white">
        <div><span className="text-brand-highlight">curl</span> -X POST \</div>
        <div className="pl-4">https://api.waintel.io/v1/messages/send \</div>
        <div className="pl-4">-H "X-Api-Key: wnt_..." \</div>
        <div className="pl-4">-d '{`{"to":"+1...","text":"..."}`}'</div>
      </div>
      <div className="mt-3 font-sans text-[12px] text-ink-500">→ <span className="font-semibold text-brand-500">200</span> message_id: msg_abc123</div>
    </MockCard>
  );
}
