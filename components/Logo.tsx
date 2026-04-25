export function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const text = variant === "light" ? "text-white" : "text-ink-900";

  return (
    <span className="inline-flex items-center gap-2.5">
      <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-[10px] bg-brand-500 text-white">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
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
      <span className={`text-[17px] font-semibold tracking-tight ${text}`}>
        Waintel<span className="text-brand-500">.ai</span>
      </span>
    </span>
  );
}
