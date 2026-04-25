import {
  HomeIcon, StethoscopeIcon, ShoppingBagIcon, GraduationIcon, HotelIcon,
  TargetIcon, CartIcon, CalendarIcon, RefreshIcon, GlobeIcon, BoltIcon,
  ChatIcon, CardIcon,
} from "@/components/Icons";
import type { WAMessage } from "@/components/WhatsAppConversation";

export interface IndustryContent {
  slug: string;
  name: string;
  Icon: React.ComponentType<{ size?: number; className?: string }>;
  hero: {
    eyebrow: string;
    title: string;
    titleHighlight: string;
    description: string;
  };
  pains: { title: string; desc: string }[];
  useCases: { title: string; desc: string; Icon: React.ComponentType<{ size?: number; className?: string }> }[];
  conversation: { businessName: string; businessSubtitle: string; messages: WAMessage[] };
  proof: { metric: string; label: string }[];
  roi: string;
  faqs: { q: string; a: string }[];
}

export const INDUSTRIES: Record<string, IndustryContent> = {
  /* =================================================================
     RESTAURANT
  ================================================================= */
  "restaurant": {
    slug: "restaurant",
    name: "Restaurant & Food",
    Icon: ShoppingBagIcon,
    hero: {
      eyebrow: "Restaurant & Food",
      title: "Tonight's orders,",
      titleHighlight: "before they slip away.",
      description:
        "Waintel takes orders 24/7, sends payment links, confirms payment, and dispatches delivery — all on WhatsApp. Late-night orders never get missed again.",
    },
    pains: [
      { title: "Late orders die overnight", desc: "Orders that come in after closing get lost. By morning the customer has ordered from someone else." },
      { title: "50+ identical questions every day", desc: "Today's specials, delivery charges, hours, COD available? Same things, hundreds of times." },
      { title: "Payment chasing is a full-time job", desc: "Customer pays, sends a screenshot, you confirm. Multiply by dozens of orders. Hours wasted daily." },
    ],
    useCases: [
      { title: "WhatsApp order taking", desc: "Bot walks the customer through the menu, confirms items, captures the address, calculates the total. End-to-end.", Icon: CartIcon },
      { title: "Payment-in-chat", desc: "Stripe links, regional payment methods, COD — all sent in WhatsApp. Customer pays, bot confirms, order dispatched.", Icon: CardIcon },
      { title: "Daily specials auto-broadcast", desc: "Send today's menu to your regulars every morning. No staff needed.", Icon: BoltIcon },
      { title: "Cart recovery", desc: "Customer started an order then disappeared — bot follows up 30 mins later with a personalized nudge. Industry recovery: 22%.", Icon: RefreshIcon },
    ],
    conversation: {
      businessName: "Bella's Bistro",
      businessSubtitle: "online · Ghost Employee active",
      messages: [
        { side: "in", type: "text", text: "Hi, are you still open for delivery?", time: "21:34", status: "read" },
        { side: "out", type: "text", text: "Yes! 🍽️ Open until 11 PM.\n\nTonight's specials:\n• Beef Lasagna — $14.50\n• Margherita Pizza — $11.00\n• Truffle Risotto — $16.00\n\nWhat would you like?", time: "21:34" },
        { side: "in", type: "text", text: "2 lasagnas and 1 margherita please", time: "21:35", status: "read" },
        { side: "out", type: "text", text: "Order:\n2× Beef Lasagna — $29.00\n1× Margherita — $11.00\n\nDelivery: $4.50\nTotal: $44.50\n\nDelivery address?", time: "21:35" },
        { side: "in", type: "text", text: "412 Maple Street, Apt 6", time: "21:36", status: "read" },
        { side: "out", type: "text", text: "Got it ✓\n\nPayment options:\n💳 Card / Stripe link\n💵 Cash on delivery (+$2)\n\nWhich one?", time: "21:36" },
        { side: "in", type: "text", text: "card please", time: "21:37", status: "read" },
        { side: "out", type: "text", text: "stripe.com/wt/order/1042\n\nTap to pay $44.50.", time: "21:37" },
        { side: "in", type: "image", placeholder: "easypaisa", time: "21:42", status: "read" },
        { side: "out", type: "text", text: "Payment confirmed ✓\nOrder #1042 dispatched.\nETA: 30 minutes 🛵", time: "21:42" },
      ],
    },
    proof: [
      { metric: "+30%", label: "of overnight orders captured that previously went unanswered" },
      { metric: "22%", label: "of abandoned carts recovered by smart follow-up" },
      { metric: "<2 sec", label: "first-reply time, 24/7" },
    ],
    roi: "An average restaurant captures meaningful additional orders in the first month — usually paying for the platform several times over.",
    faqs: [
      { q: "Can the menu be updated daily?", a: "Yes. Update today's specials in the dashboard and the bot reflects the latest menu instantly." },
      { q: "Does the bot verify payment screenshots?", a: "The bot acknowledges the screenshot and captures payment confirmation text. Image-level OCR is on the roadmap; status can be reviewed manually for now." },
      { q: "Can it handle multiple branches?", a: "Yes. When a customer mentions a location, the bot routes to that branch's menu, hours, and contact info. Multi-location routing is built in." },
    ],
  },

  /* =================================================================
     REAL ESTATE
  ================================================================= */
  "real-estate": {
    slug: "real-estate",
    name: "Real Estate",
    Icon: HomeIcon,
    hero: {
      eyebrow: "Real Estate",
      title: "Only talk to serious buyers.",
      titleHighlight: "Hot leads only.",
      description:
        "Waintel automatically qualifies every inquiry — budget, area, timeline. Hot leads land in your inbox. Time-wasters never reach you.",
    },
    pains: [
      { title: "70% of inquiries are time-wasters", desc: "Your agents waste hours on people who'll never buy. Waintel filters them out before they reach you." },
      { title: "Slow responses kill deals", desc: "Buyers ghost in 30 minutes. Waintel replies in under 60 seconds, 24/7, in any language." },
      { title: "Viewing schedules are chaos", desc: "Calls, follow-ups, no-shows. Waintel books, confirms, and reminds — automatically." },
    ],
    useCases: [
      { title: "Lead qualification", desc: "Budget, area, timeline, financing — captured in the first 5 messages. Bot auto-labels as 🔥 Hot / 🟡 Warm / ❄️ Cold.", Icon: TargetIcon },
      { title: "Viewing bookings", desc: "Bot offers slots from your calendar. Buyer picks one, confirmed appointment lands in your dashboard.", Icon: CalendarIcon },
      { title: "Multi-property routing", desc: "Inquiry about a 3-bed downtown? Routed to the right agent in 1 second. Suburban property? Different specialist. Auto.", Icon: HomeIcon },
      { title: "Re-engagement campaigns", desc: "Old leads, new listings. Personalized WhatsApp drips re-activate cold prospects.", Icon: RefreshIcon },
    ],
    conversation: {
      businessName: "Northbridge Properties",
      businessSubtitle: "online · Ghost Employee active",
      messages: [
        { side: "in", type: "voice", durationSec: 14, time: "11:02", status: "read" },
        { side: "out", type: "text", text: "Hi! Thanks for asking about the 3-bed downtown listing.\n\nWe currently have 4 properties matching that area.\n\nWhat's your approximate budget and timeline?", time: "11:02" },
        { side: "in", type: "text", text: "Around $650k. Looking to move within 30 days", time: "11:03", status: "read" },
        { side: "out", type: "text", text: "Perfect — 2 listings exactly fit your criteria:\n\n🏡 #1 — 1,800 sqft, 3rd floor, $645k\n🏡 #2 — 2,000 sqft, ground + roof, $670k\n\nWhen would you like to view?", time: "11:03" },
        { side: "in", type: "text", text: "Saturday morning works", time: "11:04", status: "read" },
        { side: "out", type: "text", text: "Booked: Saturday 11:00 AM ✓\n\nAgent Sara will WhatsApp you Friday to confirm.\nReminder will be sent 1h before.\n\n[Tagged 🔥 HOT — alerted to agent]", time: "11:04" },
      ],
    },
    proof: [
      { metric: "3.2×", label: "more viewings booked per week" },
      { metric: "<60s", label: "first-reply time, 24/7" },
      { metric: "67%", label: "of leads pre-qualified before agent contact" },
    ],
    roi: "One commission typically covers 12+ months of Waintel.",
    faqs: [
      { q: "Will it integrate with my CRM?", a: "Yes. Webhooks fire on every qualified lead — push to HubSpot, Pipedrive, Zoho, Salesforce, or Google Sheets." },
      { q: "Does it handle multiple languages?", a: "Yes — natively, including code-mix in the same message. The AI auto-detects per message and replies in the same language." },
      { q: "Multiple agents and multiple cities?", a: "Configure routing rules — by city, project, price range, or language. The right lead reaches the right agent automatically." },
    ],
  },

  /* =================================================================
     HOTELS
  ================================================================= */
  "hotels": {
    slug: "hotels",
    name: "Hotels & Hospitality",
    Icon: HotelIcon,
    hero: {
      eyebrow: "Hotels & Hospitality",
      title: "Bookings at 2 AM —",
      titleHighlight: "captured, not lost.",
      description:
        "Travelers research at odd hours. Waintel takes bookings while you sleep, takes deposits, answers attractions FAQs, upsells add-ons — in any guest's language.",
    },
    pains: [
      { title: "Off-hours bookings get lost", desc: "Travelers research at odd hours. Front desk is asleep. Booking goes to a competitor on Booking.com." },
      { title: "Same questions, every guest", desc: "Check-in time, parking, breakfast included? Local attractions? — same FAQ on repeat, every day." },
      { title: "Upsells get missed", desc: "Spa, airport pickup, late check-out — staff forgets to offer them. Lost revenue per guest." },
    ],
    useCases: [
      { title: "Direct bookings", desc: "Skip OTA commissions. Guests book directly on WhatsApp, take a deposit in chat, keep the full margin.", Icon: CalendarIcon },
      { title: "Pre-arrival upsells", desc: "Spa, airport pickup, late check-out — automatically offered before arrival.", Icon: TargetIcon },
      { title: "Guest requests handled", desc: "Towels, room service, restaurant info — bot handles routine requests, escalates only when needed.", Icon: GlobeIcon },
      { title: "Local attractions guide", desc: "Top sights, opening hours, transportation — built-in 24/7 concierge for your guests.", Icon: BoltIcon },
    ],
    conversation: {
      businessName: "Lakeside Boutique Hotel",
      businessSubtitle: "online",
      messages: [
        { side: "in", type: "text", text: "Hi, do you have a deluxe room for 2 nights, Aug 28-30?", time: "02:14", status: "read" },
        { side: "out", type: "text", text: "Yes! 🏔️\n\nDeluxe Lake View — $180/night\nBreakfast included · Free WiFi\n\nTotal: $360 for 2 nights.\n\nShall I block it for you?", time: "02:14" },
        { side: "in", type: "text", text: "yes please", time: "02:15", status: "read" },
        { side: "out", type: "text", text: "💳 Deposit options:\n• Card (Stripe link)\n• Bank transfer\n\n$50 deposit holds the booking.", time: "02:15" },
        { side: "in", type: "image", placeholder: "easypaisa", time: "02:18", status: "read" },
        { side: "out", type: "text", text: "Booked ✓ Confirmation #LBH-1042\n\nWould you like to add:\n• Airport pickup ($25)\n• Sunset boat tour ($35)\n• Late check-out (free with this rate)?", time: "02:18" },
      ],
    },
    proof: [
      { metric: "+22%", label: "direct bookings (less OTA commission)" },
      { metric: "3.4×", label: "more review volume after auto-request" },
      { metric: "24/7", label: "in any guest's language" },
    ],
    roi: "Skipping OTA commissions on direct bookings — Waintel typically pays for itself in 3-5 bookings per month.",
    faqs: [
      { q: "Will it integrate with my PMS or channel manager?", a: "Webhooks fire on every booking — push to your PMS or channel manager. Direct integrations available on Business+ tiers." },
      { q: "Can guests pay deposits in chat?", a: "Yes — Stripe links and bank transfer details, all in-thread." },
      { q: "Multi-property hotel groups?", a: "Run multiple WhatsApp numbers — one per property — all from one Waintel dashboard. Available on Agency tier." },
    ],
  },

  /* =================================================================
     HEALTHCARE
  ================================================================= */
  "healthcare": {
    slug: "healthcare",
    name: "Healthcare & Clinics",
    Icon: StethoscopeIcon,
    hero: {
      eyebrow: "Healthcare & Clinics",
      title: "Fewer no-shows.",
      titleHighlight: "Happier patients.",
      description:
        "Waintel books appointments, answers medication questions, sends reminders, handles reschedules — in patients' language, on the channel they already use.",
    },
    pains: [
      { title: "30% of appointments are no-shows", desc: "Patients forget. Receptionists call to remind. Waintel reminds them automatically and lets them confirm or reschedule in one tap." },
      { title: "Front desk is overwhelmed", desc: "Same questions, hundreds of times. Waintel handles 80% of FAQ traffic so your team can focus on care." },
      { title: "Patients hate phone trees", desc: "WhatsApp is where they already are. Be there with answers, not hold music." },
    ],
    useCases: [
      { title: "Appointment booking", desc: "Live calendar, multi-doctor, service-aware. Patient picks a slot, you get a confirmed booking.", Icon: CalendarIcon },
      { title: "Medication availability", desc: "Patient asks if a medication is in stock — bot checks and confirms in seconds.", Icon: ShoppingBagIcon },
      { title: "Reminders & reschedules", desc: "24h and 1h reminders. One-tap reschedule. Reduces no-shows by 60%+.", Icon: BoltIcon },
      { title: "Multilingual support", desc: "Multiple languages out of the box, natively — not translated. Auto-detects per message.", Icon: GlobeIcon },
    ],
    conversation: {
      businessName: "Wellbridge Clinic",
      businessSubtitle: "online",
      messages: [
        { side: "in", type: "text", text: "Hi, I'd like to book an appointment with Dr. Patel", time: "14:20", status: "read" },
        { side: "out", type: "text", text: "Hello! Dr. Patel has these available slots:\n\n• Tomorrow 10:30 AM\n• Tomorrow 4:00 PM\n• Friday 11:00 AM\n\nWhich one works?", time: "14:20" },
        { side: "in", type: "text", text: "tomorrow 4 PM please", time: "14:21", status: "read" },
        { side: "out", type: "text", text: "Done — Dr. Patel, tomorrow 4:00 PM ✓\n\nPlease fill the intake form before your visit:\nwaintel.io/intake/wb-1042\n\nReminder will be sent 3 PM tomorrow.", time: "14:21" },
        { side: "in", type: "text", text: "perfect, thanks", time: "14:22", status: "read" },
        { side: "out", type: "text", text: "You're welcome! See you tomorrow 👋", time: "14:22" },
      ],
    },
    proof: [
      { metric: "60%", label: "fewer no-shows" },
      { metric: "80%", label: "of FAQs handled by Ghost Employee" },
      { metric: "5+", label: "languages, natively" },
    ],
    roi: "One reduced no-show per day typically pays for the Business plan.",
    faqs: [
      { q: "Is patient data secure?", a: "Yes. End-to-end encrypted in transit and at rest. We never use patient data to train models." },
      { q: "Will it integrate with my clinic management system?", a: "Webhooks fire on every booking — push to your existing system. Direct integration available on Business+ tiers." },
      { q: "Multiple doctors and multiple branches?", a: "Yes — service-and-location aware routing built in." },
    ],
  },

  /* =================================================================
     EDUCATION
  ================================================================= */
  "education": {
    slug: "education",
    name: "Education & Academies",
    Icon: GraduationIcon,
    hero: {
      eyebrow: "Education & Academies",
      title: "Enroll more students.",
      titleHighlight: "Without growing your team.",
      description:
        "Waintel handles inquiries, shares course details, books trial classes, and collects fees — all on WhatsApp, in the language parents prefer.",
    },
    pains: [
      { title: "Inquiries arrive faster than you can respond", desc: "Parents ask about fees, schedules, and admissions on WhatsApp. Slow replies = lost students." },
      { title: "Trial-class bookings are manual", desc: "Endless back-and-forth on dates and slots. Waintel books in 60 seconds." },
      { title: "Fee reminders are awkward", desc: "Calling parents about overdue fees is uncomfortable. WhatsApp reminders feel softer and convert better." },
    ],
    useCases: [
      { title: "Admissions inquiries", desc: "Course info, fees, schedules, prerequisites — answered instantly in any language.", Icon: TargetIcon },
      { title: "Trial class booking", desc: "Live slots. Parent picks one, your team gets a confirmed booking.", Icon: CalendarIcon },
      { title: "Fee reminders + payment", desc: "Auto-send fee reminders with payment links. Soft, polite, on-brand.", Icon: CardIcon },
      { title: "Class updates broadcast", desc: "Schedule changes, exam dates, results — broadcast to the right students.", Icon: RefreshIcon },
    ],
    conversation: {
      businessName: "Northgate Academy",
      businessSubtitle: "online",
      messages: [
        { side: "in", type: "text", text: "Hi, I'd like to enroll my son in Grade 10 physics", time: "16:12", status: "read" },
        { side: "out", type: "text", text: "Hello! Grade 10 Physics — 2 batches available:\n\n📚 Sat & Sun, 10am-12pm — $120/mo\n📚 Mon/Wed/Fri, 5-6:30pm — $140/mo\n\nWhich one works better?", time: "16:12" },
        { side: "in", type: "text", text: "Weekend batch. Can he do a trial first?", time: "16:13", status: "read" },
        { side: "out", type: "text", text: "Of course! Trial class booked: Saturday 10:00 AM ✓\n\nName and grade?", time: "16:13" },
        { side: "in", type: "text", text: "Liam, Grade 10", time: "16:13", status: "read" },
        { side: "out", type: "text", text: "Perfect! Liam — Saturday 10am.\n\nFriday 5pm I'll send a confirmation reminder.\n\nLocation pin below 👇\nmaps.google.com/...", time: "16:13" },
      ],
    },
    proof: [
      { metric: "+47%", label: "more enrollment inquiries handled" },
      { metric: "<60s", label: "first reply, even at midnight" },
      { metric: "5+", label: "languages — auto-detected per message" },
    ],
    roi: "Two extra enrollments per month typically covers a full year of Waintel Business.",
    faqs: [
      { q: "Can it handle different fee structures per program?", a: "Yes — per-course pricing, discounts, sibling discounts, scholarship rules — all configurable." },
      { q: "Does it work for both small tutoring centers and large schools?", a: "Both. Solo tutors use Starter; multi-branch institutions use Business or Agency tiers." },
      { q: "Can parents pay tuition through WhatsApp?", a: "Yes — Stripe links and other regional payment methods, all in-thread." },
    ],
  },

  /* =================================================================
     E-COMMERCE
  ================================================================= */
  "ecommerce": {
    slug: "ecommerce",
    name: "E-commerce",
    Icon: ShoppingBagIcon,
    hero: {
      eyebrow: "E-commerce",
      title: "Take orders.",
      titleHighlight: "Recover carts. Ship more.",
      description:
        "Waintel turns WhatsApp into your highest-converting sales channel. Orders, cart recovery, COD confirmation, delivery questions — all on autopilot.",
    },
    pains: [
      { title: "Cart abandonment is killing margins", desc: "60-70% of carts get abandoned. Waintel sends personalized recovery messages that actually convert." },
      { title: "Customers want WhatsApp, not phone calls", desc: "Your support team is drowning in calls about delivery and returns. WhatsApp + AI handles the volume." },
      { title: "COD orders bleed money on returns", desc: "Waintel confirms COD orders before dispatch — return-to-origin drops 30-40%." },
    ],
    useCases: [
      { title: "WhatsApp ordering", desc: "Customers order in chat. AI captures items, qty, address, payment. Clean order in your dashboard.", Icon: CartIcon },
      { title: "Cart recovery", desc: "Abandoned cart? Bot sends personalized recovery in 30 mins, 2h, 24h. A/B tested.", Icon: RefreshIcon },
      { title: "COD confirmation", desc: "Auto-confirms orders before dispatch. Slashes return-to-origin by 30%+.", Icon: TargetIcon },
      { title: "Post-purchase support", desc: "Tracking, returns, delivery questions — handled by AI in your customer's language.", Icon: GlobeIcon },
    ],
    conversation: {
      businessName: "Atlas & Oak Apparel",
      businessSubtitle: "online",
      messages: [
        { side: "in", type: "text", text: "Hi, do you have the black hoodie in size M?", time: "20:14", status: "read" },
        { side: "out", type: "text", text: "Yes! 🖤\n\nBlack Hoodie size M — $34.\nIn stock, ready to ship.\n\nWant me to place the order? Just need your delivery address.", time: "20:14" },
        { side: "in", type: "text", text: "412 Maple Street, Apt 6", time: "20:15", status: "read" },
        { side: "out", type: "text", text: "Order summary:\n\n1× Black Hoodie (M) — $34\nDelivery: Free\nTotal: $34\n\nPay by card or COD?", time: "20:15" },
        { side: "in", type: "text", text: "card please", time: "20:16", status: "read" },
        { side: "out", type: "text", text: "stripe.com/wt/3kfA9\n\nTap to pay $34.", time: "20:16" },
        { side: "in", type: "image", placeholder: "easypaisa", time: "20:18", status: "read" },
        { side: "out", type: "text", text: "Payment confirmed ✓\nShips today, arrives Tuesday 📦\n\nTracking link will arrive this evening.", time: "20:18" },
      ],
    },
    proof: [
      { metric: "+34%", label: "cart recovery rate" },
      { metric: "−38%", label: "COD return-to-origin" },
      { metric: "24/7", label: "order taking, no human needed" },
    ],
    roi: "Average e-commerce store recovers a meaningful share of abandoned carts every month — typical recovery values cover the platform many times over.",
    faqs: [
      { q: "Does it work with my Shopify or WooCommerce store?", a: "Yes. Push orders via webhooks, sync stock, and trigger Waintel campaigns from your store events." },
      { q: "Can customers pay in chat?", a: "Yes — Stripe (cards) plus regional payment methods on request, plus COD support." },
      { q: "What about returns and refunds?", a: "AI handles return requests, captures the reason, and routes to your team if a human decision is needed." },
    ],
  },
};
