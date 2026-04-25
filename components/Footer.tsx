import Link from "next/link";
import { Logo } from "./Logo";
import { APP_URL } from "@/lib/seo";

const PRODUCT_LINKS = [
  { label: "Features", href: "/#features" },
  { label: "Pricing", href: "/pricing" },
  { label: "How it works", href: "/#how-it-works" },
  { label: "Integrations", href: "/#integrations" },
];

const INDUSTRY_LINKS = [
  { label: "Real Estate", href: "/#industries" },
  { label: "Healthcare", href: "/#industries" },
  { label: "E-commerce", href: "/#industries" },
  { label: "Education", href: "/#industries" },
  { label: "Hotels", href: "/#industries" },
];

const COMPANY_LINKS = [
  { label: "About", href: "/about" },
  { label: "Customers", href: "/customers" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

export function Footer() {
  return (
    <footer className="bg-ink-50 pt-16 pb-10">
      <div className="mx-auto w-[92%] max-w-[1300px]">
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Left: white card with logo + pitch */}
          <div className="lg:w-[40%] lg:max-w-[528px]">
            <div className="flex h-full flex-col justify-center rounded-[40px] bg-white p-8">
              <Logo />
              <h3 className="mt-6 mb-6 text-[24px] font-bold leading-[1.5] text-ink-900 sm:text-[28px] lg:text-[32px]">
                The WhatsApp AI Agent that closes sales for your business.
              </h3>
              <hr className="my-6 border-ink-100" />
              <p className="mb-2 text-[14px] leading-relaxed text-ink-500">
                Qualify leads, take orders, and book appointments — 24/7 in your customers' language. Built for Pakistan and MENA businesses.
              </p>
              <p className="text-[14px] text-ink-500">
                <strong className="text-ink-900">Waintel.ai</strong> is built for Pakistan & MENA.
              </p>

              <div className="mt-6">
                <Link href={`${APP_URL}/register`} className="btn-primary">
                  Start free trial
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M3 7h8m0 0L7 3m4 4l-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Right: link columns */}
          <div className="flex-1">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
              <FooterCol heading="Product" links={PRODUCT_LINKS} />
              <FooterCol heading="Industries" links={INDUSTRY_LINKS} />
              <FooterCol heading="Company" links={COMPANY_LINKS} />
            </div>

            <div className="mt-10">
              <h6 className="mb-4 text-[12px] font-semibold uppercase tracking-wide text-ink-500">
                Contact
              </h6>
              <div className="space-y-3 text-[14px] text-ink-900">
                <p>
                  <a href="mailto:hello@waintel.io" className="footer-link">hello@waintel.io</a>
                </p>
                <p>
                  <a href="https://wa.me/" className="footer-link">WhatsApp us</a>
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
            <span>🇵🇰 Built in Pakistan</span>
            <span aria-hidden>·</span>
            <span>Built for MENA</span>
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
