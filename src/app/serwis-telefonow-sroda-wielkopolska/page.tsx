import type { Metadata } from "next";
import { BatteryCharging, Droplets, Speaker, TabletSmartphone } from "lucide-react";
import { PhoneArt } from "@/components/art/devices";
import { ServiceBoard } from "@/components/service-board";
import { pageMeta } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Serwis telefonów Środa Wielkopolska",
  description:
    "Serwis telefonów w Środzie Wielkopolskiej: iPhone i Android, wyświetlacz, bateria i ładowanie. Cena zależy od modelu.",
  path: "/serwis-telefonow-sroda-wielkopolska",
});

export default function PhoneServicePage() {
  return (
    <ServiceBoard
      title="Serwis telefonów Środa Wielkopolska"
      sentence="iPhone i Android. Cena zależy od modelu i części. Nie każda usterka kończy się naprawą."
      art={<PhoneArt className="mx-auto h-40" />}
      items={[
        { id: "ekran", title: "Wyświetlacz i obudowa", icon: TabletSmartphone },
        { id: "zasilanie", title: "Bateria i ładowanie", icon: BatteryCharging },
        { id: "dzwiek", title: "Głośnik, mikrofon, system", icon: Speaker },
        { id: "zalanie", title: "Po zalaniu", icon: Droplets },
      ]}
    />
  );
}
