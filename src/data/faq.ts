export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export const faq: FaqItem[] = [
  {
    id: "wycena",
    question: "Czy od razu znam cenę naprawy?",
    answer:
      "Nie. Najpierw jest diagnoza i wycena. Koszt zależy od usterki, modelu i części. Decyzję o naprawie podejmujesz po wycenie.",
  },
  {
    id: "iphone-android",
    question: "Naprawiacie iPhone’a i telefony z Androidem?",
    answer:
      "Tak, bierzemy iPhone’y oraz telefony z Androidem, w tym Samsung, Xiaomi, Redmi, POCO i Motorolę. Inne modele sprawdzamy indywidualnie. Nie każda usterka i nie każdy model da się naprawić.",
  },
  {
    id: "bateria",
    question: "Kiedy warto wymienić baterię w telefonie?",
    answer:
      "Gdy telefon szybko się rozładowuje, wyłącza przy procentach albo puchnie. Przed wymianą potwierdzamy model. Nie obiecujemy konkretnej liczby godzin pracy po wymianie.",
  },
  {
    id: "laptop",
    question: "Laptop się grzeje albo nie wstaje. Od czego zaczynacie?",
    answer:
      "Od diagnozy: zasilanie, obraz, temperatury i dysk. Czyszczenie albo wymiana materiałów termicznych ma sens, gdy problemem jest chłodzenie, a nie uszkodzona płyta.",
  },
  {
    id: "dane",
    question: "Czy dane z dysku albo telefonu da się odzyskać?",
    answer:
      "Czasem tak, czasem nośnik jest już martwy. Przed pracą mówimy, co jest realne. Nie gwarantujemy odzyskania konkretnych plików ani zdjęć.",
  },
  {
    id: "termin",
    question: "Ile trwa naprawa?",
    answer:
      "Zależy od usterki i dostępności części. Terminu nie podajemy z góry. Po diagnozie mówimy, czego się spodziewać w tym konkretnym przypadku.",
  },
  {
    id: "dostarczenie",
    question: "Jak przekazać sprzęt?",
    answer:
      "Ustalamy to przy kontakcie. Na stronie nie ma adresu punktu ani informacji o odbiorze, bo te dane nie zostały jeszcze potwierdzone.",
  },
  {
    id: "czesci",
    question: "Czy cena obejmuje części?",
    answer:
      "Wycena rozdziela robociznę i części, gdy da się je wycenić osobno. Sam model telefonu albo laptopa potrafi zmienić koszt bardziej niż rodzaj objawu.",
  },
];
