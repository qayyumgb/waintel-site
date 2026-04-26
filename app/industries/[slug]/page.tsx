import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { APP_REGISTER_URL, pageMetadata, SITE_URL } from "@/lib/seo";
import { INDUSTRIES } from "./industries";
import { WhatsAppConversation } from "@/components/WhatsAppConversation";

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

export function generateStaticParams() {
  return Object.keys(INDUSTRIES).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const ind = INDUSTRIES[slug];
  if (!ind) return pageMetadata({ noindex: true });
  return pageMetadata({
    title: `WhatsApp Ghost Employee for ${ind.name}`,
    description: `Waintel for ${ind.name}: ${ind.hero.description}`,
    path: `/industries/${slug}`,
  });
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const ind = INDUSTRIES[slug];
  if (!ind) notFound();

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
                { "@type": "ListItem", position: 2, name: "Industries", item: `${SITE_URL}/industries` },
                { "@type": "ListItem", position: 3, name: ind.name, item: `${SITE_URL}/industries/${ind.slug}` },
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: ind.faqs.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            },
          ]),
        }}
      />

      {/* HERO */}
      <section className="hero-bg relative -mt-[76px] overflow-hidden pt-[76px]">
        <div className="mx-auto max-w-[1300px] px-6 py-14 sm:py-20">
          <div className="mb-6 flex items-center gap-2 text-[13px] text-white/80">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/industries" className="hover:text-white">Industries</Link>
            <span>/</span>
            <span className="text-white">{ind.name}</span>
          </div>

          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-14">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-stellar-pill bg-white/10 px-4 py-1.5 text-[13px] font-semibold text-white backdrop-blur-sm">
                <ind.Icon size={14} />
                <span>{ind.hero.eyebrow}</span>
              </div>
              <h1 className="mb-5 text-[32px] font-bold leading-[1.1] text-white sm:text-[40px] lg:text-[52px]">
                {ind.hero.title}<br />
                <span className="text-brand-highlight">{ind.hero.titleHighlight}</span>
              </h1>
              <p className="mb-6 max-w-[600px] text-[15px] leading-[1.6] text-white/95 sm:text-[17px]">
                {ind.hero.description}
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <Link href={APP_REGISTER_URL} target="_blank" rel="noopener noreferrer" className="btn-dark">
                  Start free trial — 10 min setup
                  <ArrowRight />
                </Link>
                <Link href="/pricing" className="btn-ghost-light">
                  See pricing
                </Link>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <WhatsAppConversation
                businessName={ind.conversation.businessName}
                businessSubtitle={ind.conversation.businessSubtitle}
                messages={ind.conversation.messages}
              />
            </div>
          </div>
        </div>
      </section>

      {/* PAINS */}
      <section className="-mt-[60px] rounded-t-[44px] bg-ink-50 pt-16 sm:pt-20">
        <div className="mx-auto max-w-[1300px] px-6">
          <div className="rounded-stellar-card bg-white p-6 sm:p-12 lg:p-16">
            <h2 className="mb-10 text-center text-[28px] font-bold leading-[1.3] text-ink-900 sm:text-[32px] lg:text-[36px]">
              The problems we hear from {ind.name.toLowerCase()} businesses every week.
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {ind.pains.map((p, i) => (
                <div key={p.title} className="rounded-stellar-md bg-ink-50 p-6">
                  <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-500 text-[14px] font-bold text-white">
                    {i + 1}
                  </div>
                  <h3 className="mb-2 text-[17px] font-bold text-ink-900">"{p.title}"</h3>
                  <p className="m-0 text-[14px] leading-[1.5] text-ink-500">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="bg-ink-50 sec-bottom-sp pt-12">
        <div className="mx-auto max-w-[1300px] px-6">
          <div className="mb-12 text-center">
            <h2 className="home-section-title">What your Ghost Employee does</h2>
            <p className="mx-auto mt-4 max-w-2xl text-[16px] leading-[1.6] text-ink-500 sm:text-[18px]">
              Built for {ind.name.toLowerCase()} from day one — not a generic chatbot dressed up.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {ind.useCases.map((uc) => (
              <div key={uc.title} className="rounded-stellar-card bg-white p-8 sm:p-10">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-[14px] bg-brand-500 text-white">
                    <uc.Icon size={24} />
                  </div>
                  <h3 className="text-[20px] font-bold text-ink-900">{uc.title}</h3>
                </div>
                <p className="m-0 text-[15px] leading-[1.6] text-ink-500">{uc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROOF / ROI metrics */}
      <section className="bg-ink-50 sec-bottom-sp">
        <div className="mx-auto max-w-[1300px] px-6">
          <div className="rounded-stellar-card bg-ink-900 p-8 text-center text-white sm:p-12 lg:p-16">
            <h2 className="mb-3 text-[28px] font-bold leading-[1.2] text-white sm:text-[32px] lg:text-[36px]">
              The numbers from real {ind.name.toLowerCase()} customers.
            </h2>
            <p className="mb-10 text-[16px] text-white/70 sm:text-[18px]">{ind.roi}</p>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {ind.proof.map((m) => (
                <div key={m.label}>
                  <div className="mb-2 text-[40px] font-bold text-brand-highlight sm:text-[48px]">{m.metric}</div>
                  <p className="m-0 text-[14px] leading-[1.6] text-white/80 sm:text-[15px]">{m.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-ink-50 pb-16 sm:pb-20">
        <div className="mx-auto max-w-[1300px] px-6">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.5fr]">
            <div>
              <h2 className="home-section-title mb-4">Frequently asked</h2>
              <p className="text-[16px] leading-[1.6] text-ink-500 sm:text-[18px]">
                {ind.name}-specific answers. Need more? <a href="mailto:hello@waintel.ai" className="text-brand-500 underline">Email us</a>.
              </p>
            </div>
            <div>
              {ind.faqs.map((f) => (
                <details
                  key={f.q}
                  className="group mb-4 overflow-hidden rounded-[16px] border border-ink-100 bg-white"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-6 text-left sm:p-8">
                    <h4 className="m-0 text-[16px] font-semibold text-ink-900 sm:text-[18px]">{f.q}</h4>
                    <span className="flex flex-shrink-0 transition-transform duration-300 group-open:rotate-180">
                      <svg width="24" height="25" viewBox="0 0 24 25" fill="none">
                        <path d="M18 9.72L12 15.72L6 9.72" stroke="#303030" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </summary>
                  <p className="m-0 px-6 pb-6 text-[15px] leading-[1.6] text-ink-500 sm:px-8 sm:pb-6 sm:text-[16px]">
                    {f.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-ink-50 sec-bottom-sp">
        <div className="mx-auto max-w-[1300px] px-6">
          <div className="overflow-hidden rounded-stellar-card bg-brand-500 px-6 py-12 text-center text-white sm:px-20 sm:py-16">
            <h2 className="mb-4 text-[32px] font-bold leading-[1.2] text-white sm:text-[40px] lg:text-[44px]">
              Ready to hire your {ind.name} Ghost Employee?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-[16px] leading-[1.6] text-white/90 sm:text-[18px]">
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
