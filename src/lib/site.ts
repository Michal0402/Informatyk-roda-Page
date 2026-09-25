import type { Company } from "@/config/company";
import { publicationReady } from "@/config/company";

export const navItems = [
  { href: "/", label: "start" },
  { href: "/serwis-komputerowy-sroda-wielkopolska", label: "komputery" },
  { href: "/serwis-telefonow-sroda-wielkopolska", label: "telefony" },
  { href: "/#cennik", label: "cennik" },
  { href: "/#kontakt", label: "kontakt" },
] as const;

export function siteUrl(domain: string, path = "/") {
  if (!domain.trim()) return undefined;
  const base = `https://${domain.replace(/\/$/, "")}`;
  return path === "/" ? `${base}/` : `${base}${path}`;
}

export function pageMeta(
  input: { title: string; description: string; path: string },
  company: Company,
) {
  const url = siteUrl(company.domain, input.path);
  return {
    title: input.title,
    description: input.description,
    alternates: url ? { canonical: input.path } : undefined,
    robots: publicationReady(company) ? { index: true, follow: true } : { index: false, follow: false },
    openGraph: {
      title: input.title,
      description: input.description,
      locale: "pl_PL",
      type: "website" as const,
      url,
    },
  };
}
