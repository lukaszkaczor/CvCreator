# CvCreator

### Prace w toku
#### Planowane funkcje i ulepszenia: 
1. Strona główna
2. Dodanie autoodświeżania JWT  
3. Dodanie możliwości przesyłania i pobierania zapisanych Cv z bazy danych
4. Dodanie funkcji umożliwiającej zarządzaniem rolami użytkowników
5. Przejście do zakładki "Pobierz CV" będzie możliwe dopiero w przypadku gdy zostaną podane podstawowe dane
6. Ulepszenia klas odpowiedzialnych za generowanie treści i rozpoznawanie znaczników 
7. Ulepszenia w wyglądzie i skalowaniu strony
8. Ulepszenie form i ich lepsze rozmieszczenie na podstronach

#### Admin:
Email: admin@cvcreator.com\
Hasło: qwertyuiop

#### Wymagania:
Angular 2+, .NET Core 3.1, MS Sql Server
\
\
Program służy do generowania CV na podstawie podanych wcześniej danych.\
Niżej kilka zdjęć z działającego programu.

## Dane personalne
### Zawiera formy do podania:
  1. Zdjęcia
  2. Imienia, nazwiska, daty urodzenia
  3. Miejsca zamieszkania
  4. Numeru telefonu, adresu email
  5. Linków do kont społecznościowych - lista
 
![Alt text](/wwwroot/images/personaldata.png "personaldata")

## Doświadczenie
### Zawiera formy do podania:
  1. Doświadczenia zawodowego - lista
  2. Wykształcenia - lista
  2. Znajomości języków  - lista
  3. Certyfikatów - lista

![Alt text](/wwwroot/images/languages.png "languages")

## Umiejętności
### Zawiera formy do podania:
  1. Umiejętności wraz z ich kategoriami - lista
  2. Zainteresowań - lista
  2. RODO
 
![Alt text](/wwwroot/images/skills.png "skills")
 
## Pobierz CV
### Zawiera:
  1. Opcję pobrania lub wydrukowania CV
  2. Podgląd gotowego CV - na mniejszych roździelczościach podgląd jest wyłączony
  3. Wybór szablonu - niedokończony
  4. Zapisywanie i odczytywanie gotowych CV w bazie danych dla zalogowanych użytkowników - niedokończony
  
![Alt text](/wwwroot/images/summary.png "summary")
  
## Pasek nawigacji
Umożliwia łatwą nawigację pomiędzy podstronami kreatora.
![Alt text](/wwwroot/images/nav1.png "nav1")

Na dole każdej strony są też przyciski ułatwiające nawigowanie po aplikacji.

![Alt text](/wwwroot/images/nav2.png "nav2")

## Menu admina
Widoczny po zalogowaniu, tylko dla użytkowników z rolą admina.
Umożliwia między innymi edytowanie listy dostępnych szablonów 

![Alt text](/wwwroot/images/templates.png "templates")
