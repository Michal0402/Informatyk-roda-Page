import { PhoneArt } from "@/components/art/devices";
import { ServiceBoard } from "@/components/service-board";
import { getSiteContent } from "@/lib/content";
import { pageMeta } from "@/lib/site";

export function generateMetadata() {
  return pageMeta(
    {
      title: "Serwis telefonów Środa Wielkopolska",
      description:
        "Serwis telefonów w Środzie Wielkopolskiej: iPhone i Android, wyświetlacz, bateria i ładowanie. Cena zależy od modelu.",
      path: "/serwis-telefonow-sroda-wielkopolska",
    },
    getSiteContent().company,
  );
}

export default function PhoneServicePage() {
  return (
    <ServiceBoard
      sticker="telefon"
      title="Serwis telefonów Środa Wielkopolska"
      sentence="iPhone i Android. Cena zależy od modelu i części. Nie każda usterka kończy się naprawą."
      art={<PhoneArt className="mx-auto h-44 text-canvas" />}
      items={[
        { id: "ekran", title: "Wyświetlacz i obudowa" },
        { id: "zasilanie", title: "Bateria i ładowanie" },
        { id: "dzwiek", title: "Głośnik, mikrofon, system" },
        { id: "zalanie", title: "Po zalaniu" },
      ]}
    />
  );
}
