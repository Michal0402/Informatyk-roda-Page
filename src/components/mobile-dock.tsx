import Link from "next/link";
import { company, hasConfirmedPhone } from "@/config/company";

export function MobileDock() {
  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-card/95 pb-[env(safe-area-inset-bottom)] md:hidden"
      aria-label="Szybkie akcje"
    >
      <ul className="grid grid-cols-3 text-center text-sm font-medium">
        <li>
          {hasConfirmedPhone() ? (
            <a className="block px-2 py-3 text-accent-deep" href={company.phoneHref}>
              Zadzwoń
            </a>
          ) : (
            <Link className="block px-2 py-3 text-accent-deep" href="/#kontakt">
              Zadzwoń
            </Link>
          )}
        </li>
        <li>
          <Link className="block px-2 py-3 text-ink" href="/#uslugi">
            Usługi
          </Link>
        </li>
        <li>
          <Link className="block px-2 py-3 text-ink" href="/#cennik">
            Cennik
          </Link>
        </li>
      </ul>
      {hasConfirmedPhone() ? (
        <span className="sr-only">{company.phoneDisplay}</span>
      ) : null}
    </nav>
  );
}
