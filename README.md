## **Routing (React Router)**

### **1. Wielostronicowa Aplikacja**

**Opis Zadania:**
Stwórz prostą aplikację wielostronicową z trzema stronami: **Home**, **About**, oraz **Contact**. Użytkownik powinien móc nawigować między tymi stronami za pomocą menu nawigacyjnego.

**Elementy Zadania:**

- **Instalacja React Router:**
  - Użyj `npm` lub do zainstalowania `react-router-dom`.
- **Struktura Aplikacji:**
  - Stwórz komponenty dla każdej strony: `Home`, `About`, `Contact`.
  - Utwórz komponent `Navbar` z linkami do każdej z tych stron.
- **Konfiguracja Routera:**
  - W głównym pliku aplikacji (np. `App.js`) skonfiguruj `BrowserRouter`, `Routes` i `Route`.
- **Przykładowy Kod:**
- **Dodatkowe Elementy:**
  - Stylizacja nawigacji za pomocą CSS lub biblioteki Tailwind CSS
  - Dodanie aktywnego stylu dla aktualnej strony.

### **2. Dynamiczne Trasy**

**Opis Zadania:**
Rozbuduj aplikację o dynamiczne trasy, które przyjmują parametry URL. Na przykład, stwórz stronę użytkownika, gdzie każdemu użytkownikowi przypisany jest unikalny `ID`, a strona wyświetla informacje na jego temat.

**Elementy Zadania:**

- **Rozszerzenie Routera:**
  - Dodaj nową trasę z dynamicznym parametrem, np. `/users/:id`.
- **Komponent Strony Użytkownika:**
  - Stwórz komponent `UserProfile`, który odczytuje `id` z parametrów URL i wyświetla odpowiednie dane.
- **Przykładowy Kod:**
- **Nawigacja do Dynamicznych Tras:**
  - Dodaj linki w `Home` lub innym komponencie, które prowadzą do stron użytkowników, np. `/users/1`, `/users/2`.
- **Obsługa Błędów:**
  - Dodaj logikę do obsługi przypadków, gdy użytkownik o danym `ID` nie istnieje.
  - Możesz przekierować do strony błędu lub wyświetlić komunikat.
