import Link from "next/link";
import { Logo } from "./Logo";
import { APP_URL } from "@/lib/seo";

const FOOTER_COLS: Array<{ heading: string; links: { label: string; href: string }[] }> = [
  {
    heading: "Product",
    links: [
      { label: "Features", href: "/#features" },
      { label: "Pricing", href: "/pricing" },
      { label: "For Real Estate", href: "/#industries" },
      { label: "For Healthcare", href: "/#industries" },
      { label: "For E-commerce", href: "/#industries" },
      { label: "For Education", href: "/#industries" },
    ],
  },
  {
    heading: "Platform",
    links: [
      { label: "AI Lead Qualification", href: "/#features" },
      { label: "Multi-location Routing", href: "/#features" },
      { label: "Outbound Campaigns", href: "/#features" },
      { label: "Conversation Intelligence", href: "/#features" },
      { label: "CRM Integration", href: "/#features" },
      { label: "Public API", href: "/#features" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Customers", href: "/customers" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "GDPR", href: "/gdpr" },
      { label: "Security", href: "/security" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-ink-100 bg-ink-50/40">
      <div className="container pt-16 pb-10">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-5 max-w-xs text-[14px] leading-relaxed text-ink-500">
              The WhatsApp AI Agent platform built for Pakistan and MENA businesses. Qualify leads, take orders, book appointments — 24/7 in your customers' language.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <Link
                href={`${APP_URL}/register`}
                className="inline-flex items-center gap-2 rounded-lg bg-brand-500 px-4 py-2 text-[13px] font-semibold text-white transition-colors hover:bg-brand-600"
              >
                Start free trial
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link href="/contact" className="text-[13px] font-semibold text-ink-700 hover:text-brand-600">
                Talk to us →
              </Link>
            </div>
          </div>

          {FOOTER_COLS.map((col) => (
            <div key={col.heading} className="lg:col-span-2">
              <h3 className="text-[12px] font-bold uppercase tracking-wider text-ink-900">
                {col.heading}
              </h3>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[14px] text-ink-500 transition-colors hover:text-brand-600"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-6 border-t border-ink-100 pt-8 sm:flex-row sm:items-center">
          <p className="text-[13px] text-ink-400">
            © {new Date().getFullYear()} Waintel.ai · Built for Pakistan, ready for the world.
          </p>
          <div className="flex items-center gap-3 text-[12px] text-ink-400">
            <span>Made in Pakistan 🇵🇰</span>
            <span aria-hidden>·</span>
            <span>SOC 2 ready</span>
            <span aria-hidden>·</span>
            <span>GDPR aware</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
