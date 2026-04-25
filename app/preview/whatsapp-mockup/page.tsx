import { WhatsAppConversation, type WAMessage } from "@/components/WhatsAppConversation";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Preview — WhatsApp mockup",
  noindex: true,
});

const RESTAURANT: WAMessage[] = [
  { side: "in", type: "text", text: "Hi, are you still open for delivery?", time: "21:34", status: "read" },
  { side: "out", type: "text", text: "Yes! 🍽️ Open until 11 PM.\n\nTonight's specials:\n• Beef Lasagna — $14.50\n• Margherita Pizza — $11.00\n• Truffle Risotto — $16.00\n\nWhat would you like?", time: "21:34" },
  { side: "in", type: "text", text: "2 lasagnas and 1 margherita please", time: "21:35", status: "read" },
  { side: "out", type: "text", text: "Order:\n2× Beef Lasagna — $29.00\n1× Margherita — $11.00\n\nDelivery: $4.50\nTotal: $44.50\n\nDelivery address?", time: "21:35" },
  { side: "in", type: "text", text: "412 Maple Street, Apt 6", time: "21:36", status: "read" },
  { side: "out", type: "text", text: "stripe.com/wt/order/1042 — tap to pay $44.50", time: "21:37" },
  { side: "in", type: "image", placeholder: "easypaisa", time: "21:42", status: "read" },
  { side: "out", type: "text", text: "Payment confirmed ✓\nOrder #1042 dispatched.\nETA: 30 minutes 🛵", time: "21:42" },
];

const REAL_ESTATE: WAMessage[] = [
  { side: "in", type: "voice", durationSec: 14, time: "11:02", status: "read" },
  { side: "out", type: "text", text: "Hi! Thanks for asking about the 3-bed downtown listing.\n\nWe currently have 4 properties matching that area. Budget and timeline?", time: "11:02" },
  { side: "in", type: "text", text: "Around $650k. Within 30 days", time: "11:03", status: "read" },
  { side: "out", type: "text", text: "Perfect — 2 listings fit:\n\n🏡 #1 — 1,800 sqft, 3rd floor, $645k\n🏡 #2 — 2,000 sqft, ground+roof, $670k\n\nWhen would you like to view?", time: "11:03" },
  { side: "in", type: "text", text: "Saturday morning", time: "11:04", status: "read" },
  { side: "out", type: "text", text: "Booked — Saturday 11:00 AM ✓\n\nSara will WhatsApp you Friday to confirm.", time: "11:04" },
];

const HEALTHCARE: WAMessage[] = [
  { side: "in", type: "text", text: "Hi, I'd like to book an appointment with Dr. Patel", time: "14:20", status: "read" },
  { side: "out", type: "text", text: "Hello! Dr. Patel has these slots:\n\n• Tomorrow 10:30 AM\n• Tomorrow 4:00 PM\n• Friday 11:00 AM\n\nWhich one works?", time: "14:20" },
  { side: "in", type: "text", text: "tomorrow 4 PM please", time: "14:21", status: "read" },
  { side: "out", type: "text", text: "Done — Dr. Patel, tomorrow 4:00 PM ✓\n\nIntake form below please.\nReminder will arrive at 3 PM tomorrow.", time: "14:21" },
];

const PULSE: WAMessage[] = [
  { side: "out", type: "text", text: "🌅 Good morning, Daniel!\n\nYour business yesterday:\n\n📦 Orders: 47 (+12% vs Mon)\n💰 Revenue: $1,820\n💬 Chats handled: 312 (94% by AI)\n🚨 Missed: 2\n\n💡 Insight:\nLasagna sold out by 8 PM — 7 customers asked after that. Worth more stock?", time: "08:00" },
  { side: "in", type: "text", text: "thanks! adding 30 extra portions for tomorrow", time: "08:02", status: "read" },
];

export default function WhatsAppMockupPreviewPage() {
  return (
    <div className="bg-ink-50 pt-24 pb-20">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="mb-12 max-w-3xl">
          <h1 className="mb-3 text-[34px] font-bold text-ink-900 sm:text-[44px]">
            WhatsApp Conversation — preview
          </h1>
          <p className="text-[16px] leading-[1.6] text-ink-500">
            Internal preview of the reusable <code className="rounded bg-ink-100 px-1.5 py-0.5 text-[13px]">{`<WhatsAppConversation />`}</code> component.
          </p>
          <ul className="mt-4 list-disc pl-5 text-[14px] text-ink-500">
            <li>Right side (mint green <span className="inline-block h-3 w-3 rounded bg-[#D9FDD3] align-middle" />) = customer's own messages</li>
            <li>Left side (white) = your business / Ghost Employee replies</li>
            <li>Supports text, voice notes, generic payment receipts</li>
            <li>Real WhatsApp UI: header bar, ticks, wallpaper, input bar</li>
          </ul>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <Demo title="Restaurant — order with payment" subtitle="Bella's Bistro">
            <WhatsAppConversation
              businessName="Bella's Bistro"
              businessSubtitle="online · Ghost Employee active"
              messages={RESTAURANT}
            />
          </Demo>

          <Demo title="Real Estate — voice note + lead qualification" subtitle="Northbridge Properties">
            <WhatsAppConversation
              businessName="Northbridge Properties"
              businessSubtitle="online"
              messages={REAL_ESTATE}
            />
          </Demo>

          <Demo title="Healthcare — appointment booking" subtitle="Wellbridge Clinic">
            <WhatsAppConversation
              businessName="Wellbridge Clinic"
              businessSubtitle="online"
              messages={HEALTHCARE}
            />
          </Demo>

          <Demo title="Business Pulse — daily 8am report" subtitle="To the business owner">
            <WhatsAppConversation
              businessName="Waintel Pulse"
              businessSubtitle="every morning at 8 AM"
              businessInitial="W"
              messages={PULSE}
            />
          </Demo>
        </div>
      </div>
    </div>
  );
}

function Demo({ title, subtitle, children }: { title: string; subtitle: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="mb-4">
        <div className="text-[11px] font-semibold uppercase tracking-wider text-brand-700">{subtitle}</div>
        <h2 className="text-[18px] font-bold text-ink-900 sm:text-[20px]">{title}</h2>
      </div>
      {children}
    </div>
  );
}
