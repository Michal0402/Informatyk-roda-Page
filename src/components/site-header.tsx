"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { navItems } from "@/lib/site";

export function SiteHeader({ callTarget }: { callTarget: string }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const pathname = usePathname();

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-ink bg-canvas">
      <div className="mx-auto flex max-w-[1180px] items-center justify-between gap-4 px-5 py-3 md:px-8">
        <Link href="/" className="flex items-center gap-2 font-display text-lg font-extrabold tracking-tight lowercase">
          <span aria-hidden className="size-4 bg-accent" />
          serwis środa
        </Link>
        <nav className="hidden items-center gap-7 text-sm lowercase lg:flex" aria-label="Główne">
          {navItems.map((item) => {
            const current = item.href === "/" ? pathname === "/" : pathname === item.href;
            return (
              <Link key={item.href} href={item.href} aria-current={current ? "page" : undefined} className="hover:underline">
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-2">
          <a href={callTarget} className="bg-accent px-4 py-2 text-sm font-semibold lowercase text-ink">
            zadzwoń
          </a>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center border border-ink text-ink lg:hidden"
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
        <nav id={panelId} className="border-t border-ink px-5 py-2 lg:hidden" aria-label="Mobilne">
          <ul className="flex flex-col lowercase">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="block py-3 font-display text-2xl font-bold" onClick={() => setOpen(false)}>
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
