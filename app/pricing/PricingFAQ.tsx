"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "Is there really a free trial?",
    a: "Yes — 7 days free, with 200 AI messages on us. No credit card needed to start. Upgrade only if you love it.",
  },
  {
    q: "What happens after I hit my message limit?",
    a: "Your AI keeps replying — we just bill overage at $0.02 per extra message, billed monthly. No service interruption, no surprises.",
  },
  {
    q: "Do I need a Meta WhatsApp Business API account?",
    a: "Not required. You can connect any WhatsApp number via QR code (Baileys), or use the official Meta Cloud API if you have approval. Both work out of the box.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. Cancel from your dashboard in one click. Your subscription stays active until the end of the current billing cycle — no questions asked.",
  },
  {
    q: "What languages does the AI actually speak?",
    a: "Urdu, Hindi, Arabic, English, and Punjabi — natively trained, not translated. The AI auto-detects what your customer writes in and replies in the same language.",
  },
  {
    q: "Will it work with my CRM?",
    a: "Business and Agency plans include integrations with HubSpot, Pipedrive, Zoho, Salesforce, and Google Sheets. Enterprise gets custom integrations.",
  },
  {
    q: "What payment methods do you accept?",
    a: "Stripe (cards) globally, plus local payment methods in Pakistan and MENA on request. Annual plans get a 20% discount.",
  },
  {
    q: "Is my customer data safe?",
    a: "All conversations are encrypted at rest and in transit. We're GDPR-aware and SOC 2 ready. We never use your data to train other models.",
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
