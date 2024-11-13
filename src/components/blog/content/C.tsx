// components
import Details from "@/components/blog/details";

// assets
import headerImgC from "@/assets/images/blog/c-header.jpeg";

export default function C() {
  return (
    <Details>
      <Details.Header imageSrc={headerImgC}>Czy sztuczna inteligencja zastąpi psa?</Details.Header>
      <Details.Content1>
        <p>
          Obserwując rozwój sztucznej inteligencji, zauważam jednocześnie postępujące straszenie nią w postaci różnego rodzaju oświadczeń naukowców, w wywiadach
          i artykułach żądnych sensacji dziennikarzy. Przyszłość podana jest w najczarniejszych barwach. Strach się dobrze sprzedaje, zwłaszcza, że jest to nowy
          strach. Obawy rosną zwłaszcza u tych, którzy oglądali kultowe filmy w rodzaju „Terminatora” „Ja, robot” czy „Laleczka Chucky”.
        </p>
        <p>
          Czytam więc o tym, że maszyny, osiągnąwszy samoświadomość, zaczną polować na ludzi, a będąc od nas mądrzejsze, oczywiście wygrają wojnę, usuwając
          człowieka z Ziemi. Z przerażeniem dowiaduję się o bojowych dronach, które już dziś nad Ukrainą samodzielnie decydują czy otworzyć ogień do żołnierzy w
          okopach. Zapewne wkrótce cyfrowe opiekunki truć będą babcie podając im nanotruciznę w herbatce ziołowej, a miniaturowe inteligentne, mechaniczne
          pluskwy gryźć nas będą po nocach w naszych własnych łóżkach.
        </p>
        <p>
          Tymczasem jest zupełnie inaczej. Na szczęście. Sztuczna inteligencja pojawiła się w przeglądarkach internetowych (np. Bard Googla) i wielu
          aplikacjach, w tym tak znanych jak Adobe Photoshop czy Microsoft Office. Udziela odpowiedzi na najbardziej nawet absurdalne pytania, tworzy hasła
          reklamowe, pisze teksty na strony internetowe albo maluje obrazy według zadanego opisu. To znacząca pomoc w pracy i często dobra zabawa na miarę XXI
          wieku.
        </p>
        <p>
          Są i poważniejsze korzyści, których jeszcze nie obserwujemy na co dzień, ale które w najbliższych latach przyniosą naprawdę duże zmiany. Na lepsze.
          Zdolność maszyn do przechowywania i oceny ogromnych ilości informacji jest bezsprzeczna.
        </p>
        <p>
          Przykłady? Diagnostyka medyczna – np. meksykańska firma Unima opracowała narzędzie terminowej diagnozy, pozwalające na weryfikację, czy dana osoba
          jest zainfekowana chorobą taką jak gruźlica lub grypą. Całe działanie odbywa się w czasie15 minut, bez wykorzystania drogiego sprzętu laboratoryjnego.
          Wystarczy próbka krwi pacjenta i aplikacja na smartfona, która przy pomocy sztucznej inteligencji wykonuje wykrywanie porównawcze.
        </p>
      </Details.Content1>
      <Details.Content2>
        <p>
          Nic dziwnego, że sztucznej inteligencji boją się pracownicy służby zdrowia z Wielkiej Brytanii, USA, Australii, Kostaryki i Malezji, którzy w
          czasopiśmie “BMJ Global Health” postraszyli czytelników możliwością wystąpienia błędów sztucznej inteligencji w celu wyrządzenia krzywdy pacjentowi,
          problemy z prywatnością i bezpieczeństwem danych oraz obawami utraty miejsc pracy.
        </p>
        <p>
          Utrata miejsc pracy? Jak się to ma wobec szacunków ekonomistów Goldman Sachs, którzy twierdzą, że sztuczna inteligencja może zwiększyć roczny globalny
          PKB o 7 proc., czyli o 7 bln dol. w ciągu 10 najbliższych lat, dzięki czemu pracownicy mogliby nawet liczyć na krótszy, czterodniowy, tydzień pracy
          przy tych samych zarobkach.
        </p>
        <p>
          Słusznie pisze Paweł Rożyński w „Rzeczpospolitej” – „Bot sztucznej inteligencji stanie się asystentem człowieka. Dostępny 24 godziny na dobę,
          zarezerwuje wycieczkę, wyszukując najlepsze oferty, zabawi dziecko, wymyśli nowy biznes, podpowie, gdzie zainwestować pieniądze. A w dalszej
          przyszłości zainstalowany w robotach zrobi właściwie wszystko, łącznie z zakupami czy wizytą w urzędzie. AI rozwiąże problemy społeczne, jak opieka
          nad osobami starszymi i samotność. Może nawet zostanie najlepszym przyjacielem człowieka, zajmując miejsce psa”.
        </p>
        <p>
          Oczywiście, zgodzić się też trzeba ze słowami papieża Franciszka, który zauważył konieczność projektowania i wykorzystania sztucznej inteligencji w
          odpowiedzialny sposób, tak aby „celem jej była służba ludzkości i ochrona naszego wspólnego domu”. Radę papieża wziął sobie do serca ksiądz Jonas
          Simmerlein, teolog i filozof z Uniwersytetu Wiedeńskiego, który przy pomocy narzędzi z Open AI przygotował i odprawił mszę przy pomocy wygenerowanych
          awatarów AI w kościele św. Pawła w Fuerth w Bawarii. 300 zgromadzonych wiernych miało mieszane uczucia. Część osób potraktowała to jako świętokradztwo
          a inni z podekscytowaniem brali udział w modłach wygłaszanych przez AI.
        </p>
        <p>
          Na koniec, chciałbym przytoczyć raport „Monitoring trendów w innowacyjności”, przygotowanym przez Polską Agencję Rozwoju Przedsiębiorczości. Otóż
          według niego, do 2025 roku Polska będzie potrzebować 200 tys. specjalistów AI. Szacuje się, że wartość działań związanych ze sztuczną inteligencją
          wzrośnie do ponad 190 mld dolarów, a rozwiązania oparte na sztucznej inteligencji wdroży 97 proc. największych międzynarodowych firm.
        </p>
      </Details.Content2>
      <Details.Footer>
        <Details.Footer1>
          <p>Roman Bocheński</p>
        </Details.Footer1>
        <Details.Footer2>26 października 2023</Details.Footer2>
      </Details.Footer>
    </Details>
  );
}
