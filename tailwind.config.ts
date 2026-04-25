import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1rem", sm: "1.5rem", lg: "2rem", xl: "2rem" },
      screens: { sm: "640px", md: "768px", lg: "1024px", xl: "1200px" },
    },
    extend: {
      colors: {
        // Brand teal — matches dashboard sidebar gradient (#1D9E75 → #0F6E56)
        brand: {
          50:  "#ecfdf5",
          100: "#d1fae5",
          200: "#a7f3d0",
          300: "#6ee7b7",
          400: "#34d399",
          500: "#1D9E75", // primary
          600: "#0F6E56", // secondary / hover
          700: "#0A5A45",
          800: "#0a4a3a",
          900: "#082f2a",
        },
        ink: {
          50:  "#f7f8fa",
          100: "#eef0f4",
          200: "#dadee6",
          300: "#b6bdc9",
          400: "#838a98",
          500: "#5c6374",
          600: "#414857",
          700: "#2e3441",
          800: "#1a1f2b",
          900: "#0b0f17", // dark hero
        },
      },
      fontFamily: {
        // Set in app/layout.tsx via next/font
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
        display: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        // Stellar-style large hero typography
        "display-xl": ["clamp(2.5rem, 5vw, 4rem)", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" }],
        "display-lg": ["clamp(2rem, 4vw, 3rem)", { lineHeight: "1.15", letterSpacing: "-0.02em", fontWeight: "700" }],
        "display-md": ["clamp(1.5rem, 3vw, 2.25rem)", { lineHeight: "1.2", letterSpacing: "-0.01em", fontWeight: "700" }],
      },
      borderRadius: {
        xl: "0.875rem",
        "2xl": "1.25rem",
        "3xl": "1.75rem",
      },
      boxShadow: {
        soft: "0 4px 24px -4px rgba(15, 110, 86, 0.08), 0 2px 8px -2px rgba(15, 110, 86, 0.04)",
        ring: "0 0 0 1px rgba(29, 158, 117, 0.1)",
        cta:  "0 8px 24px -8px rgba(15, 110, 86, 0.4)",
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(135deg, #0a4a3a 0%, #0F6E56 50%, #1D9E75 100%)",
        "subtle-grid": "radial-gradient(circle at 1px 1px, rgba(15,110,86,0.08) 1px, transparent 0)",
      },
    },
  },
  plugins: [],
};

export default config;
