# **Rozszerzone Zadanie - Pobieranie i Wyświetlanie Danych z API**

## **Opis Zadania:**

Twoim zadaniem jest rozbudowanie istniejącej aplikacji React, tak aby dynamicznie pobierała dane z endpointów API (udostępnianych np. przez JSON Server) i wyświetlała je na odpowiednich stronach.

### **Cele:**

1. **Pobieranie i Wyświetlanie Informacji ze Stron:**

   - Pobrać informacje z endpointów `/pages/home` oraz `/pages/contact`.
   - Wyświetlić pobrane informacje na stronach **Home** i **Contact**.

2. **Pobieranie Danych Użytkowników i Wyświetlanie ich w Nawigacji:**
   - Pobrać dane z endpointu `/users`.
   - Wyświetlić listę użytkowników w nawigacji.
   - Po kliknięciu na użytkownika w nawigacji, przejść do jego indywidualnej strony profilu i wyświetlić szczegółowe informacje.

---

## **Szczegółowe Wytyczne:**

### **1. Pobieranie i Wyświetlanie Informacji ze Stron**

#### **1.1. Pobieranie Danych w Komponentach:**

##### **Strona Home (`Home.js`):**

- Zaimportuj `useState` i `useEffect` z React.
- Użyj `fetch`, aby pobrać dane z endpointu `http://localhost:5000/pages/home`.
- Przechowaj pobrane dane w stanie komponentu.
- Wyświetl tytuł i treść strony.

##### **Strona Contact (`Contact.js`):**

- Postępuj analogicznie jak w przypadku strony `Home`, ale pobierz dane z endpointu `http://localhost:5000/pages/contact`.
- Wyświetl tytuł, treść oraz dane kontaktowe (telefon, e-mail).

### **2. Pobieranie Danych Użytkowników i Wyświetlanie ich w Nawigacji**

#### **2.1. Pobieranie i Wyświetlanie Użytkowników w Nawigacji (`Navbar.js`):**

- Zaimportuj `useState`, `useEffect` i `Link` z React Router.
- Użyj `fetch`, aby pobrać dane z endpointu `http://localhost:5000/users`.
- Przechowaj listę użytkowników w stanie komponentu.
- Wyświetl listę użytkowników w nawigacji.

#### **2.4. Wyświetlanie Szczegółów Użytkownika (`UserProfile.js`):**

- Wykorzystaj `useParams` do pobrania `id` użytkownika z URL.
- Użyj `fetch`, aby pobrać dane z endpointu `http://localhost:5000/users/{id}`.
- Wyświetl szczegółowe informacje o użytkowniku.

### **3. Obsługa Błędów i Ładowania**

- **Stan Ładowania:** W komponentach, gdzie pobierasz dane, dodaj stan ładowania (`loading`), aby poinformować użytkownika, że dane są pobierane.
- **Obsługa Błędów:** Dodaj obsługę błędów, aby wyświetlić odpowiedni komunikat, jeśli dane nie zostaną pobrane lub wystąpi błąd.

### **4. Stylizacja**

- Upewnij się, że interfejs jest czytelny i przyjazny dla użytkownika.
- Zastosuj stylizację dla aktywnych linków w nawigacji.
- Rozważ użycie biblioteki CSS, takiej jak **Tailwind CSS** lub **Bootstrap**, aby przyspieszyć proces stylizacji.

## **Rozszerzenia (Opcjonalne):**

- **Formularz Kontaktowy:**

  - Dodaj formularz na stronie **Contact**, który pozwoli użytkownikom wysyłać wiadomości.
  - Zaimplementuj walidację danych formularza.
  - Przechowuj wysłane wiadomości w JSON Server (dodając do `db.json` sekcję `messages`).

- **Paginacja i Wyszukiwanie Użytkowników:**

  - Jeśli lista użytkowników jest długa, zaimplementuj paginację.
  - Dodaj funkcję wyszukiwania użytkowników w nawigacji.

- **Autoryzacja i Logowanie:**
  - Dodaj mechanizm logowania użytkowników.
  - Ogranicz dostęp do pewnych stron tylko dla zalogowanych użytkowników.
