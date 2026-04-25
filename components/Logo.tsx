import Link from "next/link";

export function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const text = variant === "light" ? "text-white" : "text-ink-900";
  const sub  = variant === "light" ? "text-white/60" : "text-ink-400";

  return (
    <Link href="/" aria-label="Waintel.ai home" className="inline-flex items-center gap-2.5 group">
      <span
        className="relative inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand-500 text-white shadow-cta"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          {/* Stylized W mark with chat bubble dot */}
          <path
            d="M3 5L7 18L12 9L17 18L21 5"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="20.5" cy="4.5" r="2" fill="currentColor" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className={`text-[17px] font-bold tracking-tight ${text}`}>
          Waintel<span className="text-brand-500">.ai</span>
        </span>
        <span className={`mt-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] ${sub}`}>
          WhatsApp AI Agent
        </span>
      </span>
    </Link>
  );
}
