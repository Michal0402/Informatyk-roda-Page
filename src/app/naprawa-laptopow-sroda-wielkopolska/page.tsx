import { LaptopArt } from "@/components/art/devices";
import { ServiceBoard } from "@/components/service-board";
import { getSiteContent } from "@/lib/content";
import { pageMeta } from "@/lib/site";

export function generateMetadata() {
  return pageMeta(
    {
      title: "Naprawa laptopów Środa Wielkopolska",
      description:
        "Naprawa laptopów w Środzie Wielkopolskiej: obraz, przegrzewanie, dysk, klawiatura i bateria. Wycena po diagnozie.",
      path: "/naprawa-laptopow-sroda-wielkopolska",
    },
    getSiteContent().company,
  );
}

export default function LaptopRepairPage() {
  return (
    <ServiceBoard
      sticker="laptop"
      title="Naprawa laptopów Środa Wielkopolska"
      sentence="Ekran, bateria i chłodzenie siedzą w jednej obudowie. Wycena po modelu."
      art={<LaptopArt className="h-40 w-full text-canvas" />}
      items={[
        { id: "obraz", title: "Nie włącza się albo nie ma obrazu" },
        { id: "chlodzenie", title: "Grzeje się i głośno pracuje" },
        { id: "dysk", title: "Wolny system i mało miejsca" },
        { id: "elementy", title: "Klawiatura, zawiasy, bateria" },
      ]}
    />
  );
}
