import { LaptopArt } from "@/components/art/devices";
import { ServiceBoard } from "@/components/service-board";
import { getSiteContent } from "@/lib/content";
import { pageMeta } from "@/lib/site";

export function generateMetadata() {
  return pageMeta(
    {
      title: "Serwis komputerowy Środa Wielkopolska",
      description:
        "Naprawa komputerów w Środzie Wielkopolskiej: brak startu, brak obrazu, przegrzewanie, SSD, RAM i Windows. Wycena po diagnozie.",
      path: "/serwis-komputerowy-sroda-wielkopolska",
    },
    getSiteContent().company,
  );
}

export default function ComputerServicePage() {
  return (
    <ServiceBoard
      sticker="komputer"
      title="Serwis komputerowy Środa Wielkopolska"
      sentence="Najpierw diagnoza. Wycena jest przed decyzją o naprawie."
      art={<LaptopArt className="h-40 w-full text-canvas" />}
      items={[
        { id: "diagnoza", title: "Brak obrazu i brak startu" },
        { id: "chlodzenie", title: "Temperatura i czyszczenie" },
        { id: "pamiec", title: "SSD, RAM i Windows" },
        { id: "skladanie", title: "Składanie PC i sieć" },
      ]}
    />
  );
}
