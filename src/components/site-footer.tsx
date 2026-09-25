import Link from "next/link";
import type { Company } from "@/config/company";
import { navItems } from "@/lib/site";

const extraLinks = [
  { href: "/naprawa-laptopow-sroda-wielkopolska", label: "laptopy" },
  { href: "/#faq", label: "pytania" },
  { href: "/#realizacje", label: "realizacje" },
];

export function SiteFooter({
  company,
  hasPhone,
  hasEmail,
}: {
  company: Company;
  hasPhone: boolean;
  hasEmail: boolean;
}) {
  return (
    <footer className="border-t border-ink">
      <div className="mx-auto flex max-w-[1180px] flex-col gap-8 px-5 py-10 md:flex-row md:items-start md:justify-between md:px-8">
        <div>
          <p className="flex items-center gap-2 font-display text-lg font-extrabold lowercase">
            <span aria-hidden className="size-4 bg-accent" />
            serwis środa
          </p>
          <p className="mt-3 text-sm">{company.city}</p>
          {hasPhone ? (
            <a className="mt-2 block text-sm underline underline-offset-4" href={company.phoneHref}>
              {company.phoneDisplay}
            </a>
          ) : null}
          {hasEmail ? (
            <a className="mt-1 block text-sm underline underline-offset-4" href={`mailto:${company.email}`}>
              {company.email}
            </a>
          ) : null}
        </div>
        <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm lowercase">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="hover:underline">
                {item.label}
              </Link>
            </li>
          ))}
          {extraLinks.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="hover:underline">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <p className="border-t border-ink px-5 py-4 text-sm md:px-8">© {new Date().getFullYear()} {company.name}</p>
    </footer>
  );
}
