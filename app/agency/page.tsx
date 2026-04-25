import Link from "next/link";
import { APP_URL, WA_LINK, pageMetadata } from "@/lib/seo";
import { ShieldIcon, GlobeIcon, BoltIcon, PlugIcon, TargetIcon, CardIcon } from "@/components/Icons";

export const metadata = pageMetadata({
  title: "Agency Program",
  description:
    "White-label WhatsApp Ghost Employee platform for digital agencies. Resell Waintel under your brand, manage up to 50 client bots, keep the margin.",
  path: "/agency",
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

const WHAT_YOU_GET = [
  { title: "Your logo, your brand", desc: "Custom logo, primary color, favicon — clients see your agency, never Waintel.", Icon: ShieldIcon },
  { title: "Custom domain", desc: "dashboard.youragency.com — clients log into your branded URL.", Icon: GlobeIcon },
  { title: "Client management dashboard", desc: "All your clients in one view. Add, configure, monitor in seconds.", Icon: TargetIcon },
  { title: "Revenue tracking per client", desc: "See exactly what each client is generating. Per-client profit visibility.", Icon: CardIcon },
  { title: "One-click sub-account creation", desc: "New client signed? New bot in under a minute. No setup overhead.", Icon: BoltIcon },
  { title: "Public REST API + webhooks", desc: "Build custom integrations. Plug Waintel into your agency's existing tools.", Icon: PlugIcon },
];

const FOR_AGENCIES = [
  "Web development agencies",
  "Digital marketing companies",
  "IT solution providers",
  "WhatsApp marketing consultants",
  "Business automation consultants",
];

export default function AgencyPage() {
  return (
    <div>
      {/* HERO */}
      <section className="hero-bg relative -mt-[76px] overflow-hidden pt-[76px]">
        <div className="mx-auto max-w-[1300px] px-6 py-16 sm:py-24">
          <div className="mx-auto max-w-[820px] text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-stellar-pill bg-white/10 px-4 py-1.5 text-[13px] font-semibold text-white backdrop-blur-sm">
              <ShieldIcon size={14} />
              <span>White-label · For agencies only</span>
            </div>
            <h1 className="mb-5 text-[34px] font-bold leading-[1.1] text-white sm:text-[44px] lg:text-[56px]">
              Resell Waintel.{" "}
              <span className="text-brand-highlight">Keep the margin.</span>
            </h1>
            <p className="mx-auto max-w-[720px] text-[15px] leading-[1.6] text-white/95 sm:text-[17px]">
              The white-label WhatsApp Ghost Employee platform for digital agencies.
              If you're a web agency, IT company, or marketing firm with SMB clients —
              you already have the relationships. Waintel gives you a product to sell.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact" className="btn-dark">
                Contact sales for Agency plan
                <ArrowRight />
              </Link>
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-ghost-light">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.768.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
                </svg>
                WhatsApp us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* THE MATH */}
      <section className="-mt-[60px] rounded-t-[44px] bg-ink-50 pt-16 sm:pt-20">
        <div className="mx-auto max-w-[1300px] px-6">
          <div className="rounded-stellar-card bg-white p-8 sm:p-12 lg:p-16">
            <div className="mb-10 text-center">
              <h2 className="home-section-title">The agency math is simple.</h2>
              <p className="mx-auto mt-4 max-w-2xl text-[16px] leading-[1.6] text-ink-500 sm:text-[18px]">
                One agency account. Ten clients. Five-figure monthly recurring profit.
              </p>
            </div>

            <div className="mx-auto max-w-[720px]">
              <div className="overflow-hidden rounded-stellar-card border-2 border-brand-500">
                <div className="bg-brand-500 px-6 py-4 text-center text-[14px] font-semibold uppercase tracking-wider text-white">
                  The math
                </div>
                <div className="space-y-0 divide-y divide-ink-100 bg-white">
                  <Row label="You pay Waintel (Agency plan)" value="$199 / mo" />
                  <Row label="You charge each of 10 clients" value="$60 / mo" />
                  <Row label="Your gross revenue (10 × $60)" value="$600 / mo" />
                  <div className="bg-brand-50 px-6 py-5 sm:px-8">
                    <div className="flex items-center justify-between">
                      <span className="text-[16px] font-bold text-brand-700">Your margin</span>
                      <span className="text-[28px] font-bold text-brand-700 sm:text-[32px]">$401 / mo</span>
                    </div>
                    <p className="mt-1 text-[12px] text-brand-700/80">Monthly recurring profit, scaling per added client</p>
                  </div>
                </div>
              </div>
              <p className="mt-4 text-center text-[13px] text-ink-500">
                Scale to 30 clients → $1,400/mo margin. To 50 clients (max) → $2,800/mo margin.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT AGENCIES GET */}
      <section className="bg-ink-50 sec-bottom-sp pt-12">
        <div className="mx-auto max-w-[1300px] px-6">
          <div className="mb-10 text-center">
            <h2 className="home-section-title">What you get with Agency tier.</h2>
            <p className="mx-auto mt-4 max-w-2xl text-[16px] leading-[1.6] text-ink-500 sm:text-[18px]">
              Everything you need to launch your own white-label WhatsApp AI service.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {WHAT_YOU_GET.map((f) => (
              <div key={f.title} className="rounded-stellar-card bg-white p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-[14px] bg-brand-500 text-white">
                  <f.Icon size={24} />
                </div>
                <h3 className="mb-3 text-[18px] font-bold text-ink-900">{f.title}</h3>
                <p className="m-0 text-[14px] leading-[1.6] text-ink-500">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-ink-50 sec-bottom-sp">
        <div className="mx-auto max-w-[1300px] px-6">
          <div className="rounded-stellar-card bg-white p-8 sm:p-12 lg:p-16">
            <div className="mb-12 text-center">
              <h2 className="home-section-title">How it works — three steps.</h2>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {[
                { n: "01", title: "Sign up for Agency plan", body: "$199/mo. 3-month minimum commitment." },
                { n: "02", title: "Configure white-label brand", body: "Logo, colors, custom domain — set up in 15 minutes." },
                { n: "03", title: "Add clients, set your pricing", body: "One-click client onboarding. You decide what to charge each one." },
              ].map((s) => (
                <div key={s.n} className="rounded-stellar-md border border-ink-100 bg-white p-8">
                  <div className="mb-4 inline-flex items-center rounded-stellar-pill bg-brand-50 px-4 py-1.5 text-[12px] font-bold tracking-wider text-brand-700">
                    STEP {s.n}
                  </div>
                  <h3 className="mb-3 text-[18px] font-bold text-ink-900">{s.title}</h3>
                  <p className="text-[14px] leading-[1.6] text-ink-500">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="bg-ink-50 sec-bottom-sp">
        <div className="mx-auto max-w-[1300px] px-6">
          <div className="rounded-stellar-card bg-white px-8 py-12 sm:p-16">
            <h2 className="mb-8 text-center text-[28px] font-bold leading-[1.3] text-ink-900 sm:text-[32px] lg:text-[36px]">
              Who Agency is built for.
            </h2>
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-2">
              {FOR_AGENCIES.map((a) => (
                <div key={a} className="flex items-center gap-3 rounded-stellar-md bg-ink-50 px-5 py-4">
                  <CheckIcon />
                  <span className="text-[14px] font-semibold text-ink-900 sm:text-[15px]">{a}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-ink-50 sec-bottom-sp">
        <div className="mx-auto max-w-[1300px] px-6">
          <div className="rounded-stellar-card bg-brand-500 px-6 py-12 text-center text-white sm:px-20 sm:py-16">
            <h2 className="mb-4 text-[32px] font-bold leading-[1.2] text-white sm:text-[40px] lg:text-[44px]">
              Let's talk about your agency.
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-[16px] leading-[1.6] text-white/90 sm:text-[18px]">
              Agency plan is custom-onboarded. We'll walk you through white-label setup,
              client migration, and revenue projections.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-stellar-pill bg-white px-8 py-4 text-[16px] font-semibold text-brand-600 hover:bg-ink-50"
              >
                Contact sales
                <ArrowRight />
              </Link>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-stellar-pill border-2 border-white bg-transparent px-8 py-4 text-[16px] font-semibold text-white hover:bg-white hover:text-brand-500"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.768.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
                </svg>
                WhatsApp us directly
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* placate unused */}
      {APP_URL && null}
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between px-6 py-4 sm:px-8">
      <span className="text-[14px] text-ink-700 sm:text-[15px]">{label}</span>
      <span className="text-[16px] font-bold text-ink-900 sm:text-[18px]">{value}</span>
    </div>
  );
}
