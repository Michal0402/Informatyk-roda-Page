import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Archivo, Geist, Geist_Mono } from "next/font/google";
import { SiteShell } from "@/components/site-shell";
import { getSiteContent } from "@/lib/content";
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

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin", "latin-ext"],
  weight: ["600", "700", "800"],
});

export async function generateMetadata(): Promise<Metadata> {
  const { company } = getSiteContent();
  const homeMeta = pageMeta(
    {
      title: "Serwis komputerowy i GSM Środa Wielkopolska",
      description:
        "Serwis komputerów, laptopów i telefonów w Środzie Wielkopolskiej. Najpierw diagnoza i wycena, potem decyzja o naprawie.",
      path: "/",
    },
    company,
  );
  const url = siteUrl(company.domain);
  return {
    ...homeMeta,
    metadataBase: url ? new URL(url) : undefined,
    title: {
      default: homeMeta.title as string,
      template: "%s",
    },
  };
}

export default function RootLayout({ children }: { children: ReactNode }) {
  const { company } = getSiteContent();
  return (
    <html lang="pl" className={`${geistSans.variable} ${geistMono.variable} ${archivo.variable} h-full antialiased`}>
      <body className="min-h-full">
        <a
          href="#tresc"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-ink"
        >
          Przejdź do treści
        </a>
        <SiteShell company={company}>{children}</SiteShell>
      </body>
    </html>
  );
}
