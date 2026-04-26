import Link from "next/link";
import { APP_URL, WA_LINK, pageMetadata } from "@/lib/seo";
import { WhatsAppConversation, type WAMessage } from "@/components/WhatsAppConversation";
import {
  HomeIcon, StethoscopeIcon, ShoppingBagIcon, GraduationIcon, HotelIcon,
  ChatIcon, CardIcon, RefreshIcon, BoltIcon, GlobeIcon,
  TargetIcon, MapPinIcon,
  ShieldIcon, ZapSmallIcon, KeyIcon, PlugSmallIcon,
  InstagramIcon, MessengerIcon, CommentDmIcon,
} from "@/components/Icons";

export const metadata = pageMetadata({
  description:
    "Your WhatsApp Ghost Employee answers customers 24/7, takes orders, qualifies leads, books appointments, and follows up on missed sales — automatically. Multilingual, multi-channel, live in 10 minutes.",
  path: "/",
});

const ArrowRight = () => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
    <path d="M6.5 10.5L9.5 7.5L6.5 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
  </svg>
);

const PlayIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M8 5v14l11-7z" />
  </svg>
);

const CheckIcon = ({ color = "#1D9E75" }: { color?: string }) => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
    <path d="M4 7.5L7 10L11 5" stroke={color} strokeWidth="2" />
  </svg>
);

const HERO_CHAT: WAMessage[] = [
  { side: "in", type: "text", text: "Hey, do you have any tables for 4 tonight?", time: "21:34", status: "read" },
  { side: "out", type: "text", text: "Hi! 🍽️\n\nWe have:\n• 7:30 PM — patio\n• 8:15 PM — main dining\n• 9:00 PM — patio\n\nWhich works?", time: "21:34" },
  { side: "in", type: "text", text: "8:15 main dining please", time: "21:35", status: "read" },
  { side: "out", type: "text", text: "Booked ✓\n\nTable for 4 at 8:15 PM, main dining.\nName for the reservation?", time: "21:35" },
  { side: "in", type: "text", text: "Sara, party of 4", time: "21:35", status: "read" },
  { side: "out", type: "text", text: "All set, Sara! 🎉\n\nWe'll send a reminder 1h before.", time: "21:36" },
];

const FEATURED_CHAT: WAMessage[] = [
  { side: "in", type: "voice", durationSec: 9, time: "10:14", status: "read" },
  { side: "out", type: "text", text: "Hi! Thanks for asking about the 3-bed downtown listing.\n\nWhat's your approximate budget?", time: "10:14" },
  { side: "in", type: "text", text: "around $650k, within 30 days", time: "10:15", status: "read" },
  { side: "out", type: "text", text: "Perfect — 2 listings fit.\n\n🏡 1,800 sqft — $645k\n🏡 2,000 sqft — $670k\n\nWhen would you like to view?", time: "10:15" },
  { side: "in", type: "text", text: "Saturday morning", time: "10:16", status: "read" },
  { side: "out", type: "text", text: "Booked Saturday 11:00 AM ✓\nTagged 🔥 HOT — alerted to agent.", time: "10:16" },
];

const PROBLEMS = [
  { headline: "Messages come in at midnight, customer is gone by morning.", desc: "Off-hours WhatsApp inquiries die overnight. Your competitor replies first, you lose the deal." },
  { headline: "Same 50 questions, every single day.", desc: "Hours, pricing, availability, location — same questions, hundreds of times. Your team burns out." },
  { headline: "Manual order taking, manual follow-up, manual everything.", desc: "Take the order, chase the payment, send the update. Every step is on you. There's no scale path." },
];

const STEPS = [
  { n: "01", title: "Setup in 10 minutes", body: "Add your business, upload products or services, connect WhatsApp. That's it.", Icon: BoltIcon },
  { n: "02", title: "Your Ghost Employee handles it", body: "Customer messages, voice notes, orders, payments — handled 24/7 in your customer's language.", Icon: ChatIcon },
  { n: "03", title: "You watch the revenue come in", body: "Dashboard shows orders, payments, qualified leads. You run the business, the bot runs the conversations.", Icon: TargetIcon },
];

const WHY_CHOOSE = [
  { title: "Voice Note Intelligence", desc: "A huge share of WhatsApp traffic is voice notes. Most bots ignore them. Waintel transcribes and replies in the same language — under 4 seconds.", Icon: ChatIcon },
  { title: "Payment-in-Chat", desc: "Stripe links, cards, and COD — all sent and confirmed inside WhatsApp. No app downloads, no website visits.", Icon: CardIcon },
  { title: "Business Pulse AI", desc: "Every morning at 8 AM, you get a WhatsApp report with orders, revenue, missed opportunities, and AI-generated insights.", Icon: RefreshIcon },
];

const INDUSTRIES = [
  { slug: "restaurant", name: "Restaurant & Food", desc: "Menu queries, table bookings, ordering, payments, delivery updates.", Icon: ShoppingBagIcon },
  { slug: "real-estate", name: "Real Estate", desc: "Qualify leads automatically. Budget, area, timeline — bot asks, you only see hot leads.", Icon: HomeIcon },
  { slug: "hotels", name: "Hotels & Hospitality", desc: "Direct bookings, check-in info, attractions guide, upsells. 24/7.", Icon: HotelIcon },
  { slug: "healthcare", name: "Healthcare & Clinics", desc: "Appointment booking, medication availability, reminders. Never miss a patient.", Icon: StethoscopeIcon },
  { slug: "education", name: "Education & Academies", desc: "Course info, fees, trial-class bookings, fee reminders. Admission season handled.", Icon: GraduationIcon },
  { slug: "ecommerce", name: "E-commerce", desc: "Size guides, order tracking, returns, cart recovery — customers never wait.", Icon: GlobeIcon },
];

const COMING_SOON = [
  { title: "Instagram DM automation", desc: "Bring your Ghost Employee to Instagram Direct Messages. Same intelligence, new channel.", Icon: InstagramIcon },
  { title: "Facebook Messenger", desc: "Handle Messenger inquiries with the same AI that powers your WhatsApp.", Icon: MessengerIcon },
  { title: "Comment-to-DM (Instagram)", desc: "Auto-reply to Instagram comments and slide into DM with a personalized follow-up.", Icon: CommentDmIcon },
];

export default function HomePage() {
  return (
    <div>
      {/* ====================================================================
          HERO  — Stellar hero-banner structure with Waintel content.
          HTML structure + CSS classes are 1:1 with Stellar's
          home.component.html / home.component.css. Only the text, SVG icons,
          and image differ. CSS lives in globals.css under "STELLAR HERO".
      ===================================================================== */}
      <section className="hero-banner">
        <div className="hero-banner-bg">
          <div className="hero-bg-image"></div>
        </div>

        <div className="container">
          <div className="hero-content">
            {/* Top Badge */}
            <div className="privacy-badge">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 1L2 3.5V7.25C2 10.9625 4.56 14.4425 8 15.25C11.44 14.4425 14 10.9625 14 7.25V3.5L8 1Z"
                  stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M5.5 8L7.25 9.75L10.75 6.25" stroke="white" strokeWidth="1.2" strokeLinecap="round"
                  strokeLinejoin="round" />
              </svg>
              <span>The Ghost Employee for your business</span>
            </div>

            {/* Divider Line */}
            <div className="hero-divider"></div>

            {/* Main Heading — Waintel two-line, second line highlighted */}
            <h1 className="hero-title">
              <span className="hero-title-white">Hire a Ghost Employee.</span>
              <span className="hero-title-line"><span className="hero-title-highlight">Close customers 24/7.</span></span>
            </h1>

            {/* Description */}
            <p className="hero-description">
              Waintel answers customers, takes orders, qualifies leads, books appointments,
              and follows up on missed sales — automatically. <strong>While you sleep.</strong>
            </p>

            {/* CTA Buttons */}
            <div className="hero-buttons">
              <a href={`${APP_URL}/register`} className="btn-stellar-id">
                Start free trial — 10 min setup
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.5 10.5L9.5 7.5L6.5 4.5" stroke="white" strokeWidth="2" strokeLinecap="square" />
                </svg>
              </a>
              <a href="#how-it-works" className="btn-explore">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 5v14l11-7z" />
                </svg>
                Watch 3-min demo
              </a>
            </div>

            {/* Feature Badges — 4 Waintel value props with white outline icons */}
            <div className="hero-features">
              <div className="feature-item">
                {/* Shield — 14-day free trial */}
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.5 4.5L7.5 0.5L14.5 4.5V5.21989C14.5 9.52908 11.6434 13.3162 7.5 14.5C3.35661 13.3162 0.5 9.52908 0.5 5.21989V4.5Z"
                    stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>14-day free trial</span>
              </div>
              <div className="feature-item">
                {/* Key — No card required */}
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="5" cy="9.5" r="2.5" stroke="white" />
                  <path d="M6.8 7.7L13.5 1M11 3.5L13 5.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>No card required</span>
              </div>
              <div className="feature-item">
                {/* Lightning — 10-min setup */}
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 1L2.5 8.5H7L7 14L12.5 6.5H8L8 1Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>10-min setup</span>
              </div>
              <div className="feature-item">
                {/* Card — Stripe + cards */}
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="1" y="3" width="13" height="9" rx="1.5" stroke="white" />
                  <path d="M1 6.5H14M3.5 9.5H5.5" stroke="white" strokeLinecap="round" />
                </svg>
                <span>Stripe + cards</span>
              </div>
            </div>

            {/* Region / trust badge — replaces Stellar's Swiss Privacy badge */}
            <div className="swiss-badge">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 18.5C12 16 17 12 17 8a7 7 0 1 0-14 0c0 4 5 8 7 10.5z" stroke="#1D9E75" strokeWidth="1.5" strokeLinejoin="round" />
                <circle cx="10" cy="8" r="2.5" stroke="#1D9E75" strokeWidth="1.5" />
              </svg>
              <span>Multilingual · Multi-channel · Global</span>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          PROBLEM  — overlap card, light bg, rounded-top (Stellar ecosystem
          pattern). Cards have inset light-grey style, NOT full-width dark.
      ===================================================================== */}
      <section className="relative -mt-[60px] rounded-t-[44px] bg-ink-50 pt-20">
        <div className="mx-auto max-w-[1300px] px-6">
          <div className="rounded-stellar-card bg-white p-8 sm:p-12 lg:p-16">
            <div className="mb-10 text-center">
              <h2 className="home-section-title mb-4">Sound familiar?</h2>
              <p className="mx-auto max-w-2xl text-[16px] leading-[1.6] text-ink-500 sm:text-[20px]">
                Three reasons every business with a WhatsApp number needs a Ghost Employee.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {PROBLEMS.map((p, i) => (
                <div key={i} className="rounded-stellar-md bg-ink-50 p-7">
                  <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#FFE5E5] text-[16px] font-bold text-[#D71F1F]">
                    {i + 1}
                  </div>
                  <h3 className="mb-3 text-[17px] font-bold leading-[1.4] text-ink-900">
                    "{p.headline}"
                  </h3>
                  <p className="text-[14px] leading-[1.6] text-ink-500">{p.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <p className="inline-flex items-center gap-3 rounded-stellar-pill bg-brand-50 px-6 py-3 text-[15px] font-semibold text-brand-700 sm:text-[17px]">
                <CheckIcon />
                Waintel ends all of this.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          FEATURED PRODUCT  — Stellar phone-section pattern: white card
          44px, side-by-side content + WhatsApp visual
      ===================================================================== */}
      <section className="bg-ink-50 sec-bottom-sp pt-12">
        <div className="mx-auto max-w-[1300px] px-6">
          <div className="flex flex-col items-stretch overflow-hidden rounded-stellar-card bg-white lg:flex-row lg:items-end">
            <div className="flex-1 p-8 sm:p-12 lg:p-20">
              <div className="mb-6 flex flex-col items-start gap-6 sm:flex-row sm:items-center">
                <div className="flex h-[70px] w-[70px] flex-shrink-0 items-center justify-center rounded-[15px] border-2 border-brand-500 bg-ink-50">
                  <ChatIcon size={36} className="text-brand-500" />
                </div>
                <h2 className="home-section-title">
                  Waintel Ghost Employee<br />
                  <span className="text-ink-900">— Built to close.</span>
                </h2>
              </div>

              <p className="mb-6 text-[16px] leading-[1.7] text-ink-500">
                Waintel doesn't just reply — it qualifies leads, takes orders,
                books appointments, and recovers lost sales. It speaks your customer's
                language, understands your industry, and only escalates to your team
                when it actually matters.
              </p>

              <ul className="mb-6 list-none space-y-2 p-0">
                {[
                  "Pre-trained for your industry — Real Estate, Healthcare, Hotels, Education, E-commerce, Restaurant",
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
              <div className="p-6 sm:p-10">
                <WhatsAppConversation
                  businessName="Northbridge Properties"
                  businessSubtitle="online · Ghost Employee active"
                  messages={FEATURED_CHAT}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          HOW IT WORKS  — white card with 3 step cards inset
      ===================================================================== */}
      <section id="how-it-works" className="bg-ink-50 sec-bottom-sp">
        <div className="mx-auto max-w-[1300px] px-6">
          <div className="rounded-stellar-card bg-white p-6 sm:p-12 lg:p-16">
            <div className="mb-12 text-center">
              <h2 className="home-section-title">Live in 10 minutes. Closing in 24 hours.</h2>
              <p className="mx-auto mt-4 max-w-2xl text-[16px] leading-[1.6] text-ink-500 sm:text-[20px]">
                No engineers. No integrations. No consultants. Just three steps.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {STEPS.map((s) => (
                <div key={s.n} className="rounded-stellar-md border border-ink-100 bg-white p-8">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="inline-flex items-center rounded-stellar-pill bg-brand-50 px-4 py-1.5 text-[12px] font-bold tracking-wider text-brand-700">
                      STEP {s.n}
                    </div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-[12px] bg-brand-500 text-white">
                      <s.Icon size={20} />
                    </div>
                  </div>
                  <h3 className="mb-3 text-[20px] font-bold text-ink-900">{s.title}</h3>
                  <p className="text-[15px] leading-[1.6] text-ink-500">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          WHY CHOOSE  — 3 transparent cards on light bg (Stellar
          why-choose-cards pattern with hover green border)
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
                <p className="m-0 text-[14px] leading-[1.6] text-ink-400">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          INDUSTRIES  — white card 80px padding, 3x2 grid of inset cards
          (Stellar max-protection pattern)
      ===================================================================== */}
      <section id="industries" className="bg-ink-50 sec-bottom-sp">
        <div className="mx-auto max-w-[1300px] px-6">
          <div className="rounded-stellar-card bg-white p-6 text-center sm:p-12 lg:p-20">
            <div className="mb-12">
              <h2 className="home-section-title">Built for the way you sell.</h2>
              <p className="mx-auto mt-4 max-w-2xl text-[16px] leading-[1.6] text-ink-500 sm:text-[20px]">
                Industry-trained agents that<br className="hidden lg:inline" /> understand your products and your customers.
              </p>
            </div>

            <div className="mx-auto mb-12 grid grid-cols-1 justify-center gap-6 md:grid-cols-3">
              {INDUSTRIES.map((c) => (
                <Link
                  key={c.slug}
                  href={`/industries/${c.slug}`}
                  className="group flex max-w-[380px] flex-col items-center justify-self-center rounded-stellar-md bg-ink-50 p-8 text-center transition-all duration-200 hover:bg-brand-50 hover:-translate-y-1"
                >
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-[16px] bg-brand-500 text-white">
                    <c.Icon size={30} />
                  </div>
                  <h3 className="mb-3 text-[18px] font-bold leading-[1.4] text-ink-900">{c.name}</h3>
                  <p className="m-0 text-[14px] leading-[1.6] text-ink-500">{c.desc}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand-500 transition-all group-hover:gap-2.5">
                    See how it works <ArrowRight />
                  </span>
                </Link>
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
          COMING SOON  — channel expansion roadmap, white card on light bg
      ===================================================================== */}
      <section className="bg-ink-50 sec-bottom-sp">
        <div className="mx-auto max-w-[1300px] px-6">
          <div className="rounded-stellar-card bg-white p-6 sm:p-12 lg:p-16">
            <div className="mb-12 text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-stellar-pill bg-brand-50 px-4 py-1.5 text-[12px] font-bold uppercase tracking-wider text-brand-700">
                Roadmap
              </div>
              <h2 className="home-section-title">Coming soon — more channels.</h2>
              <p className="mx-auto mt-4 max-w-2xl text-[16px] leading-[1.6] text-ink-500 sm:text-[20px]">
                Your Ghost Employee, on every channel your customers actually use.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {COMING_SOON.map((c) => (
                <div
                  key={c.title}
                  className="relative flex flex-col rounded-stellar-md border-2 border-dashed border-ink-100 bg-ink-50 p-8"
                >
                  <span className="absolute right-5 top-5 inline-flex items-center rounded-stellar-pill bg-white px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-brand-700">
                    Coming soon
                  </span>
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-[14px] bg-brand-500 text-white">
                    <c.Icon size={24} />
                  </div>
                  <h3 className="mb-3 text-[18px] font-bold leading-[1.4] text-ink-900">{c.title}</h3>
                  <p className="m-0 text-[14px] leading-[1.6] text-ink-500">{c.desc}</p>
                </div>
              ))}
            </div>

            <p className="mt-10 text-center text-[14px] text-ink-500">
              Want early access? <a href="mailto:hello@waintel.ai" className="font-semibold text-brand-500 hover:text-brand-700">Email us</a> and we'll let you know when it ships.
            </p>
          </div>
        </div>
      </section>

      {/* ====================================================================
          PROOF / TESTIMONIALS  — white card with 3 testimonial cards inset
          (Stellar testimonial pattern, light bg not dark)
      ===================================================================== */}
      <section className="bg-ink-50 sec-bottom-sp">
        <div className="mx-auto max-w-[1300px] px-6">
          <div className="rounded-stellar-card bg-white p-6 sm:p-12 lg:p-16">
            <div className="mb-12 text-center">
              <h2 className="home-section-title">Real numbers from real businesses.</h2>
              <p className="mx-auto mt-4 max-w-2xl text-[16px] leading-[1.6] text-ink-500 sm:text-[20px]">
                From SMBs running Waintel right now.
              </p>
            </div>

            <div className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-3">
              {[
                { metric: "$320", label: "Average monthly revenue recovered via the smart follow-up engine" },
                { metric: "23 min", label: "Average end-to-end setup time" },
                { metric: "94%", label: "Of customer messages handled without human involvement" },
              ].map((s) => (
                <div key={s.label} className="rounded-stellar-md bg-ink-50 p-8 text-center">
                  <div className="mb-3 text-[40px] font-bold text-brand-500 sm:text-[44px]">{s.metric}</div>
                  <p className="m-0 text-[14px] leading-[1.6] text-ink-500 sm:text-[15px]">{s.label}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {[
                { biz: "Bella's Bistro", role: "Restaurant", quote: "We get 60+ orders per night now. They used to die overnight before someone replied. This is one hire that never takes a day off." },
                { biz: "Northbridge Properties", role: "Real Estate", quote: "Lead qualification saved our team 4 hours/day. Only hot leads reach us — junk gets filtered." },
                { biz: "Wellbridge Clinic", role: "Healthcare", quote: "Patients send voice notes in their language. We used to ignore them. Bot replies now. Bookings up 22%." },
              ].map((t) => (
                <div key={t.biz} className="rounded-stellar-md border border-ink-100 bg-white p-7">
                  <div className="mb-4 text-[14px] leading-[1.6] text-ink-700">"{t.quote}"</div>
                  <div className="border-t border-ink-100 pt-4">
                    <div className="text-[15px] font-bold text-ink-900">{t.biz}</div>
                    <div className="text-[12px] text-ink-500">{t.role} · Early Beta Customer</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          MULTILINGUAL / GLOBAL  — Stellar Made-in-Switzerland pattern:
          white card, 3-column with shield/content/dots
      ===================================================================== */}
      <section className="bg-ink-50 sec-bottom-sp">
        <div className="mx-auto max-w-[1300px] px-6">
          <div className="relative flex flex-col items-center justify-between gap-8 overflow-hidden rounded-stellar-card bg-white px-6 py-10 sm:flex-row sm:px-20 sm:py-16">
            <div className="flex w-[180px] flex-shrink-0 items-center justify-center">
              <div className="flex h-[120px] w-[120px] items-center justify-center rounded-full bg-brand-500 text-white sm:h-[160px] sm:w-[160px]">
                <GlobeIcon size={64} />
              </div>
            </div>

            <div className="max-w-[612px] flex-1 text-center">
              <h2 className="mb-4 text-[32px] font-bold text-ink-900 sm:text-[36px]">
                Multilingual by default.
              </h2>
              <p className="mb-6 text-[16px] leading-[1.7] text-ink-500 sm:text-[18px]">
                Your customers don't all speak English. Waintel auto-detects each
                customer's language and replies in the same one — natively, not translated.
                Voice notes too.
              </p>
              <div className="inline-flex items-center gap-2.5 rounded-stellar-pill border border-ink-50 bg-gradient-to-r from-white to-ink-50 px-6 py-3 text-[16px] font-semibold text-ink-900">
                <MapPinIcon size={18} className="text-brand-500" />
                <span>Works wherever WhatsApp does</span>
              </div>
            </div>

            <div className="hidden w-[220px] flex-shrink-0 items-center justify-end sm:flex">
              <DotPattern />
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          PRICING PREVIEW  — white card wrapper with 3 pricing cards
      ===================================================================== */}
      <section className="bg-ink-50 sec-bottom-sp">
        <div className="mx-auto max-w-[1300px] px-6">
          <div className="rounded-stellar-card bg-white p-6 sm:p-12 lg:p-16">
            <div className="mb-12 text-center">
              <h2 className="home-section-title">Simple pricing. No hidden fees.</h2>
              <p className="mx-auto mt-4 max-w-2xl text-[16px] leading-[1.6] text-ink-500 sm:text-[20px]">
                Start free. Pay only when you're ready.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {[
                { name: "Starter", price: "$29", best: false, sub: "For single-location businesses", features: ["1 WhatsApp number", "1,000 AI messages/mo", "Stripe + cards + COD", "1 industry blueprint", "Email support"], cta: "Start free trial" },
                { name: "Business", price: "$79", best: true, sub: "For growing businesses", features: ["5,000 AI messages/mo", "All industry blueprints", "Business Pulse AI daily report", "Lead qualification + scoring", "Multi-location routing"], cta: "Start free trial" },
                { name: "Agency", price: "$199", best: false, sub: "For digital agencies", features: ["20,000 AI messages/mo", "White-label dashboard", "Up to 50 client bots", "Public API + webhooks", "Dedicated support manager"], cta: "Contact sales" },
              ].map((p) => (
                <div key={p.name} className={`relative rounded-[20px] border-2 bg-white p-8 ${p.best ? "border-brand-500" : "border-ink-100"}`}>
                  {p.best && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-stellar-pill bg-brand-500 px-4 py-1 text-[12px] font-bold uppercase tracking-wider text-white">
                      Most Popular
                    </div>
                  )}
                  <div className="mb-1 text-[14px] font-semibold text-brand-700">{p.name}</div>
                  <div className="mb-2 flex items-baseline">
                    <span className="text-[40px] font-bold text-ink-900">{p.price}</span>
                    <span className="ml-1 text-[14px] text-ink-500">/month</span>
                  </div>
                  <p className="mb-6 text-[14px] text-ink-500">{p.sub}</p>
                  <ul className="mb-6 list-none space-y-2.5 p-0">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-[14px] text-ink-700">
                        <span className="mt-0.5 flex-shrink-0"><CheckIcon /></span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={p.name === "Agency" ? "/contact" : `${APP_URL}/register`}
                    className={p.best ? "btn-primary-block" : "btn-outline"}
                  >
                    {p.cta}
                  </Link>
                </div>
              ))}
            </div>

            <p className="mt-8 text-center text-[14px] text-ink-500">
              All plans include 14-day free trial. No credit card required. Cancel anytime.
            </p>
            <div className="mt-4 flex justify-center">
              <Link href="/pricing" className="text-[14px] font-semibold text-brand-500 hover:text-brand-700">
                See full pricing comparison →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          FINAL CTA  — Stellar pattern: centered white card on light bg,
          NOT full-width brand color
      ===================================================================== */}
      <section className="bg-ink-50 sec-bottom-sp">
        <div className="mx-auto max-w-[1300px] px-6">
          <div className="rounded-stellar-card bg-white px-6 py-12 text-center sm:px-20 sm:py-16">
            <h2 className="mb-4 text-[34px] font-bold leading-[1.3] text-ink-900 sm:text-[40px] lg:text-[44px]">
              Ready to hire your Ghost Employee?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-[16px] leading-[1.6] text-ink-500 sm:text-[18px]">
              Set up today. First month free. No card required.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href={`${APP_URL}/register`} className="btn-primary-lg">
                Start free trial — No card
                <ArrowRight />
              </Link>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-stellar-pill border-2 border-[#25D366] bg-transparent px-8 py-4 text-[16px] font-semibold text-[#1d8c47] transition-all hover:bg-[#25D366] hover:text-white"
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

/* ============================================================
   <HeroDeviceMockup />
   MacBook + iPhone composition. The laptop screen renders a
   miniature Waintel dashboard; the phone in front shows a live
   WhatsApp conversation. All pure CSS/SVG — no stock photos.
============================================================ */
function HeroDeviceMockup({ messages }: { messages: WAMessage[] }) {
  return (
    <div className="relative w-full max-w-[560px]">
      {/* Soft halo behind the devices */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 blur-3xl"
        style={{
          background:
            "radial-gradient(60% 60% at 70% 50%, rgba(123,229,191,0.35) 0%, transparent 70%)",
        }}
      />

      <MacLaptop>
        <DashboardPreview />
      </MacLaptop>

      {/* Floating phone — overlaps bottom-left of the laptop */}
      <div className="absolute -bottom-8 -left-2 w-[180px] sm:-left-4 sm:w-[210px] lg:-left-6 lg:w-[230px]">
        <div
          className="overflow-hidden rounded-[28px] border-[6px] border-[#0B1319] bg-[#0B1319]"
          style={{ filter: "drop-shadow(0 30px 60px rgba(11,19,25,0.35))" }}
        >
          {/* Mini phone notch */}
          <div className="relative h-3 bg-[#0B1319]">
            <div className="absolute left-1/2 top-0 h-2.5 w-16 -translate-x-1/2 rounded-b-[10px] bg-[#0B1319]" />
          </div>
          <div className="h-[360px] overflow-hidden bg-white sm:h-[400px] lg:h-[440px]">
            <WhatsAppConversation
              businessName="Bella's Bistro"
              businessSubtitle="online · Ghost Employee"
              messages={messages}
              showFrame={false}
            />
          </div>
          <div className="flex justify-center bg-[#0B1319] py-1.5">
            <div className="h-0.5 w-16 rounded-full bg-white/80" />
          </div>
        </div>
      </div>
    </div>
  );
}

function MacLaptop({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      {/* Screen + bezel */}
      <div
        className="relative overflow-hidden rounded-[14px] bg-[#0B1319] p-[6px] sm:p-[8px]"
        style={{ boxShadow: "0 24px 60px rgba(11,19,25,0.35)" }}
      >
        {/* Top bezel with camera dot */}
        <div className="absolute left-1/2 top-[6px] sm:top-[8px] h-[6px] -translate-x-1/2 sm:h-[8px]" />

        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[8px] bg-white">
          {/* Camera dot */}
          <div className="absolute left-1/2 top-[3px] z-10 h-1 w-1 -translate-x-1/2 rounded-full bg-[#444]" />
          {children}
        </div>
      </div>

      {/* Base / hinge */}
      <div
        className="relative -mt-[1px] h-[12px] rounded-b-[14px] sm:h-[14px]"
        style={{
          background: "linear-gradient(to bottom, #c5c8ce 0%, #9ea3ad 60%, #7d828c 100%)",
          width: "112%",
          marginLeft: "-6%",
        }}
      >
        {/* Trackpad notch */}
        <div className="absolute left-1/2 top-[1px] h-[3px] w-16 -translate-x-1/2 rounded-b-[6px] bg-[#5d626d]/40" />
      </div>
    </div>
  );
}

function DashboardPreview() {
  return (
    <div className="flex h-full w-full">
      {/* Sidebar */}
      <aside className="flex w-[28%] flex-col gap-1.5 bg-[#0F6E56] p-2 sm:p-3">
        <div className="mb-2 flex items-center gap-1.5">
          <div className="flex h-4 w-4 items-center justify-center rounded-[4px] bg-white text-[8px] font-bold text-[#0F6E56] sm:h-5 sm:w-5 sm:text-[10px]">W</div>
          <span className="text-[8px] font-bold text-white sm:text-[10px]">Waintel</span>
        </div>
        {[
          { label: "Dashboard", active: true },
          { label: "Conversations", active: false },
          { label: "Leads", active: false },
          { label: "Orders", active: false },
          { label: "Campaigns", active: false },
          { label: "Settings", active: false },
        ].map((it) => (
          <div
            key={it.label}
            className={`rounded-[4px] px-1.5 py-1 text-[7px] font-semibold sm:text-[9px] ${
              it.active ? "bg-white text-[#0F6E56]" : "text-white/85"
            }`}
          >
            {it.label}
          </div>
        ))}
      </aside>

      {/* Main */}
      <main className="flex-1 bg-[#F6F6FD] p-2 sm:p-3">
        {/* Header */}
        <div className="mb-2 flex items-center justify-between">
          <div className="text-[9px] font-bold text-[#0B1319] sm:text-[11px]">Today</div>
          <div className="flex h-3 w-3 items-center justify-center rounded-full bg-[#1D9E75] text-[6px] font-bold text-white sm:h-4 sm:w-4 sm:text-[8px]">
            A
          </div>
        </div>

        {/* Stat tiles */}
        <div className="mb-2 grid grid-cols-3 gap-1">
          {[
            { label: "Orders", val: "47", up: "+12%" },
            { label: "Revenue", val: "$1.8k", up: "+9%" },
            { label: "AI handled", val: "94%", up: "+3%" },
          ].map((s) => (
            <div key={s.label} className="rounded-[4px] bg-white p-1 sm:p-1.5">
              <div className="text-[6px] uppercase tracking-wider text-[#62626A] sm:text-[7px]">{s.label}</div>
              <div className="text-[10px] font-bold text-[#0B1319] sm:text-[12px]">{s.val}</div>
              <div className="text-[6px] font-semibold text-[#1D9E75] sm:text-[7px]">{s.up}</div>
            </div>
          ))}
        </div>

        {/* Conversations list */}
        <div className="rounded-[4px] bg-white p-1 sm:p-1.5">
          <div className="mb-1 flex items-center justify-between">
            <div className="text-[7px] font-bold text-[#0B1319] sm:text-[9px]">Live Conversations</div>
            <div className="text-[6px] text-[#62626A] sm:text-[7px]">5 active</div>
          </div>
          {[
            { who: "Sara M.", snip: "Booked for 8:15 PM ✓", tag: "Restaurant", color: "#1D9E75" },
            { who: "Daniel H.", snip: "Tagged 🔥 Hot lead", tag: "Real Estate", color: "#FF9D2E" },
            { who: "Liam K.", snip: "Trial class Sat 10AM", tag: "Education", color: "#5C6BFF" },
            { who: "Maya O.", snip: "Payment received ✓", tag: "E-commerce", color: "#1D9E75" },
          ].map((c, i) => (
            <div
              key={i}
              className={`flex items-center gap-1 py-0.5 text-[6px] sm:gap-1.5 sm:text-[8px] ${
                i !== 3 ? "border-b border-[#EAEAF0]" : ""
              }`}
            >
              <div
                className="flex h-3 w-3 flex-shrink-0 items-center justify-center rounded-full text-[5px] font-bold text-white sm:h-4 sm:w-4 sm:text-[7px]"
                style={{ background: c.color }}
              >
                {c.who[0]}
              </div>
              <div className="min-w-0 flex-1 truncate">
                <span className="font-semibold text-[#0B1319]">{c.who}</span>
                <span className="ml-1 text-[#62626A]">{c.snip}</span>
              </div>
              <span
                className="flex-shrink-0 rounded-[2px] px-1 py-px text-[5px] font-semibold sm:text-[6px]"
                style={{ color: c.color, background: c.color + "1a" }}
              >
                {c.tag}
              </span>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

/* HeroContent — single content block reused in both desktop overlay and
   mobile stacked layout. Matches Stellar's hero-content spec exactly:
   - 14px badge with 8px gap, mb-20px
   - 1px divider, white/25, mb-20px
   - Title: two block spans, 56px (lg) / 700 / line-height 1.3, second span has highlight
   - Description: 16px / 1.5 / white-95, max-w-700, mb-24px
   - CTAs: gap-16px, 16px/600, padding 16/24, radius 40px, mb-24px
   - Feature pills row: gap-10px, 14px white/95, mb-24px
   - Region badge (swiss-equivalent): 15px/600, white bg, padding 10/16, radius 40px
*/
function HeroContent() {
  return (
    <>
      <div className="mb-5 inline-flex items-center gap-2 text-[14px] text-white">
        <ShieldIcon size={16} />
        <span>The Ghost Employee for your business</span>
      </div>

      <div className="mb-5 h-px w-full max-w-[480px] bg-white/25" />

      {/* Stellar .hero-title spec: two block spans, 56px / 700 / line-height 1.3.
          Second span has the highlighted word inline (color #B8D4FF in Stellar,
          our brand-highlight green). Mobile drops to 34px. */}
      <h1 className="mb-5">
        <span className="block text-[34px] font-bold leading-[1.15] text-white sm:text-[44px] lg:text-[56px]">
          Hire a Ghost Employee.
        </span>
        <span className="mb-2.5 block text-[34px] font-bold leading-[1.15] text-white sm:text-[44px] lg:text-[56px]">
          Close customers on{" "}
          <span className="text-brand-highlight">WhatsApp 24/7.</span>
        </span>
      </h1>

      <p className="mb-6 max-w-[560px] text-[16px] font-normal leading-[1.5] text-white/95">
        Waintel answers customers, takes orders, qualifies leads, books
        appointments, and follows up on missed sales — automatically.
        <strong> While you sleep.</strong>
      </p>

      <div className="mb-6 flex flex-wrap items-center gap-4">
        <Link href={`${APP_URL}/register`} className="btn-dark">
          Start free trial — 10 min setup
          <ArrowRight />
        </Link>
        <Link href="#how-it-works" className="btn-ghost-light">
          <PlayIcon />
          Watch 3-min demo
        </Link>
      </div>

      <div className="mb-6 flex flex-wrap items-center gap-2.5">
        {[
          { Icon: ShieldIcon, label: "14-day free trial" },
          { Icon: KeyIcon, label: "No card required" },
          { Icon: ZapSmallIcon, label: "10-min setup" },
          { Icon: PlugSmallIcon, label: "Stripe + cards" },
        ].map((f) => (
          <div key={f.label} className="feature-pill-light">
            <f.Icon size={15} />
            <span>{f.label}</span>
          </div>
        ))}
      </div>

      <div className="feature-pill">
        <MapPinIcon size={15} className="text-brand-500" />
        <span className="font-semibold">Multilingual · Multi-channel · Global</span>
      </div>
    </>
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
