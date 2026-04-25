/* Single-color line icons — all stroke="currentColor" so they inherit color
   (white inside green squares, brand-green elsewhere). Lucide-style outline. */

type IconProps = { size?: number; className?: string };

const base = (size: number, className: string) =>
  ({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className,
  });

export const HomeIcon = ({ size = 28, className = "" }: IconProps) => (
  <svg {...base(size, className)}>
    <path d="M3 12l9-9 9 9" />
    <path d="M5 10v10a1 1 0 0 0 1 1h3v-6h6v6h3a1 1 0 0 0 1-1V10" />
  </svg>
);

export const StethoscopeIcon = ({ size = 28, className = "" }: IconProps) => (
  <svg {...base(size, className)}>
    <path d="M6 3v6a4 4 0 0 0 8 0V3" />
    <path d="M5 3h2M13 3h2" />
    <path d="M10 13v3a5 5 0 0 0 10 0v-2" />
    <circle cx="20" cy="11" r="2" />
  </svg>
);

export const ShoppingBagIcon = ({ size = 28, className = "" }: IconProps) => (
  <svg {...base(size, className)}>
    <path d="M5 8h14l-1 12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 8z" />
    <path d="M9 8V6a3 3 0 0 1 6 0v2" />
  </svg>
);

export const GraduationIcon = ({ size = 28, className = "" }: IconProps) => (
  <svg {...base(size, className)}>
    <path d="M2 10l10-5 10 5-10 5L2 10z" />
    <path d="M6 12v4c0 1.5 2.7 3 6 3s6-1.5 6-3v-4" />
    <path d="M22 10v6" />
  </svg>
);

export const HotelIcon = ({ size = 28, className = "" }: IconProps) => (
  <svg {...base(size, className)}>
    <rect x="4" y="3" width="16" height="18" rx="1" />
    <path d="M9 8h.01M15 8h.01M9 12h.01M15 12h.01M9 16h.01M15 16h.01" strokeWidth="2.5" />
    <path d="M10 21v-3h4v3" />
  </svg>
);

export const SparklesIcon = ({ size = 28, className = "" }: IconProps) => (
  <svg {...base(size, className)}>
    <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

export const ChatIcon = ({ size = 22, className = "" }: IconProps) => (
  <svg {...base(size, className)}>
    <path d="M21 12a8 8 0 0 1-11.5 7.2L4 21l1.8-5.5A8 8 0 1 1 21 12z" />
  </svg>
);

export const PhoneIcon = ({ size = 22, className = "" }: IconProps) => (
  <svg {...base(size, className)}>
    <rect x="6" y="3" width="12" height="18" rx="2" />
    <path d="M11 18h2" />
  </svg>
);

export const CardIcon = ({ size = 22, className = "" }: IconProps) => (
  <svg {...base(size, className)}>
    <rect x="2" y="6" width="20" height="13" rx="2" />
    <path d="M2 11h20M6 16h3" />
  </svg>
);

export const PlugIcon = ({ size = 22, className = "" }: IconProps) => (
  <svg {...base(size, className)}>
    <path d="M9 2v6M15 2v6" />
    <rect x="6" y="8" width="12" height="6" rx="2" />
    <path d="M12 14v4a3 3 0 0 0 3 3" />
  </svg>
);

export const TargetIcon = ({ size = 28, className = "" }: IconProps) => (
  <svg {...base(size, className)}>
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="12" cy="12" r="1.5" fill="currentColor" />
  </svg>
);

export const CartIcon = ({ size = 28, className = "" }: IconProps) => (
  <svg {...base(size, className)}>
    <circle cx="9" cy="20" r="1.5" />
    <circle cx="18" cy="20" r="1.5" />
    <path d="M2 3h3l2.5 12.5a1.5 1.5 0 0 0 1.5 1.2h9a1.5 1.5 0 0 0 1.5-1.2L21 7H6" />
  </svg>
);

export const CalendarIcon = ({ size = 28, className = "" }: IconProps) => (
  <svg {...base(size, className)}>
    <rect x="3" y="5" width="18" height="16" rx="2" />
    <path d="M3 10h18M8 3v4M16 3v4" />
    <circle cx="8" cy="14" r="1" fill="currentColor" />
    <circle cx="12" cy="14" r="1" fill="currentColor" />
    <circle cx="16" cy="14" r="1" fill="currentColor" />
  </svg>
);

export const RefreshIcon = ({ size = 28, className = "" }: IconProps) => (
  <svg {...base(size, className)}>
    <path d="M21 12a9 9 0 0 1-15.5 6.3L3 16M3 12a9 9 0 0 1 15.5-6.3L21 8" />
    <path d="M21 3v5h-5M3 21v-5h5" />
  </svg>
);

export const GlobeIcon = ({ size = 28, className = "" }: IconProps) => (
  <svg {...base(size, className)}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
  </svg>
);

export const BoltIcon = ({ size = 28, className = "" }: IconProps) => (
  <svg {...base(size, className)}>
    <path d="M13 3L4 14h7l-1 7 9-11h-7l1-7z" />
  </svg>
);

export const MapPinIcon = ({ size = 28, className = "" }: IconProps) => (
  <svg {...base(size, className)}>
    <path d="M12 22s8-7.5 8-13a8 8 0 1 0-16 0c0 5.5 8 13 8 13z" />
    <circle cx="12" cy="9" r="3" />
  </svg>
);

export const ShieldIcon = ({ size = 16, className = "" }: IconProps) => (
  <svg {...base(size, className)}>
    <path d="M12 2l8 4v6c0 5-3.5 9.5-8 11-4.5-1.5-8-6-8-11V6l8-4z" />
    <path d="M9 12l2 2 4-4" strokeWidth="2" />
  </svg>
);

export const KeyIcon = ({ size = 16, className = "" }: IconProps) => (
  <svg {...base(size, className)}>
    <circle cx="8" cy="15" r="4" />
    <path d="M11 12l9-9M17 6l3 3" />
  </svg>
);

export const ZapSmallIcon = ({ size = 16, className = "" }: IconProps) => (
  <svg {...base(size, className)}>
    <path d="M13 3L4 14h7l-1 7 9-11h-7l1-7z" />
  </svg>
);

export const PlugSmallIcon = ({ size = 16, className = "" }: IconProps) => (
  <svg {...base(size, className)}>
    <path d="M9 2v6M15 2v6" />
    <rect x="6" y="8" width="12" height="6" rx="2" />
    <path d="M12 14v4a3 3 0 0 0 3 3" />
  </svg>
);
