# Skille do projektu w Cursorze

Otwórz katalog projektu w Cursorze. W PowerShell uruchom `./INSTALL_CURSOR_SKILLS.ps1` z tego katalogu, a następnie przeładuj okno Cursora. Skrypt instaluje skille lokalnie w projekcie; nie zmienia globalnych ustawień Cursora. Nie zastępuje implementacji strony.

| Źródło | Instalacja | Zastosowanie |
| --- | --- | --- |
| https://impeccable.style/ | `npx skills add pbakaus/impeccable -a cursor -y --copy` | Projekt i audyt interfejsu. Wariant `npx impeccable install` oferuje dodatkową integrację i hooki, lecz wymaga interaktywnej konfiguracji. |
| https://www.tasteskill.dev/ | `npx skills add Leonxlnx/taste-skill --skill design-taste-frontend -a cursor -y --copy` | Wskazówki typografii, kompozycji i ograniczenie typowych szablonów. Wersja domyślna v2 jest eksperymentalna. |
| https://uupm.cc/ | `npx ui-ux-pro-max-cli init --ai cursor` | Biblioteka wzorców UI/UX i podpowiedzi dla Next.js. Wymaga Python 3 do skryptów wyszukiwania. |
| https://github.com/vercel-labs/agent-skills | `npx skills add vercel-labs/agent-skills --skill react-best-practices --skill web-design-guidelines -a cursor -y --copy` | Praktyki React/Next.js oraz przegląd dostępności, szybkości i UX. |
| https://humanizerai.ai/pl | Brak zweryfikowanego skilla dla Cursora; strona WWW. | Opcjonalna ręczna redakcja treści. Nie przesyłaj tekstów automatycznie. |

Po instalacji Cursor ma przeczytać instrukcje faktycznie zainstalowanych skilli i użyć ich do zaprojektowania, wdrożenia i oceny strony. Prompt projektu ma pierwszeństwo przed ogólnymi poradami estetycznymi. Nie kopiuj gotowych tekstów z narzędzi zewnętrznych. Nie twórz fikcyjnych cen, recenzji, adresów, godzin ani danych firmy.

Wymagania na lokalnej maszynie: Node.js i npx; Python 3 jest potrzebny dla funkcji wyszukiwania UI UX Pro Max. Jeżeli instalacja się nie powiedzie, pokaż dokładnie który krok zawiódł. Nie oznaczaj pominiętego skilla jako zainstalowanego.
