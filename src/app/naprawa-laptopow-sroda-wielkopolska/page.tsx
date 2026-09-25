import type { Metadata } from "next";
import { Fan, HardDrive, Keyboard, Monitor } from "lucide-react";
import { LaptopArt } from "@/components/art/devices";
import { ServiceBoard } from "@/components/service-board";
import { pageMeta } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Naprawa laptopów Środa Wielkopolska",
  description:
    "Naprawa laptopów w Środzie Wielkopolskiej: obraz, przegrzewanie, dysk, klawiatura i bateria. Wycena po diagnozie.",
  path: "/naprawa-laptopow-sroda-wielkopolska",
});

export default function LaptopRepairPage() {
  return (
    <ServiceBoard
      title="Naprawa laptopów Środa Wielkopolska"
      sentence="Ekran, bateria i chłodzenie siedzą w jednej obudowie. Wycena po modelu."
      art={<LaptopArt className="h-36 w-full" />}
      items={[
        { id: "obraz", title: "Nie włącza się albo nie ma obrazu", icon: Monitor },
        { id: "chlodzenie", title: "Grzeje się i głośno pracuje", icon: Fan },
        { id: "dysk", title: "Wolny system i mało miejsca", icon: HardDrive },
        { id: "elementy", title: "Klawiatura, zawiasy, bateria", icon: Keyboard },
      ]}
    />
  );
}
