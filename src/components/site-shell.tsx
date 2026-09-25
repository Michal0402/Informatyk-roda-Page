"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import type { Company } from "@/config/company";
import { hasConfirmedEmail, hasConfirmedPhone } from "@/config/company";
import { MobileDock } from "@/components/mobile-dock";
import { PublishGate } from "@/components/publish-gate";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export function SiteShell({ children, company }: { children: ReactNode; company: Company }) {
  const pathname = usePathname();
  if (pathname.startsWith("/admin")) {
    return <main id="tresc">{children}</main>;
  }

  return (
    <>
      <PublishGate missingPhone={!hasConfirmedPhone(company)} />
      <SiteHeader callTarget={hasConfirmedPhone(company) ? company.phoneHref : "/#kontakt"} />
      <main id="tresc" className="pb-[calc(var(--dock)+env(safe-area-inset-bottom))] md:pb-0">
        {children}
      </main>
      <SiteFooter company={company} hasPhone={hasConfirmedPhone(company)} hasEmail={hasConfirmedEmail(company)} />
      <MobileDock
        callTarget={hasConfirmedPhone(company) ? company.phoneHref : "/#kontakt"}
        phoneDisplay={hasConfirmedPhone(company) ? company.phoneDisplay : ""}
      />
    </>
  );
}
