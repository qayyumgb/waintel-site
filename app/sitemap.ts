import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { INDUSTRIES } from "./industries/[slug]/industries";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const industryRoutes = Object.keys(INDUSTRIES).map((slug) => ({
    url: `${SITE_URL}/industries/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));
  return [
    { url: `${SITE_URL}/`,            lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${SITE_URL}/pricing`,     lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/features`,    lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${SITE_URL}/industries`,  lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    ...industryRoutes,
    { url: `${SITE_URL}/api-docs`,    lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];
}
