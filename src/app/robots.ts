import type { MetadataRoute } from "next";
import { company, publicationReady } from "@/config/company";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  if (!publicationReady()) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `https://${company.domain.replace(/\/$/, "")}/sitemap.xml`,
  };
}
