import { WA_LINK, pageMetadata, WA_NUMBER } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Get in touch with Waintel. WhatsApp us for the fastest response, email support@waintel.ai, or use the contact form. Support Mon-Sat, business hours.",
  path: "/contact",
});

const ContactForm = () => (
  <form
    method="POST"
    action="https://formspree.io/f/REPLACE_FORMSPREE_ID"
    className="space-y-5"
  >
    <Input name="name" label="Your name" placeholder="Ahmed Khan" required />
    <Select
      name="business_type"
      label="Business type"
      options={["Restaurant / Food", "Real Estate", "Hotel / Guest House", "Healthcare / Pharmacy", "Education / Academy", "E-commerce", "Digital Agency", "Other"]}
    />
    <Input name="phone" label="WhatsApp number" placeholder="+1 555 0123" required type="tel" />
    <Input name="email" label="Email" placeholder="you@business.com" required type="email" />
    <Textarea name="message" label="What can we help with?" placeholder="Briefly describe what you're trying to do…" rows={5} />

    <button type="submit" className="btn-primary-block">
      Send message
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M3 7h8m0 0L7 3m4 4l-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>

    <p className="text-center text-[12px] text-ink-500">
      Usually respond within 2 hours during business hours. <strong className="text-ink-900">WhatsApp is fastest.</strong>
    </p>
  </form>
);

export default function ContactPage() {
  return (
    <div>
      {/* HERO */}
      <section className="hero-bg relative -mt-[76px] overflow-hidden pt-[76px]">
        <div className="mx-auto max-w-[1300px] px-6 py-16 sm:py-20">
          <div className="mx-auto max-w-[820px] text-center">
            <h1 className="mb-5 text-[34px] font-bold leading-[1.1] text-white sm:text-[44px] lg:text-[56px]">
              Talk to us. <span className="text-brand-highlight">We'll reply.</span>
            </h1>
            <p className="mx-auto max-w-[600px] text-[15px] leading-[1.6] text-white/95 sm:text-[17px]">
              Sales questions, support, agency partnerships, custom integrations —
              we'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="-mt-[60px] rounded-t-[44px] bg-ink-50 pb-20 pt-16 sm:pt-20">
        <div className="mx-auto max-w-[1300px] px-6">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.2fr] lg:gap-12">

            {/* LEFT — contact info */}
            <div className="space-y-6">
              {/* WhatsApp primary CTA */}
              <div className="rounded-stellar-card border-2 border-[#25D366]/40 bg-white p-8">
                <div className="mb-4 inline-flex items-center gap-2 rounded-stellar-pill bg-[#25D366]/10 px-4 py-1.5 text-[12px] font-bold uppercase tracking-wider text-[#1d8c47]">
                  Fastest response
                </div>
                <h2 className="mb-3 text-[24px] font-bold text-ink-900 sm:text-[28px]">
                  WhatsApp us — that's where we're most responsive.
                </h2>
                <p className="mb-5 text-[14px] leading-[1.6] text-ink-500 sm:text-[15px]">
                  Whether you're evaluating Waintel or already a customer, WhatsApp is the
                  quickest way to reach us. Usually under 30-min response during business hours.
                </p>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-stellar-pill bg-[#25D366] px-6 py-3.5 text-[14px] font-semibold text-white transition-all hover:bg-[#1d8c47] hover:shadow-lg"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.768.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
                  </svg>
                  Message on WhatsApp
                </a>
              </div>

              {/* Other channels */}
              <div className="rounded-stellar-card bg-white p-8">
                <h3 className="mb-5 text-[18px] font-bold text-ink-900">Other ways to reach us</h3>
                <ul className="space-y-4 text-[14px]">
                  <li className="flex items-start gap-3">
                    <Mail />
                    <div>
                      <div className="font-semibold text-ink-900">Support</div>
                      <a href="mailto:support@waintel.ai" className="text-brand-500 hover:text-brand-700">support@waintel.ai</a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Mail />
                    <div>
                      <div className="font-semibold text-ink-900">Sales / Agency partnerships</div>
                      <a href="mailto:sales@waintel.ai" className="text-brand-500 hover:text-brand-700">sales@waintel.ai</a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock />
                    <div>
                      <div className="font-semibold text-ink-900">Hours</div>
                      <div className="text-ink-500">Mon-Sat · 9am-6pm local time</div>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="rounded-stellar-card bg-ink-900 p-8 text-white">
                <h3 className="mb-2 text-[18px] font-bold">Agency or enterprise inquiry?</h3>
                <p className="mb-4 text-[14px] leading-[1.6] text-white/80">
                  Direct contact for white-label deals, custom integrations, and 50+ client deployments.
                </p>
                <a href="mailto:sales@waintel.ai" className="text-[14px] font-semibold text-brand-highlight hover:underline">
                  sales@waintel.ai →
                </a>
              </div>
            </div>

            {/* RIGHT — form */}
            <div className="rounded-stellar-card bg-white p-8 sm:p-10 lg:p-12">
              <h2 className="mb-2 text-[24px] font-bold text-ink-900 sm:text-[28px]">Send us a message</h2>
              <p className="mb-6 text-[14px] text-ink-500 sm:text-[15px]">
                Fill out the form and we'll WhatsApp / email you back. Usually within 2 hours.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* placate unused */}
      {WA_NUMBER && null}
    </div>
  );
}

function Input({
  name, label, placeholder, required, type = "text",
}: {
  name: string; label: string; placeholder?: string; required?: boolean; type?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-[13px] font-semibold text-ink-900">
        {label}{required && <span className="ml-1 text-[#dc2626]">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-stellar-md border border-ink-100 bg-white px-4 py-3 text-[14px] text-ink-900 placeholder:text-ink-300 focus:border-brand-500 focus:outline-none"
      />
    </div>
  );
}

function Textarea({
  name, label, placeholder, rows = 4,
}: { name: string; label: string; placeholder?: string; rows?: number }) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-[13px] font-semibold text-ink-900">
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        rows={rows}
        placeholder={placeholder}
        className="w-full rounded-stellar-md border border-ink-100 bg-white px-4 py-3 text-[14px] text-ink-900 placeholder:text-ink-300 focus:border-brand-500 focus:outline-none"
      />
    </div>
  );
}

function Select({
  name, label, options,
}: { name: string; label: string; options: string[] }) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-[13px] font-semibold text-ink-900">
        {label}
      </label>
      <select
        id={name}
        name={name}
        defaultValue=""
        className="w-full rounded-stellar-md border border-ink-100 bg-white px-4 py-3 text-[14px] text-ink-900 focus:border-brand-500 focus:outline-none"
      >
        <option value="" disabled>Select your industry…</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );
}

const Mail = () => (
  <span className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-[10px] bg-brand-50 text-brand-500">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  </span>
);

const Pin = () => (
  <span className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-[10px] bg-brand-50 text-brand-500">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-7.5 8-13a8 8 0 1 0-16 0c0 5.5 8 13 8 13z" />
      <circle cx="12" cy="9" r="3" />
    </svg>
  </span>
);

const Clock = () => (
  <span className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-[10px] bg-brand-50 text-brand-500">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  </span>
);
