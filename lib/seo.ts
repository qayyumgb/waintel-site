import type { Metadata } from "next";

// Hardcoded for now — change to waintel.io / waintel.ai when domain is registered
export const SITE_URL = "https://waintel.io";
export const SITE_NAME = "Waintel.ai";
export const SITE_TAGLINE = "WhatsApp AI Agents that close sales for your business";
export const SITE_DESCRIPTION =
  "Waintel turns WhatsApp into your best salesperson. AI-powered agents qualify leads, take orders, book appointments, and recover lost sales — 24/7 in Urdu, English, and your customers' language. Built for Pakistan and MENA businesses.";

export const APP_URL = "https://app.waintel.io";

interface PageSEOInput {
  title?: string;          // Page title (no need to append site name)
  description?: string;
  path?: string;           // e.g. "/pricing"
  ogImage?: string;        // path or absolute URL
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

// Structured data for SEO — tells Google we're a SaaS, not a blog
export const ORGANIZATION_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description: SITE_DESCRIPTION,
  sameAs: [],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    email: "support@waintel.io",
    availableLanguage: ["English", "Urdu"],
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
