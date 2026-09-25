import Link from "next/link";

export function MobileDock({ callTarget, phoneDisplay }: { callTarget: string; phoneDisplay: string }) {
  const dial = phoneDisplay.length > 0;
  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-40 border-t border-ink bg-ink pb-[env(safe-area-inset-bottom)] text-canvas md:hidden"
      aria-label="Szybkie akcje"
    >
      <ul className="grid grid-cols-3 text-center text-sm font-medium lowercase">
        <li>
          {dial ? (
            <a className="block bg-accent px-2 py-3 text-ink" href={callTarget}>
              zadzwoń
            </a>
          ) : (
            <Link className="block bg-accent px-2 py-3 text-ink" href={callTarget}>
              zadzwoń
            </Link>
          )}
        </li>
        <li>
          <Link className="block px-2 py-3" href="/#uslugi">
            usługi
          </Link>
        </li>
        <li>
          <Link className="block px-2 py-3" href="/#cennik">
            cennik
          </Link>
        </li>
      </ul>
      {dial ? <span className="sr-only">{phoneDisplay}</span> : null}
    </nav>
  );
}
