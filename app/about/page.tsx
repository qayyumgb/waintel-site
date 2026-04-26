import Link from "next/link";
import { APP_REGISTER_URL, pageMetadata } from "@/lib/seo";
import { CardIcon, ChatIcon, GlobeIcon, MapPinIcon, ShieldIcon } from "@/components/Icons";

export const metadata = pageMetadata({
  title: "About",
  description:
    "Waintel exists because every WhatsApp tool we tried was built for someone else's market. We're building the WhatsApp Ghost Employee any business — anywhere — can hire in 10 minutes.",
  path: "/about",
});

const ArrowRight = () => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
    <path d="M6.5 10.5L9.5 7.5L6.5 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
  </svg>
);

const PRINCIPLES = [
  { Icon: ChatIcon, label: "Voice notes are first-class — not an afterthought" },
  { Icon: CardIcon, label: "Payment-in-chat, not redirected to a different page" },
  { Icon: GlobeIcon, label: "Multilingual replies that match the customer's language" },
  { Icon: MapPinIcon, label: "Multi-location aware — branches, regions, time zones" },
  { Icon: ShieldIcon, label: "Privacy-respectful — your data is yours" },
];

export default function AboutPage() {
  return (
    <div>
      <section className="hero-bg relative -mt-[76px] overflow-hidden pt-[76px]">
        <div className="mx-auto max-w-[1300px] px-6 py-16 sm:py-24">
          <div className="mx-auto max-w-[820px] text-center">
            <h1 className="mb-5 text-[34px] font-bold leading-[1.1] text-white sm:text-[44px] lg:text-[56px]">
              Built for the way{" "}
              <span className="text-brand-highlight">customers actually message businesses.</span>
            </h1>
            <p className="mx-auto max-w-[680px] text-[15px] leading-[1.6] text-white/95 sm:text-[17px]">
              We got tired of watching small businesses lose customers to missed
              WhatsApp messages. So we built Waintel.
            </p>
          </div>
        </div>
      </section>

      <section className="-mt-[60px] rounded-t-[44px] bg-ink-50 pt-16 sm:pt-20">
        <div className="mx-auto max-w-[1300px] px-6">
          <div className="rounded-stellar-card bg-white p-8 sm:p-12 lg:p-16">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-6 text-[28px] font-bold leading-[1.3] text-ink-900 sm:text-[32px] lg:text-[36px]">
                Why we built this.
              </h2>
              <div className="space-y-4 text-[15px] leading-[1.8] text-ink-700 sm:text-[17px]">
                <p>
                  Every WhatsApp automation tool we tried solved the wrong problems.
                  English-only conversations. Card-payment-only flows. No voice notes.
                  No real understanding of how a customer actually messages a small business
                  that closes deals on WhatsApp every day.
                </p>
                <p>
                  Meanwhile, the businesses we knew — restaurants, real estate teams,
                  clinics, online stores — were drowning. The same fifty questions answered
                  by hand every day. Orders coming in at 11 PM and dying overnight. Manual
                  payment chasing between every other task.
                </p>
                <p>
                  <strong className="text-ink-900">
                    The tools they tried were built for someone else's workflow.
                  </strong>{" "}
                  So we built Waintel — a Ghost Employee that listens to voice notes,
                  takes orders at 2 AM, qualifies leads in any language, and routes the
                  right inquiry to the right team — automatically.
                </p>
                <p className="rounded-stellar-md border-l-4 border-brand-500 bg-brand-50 p-5 text-[15px] sm:text-[17px]">
                  <strong className="text-brand-700">Our mission:</strong> make AI accessible
                  to every business with a WhatsApp number — not just the ones with technical
                  teams or big budgets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink-50 sec-bottom-sp pt-12">
        <div className="mx-auto max-w-[1300px] px-6">
          <div className="mb-10 text-center">
            <h2 className="home-section-title">What we obsess about.</h2>
            <p className="mx-auto mt-4 max-w-2xl text-[16px] leading-[1.6] text-ink-500 sm:text-[18px]">
              Five things every other WhatsApp AI gets wrong. We got them right.
            </p>
          </div>

          <div className="mx-auto grid max-w-3xl grid-cols-1 gap-4">
            {PRINCIPLES.map((f) => (
              <div key={f.label} className="flex items-center gap-4 rounded-stellar-card bg-white p-6 sm:p-7">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-[14px] bg-brand-500 text-white">
                  <f.Icon size={22} />
                </div>
                <span className="text-[15px] font-semibold text-ink-900 sm:text-[17px]">{f.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink-50 sec-bottom-sp">
        <div className="mx-auto max-w-[1300px] px-6">
          <div className="rounded-stellar-card bg-white p-8 sm:p-12 lg:p-16">
            <h2 className="mb-3 text-center text-[28px] font-bold leading-[1.3] text-ink-900 sm:text-[32px] lg:text-[36px]">
              The team behind Waintel.
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-center text-[16px] leading-[1.6] text-ink-500 sm:text-[18px]">
              Small team. Focused on shipping. Working with customers worldwide.
            </p>

            <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-3">
              {[
                { role: "Founder", name: "Building product + customer obsession" },
                { role: "Tech Lead", name: "Building the AI + infrastructure" },
                { role: "Growth", name: "Talking to customers, helping them succeed" },
              ].map((m) => (
                <div key={m.role} className="rounded-stellar-md bg-ink-50 p-8 text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-500 text-white">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="8" r="4" />
                      <path d="M4 21v-2a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v2" />
                    </svg>
                  </div>
                  <div className="mb-1 text-[18px] font-bold text-ink-900">{m.role}</div>
                  <div className="text-[13px] text-ink-500">{m.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink-50 sec-bottom-sp">
        <div className="mx-auto max-w-[1300px] px-6">
          <div className="rounded-stellar-card bg-brand-500 px-6 py-12 text-center text-white sm:px-20 sm:py-16">
            <h2 className="mb-4 text-[32px] font-bold leading-[1.2] text-white sm:text-[40px] lg:text-[44px]">
              Want to be part of the story?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-[16px] leading-[1.6] text-white/90 sm:text-[18px]">
              Try Waintel free for 14 days. Or just say hi — we'd love to hear about your business.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href={APP_REGISTER_URL} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-stellar-pill bg-white px-8 py-4 text-[16px] font-semibold text-brand-600 hover:bg-ink-50"
              >
                Start free trial
                <ArrowRight />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-stellar-pill border-2 border-white bg-transparent px-8 py-4 text-[16px] font-semibold text-white hover:bg-white hover:text-brand-500"
              >
                Talk to us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
