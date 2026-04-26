import type { Metadata } from "next";

// Hardcoded for now — change to waintel.ai when domain is registered
export const SITE_URL = "https://waintel.io";
export const SITE_NAME = "Waintel.ai";
export const SITE_TAGLINE = "The WhatsApp Ghost Employee for your business";
export const SITE_DESCRIPTION =
  "Your WhatsApp Ghost Employee answers customers 24/7, takes orders, qualifies leads, books appointments, and follows up on missed sales — automatically. Multilingual, multi-channel, and live in 10 minutes.";

export const APP_URL = "https://app.waintel.io";

// Where the "Get started / Start free trial / Register" buttons send users.
// Currently the dashboard hosts the register flow at root.
export const APP_REGISTER_URL = "https://waintel-dashboard.vercel.app/";

// Placeholder WhatsApp number — REPLACE with real number before launch
export const WA_NUMBER = "10000000000";
export const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
  "Hi Waintel, I want to know more about my Ghost Employee."
)}`;

interface PageSEOInput {
  title?: string;
  description?: string;
  path?: string;
  ogImage?: string;
  noindex?: boolean;
}

export function pageMetadata({ title, description, path = "/", ogImage, noindex }: PageSEOInput = {}): Metadata {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} — ${SITE_TAGLINE}`;
  const desc = description || SITE_DESCRIPTION;
  const url = `${SITE_URL}${path}`;
  const og = ogImage || "/opengraph-image.png";
  const ogAbs = og.startsWith("http") ? og : `${SITE_URL}${og}`;

  return {
    title: fullTitle,
    description: desc,
    metadataBase: new URL(SITE_URL),
    alternates: { canonical: url },
    robots: noindex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      type: "website",
      locale: "en_US",
      url,
      title: fullTitle,
      description: desc,
      siteName: SITE_NAME,
      images: [{ url: ogAbs, width: 1200, height: 630, alt: fullTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: desc,
      images: [ogAbs],
    },
  };
}

export const ORGANIZATION_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description: SITE_DESCRIPTION,
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    email: "support@waintel.ai",
    availableLanguage: ["English", "Arabic", "Spanish", "French"],
  },
};

export const SOFTWARE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: SITE_NAME,
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web, WhatsApp",
  description: SITE_DESCRIPTION,
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "USD",
    lowPrice: "29",
    highPrice: "199",
    offerCount: "3",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "47",
  },
};
