"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "Do I need a credit card for the 14-day trial?",
    a: "No. Just an email and a WhatsApp number — no card, no commitment. If the trial ends, your bot pauses; you're never auto-charged.",
  },
  {
    q: "What happens if I hit my conversation limit?",
    a: "Your bot pauses. Upgrade or wait for next month — no surprise overage charges, ever.",
  },
  {
    q: "What payment methods can my customers use?",
    a: "Stripe (cards globally) is built in. COD is supported. Regional payment methods can be configured per merchant on Business and Agency tiers.",
  },
  {
    q: "How long does Meta approval take?",
    a: "Typically 2-7 business days. Our in-app wizard walks you through setup. If you don't want to wait, you can connect any WhatsApp number via Baileys QR-code — no Meta approval needed.",
  },
  {
    q: "Can I add my own knowledge base?",
    a: "Yes. Upload PDFs, docs, or a website URL. The bot ingests them and replies in your tone, with your information.",
  },
  {
    q: "What languages does the Ghost Employee speak?",
    a: "Multiple languages out of the box — natively, not translated. The bot auto-detects each customer's language and replies in the same one. Voice notes too.",
  },
  {
    q: "Will my clients see Waintel branding on the Agency plan?",
    a: "No. Your logo, your brand, your custom domain. Waintel is completely hidden — clients only see your platform.",
  },
  {
    q: "What's the refund policy?",
    a: "After the 14-day trial, the first paid month comes with a 7-day refund guarantee. Cancel anytime from the dashboard — no questions asked.",
  },
];

export function PricingFAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-ink-50 py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.5fr] lg:gap-[70px]">
          <div>
            <h2 className="home-section-title mb-4">Frequently Asked Questions</h2>
            <p className="text-[16px] leading-[1.6] text-ink-500 sm:text-[18px]">
              Got questions? We have answers. Can't find what you're looking for? Email{" "}
              <a href="mailto:hello@waintel.io" className="text-brand-500 underline">
                hello@waintel.io
              </a>
              .
            </p>
          </div>

          <div>
            {FAQS.map((faq, i) => (
              <div
                key={faq.q}
                className="mb-4 overflow-hidden rounded-[16px] border border-ink-100 bg-white"
              >
                <button
                  type="button"
                  onClick={() => setOpen(open === i ? null : i)}
                  className="flex w-full items-center justify-between gap-4 p-6 text-left sm:p-8"
                  aria-expanded={open === i}
                >
                  <h4 className="m-0 text-[16px] font-semibold text-ink-900 sm:text-[18px]">
                    {faq.q}
                  </h4>
                  <span className={`faq-toggle flex flex-shrink-0 ${open === i ? "open" : ""}`}>
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none">
                      <path
                        d="M18 9.72L12 15.72L6 9.72"
                        stroke="#303030"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>
                <div className={`faq-answer ${open === i ? "open" : ""}`}>
                  <p className="m-0 px-6 pb-6 text-[15px] leading-[1.6] text-ink-500 sm:px-8 sm:pb-6 sm:text-[16px]">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
