import Link from "next/link";
import { company, hasConfirmedEmail, hasConfirmedPhone } from "@/config/company";
import { navItems } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 md:flex-row md:items-start md:justify-between md:px-6">
        <div>
          <p className="font-semibold">{company.name}</p>
          <p className="mt-2 text-sm text-muted">{company.city}</p>
          {hasConfirmedPhone() ? (
            <a className="mt-2 block text-sm text-accent-deep" href={company.phoneHref}>
              {company.phoneDisplay}
            </a>
          ) : null}
          {hasConfirmedEmail() ? (
            <a className="mt-1 block text-sm text-muted" href={`mailto:${company.email}`}>
              {company.email}
            </a>
          ) : null}
        </div>
        <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="hover:text-ink">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
