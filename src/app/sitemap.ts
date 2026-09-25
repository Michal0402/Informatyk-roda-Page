import type { MetadataRoute } from "next";
import { publicationReady } from "@/config/company";
import { getSiteContent } from "@/lib/content";

export const dynamic = "force-dynamic";

const paths = [
  "/",
  "/serwis-komputerowy-sroda-wielkopolska",
  "/serwis-telefonow-sroda-wielkopolska",
  "/naprawa-laptopow-sroda-wielkopolska",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const { company } = getSiteContent();
  if (!publicationReady(company)) return [];
  const base = `https://${company.domain.replace(/\/$/, "")}`;
  return paths.map((path) => ({
    url: path === "/" ? `${base}/` : `${base}${path}`,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
