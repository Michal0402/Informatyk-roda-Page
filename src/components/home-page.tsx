import {
  HardDrive,
  MonitorOff,
  Phone,
  Plug,
  Thermometer,
} from "lucide-react";
import Link from "next/link";
import { BatteryArt, DiskArt, LaptopArt, PhoneArt, ScreenArt } from "@/components/art/devices";
import { company, hasConfirmedEmail, hasConfirmedPhone } from "@/config/company";
import { faq } from "@/data/faq";
import { priceLabel, pricing } from "@/data/pricing";
import { realizations } from "@/data/realizations";
import { symptoms } from "@/data/symptoms";
import { callHref } from "@/lib/site";

const symptomIcons = {
  "nie-laduje": Plug,
  "pekniety-ekran": Phone,
  temperatura: Thermometer,
  "brak-obrazu": MonitorOff,
  "wolny-system": HardDrive,
  "utracone-dane": HardDrive,
} as const;

const steps = [
  { label: "Kontakt", art: PhoneArt },
  { label: "Diagnoza", art: ScreenArt },
  { label: "Wycena", art: BatteryArt },
  { label: "Naprawa", art: DiskArt },
];

export function HomePage() {
  return (
    <>
      <section className="mx-auto grid max-w-6xl items-center gap-8 px-4 pt-8 pb-10 md:px-6 lg:grid-cols-[1fr_1.05fr] lg:pt-14">
        <div>
          <h1 className="max-w-[16ch] text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-5xl">
            Serwis komputerowy i GSM w Środzie Wielkopolskiej
          </h1>
          <p className="mt-4 max-w-[28ch] text-lg text-muted">
            Komputer lub telefon przestał działać? Sprawdzimy, co się stało.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={callHref()} className="rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-ink">
              Zadzwoń
            </a>
            <a href="#uslugi" className="rounded-full border border-line bg-card px-5 py-3 text-sm font-semibold text-ink">
              Zobacz usługi
            </a>
          </div>
        </div>
        <div className="tile relative grid min-h-64 grid-cols-[1.3fr_0.7fr] items-end gap-2 overflow-hidden p-4 sm:min-h-80 sm:p-6">
          <LaptopArt className="h-40 w-full sm:h-52" />
          <PhoneArt className="h-36 w-full justify-self-end sm:h-48" />
        </div>
      </section>

      <section id="uslugi" className="mx-auto max-w-6xl px-4 pb-8 md:px-6">
        <div className="grid gap-3 lg:grid-cols-[1.3fr_0.7fr]">
          <Link href="/serwis-komputerowy-sroda-wielkopolska" className="tile tile-link grid items-end gap-2 p-5 sm:grid-cols-[1fr_180px]">
            <div>
              <h2 className="text-2xl font-semibold">Komputer lub laptop</h2>
              <p className="mt-1 text-sm text-muted">Obraz, start, temperatura, dysk.</p>
            </div>
            <LaptopArt className="h-28 w-full" />
          </Link>
          <Link href="/serwis-telefonow-sroda-wielkopolska" className="tile tile-link flex flex-col justify-between p-5">
            <h2 className="text-2xl font-semibold">Telefon</h2>
            <PhoneArt className="mx-auto h-32" />
            <p className="text-sm text-muted">Ekran, bateria, ładowanie.</p>
          </Link>
        </div>
        <ul className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {symptoms.map((item) => {
            const Icon = symptomIcons[item.id as keyof typeof symptomIcons] ?? Plug;
            return (
              <li key={item.id}>
                <Link href={item.href} className="tile tile-link flex h-full flex-col gap-3 p-4">
                  <Icon aria-hidden strokeWidth={1.5} className="size-6 text-accent-deep" />
                  <span className="font-medium">{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-8 md:px-6">
        <h2 className="text-2xl font-semibold">Jak wygląda naprawa</h2>
        <ol className="mt-4 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {steps.map((step) => (
            <li key={step.label} className="tile flex flex-col items-start gap-2 p-4">
              <step.art className="h-16 w-full" />
              <span className="font-medium">{step.label}</span>
            </li>
          ))}
        </ol>
        <p className="mt-3 text-sm text-muted">Po wycenie decydujesz, czy idziemy dalej.</p>
      </section>

      <section id="cennik" className="mx-auto max-w-6xl px-4 py-8 md:px-6">
        <h2 className="text-2xl font-semibold">Cennik</h2>
        <p className="mt-2 max-w-[52ch] text-sm text-muted">Cena zależy od części i usterki. Puste pole znaczy wycenę po diagnozie.</p>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {pricing.map((item) => (
            <li key={item.id} className="tile flex items-center justify-between gap-3 p-4">
              <span className="font-medium">{item.name}</span>
              <span className="shrink-0 font-mono text-sm text-accent-deep">{priceLabel(item.amount)}</span>
            </li>
          ))}
        </ul>
      </section>

      <section id="realizacje" className="mx-auto max-w-6xl px-4 py-6 md:px-6">
        <h2 className="text-2xl font-semibold">Realizacje</h2>
        {realizations.length === 0 ? (
          <div className="tile mt-4 grid items-center gap-4 p-5 sm:grid-cols-[160px_1fr]">
            <DiskArt className="h-24 w-full" />
            <p className="text-sm text-muted">Zdjęcia konkretnych napraw pojawią się tu dopiero, gdy będą. Na razie zakres jest w usługach.</p>
          </div>
        ) : (
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {realizations.map((item) => (
              <li key={item.id} className="tile overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.image} alt={item.imageAlt} className="aspect-[16/10] w-full object-cover" />
                <p className="p-4 font-medium">{item.title}</p>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className="mx-auto grid max-w-6xl gap-3 px-4 py-6 md:grid-cols-2 md:px-6">
        <div className="tile p-5">
          <h2 className="text-xl font-semibold">Środa Wielkopolska</h2>
          <p className="mt-2 text-sm text-muted">Lokalnie. Okolice potwierdzamy przy kontakcie. Bez obietnicy dojazdu.</p>
        </div>
        <div className="tile p-5">
          <h2 className="text-xl font-semibold">Bez formularza</h2>
          <p className="mt-2 text-sm text-muted">Dzwonisz, opisujesz objaw, dostajesz wycenę przed naprawą.</p>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-3xl px-4 py-8 md:px-6">
        <h2 className="text-2xl font-semibold">Pytania</h2>
        <div className="mt-4 divide-y divide-line border-y border-line">
          {faq.map((item) => (
            <details key={item.id} className="group py-1">
              <summary className="cursor-pointer list-none py-3 font-medium marker:content-none [&::-webkit-details-marker]:hidden">
                <span className="flex items-start justify-between gap-4">
                  {item.question}
                  <span aria-hidden="true" className="text-accent-deep group-open:rotate-45">+</span>
                </span>
              </summary>
              <p className="pb-3 text-sm text-muted">{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section id="kontakt" className="mx-auto grid max-w-6xl items-center gap-6 px-4 py-10 md:px-6 lg:grid-cols-[1fr_220px]">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight">Zadzwoń i opisz, co się stało.</h2>
          {hasConfirmedPhone() ? (
            <a href={company.phoneHref} className="mt-4 inline-block text-2xl font-semibold text-accent-deep">
              {company.phoneDisplay}
            </a>
          ) : (
            <p className="mt-3 text-muted">Numer telefonu nie jest jeszcze uzupełniony.</p>
          )}
          {hasConfirmedEmail() ? (
            <a href={`mailto:${company.email}`} className="mt-2 block text-muted">
              {company.email}
            </a>
          ) : null}
          <p className="mt-3 text-sm text-muted">{company.city}. Adresu punktu nie podajemy, bo go nie ma w danych.</p>
        </div>
        <PhoneArt className="mx-auto h-44" />
      </section>
    </>
  );
}
