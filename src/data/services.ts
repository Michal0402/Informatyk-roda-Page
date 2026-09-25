export type ServiceGroup = {
  id: string;
  title: string;
  lead: string;
  items: string[];
};

export const computerGroups: ServiceGroup[] = [
  {
    id: "diagnoza",
    title: "Diagnostyka",
    lead: "Najpierw ustalamy, co faktycznie nie działa.",
    items: [
      "Brak obrazu i brak startu",
      "Losowe restarty i zawieszanie",
      "Problemy po aktualizacji albo zalaniu",
    ],
  },
  {
    id: "chlodzenie",
    title: "Temperatura i czyszczenie",
    lead: "Gdy sprzęt grzeje się, zwalnia albo wyłącza pod obciążeniem.",
    items: [
      "Czyszczenie układu chłodzenia",
      "Wymiana materiałów termicznych",
      "Kontrola wentylatorów",
    ],
  },
  {
    id: "pamiec",
    title: "Dysk, pamięć i system",
    lead: "Wolny komputer, pełny dysk albo system, który nie wstaje.",
    items: [
      "Wymiana i dołożenie SSD oraz RAM",
      "Instalacja i naprawa Windows",
      "Odzyskiwanie danych, gdy nośnik jeszcze odpowiada",
    ],
  },
  {
    id: "skladanie",
    title: "Składanie i sieć",
    lead: "Modernizacja istniejącego PC albo problem z łącznością.",
    items: [
      "Składanie i modernizacja komputera",
      "Wi-Fi, router i sieć lokalna",
      "Dobór części do konkretnego zestawu",
    ],
  },
];

export const laptopTopics = [
  {
    title: "Nie włącza się albo nie ma obrazu",
    text: "Sprawdzamy zasilanie, ekran i to, czy laptop w ogóle startuje. Czasem winna jest matryca, czasem płyta albo zasilacz.",
  },
  {
    title: "Grzeje się i głośno pracuje",
    text: "Czyszczenie i wymiana materiałów termicznych dotyczą laptopów tak samo jak komputerów stacjonarnych. Nie obiecujemy temperatury z katalogu.",
  },
  {
    title: "Wolny system i mało miejsca",
    text: "Dysk SSD, pamięć RAM i instalacja Windows. Przed wymianą dysku ustalamy, czy dane mają zostać przeniesione.",
  },
  {
    title: "Klawiatura, zawiasy, bateria",
    text: "Zużyte elementy wymieniamy po rozpoznaniu modelu. Nie każdy laptop ma części od ręki.",
  },
];

export const phoneGroups: ServiceGroup[] = [
  {
    id: "ekran",
    title: "Wyświetlacz i obudowa",
    lead: "Pęknięty obraz, sama szybka albo obluzowana klapka.",
    items: [
      "Wymiana wyświetlacza",
      "Szybka aparatu",
      "Tylna klapka",
    ],
  },
  {
    id: "zasilanie",
    title: "Bateria i ładowanie",
    lead: "Telefon nie trzyma dnia albo nie przyjmuje prądu.",
    items: [
      "Wymiana baterii",
      "Port ładowania",
      "Diagnostyka, gdy telefon nie reaguje na ładowarkę",
    ],
  },
  {
    id: "dzwiek",
    title: "Dźwięk i system",
    lead: "Nie słychać rozmówcy, mikrofon szumi albo system się zapętla.",
    items: [
      "Głośnik i mikrofon",
      "Problemy systemowe",
      "Przenoszenie danych między telefonami",
    ],
  },
  {
    id: "zalanie",
    title: "Po zalaniu",
    lead: "Diagnoza po kontakcie z cieczą. Nie każda taka naprawa kończy się sukcesem.",
    items: [
      "Oględziny po zalaniu",
      "Ocena, które elementy nadają się do wymiany",
      "Decyzja o naprawie dopiero po wycenie",
    ],
  },
];

export const phoneBrands = [
  "iPhone",
  "Samsung",
  "Xiaomi",
  "Redmi",
  "POCO",
  "Motorola",
];
