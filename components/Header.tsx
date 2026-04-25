"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { APP_URL } from "@/lib/seo";

const NAV = [
  { href: "/#features", label: "Features" },
  { href: "/#industries", label: "For your industry" },
  { href: "/pricing", label: "Pricing" },
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
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-200 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-ink-100"
          : "bg-transparent"
      }`}
    >
      <div className="container flex h-[72px] items-center justify-between gap-6">
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[14px] font-medium text-ink-700 transition-colors hover:text-brand-600"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href={`${APP_URL}/login`}
            className="text-[14px] font-semibold text-ink-700 transition-colors hover:text-brand-600"
          >
            Log in
          </Link>
          <Link href="/signup" className="btn-primary !py-2 !px-4 !text-[14px]">
            Start free trial
          </Link>
        </div>

        <button
          type="button"
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg text-ink-700 hover:bg-ink-50"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-ink-100 bg-white">
          <div className="container py-4 flex flex-col gap-1">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-3 text-[15px] font-medium text-ink-800 hover:bg-ink-50"
              >
                {item.label}
              </Link>
            ))}
            <div className="my-2 h-px bg-ink-100" />
            <Link
              href={`${APP_URL}/login`}
              className="rounded-lg px-3 py-3 text-[15px] font-semibold text-ink-700 hover:bg-ink-50"
              onClick={() => setMobileOpen(false)}
            >
              Log in
            </Link>
            <Link
              href="/signup"
              className="btn-primary justify-center mt-2"
              onClick={() => setMobileOpen(false)}
            >
              Start free trial
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
