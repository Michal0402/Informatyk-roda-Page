import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import { MobileDock } from "@/components/mobile-dock";
import { PublishGate } from "@/components/publish-gate";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { pageMeta, siteUrl } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "latin-ext"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin", "latin-ext"],
});

const homeMeta = pageMeta({
  title: "Serwis komputerowy i GSM Środa Wielkopolska",
  description:
    "Serwis komputerów, laptopów i telefonów w Środzie Wielkopolskiej. Najpierw diagnoza i wycena, potem decyzja o naprawie.",
  path: "/",
});

export const metadata: Metadata = {
  ...homeMeta,
  metadataBase: siteUrl() ? new URL(siteUrl()!) : undefined,
  title: {
    default: homeMeta.title as string,
    template: "%s",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pl" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full pb-[calc(var(--dock)+env(safe-area-inset-bottom))] md:pb-0">
        <a
          href="#tresc"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-ink"
        >
          Przejdź do treści
        </a>
        <PublishGate />
        <SiteHeader />
        <main id="tresc">{children}</main>
        <SiteFooter />
        <MobileDock />
      </body>
    </html>
  );
}
