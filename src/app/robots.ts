import type { MetadataRoute } from "next";
import { publicationReady } from "@/config/company";
import { getSiteContent } from "@/lib/content";

export const dynamic = "force-dynamic";

export default function robots(): MetadataRoute.Robots {
  const { company } = getSiteContent();
  if (!publicationReady(company)) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }
  return {
    rules: { userAgent: "*", allow: "/", disallow: "/admin" },
    sitemap: `https://${company.domain.replace(/\/$/, "")}/sitemap.xml`,
  };
}
