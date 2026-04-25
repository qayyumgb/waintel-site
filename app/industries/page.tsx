import Link from "next/link";
import { APP_URL, pageMetadata } from "@/lib/seo";
import { INDUSTRIES } from "./[slug]/industries";

export const metadata = pageMetadata({
  title: "Industries",
  description:
    "Your Ghost Employee, pre-trained for your industry: Restaurant, Real Estate, Hotels, Healthcare, Education, and E-commerce. Multilingual, voice-note ready, payment-in-chat — live in 10 minutes.",
  path: "/industries",
});

const ArrowRight = () => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
    <path d="M6.5 10.5L9.5 7.5L6.5 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
  </svg>
);

export default function IndustriesIndexPage() {
  const list = Object.values(INDUSTRIES);
  return (
    <div>
      {/* HERO */}
      <section className="hero-bg relative -mt-[76px] overflow-hidden pt-[76px]">
        <div className="mx-auto max-w-[1300px] px-6 py-16 sm:py-24">
          <div className="mx-auto max-w-[820px] text-center">
            <h1 className="mb-5 text-[34px] font-bold leading-[1.1] text-white sm:text-[44px] lg:text-[56px]">
              Your industry. <span className="text-brand-highlight">Pre-configured.</span>
            </h1>
            <p className="mx-auto max-w-[640px] text-[15px] leading-[1.6] text-white/95 sm:text-[17px]">
              Don't build from scratch. Pick your industry and your Ghost Employee
              is ready in 10 minutes — payment-in-chat, voice notes ready,
              multilingual out of the box.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link href={`${APP_URL}/register`} className="btn-dark">
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

      {/* INDUSTRY GRID */}
      <section className="-mt-[60px] rounded-t-[44px] bg-ink-50 pb-20 pt-16 sm:pt-20">
        <div className="mx-auto max-w-[1300px] px-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {list.map((ind) => (
              <Link
                key={ind.slug}
                href={`/industries/${ind.slug}`}
                className="group flex flex-col rounded-stellar-card border border-transparent bg-white p-8 transition-all duration-200 hover:border-brand-500 hover:bg-[rgba(29,158,117,0.03)] hover:-translate-y-1"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-[14px] bg-brand-500 text-white">
                  <ind.Icon size={28} />
                </div>
                <h2 className="mb-3 text-[24px] font-bold text-ink-900">{ind.name}</h2>
                <p className="mb-6 flex-1 text-[14px] leading-[1.6] text-ink-500">
                  {ind.hero.description}
                </p>
                <span className="inline-flex items-center gap-2 text-[14px] font-semibold text-brand-500 group-hover:gap-3 transition-all">
                  See how it works
                  <ArrowRight />
                </span>
              </Link>
            ))}

            {/* "& any service business" tile */}
            <div className="flex flex-col justify-between rounded-stellar-card bg-white p-8">
              <div>
                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-[14px] bg-ink-50 text-ink-500">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </div>
                <h2 className="mb-3 text-[24px] font-bold text-ink-900">& any service business</h2>
                <p className="mb-6 text-[14px] leading-[1.6] text-ink-500">
                  Salons, gyms, restaurants, clinics, repair services — if you talk to
                  customers on WhatsApp, Waintel works for you.
                </p>
              </div>
              <Link href="mailto:hello@waintel.io" className="inline-flex items-center gap-2 text-[14px] font-semibold text-brand-500 hover:gap-3 transition-all">
                Talk to us about your industry
                <ArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
