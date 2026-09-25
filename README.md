# Serwis Komputerowy i GSM Środa Wielkopolska

Statyczna strona serwisu komputerów, laptopów i telefonów. Next.js, App Router, TypeScript, Tailwind CSS.

## Uruchomienie

```bash
npm install
npm run dev
```

Strona otwiera się na [http://localhost:3000](http://localhost:3000).

```bash
npm run lint
npx tsc --noEmit
npm run build
```

Build składa pliki do katalogu `out/`. Adresy mają końcowy ukośnik, więc zwykły hosting statyczny serwuje `index.html` z katalogu trasy. Skrypt buildu dokłada też kopie plików RSC, o które prosi przeglądarka.

## Dane przed publikacją

Publikacja jest zablokowana, dopóki w `src/config/company.ts` nie ma prawdziwych danych:

- `phoneDisplay` i `phoneHref` w formacie `tel:+48...` — bez tego nie ma linku telefonicznego
- `domain` — bez domeny strona ma `noindex`, a `robots.txt` blokuje indeksowanie
- `email`, `address`, `openingHours` — tylko gdy są potwierdzone
- `pickupAvailable` zostaw `false`, jeśli nie ma potwierdzonego odbioru lub dojazdu
- `nearbyToConfirm` to miejscowości do potwierdzenia, nie obietnica dojazdu

W trybie `npm run dev` brak numeru widać na żółtym pasku u góry. Nie publikuj buildu z pustym telefonem.

Nie dopisuj cen „od XX zł”. Kwotę wpisujesz w `amount` w `src/data/pricing.ts`. Puste pole pokazuje „Wycena po diagnozie”.

## Zdjęcia i realizacje

Własne zdjęcia warsztatu trzymaj jako WebP albo AVIF w `public/media/`:

- `public/media/warsztat.webp`
- `public/media/naprawa-laptopa.webp`
- `public/media/naprawa-telefonu.webp`

Ścieżki są opisane w `src/data/realizations.ts` (`mediaSlots`). Plików nie ma w repozytorium, więc strona ich nie wyświetla.

Udokumentowaną naprawę dopisujesz do tablicy `realizations` i dodajesz plik, na przykład `public/realizacje/naprawa-01.webp`. Pusta tablica zostawia informację o zakresie prac, bez fikcyjnych zleceń.
