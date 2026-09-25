import type { Metadata } from "next";
import { Cpu, Fan, HardDrive, Search } from "lucide-react";
import { LaptopArt } from "@/components/art/devices";
import { ServiceBoard } from "@/components/service-board";
import { pageMeta } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Serwis komputerowy Środa Wielkopolska",
  description:
    "Naprawa komputerów w Środzie Wielkopolskiej: brak startu, brak obrazu, przegrzewanie, SSD, RAM i Windows. Wycena po diagnozie.",
  path: "/serwis-komputerowy-sroda-wielkopolska",
});

export default function ComputerServicePage() {
  return (
    <ServiceBoard
      title="Serwis komputerowy Środa Wielkopolska"
      sentence="Najpierw diagnoza. Wycena jest przed decyzją o naprawie."
      art={<LaptopArt className="h-36 w-full" />}
      items={[
        { id: "diagnoza", title: "Brak obrazu i brak startu", icon: Search },
        { id: "chlodzenie", title: "Temperatura i czyszczenie", icon: Fan },
        { id: "pamiec", title: "SSD, RAM i Windows", icon: HardDrive },
        { id: "skladanie", title: "Składanie PC i sieć", icon: Cpu },
      ]}
    />
  );
}
