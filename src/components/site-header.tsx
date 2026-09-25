"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { company, hasConfirmedPhone } from "@/config/company";
import { callHref, navItems } from "@/lib/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-canvas/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <Link href="/" className="max-w-[14rem] text-sm leading-tight font-semibold tracking-tight text-ink sm:max-w-none sm:text-base">
          {company.name}
        </Link>
        <nav className="hidden items-center gap-5 text-sm text-muted lg:flex" aria-label="Główne">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-ink">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={callHref()}
            className="hidden rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accent-ink sm:inline-flex"
          >
            {hasConfirmedPhone() ? company.phoneDisplay : "Zadzwoń"}
          </a>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-full border border-line text-ink lg:hidden"
            aria-expanded={open}
            aria-controls={panelId}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X aria-hidden strokeWidth={1.5} /> : <Menu aria-hidden strokeWidth={1.5} />}
            <span className="sr-only">{open ? "Zamknij menu" : "Otwórz menu"}</span>
          </button>
        </div>
      </div>
      {open ? (
        <nav id={panelId} className="border-t border-line px-4 py-3 lg:hidden" aria-label="Mobilne">
          <ul className="flex flex-col">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block py-3 text-base text-ink"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
