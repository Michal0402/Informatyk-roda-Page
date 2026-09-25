import Link from "next/link";
import { BatteryArt, DiskArt, LaptopArt, PhoneArt, ScreenArt, BoardArt } from "@/components/art/devices";
import { callHref, hasConfirmedEmail, hasConfirmedPhone } from "@/config/company";
import { priceLabel } from "@/data/pricing";
import { getSiteContent } from "@/lib/content";

const offers = [
  {
    id: "komputery",
    index: "01",
    title: "Komputery",
    text: "Brak obrazu, brak startu, temperatura, dysk, pamięć i składanie PC.",
    href: "/serwis-komputerowy-sroda-wielkopolska",
    link: "Zobacz zakres komputerów",
  },
  {
    id: "laptopy",
    index: "02",
    title: "Laptopy",
    text: "Obraz, chłodzenie, dysk, klawiatura, zawiasy i bateria. Wycena po modelu.",
    href: "/naprawa-laptopow-sroda-wielkopolska",
    link: "Zobacz zakres laptopów",
  },
  {
    id: "telefony",
    index: "03",
    title: "Telefony",
    text: "iPhone i Android: wyświetlacz, bateria, ładowanie, dźwięk, zalanie.",
    href: "/serwis-telefonow-sroda-wielkopolska",
    link: "Zobacz zakres telefonów",
  },
] as const;

const frames = [
  { id: "laptop", label: "Laptop", art: LaptopArt },
  { id: "telefon", label: "Telefon", art: PhoneArt },
  { id: "komputer", label: "Komputer", art: BoardArt },
  { id: "ekran", label: "Wyświetlacz", art: ScreenArt },
  { id: "dysk", label: "Dysk", art: DiskArt },
  { id: "bateria", label: "Bateria", art: BatteryArt },
];

const ribbon = "serwis komputerowy Środa · naprawa laptopów · serwis telefonów";

export function HomePage() {
  const { company, faq, pricing, pricingNote, realizations } = getSiteContent();
  return (
    <>
      <section className="relative bg-ink text-canvas">
        <div className="mx-auto flex min-h-[78vh] max-w-[1180px] flex-col px-5 pt-8 pb-12 md:px-8 md:pb-16">
          <div className="relative min-h-[46vh] flex-1">
            <span className="sticker absolute top-[6%] right-0 text-5xl sm:text-7xl lg:text-8xl">komputer</span>
            <span className="sticker absolute top-[38%] left-0 text-5xl sm:text-7xl lg:text-8xl">albo</span>
            <span className="sticker absolute top-[62%] left-[18%] text-5xl sm:text-7xl sm:left-[28%] lg:text-8xl">telefon</span>
            <LaptopArt className="absolute right-[6%] bottom-[4%] hidden h-36 w-56 text-canvas md:block" />
            <PhoneArt className="absolute right-[2%] bottom-[18%] hidden h-40 w-24 text-canvas lg:block" />
          </div>
          <h1 className="max-w-[16ch] font-display text-4xl leading-[1.02] font-extrabold tracking-tight text-balance sm:text-5xl">
            Serwis komputerowy i GSM w Środzie Wielkopolskiej
          </h1>
          <p className="mt-4 max-w-[34ch] text-lg">
            Komputer lub telefon przestał działać? Sprawdzimy, co się stało.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1180px] gap-8 px-5 py-16 md:grid-cols-[1fr_auto] md:items-end md:px-8 md:py-24">
        <div>
          <h2 className="max-w-[16ch] font-display text-4xl leading-none font-extrabold tracking-tight sm:text-5xl">
            Najpierw diagnoza, potem decyzja
          </h2>
          <p className="mt-5 max-w-[48ch] text-lg">
            Komputery, laptopy i telefony w {company.city}. Cenę podajemy po ustaleniu usterki. O naprawie decydujesz Ty.
          </p>
        </div>
        <a href="#uslugi" className="w-fit border-b-2 border-ink pb-1 font-display text-lg font-bold lowercase">
          sprawdź, co naprawiamy
        </a>
      </section>

      <section className="border-y border-ink" aria-label="Zasady pracy">
        <ul className="mx-auto grid max-w-[1180px] md:grid-cols-3">
          <li className="border-b border-ink px-5 py-10 md:border-r md:border-b-0 md:px-8">
            <h2 className="font-display text-3xl leading-none font-extrabold tracking-tight sm:text-4xl">Diagnoza przed naprawą</h2>
            <p className="mt-4 max-w-[28ch]">Najpierw ustalamy, co nie działa. Wycena jest przed decyzją.</p>
          </li>
          <li className="border-b border-ink px-5 py-10 md:border-r md:border-b-0 md:px-8">
            <h2 className="font-display text-3xl leading-none font-extrabold tracking-tight sm:text-4xl">Komputer i telefon</h2>
            <p className="mt-4 max-w-[28ch]">PC, laptop i telefon w jednym miejscu. Cena zależy od modelu i części.</p>
          </li>
          <li className="px-5 py-10 md:px-8">
            <h2 className="font-display text-3xl leading-none font-extrabold tracking-tight sm:text-4xl">{company.city}</h2>
            <p className="mt-4 max-w-[28ch]">
              Lokalnie. Okolice ({company.nearbyToConfirm.join(", ")}) potwierdzamy przy kontakcie. Bez obietnicy dojazdu.
            </p>
          </li>
        </ul>
      </section>

      <section id="uslugi" className="mx-auto max-w-[1180px] px-5 py-16 md:px-8 md:py-24">
        <h2 className="max-w-[14ch] font-display text-4xl leading-none font-extrabold tracking-tight sm:text-6xl">
          Sprawdź, co możemy zrobić
        </h2>
        <div className="mt-10 border-b border-ink">
          {offers.map((offer, index) => (
            <details key={offer.id} open={index === 0 || undefined} className="group border-t border-ink">
              <summary className="flex cursor-pointer list-none items-baseline gap-4 py-6 marker:content-none md:gap-8 [&::-webkit-details-marker]:hidden">
                <span className="font-display text-xl font-bold tabular-nums">{offer.index}</span>
                <span className="font-display text-3xl font-extrabold tracking-tight sm:text-5xl">{offer.title}</span>
              </summary>
              <div className="max-w-[52ch] pb-8 pl-12 md:pl-16">
                <p>{offer.text}</p>
                <Link href={offer.href} className="mt-4 inline-block border-b-2 border-ink font-display font-bold lowercase">
                  {offer.link}
                </Link>
              </div>
            </details>
          ))}
          <details className="group border-t border-ink">
            <summary className="flex cursor-pointer list-none items-baseline gap-4 py-6 marker:content-none md:gap-8 [&::-webkit-details-marker]:hidden">
              <span className="font-display text-xl font-bold tabular-nums">04</span>
              <span className="font-display text-3xl font-extrabold tracking-tight sm:text-5xl">Wycena</span>
            </summary>
            <div className="max-w-[52ch] pb-8 pl-12 md:pl-16">
              <p>{pricingNote}</p>
              <a href="#cennik" className="mt-4 inline-block border-b-2 border-ink font-display font-bold lowercase">
                zobacz cennik
              </a>
            </div>
          </details>
          <details className="group border-t border-ink">
            <summary className="flex cursor-pointer list-none items-baseline gap-4 py-6 marker:content-none md:gap-8 [&::-webkit-details-marker]:hidden">
              <span className="font-display text-xl font-bold tabular-nums">05</span>
              <span className="font-display text-3xl font-extrabold tracking-tight sm:text-5xl">Obszar</span>
            </summary>
            <div className="max-w-[52ch] pb-8 pl-12 md:pl-16">
              <p>
                {company.serviceArea.join(", ")}. Miejscowości do potwierdzenia: {company.nearbyToConfirm.join(", ")}. Odbioru sprzętu nie oferujemy.
              </p>
            </div>
          </details>
        </div>
      </section>

      <section id="cennik" className="border-t border-ink">
        <div className="mx-auto max-w-[1180px] px-5 py-16 md:px-8 md:py-24">
          <h2 className="font-display text-4xl font-extrabold tracking-tight sm:text-6xl">Cennik</h2>
          <p className="mt-4 max-w-[52ch]">{pricingNote}</p>
          <ul className="mt-8 border-y border-ink">
            {pricing.map((item) => (
              <li key={item.id} className="flex flex-col gap-2 border-b border-ink py-5 last:border-b-0 sm:flex-row sm:items-baseline sm:justify-between">
                <div>
                  <p className="font-display text-xl font-bold">{item.name}</p>
                  <p className="mt-1 max-w-[58ch] text-sm">{item.detail}</p>
                </div>
                <p className="shrink-0 font-display font-bold">{priceLabel(item.amount)}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="realizacje" className="border-t border-ink">
        <div className="mx-auto max-w-[1180px] px-5 py-16 md:px-8 md:py-24">
          <h2 className="font-display text-4xl font-extrabold tracking-tight sm:text-6xl">Ostatnie realizacje</h2>
          {realizations.length === 0 ? (
            <>
              <p className="mt-4 max-w-[48ch]">
                Zdjęcia konkretnych napraw pojawią się tu dopiero, gdy będą. Kafle poniżej to zakres prac, nie wykonane zlecenia.
              </p>
              <ul className="mt-8 grid grid-cols-2 gap-3 lg:grid-cols-3">
                {frames.map((frame) => (
                  <li key={frame.id} className="flex aspect-[4/3] flex-col justify-end border border-line bg-card p-4 text-ink">
                    <frame.art className="mb-3 h-24 w-full" />
                    <span className="font-display text-2xl font-extrabold tracking-tight sm:text-3xl">{frame.label}</span>
                    <span className="mt-1 text-sm text-muted">Przykładowa grafika, nie zdjęcie naprawy</span>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {realizations.map((item) => (
                <li key={item.id} className="bg-ink text-canvas">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={item.image} alt={item.imageAlt} className="aspect-[4/3] w-full object-cover" />
                  <p className="p-4 font-display text-xl font-bold">{item.title}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      <div className="ribbon" aria-hidden="true">
        <div className="ribbon-track">
          {Array.from({ length: 8 }, (_, index) => (
            <span key={index} className={index >= 4 ? "ribbon-clone" : undefined}>
              {ribbon}
            </span>
          ))}
        </div>
      </div>

      <section id="faq" className="mx-auto max-w-[1180px] px-5 py-16 md:px-8 md:py-24">
        <h2 className="font-display text-4xl font-extrabold tracking-tight sm:text-6xl">Pytania</h2>
        <div className="mt-8 border-b border-ink">
          {faq.map((item) => (
            <details key={item.id} className="border-t border-ink">
              <summary className="cursor-pointer list-none py-5 font-display text-xl font-bold marker:content-none sm:text-2xl [&::-webkit-details-marker]:hidden">
                {item.question}
              </summary>
              <p className="max-w-[62ch] pb-5">{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section id="kontakt" className="bg-ink text-canvas">
        <div className="mx-auto max-w-[1180px] px-5 py-16 md:px-8 md:py-24">
          <h2 className="max-w-[14ch] font-display text-4xl leading-none font-extrabold tracking-tight sm:text-6xl">
            Zadzwoń i opisz, co się stało.
          </h2>
          {hasConfirmedPhone(company) ? (
            <a href={company.phoneHref} className="sticker mt-8 text-3xl sm:text-5xl">
              {company.phoneDisplay}
            </a>
          ) : (
            <p className="mt-6 max-w-[36ch] text-lg">Numer telefonu nie jest jeszcze uzupełniony.</p>
          )}
          {hasConfirmedEmail(company) ? (
            <a href={`mailto:${company.email}`} className="mt-4 block text-lg underline underline-offset-4">
              {company.email}
            </a>
          ) : null}
          <p className="mt-6 max-w-[42ch] text-sm">
            {company.city}. Adresu punktu nie podajemy, bo go nie ma w danych.
          </p>
          <a href={callHref(company)} className="mt-8 inline-block bg-accent px-5 py-3 font-display font-bold text-ink lowercase">
            zadzwoń
          </a>
        </div>
      </section>
    </>
  );
}
