export type PriceItem = {
  id: string;
  name: string;
  scope: "komputer" | "laptop" | "telefon";
  detail: string;
  /** Uzupełnij kwotę dopiero po potwierdzeniu. Puste pole zostawia „Wycena po diagnozie”. */
  amount: string;
};

export const pricingNote =
  "Koszt części i rodzaj usterki zmieniają cenę. Poniżej nie ma stawek „od”, dopóki nie zostaną potwierdzone. Po diagnozie dostajesz wycenę i sam decydujesz, czy naprawiamy.";

export const pricing: PriceItem[] = [
  {
    id: "diagnoza-pc",
    name: "Diagnostyka komputera lub laptopa",
    scope: "komputer",
    detail: "Ustalenie przyczyny braku startu, obrazu, przegrzewania albo niestabilnej pracy.",
    amount: "",
  },
  {
    id: "ssd-ram",
    name: "SSD, RAM, instalacja Windows",
    scope: "komputer",
    detail: "Wymiana nośnika, dołożenie pamięci albo postawienie systemu. Przeniesienie danych ustalamy osobno.",
    amount: "",
  },
  {
    id: "termika",
    name: "Czyszczenie i materiały termiczne",
    scope: "laptop",
    detail: "Komputer stacjonarny albo laptop, który się grzeje, dusi albo wyłącza.",
    amount: "",
  },
  {
    id: "dane",
    name: "Odzyskiwanie danych",
    scope: "komputer",
    detail: "Tylko gdy nośnik daje szansę odczytu. Brak gwarancji odzyskania konkretnych plików.",
    amount: "",
  },
  {
    id: "ekran",
    name: "Wyświetlacz telefonu",
    scope: "telefon",
    detail: "Cena zależy od modelu i tego, czy wymieniamy samą szybkę, czy cały wyświetlacz.",
    amount: "",
  },
  {
    id: "bateria",
    name: "Bateria telefonu",
    scope: "telefon",
    detail: "Dobór części po modelu. Nie każdy telefon da się otworzyć bez ryzyka.",
    amount: "",
  },
  {
    id: "port",
    name: "Port ładowania, głośnik, mikrofon",
    scope: "telefon",
    detail: "Najpierw sprawdzamy, czy to część, gniazdo, czy problem systemowy.",
    amount: "",
  },
  {
    id: "zalanie",
    name: "Diagnostyka po zalaniu",
    scope: "telefon",
    detail: "Ocena uszkodzeń. Dalsza naprawa tylko po wycenie.",
    amount: "",
  },
];

export function priceLabel(amount: string) {
  const value = amount.trim();
  return value.length > 0 ? value : "Wycena po diagnozie";
}
