import { company, hasConfirmedPhone, publicationReady } from "@/config/company";

export const navItems = [
  { href: "/serwis-komputerowy-sroda-wielkopolska", label: "Komputery" },
  { href: "/serwis-telefonow-sroda-wielkopolska", label: "Telefony" },
  { href: "/#cennik", label: "Cennik" },
  { href: "/#realizacje", label: "Realizacje" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#kontakt", label: "Kontakt" },
] as const;

export function callHref() {
  return hasConfirmedPhone() ? company.phoneHref : "/#kontakt";
}

export function siteUrl(path = "/") {
  if (!company.domain) return undefined;
  const base = `https://${company.domain.replace(/\/$/, "")}`;
  return path === "/" ? `${base}/` : `${base}${path}`;
}

export function pageMeta(input: {
  title: string;
  description: string;
  path: string;
}) {
  const url = siteUrl(input.path);
  return {
    title: input.title,
    description: input.description,
    alternates: url ? { canonical: input.path } : undefined,
    robots: publicationReady()
      ? { index: true, follow: true }
      : { index: false, follow: false },
    openGraph: {
      title: input.title,
      description: input.description,
      locale: "pl_PL",
      type: "website" as const,
      url,
    },
  };
}
