"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { APP_URL } from "@/lib/seo";

const NAV_LINKS = [
  { href: "/features", label: "Features" },
  { href: "/industries", label: "Industries" },
  { href: "/pricing", label: "Pricing" },
  { href: "/agency", label: "Agency" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header sticky top-0 z-50 ${scrolled ? "scrolled" : ""}`}>
      <div className="mx-auto flex h-[76px] max-w-[1390px] items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2.5" aria-label="Waintel home">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-2 lg:flex" aria-label="Main">
          {NAV_LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="nav-link">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link href={`${APP_URL}/login`} className="nav-pill-link">
            Sign in
          </Link>
          <Link href={`${APP_URL}/register`} className="btn-primary">
            Get started
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M3 7h8m0 0L7 3m4 4l-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        <button
          onClick={() => setMobileOpen((o) => !o)}
          className="rounded-stellar-pill p-2 lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            {mobileOpen ? (
              <path d="M6 6l12 12M6 18L18 6" stroke="#0B1319" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" stroke="#0B1319" strokeWidth="2" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-ink-100 bg-white lg:hidden">
          <div className="flex flex-col gap-1 px-6 py-4">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-stellar-md px-4 py-3 text-[16px] font-semibold text-ink-900 hover:bg-ink-50"
              >
                {l.label}
              </Link>
            ))}
            <hr className="my-2 border-ink-100" />
            <Link
              href={`${APP_URL}/login`}
              onClick={() => setMobileOpen(false)}
              className="rounded-stellar-md px-4 py-3 text-[16px] font-semibold text-ink-900 hover:bg-ink-50"
            >
              Sign in
            </Link>
            <Link
              href={`${APP_URL}/register`}
              onClick={() => setMobileOpen(false)}
              className="btn-primary mt-2"
            >
              Get started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
