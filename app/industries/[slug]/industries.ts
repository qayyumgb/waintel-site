import {
  HomeIcon, StethoscopeIcon, ShoppingBagIcon, GraduationIcon, HotelIcon,
  TargetIcon, CartIcon, CalendarIcon, RefreshIcon, GlobeIcon, BoltIcon,
} from "@/components/Icons";

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
  conversation: { side: "in" | "out"; text: string }[];
  proof: { metric: string; label: string }[];
  faqs: { q: string; a: string }[];
}

export const INDUSTRIES: Record<string, IndustryContent> = {
  "real-estate": {
    slug: "real-estate",
    name: "Real Estate",
    Icon: HomeIcon,
    hero: {
      eyebrow: "Real Estate",
      title: "Stop chasing dead leads.",
      titleHighlight: "Close serious buyers on WhatsApp.",
      description:
        "Waintel qualifies every property inquiry, books viewings on your calendar, and follows up with serious buyers — so your agents only talk to people who are ready to transact.",
    },
    pains: [
      { title: "70% of inquiries are tire-kickers", desc: "Your agents waste hours on people who'll never buy. Waintel filters them out before they reach you." },
      { title: "Slow responses kill deals", desc: "Buyers ghost in 30 minutes. Waintel replies in under 60 seconds, 24/7, in Urdu, English, or Hindi." },
      { title: "Viewing schedules are chaos", desc: "Calls, follow-ups, no-shows. Waintel books, confirms, and reminds — automatically." },
    ],
    useCases: [
      { title: "Lead Qualification", desc: "Budget, location, timeline, financing — all captured in the first 5 messages.", Icon: TargetIcon },
      { title: "Viewing Bookings", desc: "Live calendar sync. Buyer picks a slot, you get a confirmed appointment.", Icon: CalendarIcon },
      { title: "Multi-property Routing", desc: "Lead asks about a 3-bed in DHA? Routed to the right agent in 1 second.", Icon: HomeIcon },
      { title: "Re-engagement Campaigns", desc: "Old leads, new listings. Re-activate with personalized WhatsApp drips.", Icon: RefreshIcon },
    ],
    conversation: [
      { side: "in", text: "Hi, I saw your post about the 3-bed in DHA Phase 5" },
      { side: "out", text: "Hello! Yes, that one's available — 1,800 sq ft, 3 beds, 3 baths, ready for possession.\n\nWhat's your budget range?" },
      { side: "in", text: "Around 2.5 cr. Looking to move within a month" },
      { side: "out", text: "Great fit. Asking is 2.6 cr — usually closes around 2.45.\n\nWant to schedule a viewing this week?" },
      { side: "in", text: "Saturday morning works" },
      { side: "out", text: "Booked: Saturday 11:00 AM ✓\n\nYour agent Sara will WhatsApp you Friday to confirm. Reminder will be sent 1h before." },
    ],
    proof: [
      { metric: "3.2×", label: "more viewings booked per week" },
      { metric: "<60s", label: "first-reply time, 24/7" },
      { metric: "67%", label: "of leads pre-qualified before agent contact" },
    ],
    faqs: [
      { q: "Can it integrate with my existing CRM (Bayut, Zameen, internal)?", a: "Yes. Webhooks fire on every qualified lead — push to Bayut leads, Zameen, your internal CRM, or Google Sheets." },
      { q: "Does it handle Urdu, English, and Hindi?", a: "Natively, including code-mix (Urdu+English in the same message). Auto-detects per message." },
      { q: "What about multiple agents and multiple cities?", a: "Configure routing rules — by city, project, price range, or language. The right lead goes to the right agent automatically." },
    ],
  },

  "healthcare": {
    slug: "healthcare",
    name: "Healthcare",
    Icon: StethoscopeIcon,
    hero: {
      eyebrow: "Healthcare",
      title: "Fewer no-shows.",
      titleHighlight: "Happier patients.",
      description:
        "Waintel books appointments, answers FAQs, sends reminders, and handles reschedules — in your patients' language, on the channel they already use.",
    },
    pains: [
      { title: "30% of appointments are no-shows", desc: "Patients forget. Receptionists call to remind. Waintel reminds them automatically and lets them confirm or reschedule in one tap." },
      { title: "Front desk is overwhelmed", desc: "Same questions, hundreds of times a day. Waintel handles 80% of FAQ traffic so your team focuses on care." },
      { title: "Patients hate phone trees", desc: "WhatsApp is what they use. Be there when they reach out — with answers, not hold music." },
    ],
    useCases: [
      { title: "Appointment Booking", desc: "Live calendar, multi-doctor, service-aware. Patient picks, you get a confirmed slot.", Icon: CalendarIcon },
      { title: "Reminders & Reschedules", desc: "24h and 1h reminders. One-tap reschedule. Reduces no-shows by 60%+.", Icon: BoltIcon },
      { title: "Pre-visit Forms", desc: "Send intake forms via WhatsApp. Get them back before the patient arrives.", Icon: TargetIcon },
      { title: "Multi-language Support", desc: "Urdu, Punjabi, Sindhi, Arabic, English — natively, no translation lag.", Icon: GlobeIcon },
    ],
    conversation: [
      { side: "in", text: "Salam, mujhe Dr. Ali se appointment chahiye" },
      { side: "out", text: "Walaikum salam! Dr. Ali ke saath available slots:\n\n• Tomorrow 10:30 AM\n• Tomorrow 4:00 PM\n• Friday 11:00 AM\n\nKaunsa book karoon?" },
      { side: "in", text: "Tomorrow 4 PM theek hai" },
      { side: "out", text: "Done — Dr. Ali, kal 4:00 PM ✓\n\nIntake form nichay link mein. Visit se pehle bhar dijiye please.\n\nReminder kal 3 PM bheja jayega." },
    ],
    proof: [
      { metric: "60%", label: "fewer no-shows" },
      { metric: "80%", label: "of FAQs handled by AI" },
      { metric: "5", label: "languages, native" },
    ],
    faqs: [
      { q: "Is patient data secure?", a: "Yes. End-to-end encrypted in transit and at rest. We never use patient data to train models." },
      { q: "Does it integrate with my clinic management system?", a: "Webhooks fire on every booking — push to your existing system. We support direct integration with major Pakistani EMR/CMS systems on Business and Agency tiers." },
      { q: "Can it handle multiple doctors and multiple branches?", a: "Yes — service-and-location aware routing built in." },
    ],
  },

  "ecommerce": {
    slug: "ecommerce",
    name: "E-commerce",
    Icon: ShoppingBagIcon,
    hero: {
      eyebrow: "E-commerce",
      title: "Take orders.",
      titleHighlight: "Recover carts. Ship more.",
      description:
        "Waintel turns WhatsApp into your highest-converting sales channel. Order on WhatsApp, recover lost carts, handle delivery questions — all on autopilot.",
    },
    pains: [
      { title: "Cart abandonment is killing margins", desc: "60-70% of carts get abandoned. Waintel sends personalized WhatsApp recovery messages that actually convert." },
      { title: "Customers want WhatsApp, not phone calls", desc: "Your support team is drowning in calls about delivery and returns. WhatsApp + AI handles the volume." },
      { title: "COD orders bleed money on RTO", desc: "Waintel confirms COD orders before dispatch — RTO drops 30-40%." },
    ],
    useCases: [
      { title: "WhatsApp Ordering", desc: "Customers order in chat. AI captures items, qty, address, payment. Clean order in your dashboard.", Icon: CartIcon },
      { title: "Cart Recovery", desc: "Abandoned cart? Waintel sends personalized recovery in 15 mins, 1h, 24h.", Icon: RefreshIcon },
      { title: "COD Confirmation", desc: "Auto-confirms orders before dispatch. Slashes RTO by 30%+.", Icon: TargetIcon },
      { title: "Post-purchase Support", desc: "Tracking, returns, delivery questions — all handled by AI in your customer's language.", Icon: GlobeIcon },
    ],
    conversation: [
      { side: "in", text: "Hi, do you have the black hoodie in medium?" },
      { side: "out", text: "Yes! Black hoodie, size M is in stock — Rs 2,400.\n\nWant me to place the order? Just need your delivery address." },
      { side: "in", text: "House 12, Street 5, F-10, Islamabad" },
      { side: "out", text: "Got it. Order summary:\n\n1× Black Hoodie (M) — Rs 2,400\nDelivery — Free\nTotal: Rs 2,400\n\nCOD or online?" },
      { side: "in", text: "online" },
      { side: "out", text: "Payment link 👇\n\nstripe.com/wt/3kfA9\n\nOnce paid, ships today, arrives Tuesday 📦" },
    ],
    proof: [
      { metric: "+34%", label: "cart recovery rate" },
      { metric: "−38%", label: "COD return-to-origin" },
      { metric: "24/7", label: "order taking, no human needed" },
    ],
    faqs: [
      { q: "Does it work with my Shopify or WooCommerce store?", a: "Yes. Push orders via webhooks, sync stock, and trigger Waintel campaigns from your store events." },
      { q: "Can customers pay in chat?", a: "Yes — Stripe payment links sent in-thread, plus COD support, plus EasyPaisa/JazzCash on request." },
      { q: "What about returns and refunds?", a: "AI handles return requests, captures the reason, and routes to your team if a human decision is needed." },
    ],
  },

  "education": {
    slug: "education",
    name: "Education",
    Icon: GraduationIcon,
    hero: {
      eyebrow: "Education",
      title: "Enroll more students.",
      titleHighlight: "Without growing your team.",
      description:
        "Waintel handles inquiries, shares course details, books trial classes, and collects fees — all on WhatsApp, in the language parents and students prefer.",
    },
    pains: [
      { title: "Inquiries come in faster than you can respond", desc: "Parents ask about fees, schedules, and admissions on WhatsApp. Slow replies = lost students." },
      { title: "Trial class bookings are manual", desc: "Endless back-and-forth on dates and slots. Waintel books in 60 seconds." },
      { title: "Fee reminders are awkward", desc: "Calling parents about overdue fees is uncomfortable. WhatsApp reminders feel softer and convert better." },
    ],
    useCases: [
      { title: "Admissions Inquiries", desc: "Course info, fees, schedules, prerequisites — answered instantly in any language.", Icon: TargetIcon },
      { title: "Trial Class Booking", desc: "Live calendar. Parent picks a slot, your team gets a confirmed booking.", Icon: CalendarIcon },
      { title: "Fee Reminders", desc: "Auto-send fee reminders with payment links. Soft, polite, on-brand.", Icon: BoltIcon },
      { title: "Class Updates", desc: "Schedule changes, exam dates, results — broadcast to the right students.", Icon: RefreshIcon },
    ],
    conversation: [
      { side: "in", text: "Hi, I want to enroll my son in O-levels physics" },
      { side: "out", text: "Hello! O-levels Physics — we have 2 batches:\n\n• Sat & Sun, 10am-12pm (Rs 12,000/mo)\n• Mon/Wed/Fri, 5-6:30pm (Rs 14,000/mo)\n\nWhich works better?" },
      { side: "in", text: "Weekend batch. Can he do a trial first?" },
      { side: "out", text: "Of course! Trial class booked for this Saturday 10:00 AM ✓\n\nYour son's name and grade?" },
    ],
    proof: [
      { metric: "+47%", label: "more enrollment inquiries handled" },
      { metric: "<60s", label: "first reply, even at midnight" },
      { metric: "5", label: "languages — Urdu, English, Hindi, Punjabi, Arabic" },
    ],
    faqs: [
      { q: "Can it handle different fee structures per program?", a: "Yes — configure per-course pricing, discounts, sibling discounts, scholarship rules." },
      { q: "Does it work for tutoring centers and large schools?", a: "Both. Solo tutors use Starter; multi-branch institutions use Business or Agency tiers." },
      { q: "Can parents pay tuition through WhatsApp?", a: "Yes — Stripe and local payment links (EasyPaisa, JazzCash on request)." },
    ],
  },

  "hotels": {
    slug: "hotels",
    name: "Hotels",
    Icon: HotelIcon,
    hero: {
      eyebrow: "Hotels & Hospitality",
      title: "Fill more rooms.",
      titleHighlight: "Delight every guest.",
      description:
        "Waintel takes bookings, upsells add-ons, answers guest questions, and handles requests — 24/7, in any language. Your front desk focuses on the guests in front of them.",
    },
    pains: [
      { title: "Bookings come in at 2 AM — lost", desc: "Travelers research at odd hours. Waintel takes bookings while you sleep, in any language." },
      { title: "Guest requests pile up at the front desk", desc: "Towels, late check-out, restaurant recs — Waintel handles routine requests so staff focus on real service." },
      { title: "Upsells get missed", desc: "Spa? Airport pickup? Late check-out? Waintel offers them at the right moment." },
    ],
    useCases: [
      { title: "Direct Bookings", desc: "Skip OTA commissions. Guests book direct on WhatsApp, you get the full margin.", Icon: CalendarIcon },
      { title: "Pre-arrival Upsells", desc: "Spa, airport pickup, late check-out — offered automatically before arrival.", Icon: TargetIcon },
      { title: "Guest Requests", desc: "Towels, room service, restaurant info — handled by AI, escalated if needed.", Icon: GlobeIcon },
      { title: "Post-stay Reviews", desc: "Auto-request reviews on TripAdvisor, Google. Increases review volume 3-5×.", Icon: RefreshIcon },
    ],
    conversation: [
      { side: "in", text: "Hi, do you have a deluxe room for 2 nights, March 28-30?" },
      { side: "out", text: "Yes! Deluxe Sea View — Rs 18,000/night, breakfast included.\n\nTotal: Rs 36,000 for 2 nights.\n\nShould I block it for you? Quick payment link or direct deposit?" },
      { side: "in", text: "yes block it. payment link please" },
      { side: "out", text: "Booked ✓ Confirmation #SH-1042\n\nstripe.com/wt/booking/1042\n\nWould you like to add airport pickup (Rs 2,500) or spa package (Rs 3,000)?" },
    ],
    proof: [
      { metric: "+22%", label: "direct bookings (less OTA commission)" },
      { metric: "3.4×", label: "more review volume" },
      { metric: "24/7", label: "in 5 languages" },
    ],
    faqs: [
      { q: "Will it integrate with my PMS or channel manager?", a: "Webhooks fire on every booking — push to your PMS, channel manager, or run direct integration on Business+ tiers." },
      { q: "Can guests pay deposits in chat?", a: "Yes — Stripe links and bank transfer instructions, all in-thread." },
      { q: "What about multi-property hotel groups?", a: "Run multiple WhatsApp numbers, one per property, all from one Waintel dashboard. Available on Agency tier." },
    ],
  },
};
