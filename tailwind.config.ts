import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1rem", sm: "1.5rem", lg: "2rem", xl: "2rem" },
      screens: { sm: "640px", md: "768px", lg: "1024px", xl: "1200px", "2xl": "1300px" },
    },
    extend: {
      colors: {
        // Brand green — primary swap from Stellar's #2761FC blue
        brand: {
          50:  "#ecfdf5",
          100: "#d1fae5",
          200: "#a7f3d0",
          300: "#6ee7b7",
          400: "#34d399",
          500: "#1D9E75", // primary (swap of #2761FC)
          600: "#0F6E56", // hover dark (swap of #1a4fd9)
          700: "#0A5A45",
          800: "#0a4a3a",
          900: "#082f2a",
          highlight: "#7BE5BF", // hero highlighted word (swap of #B8D4FF)
        },
        // Stellar's actual neutral palette — adopted as-is
        ink: {
          900: "#0B1319", // primary dark text
          800: "#0B0C19",
          700: "#1a2530",
          500: "#62626A", // body / faded
          400: "#6E6E73", // tertiary text
          300: "#B2B2DD", // disabled
          200: "#D6D6E0",
          100: "#EAEAF0", // borders
          50:  "#F6F6FD", // section background
        },
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
      },
      fontSize: {
        // Stellar's exact scale
        "h1": ["56px", { lineHeight: "1.5", fontWeight: "700" }],
        "h2": ["44px", { lineHeight: "1.5", fontWeight: "700" }],
        "h3": ["32px", { lineHeight: "1.5", fontWeight: "700" }],
        "h4": ["24px", { lineHeight: "1.5", fontWeight: "700" }],
      },
      borderRadius: {
        "stellar-card": "44px", // big white card containers
        "stellar-md": "24px",   // inset cards / sections
        "stellar-pill": "40px", // buttons + badges
      },
      boxShadow: {
        soft: "0 4px 24px -4px rgba(11, 19, 25, 0.06), 0 2px 8px -2px rgba(11, 19, 25, 0.04)",
        cta:  "0 8px 24px rgba(29, 158, 117, 0.3)",
        header: "0 2px 8px rgba(0, 0, 0, 0.08)",
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(135deg, #082f2a 0%, #0F6E56 50%, #1D9E75 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
