export type Symptom = {
  id: string;
  title: string;
  text: string;
  href: string;
};

export const symptoms: Symptom[] = [
  {
    id: "nie-laduje",
    title: "Nie ładuje",
    text: "Telefon albo laptop nie przyjmuje prądu. Sprawdzamy gniazdo, zasilacz i baterię.",
    href: "/serwis-telefonow-sroda-wielkopolska#zasilanie",
  },
  {
    id: "pekniety-ekran",
    title: "Pęknięty ekran",
    text: "Obraz działa albo nie. Wycena zależy od modelu i od tego, co dokładnie pękło.",
    href: "/serwis-telefonow-sroda-wielkopolska#ekran",
  },
  {
    id: "temperatura",
    title: "Wysoka temperatura",
    text: "Sprzęt dmucha, zwalnia albo gaśnie. Zaczynamy od chłodzenia, nie od wymiany płyty.",
    href: "/naprawa-laptopow-sroda-wielkopolska#chlodzenie",
  },
  {
    id: "brak-obrazu",
    title: "Brak obrazu",
    text: "Czarny ekran przy włączonym sprzęcie. Może to być matryca, sygnał albo brak startu.",
    href: "/serwis-komputerowy-sroda-wielkopolska#diagnoza",
  },
  {
    id: "wolny-system",
    title: "Wolny system",
    text: "Długie uruchamianie i pełny dysk. Patrzymy na nośnik, pamięć i stan Windows.",
    href: "/serwis-komputerowy-sroda-wielkopolska#pamiec",
  },
  {
    id: "utracone-dane",
    title: "Utracone dane",
    text: "Dysk nie wstaje albo telefon nie pokazuje zdjęć. Najpierw ocena, czy odczyt jest możliwy.",
    href: "/serwis-komputerowy-sroda-wielkopolska#pamiec",
  },
];
