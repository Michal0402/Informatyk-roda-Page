import type { MetadataRoute } from "next";
import { company, publicationReady } from "@/config/company";

export const dynamic = "force-static";

const paths = [
  "/",
  "/serwis-komputerowy-sroda-wielkopolska",
  "/serwis-telefonow-sroda-wielkopolska",
  "/naprawa-laptopow-sroda-wielkopolska",
];

export default function sitemap(): MetadataRoute.Sitemap {
  if (!publicationReady()) return [];
  const base = `https://${company.domain.replace(/\/$/, "")}`;
  return paths.map((path) => ({
    url: path === "/" ? `${base}/` : `${base}${path}`,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
