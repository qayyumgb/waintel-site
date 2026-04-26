import Link from "next/link";
import { Logo } from "./Logo";
import { APP_REGISTER_URL, WA_LINK } from "@/lib/seo";

const PRODUCT_LINKS = [
  { label: "Features", href: "/features" },
  { label: "Industries", href: "/industries" },
  { label: "Pricing", href: "/pricing" },
  { label: "Agency", href: "/agency" },
  { label: "API & Webhooks", href: "/api-docs" },
];

const INDUSTRY_LINKS = [
  { label: "Restaurant & Food", href: "/industries/restaurant" },
  { label: "Real Estate", href: "/industries/real-estate" },
  { label: "Hotels & Guest Houses", href: "/industries/hotels" },
  { label: "Healthcare & Pharmacy", href: "/industries/healthcare" },
  { label: "Education & Academies", href: "/industries/education" },
  { label: "E-commerce", href: "/industries/ecommerce" },
];

const COMPANY_LINKS = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Agency program", href: "/agency" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Refund Policy", href: "/refund" },
];

export function Footer() {
  return (
    <footer className="bg-ink-50 pt-16 pb-10">
      <div className="mx-auto w-[92%] max-w-[1300px]">
        <div className="flex flex-col gap-8 lg:flex-row">
          <div className="lg:w-[40%] lg:max-w-[528px]">
            <div className="flex h-full flex-col justify-center rounded-[40px] bg-white p-8">
              <Logo />
              <h3 className="mt-6 mb-6 text-[24px] font-bold leading-[1.5] text-ink-900 sm:text-[28px] lg:text-[32px]">
                The WhatsApp Ghost Employee for your business.
              </h3>
              <hr className="my-6 border-ink-100" />
              <p className="mb-2 text-[14px] leading-relaxed text-ink-500">
                Your Ghost Employee answers customers 24/7, takes orders, qualifies leads,
                books appointments, and follows up on missed sales — automatically.
              </p>
              <p className="text-[14px] text-ink-500">
                <strong className="text-ink-900">Waintel.ai</strong> — multilingual, multi-channel, live in 10 minutes.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link href={APP_REGISTER_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  Start free trial
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M3 7h8m0 0L7 3m4 4l-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-stellar-pill border-2 border-[#25D366] px-5 py-3 text-[14px] font-semibold text-[#1d8c47] transition-colors hover:bg-[#25D366] hover:text-white"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.768.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp us
                </a>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
              <FooterCol heading="Product" links={PRODUCT_LINKS} />
              <FooterCol heading="Industries" links={INDUSTRY_LINKS} />
              <FooterCol heading="Company" links={COMPANY_LINKS} />
            </div>

            <div className="mt-10">
              <h6 className="mb-4 text-[12px] font-semibold uppercase tracking-wide text-ink-500">
                Developers
              </h6>
              <div className="space-y-3 text-[14px] text-ink-900">
                <p>
                  <Link href="/api-docs" className="footer-link">API & webhooks reference</Link>
                </p>
                <p>
                  <a href="mailto:support@waintel.ai" className="footer-link">support@waintel.ai</a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <hr className="my-10 border-ink-100" />

        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <p className="text-[13px] text-ink-500">
            © {new Date().getFullYear()} Waintel.ai. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-[12px] font-semibold text-ink-500">
            <span>Multilingual AI</span>
            <span aria-hidden>·</span>
            <span>WhatsApp Cloud API</span>
            <span aria-hidden>·</span>
            <span>Voice notes ready</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  heading,
  links,
}: {
  heading: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h6 className="mb-4 text-[12px] font-semibold uppercase tracking-wide text-ink-500">
        {heading}
      </h6>
      <ul className="space-y-3">
        {links.map((l) => (
          <li key={l.label}>
            <Link href={l.href} className="footer-link">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
