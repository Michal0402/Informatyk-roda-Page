# Prompt dla Cursor: serwis komputerowy i GSM w Środzie Wielkopolskiej

Zbuduj kompletną, nowoczesną stronę internetową dla lokalnego serwisu komputerów, laptopów i telefonów w Środzie Wielkopolskiej. Pracuj na istniejącym repozytorium, jeśli jest otwarte: przed zmianami przejrzyj strukturę, `package.json`, istniejące treści i komponenty. Nie nadpisuj działającej strony ani danych bez analizy. Jeżeli katalog jest pusty, zainicjuj projekt. Wykonaj implementację i testy, nie kończ na planie ani makiecie.

## Najpierw skille

W katalogu projektu znajduje się `CURSOR_SKILLS.md` i `INSTALL_CURSOR_SKILLS.ps1`. Przeczytaj manifest. Na komputerze użytkownika z Windows uruchom skrypt w terminalu PowerShell z katalogu projektu; jeśli nie możesz wykonać poleceń, podaj dokładny wynik kontroli i komendy do uruchomienia. Zweryfikuj instalację i załaduj dostępne skille po odświeżeniu Cursora. Stosuj Impeccable, Taste Skill i UI UX Pro Max do wyboru spójnego kierunku i przeglądu projektu, a `react-best-practices` oraz `web-design-guidelines` Vercel do implementacji i audytu. Gdy zalecenia skilli są sprzeczne, pierwszeństwo mają wymagania tej strony: czytelność, szybkość, lokalność i prawdziwe informacje. HumanizerAI jest serwisem WWW, nie skillem Cursor; nie instaluj go jako pakietu i nie wysyłaj do niego treści automatycznie. Zastosuj ręczną korektę polskiego copy.

## Cel i marka

- Nazwa robocza: **Serwis Komputerowy i GSM Środa Wielkopolska**. Gdy w repozytorium jest potwierdzona nazwa marki, zachowaj ją i ustaw w jednym centralnym pliku konfiguracji. Unikaj obietnicy posiadania punktu stacjonarnego, jeśli adres nie został podany.
- Dwa równorzędne filary: naprawa komputerów i laptopów oraz naprawa smartfonów. Najważniejsza konwersja: telefon; drugorzędna: przejście do usług lub cennika.
- Lokalizacja główna: Środa Wielkopolska. Okolice, po potwierdzeniu możliwości obsługi: Dominowo, Krzykosy, Zaniemyśl, Kórnik. Nie twórz masowych, pustych stron dla miejscowości.
- Domyślne słowa w treści: „serwis komputerowy Środa Wielkopolska”, „naprawa laptopów Środa Wielkopolska”, „serwis telefonów Środa Wielkopolska”, „naprawa iPhone Środa Wielkopolska” — tylko tam, gdzie naturalnie odpowiadają treści.
- Hasło hero: **„Komputer lub telefon przestał działać? Sprawdzimy, co się stało.”** Dopowiedzenie: **„Serwis komputerów, laptopów i telefonów w Środzie Wielkopolskiej. Najpierw diagnoza i wycena, potem decyzja o naprawie.”** CTA: „Zadzwoń” i „Zobacz usługi”. H1 powinno jasno zawierać rodzaj usługi i lokalizację, nawet jeśli hasło jest osobnym elementem.
- Styl tekstów: po polsku, krótko, naturalnie, konkretnie. Nie obiecuj terminów, dostępności 24/7, gwarancji, darmowej diagnostyki, liczby napraw ani wyników, których nie potwierdzono.

## Wizualnie

Wybierz własny, rozpoznawalny wariant premium dla Środy, nie kopiuj 1:1 poprzedniego projektu kórnickiego. Kierunek: grafitowe tło (#0B0F14), jasna typografia (#F4F6F8), chłodny turkus jako pojedynczy akcent (#45D6C0), delikatne obramowania i powściągliwe światło. Sprawdź kontrast i skoryguj kolory, jeśli wymagają tego WCAG AA. Typography: Geist lub Manrope, wyraźna hierarchia i dużo oddechu. Sekcje mogą mieć różny rytm i szerokość, ale cała strona powinna być spójna. Prawdziwe zdjęcia warsztatu i napraw mają pierwszeństwo; jeśli ich brak, użyj estetycznych, kompletnych układów typograficznych lub abstrakcyjnych form z CSS, bez nieistniejących plików, sztucznych zdjęć napraw i stockowych techników. Przygotuj w danych ścieżki na przyszłe własne materiały i fallback wizualny.

Subtelny ruch: wejście sekcji, hover kart, dyskretny stan aktywny menu. Użyj CSS lub Motion tylko gdy ma to sens. Brak ciężkiego parallaxu, autoplay, sztucznego licznika, popupu, fałszywych opinii i efektów spowalniających telefon. Obsłuż `prefers-reduced-motion`.

## Zakres strony

1. Nawigacja z tekstowym logo, „Komputery”, „Telefony”, „Cennik”, „Realizacje”, „FAQ”, „Kontakt” i wyraźnym telefonem. Na mobile dostępny hamburger z prawidłową obsługą klawiatury i stanu otwarcia.
2. Hero z prostym H1, jasnym opisem, dwoma CTA i reprezentatywną kompozycją wizualną. Przy szerokości 320 px najważniejszy przycisk ma być widoczny bez zbędnego przewijania.
3. Wybór: duże, różniące się karty „Komputer lub laptop” i „Telefon” z krótkimi przykładami usterek oraz linkami do szczegółów.
4. Komputery i laptopy: diagnostyka, brak obrazu / brak startu, przegrzewanie, czyszczenie i wymiana materiałów termicznych, SSD/RAM, instalacja i naprawa Windows, odzyskiwanie danych, składanie/modernizacja PC, Wi-Fi i sieci. Pogrupuj zakres w logiczne kategorie.
5. GSM: iPhone oraz Android (Samsung, Xiaomi, Redmi, POCO, Motorola i inne po weryfikacji modelu). Wyświetlacz, bateria, szybka aparatu, tylna klapka, port ładowania, głośnik/mikrofon, problemy systemowe, przenoszenie danych, diagnostyka po zalaniu. Nie gwarantuj naprawy każdego modelu i każdej usterki. Zaznacz, że cena zależy od modelu i części.
6. Sekcja „Co się stało ze sprzętem?” z konkretnymi przypadkami: nie ładuje, pęknięty ekran, wysoka temperatura, brak obrazu, wolny system, utracone dane. Każda karta ma prowadzić do odpowiedniej usługi lub telefonu.
7. Przebieg naprawy: kontakt → diagnoza → wycena → naprawa/odbiór. Nie deklaruj bezpłatnej diagnozy.
8. Orientacyjny cennik trzymany w `src/data/pricing.ts`. Bez potwierdzonych cen nie wpisuj fikcyjnych „od XX zł”; pokaż „Wycena po diagnozie” oraz pola do uzupełnienia. Wyraźnie podaj, że koszt części i rodzaj usterki wpływają na cenę.
9. Realizacje w `src/data/realizations.ts`: pokaż tylko istniejące, udokumentowane naprawy i rzeczywiste fotografie. Jeśli ich brak, zaprojektuj sekcję z informacją o zakresie prac bez podszywania się pod wykonane realizacje. Uzupełnienie własnymi zdjęciami ma wymagać edycji danych i dodania plików.
10. Przewagi: bezpośredni kontakt, wycena przed naprawą, obsługa komputerów i telefonów, lokalna obsługa. Dojazd lub odbiór sprzętu prezentuj tylko, jeśli został potwierdzony w konfiguracji.
11. Obszar działania: Środa Wielkopolska i weryfikowane okolice. Nie dodawaj fikcyjnej mapy ani adresu punktu.
12. FAQ (6–9 pytań) o wycenie, iPhone/Android, baterii, laptopie, danych, terminie i dostarczeniu sprzętu. Odpowiedzi bez wymyślonych zobowiązań; użyj dostępnego z klawiatury `details/summary` albo dobrze zrobionego accordionu.
13. Mocna sekcja kontaktowa: telefon, e-mail tylko gdy znany, sposób przekazania sprzętu tylko gdy potwierdzony. Bez obowiązkowego formularza i backendu. Stopka z podstawowymi linkami.
14. Mobilny dolny pasek „Zadzwoń / Usługi / Cennik” z uwzględnieniem safe area; nie może zasłaniać treści, klawiatury ani systemowych elementów.

## Technologie i architektura

Next.js w aktualnej wersji stabilnej zgodnej z użytym środowiskiem, App Router, TypeScript, Tailwind CSS, Lucide. Statyczny frontend, bez bazy danych, CMS, Firebase, Supabase, Prisma, logowania, panelu admina i API wymagającego serwera. Zachowaj istniejący stack, jeżeli repozytorium ma już sensowną implementację, i nie przepisuj projektu bez potrzeby. Przy nowej aplikacji ustaw statyczny eksport, jeśli platforma docelowa go wymaga, i poprawnie obsłuż lokalne obrazy przy tym trybie. Renderuj zasadniczą treść po stronie serwera/statycznie; komponenty klienckie tylko dla interakcji.

Kontakt zdefiniuj w `src/config/company.ts`: `name`, `phoneDisplay`, `phoneHref`, `email`, `city`, `address` (opcjonalny), `openingHours` (opcjonalne), `serviceArea`, `pickupAvailable`, `domain` (opcjonalny), `socialUrls`. Bez potwierdzonego numeru nie twórz `tel:[NUMER]` ani klikalnego pozornego telefonu; pokaż wyraźne pole do uzupełnienia w trybie development, a w dokumentacji wskaż blokadę publikacji. Żadnych rozsianych placeholderów w komponentach. Zawartość usług, FAQ i realizacji trzymaj w plikach danych. Nie duplikuj marki i kontaktu między podstronami.

Struktura URL: `/` (zwięzły landing), `/serwis-komputerowy-sroda-wielkopolska`, `/serwis-telefonow-sroda-wielkopolska`, `/naprawa-laptopow-sroda-wielkopolska`. Utwórz podstrony tylko z unikalną, użyteczną treścią; jeżeli treści zabraknie, lepsza dobrze napisana sekcja na stronie głównej niż puste podstrony. Linki i ścieżki w polskich slugach bez znaków diakrytycznych.

SEO: unikalny `title`, opis i H1 każdej podstrony; semantyka nagłówków; canonical, Open Graph, favicon, sitemap i robots po uzupełnieniu domeny. Dane `LocalBusiness`/odpowiedni subtype tylko z rzeczywistymi danymi, bez fikcyjnego adresu, godzin, ocen i opinii. Nie dodawaj FAQ rich results na podstawie obietnicy widoczności. Zadbaj o szybkość ładowania, poprawny rozmiar grafik, format WebP/AVIF dla własnych plików, `loading`/priority według położenia oraz odpowiedni kontrast i focus.

## Kryteria odbioru

Uruchom lint/typecheck i build produkcyjny; popraw błędy. Sprawdź ręcznie szerokości 320, 375, 390, 430, 768, 1024 i 1440 px: bez poziomego scrolla, uciętych przycisków i nakładania sticky CTA. Zweryfikuj nawigację, linki do sekcji, aktywację telefonu po uzupełnieniu danych, FAQ klawiaturą, `prefers-reduced-motion`, metadane i brak błędów w konsoli. Jeśli środowisko umożliwia Lighthouse, wykonaj pomiar mobile i desktop; podaj faktyczne wyniki, nie deklaruj 90+ bez pomiaru. W README opisz lokalne uruchomienie, dane konieczne przed publikacją i dodawanie własnych zdjęć/realizacji.

Na końcu wypisz zmienione pliki, wyniki uruchomionych kontroli oraz pola wymagające prawdziwych danych firmy. Wykonaj całą stronę, a nie samą strukturę, plan lub TODO.
