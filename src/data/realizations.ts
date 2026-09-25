export type Realization = {
  id: string;
  title: string;
  device: string;
  summary: string;
  /** Ścieżka w public/, np. /realizacje/naprawa-01.webp. Plik musi istnieć. */
  image: string;
  imageAlt: string;
};

export const mediaSlots = [
  {
    id: "warsztat",
    path: "/media/warsztat.webp",
    alt: "Stanowisko serwisu w Środzie Wielkopolskiej",
  },
  {
    id: "naprawa-laptopa",
    path: "/media/naprawa-laptopa.webp",
    alt: "Naprawa laptopa na stanowisku",
  },
  {
    id: "naprawa-telefonu",
    path: "/media/naprawa-telefonu.webp",
    alt: "Naprawa telefonu na stanowisku",
  },
] as const;
