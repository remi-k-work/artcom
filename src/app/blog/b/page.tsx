// next
import type { Metadata } from "next";

// components
import Details from "@/components/blog/details";

// assets
import headerImgB from "@/assets/images/blog/b-header.webp";

export const metadata: Metadata = {
  title: "ArtCom ► Jestem ekspertem, czyli jak blefować, że znam się na komputerach?",
};

export default function Page() {
  return (
    <Details>
      <Details.Header imageSrc={headerImgB}>Jestem ekspertem, czyli jak blefować, że znam się na komputerach?</Details.Header>
      <Details.Content1>
        <p>
          Temat wydaje się trochę dziwny? Dzisiaj już przecież wszyscy &quot;znają się&quot; na komputerach 😀. No, może nie wszyscy, ale kto się przyzna?
          Dlatego nawet jeśli się znamy, to zawsze w towarzystwie znajdzie się ktoś, kto zna się lepiej. Wtedy dobrze jest zablefować, tak aby WSZYSCY zobaczyli
          że jesteśmy komputerowym ekspertem.
        </p>
        <p>
          Ja zawsze wtedy blefuję, dlatego podpowiem Wam kilka przydatnych sztuczek. Przykładowo, ktoś opowiada z zapałem, że rozpracował właśnie najnowszy
          system operacyjny Windows 11 i pyta Cię o opinię o nim.
        </p>
        <p>
          Najlepiej odpowiedzieć, że zajmujesz się wyłącznie innym systemem np. Unixem. Nie znasz nazwy jakiegokolwiek systemu? Nie szkodzi, wymyśl szybko
          własną, byle kojarzyła się z czymś skomplikowanym. Nikt o zdrowych zmysłach nie zna przecież nazw wszystkich systemów operacyjnych.
        </p>
        <p>
          Jeżeli przeciwnik odpowie, że nie zna takiego systemu, popatrz na niego z politowaniem i wspomnij że jest to nowy, eksperymentalny system stworzony
          przez sztuczną inteligencję i wypuszczony do testowania tylko w zamkniętym gronie ekspertów.
        </p>
        <p>
          Gdy ktoś nieopatrznie spróbuje gawędzić o przeglądarkach, rzuć od niechcenia, że przecież wiadomo iż Google Chrome to taki program, za pomocą którego
          można ściągnąć Firefoxa. Gdyby jednak gawędziarz chciał dalej dyskutować, nagle przypomnij sobie o bardzo ważnej sprawie np. że musisz wyjść
          sformatować monitor kwantowy.
        </p>
        <p>
          Może się zdarzyć, że po kilku kwadransach, zafascynowany Twoją wiedzą, a o dziwo mniej od ciebie rozwinięty komputerowo sąsiad od kieliszka, wystrzeli
          nagle - &quot;Mam problem, znasz się może na naprawie komputera?&quot; Oczywiście, że się nie znasz, ale nie możesz mu przecież odpowiedzieć, że to
          dla ciebie czarna magia.
        </p>
      </Details.Content1>
      <Details.Content2>
        <p>
          Mówisz więc dumnie: &quot;Jestem programistą, nie naprawię Ci komputera&quot;. Te kultowe hasło na szczęście widziałeś kiedyś na koszulce jakiegoś
          przedstawiciela tej tajemniczej sekty. Możesz na koniec dorzucić stwierdzenie, że programista w rodzinie to teraz tak jak niegdyś ksiądz czy lekarz.
          Na pewno znajdzie się ktoś, kto uzupełni ci pustą szklaneczkę i złośliwie przypomni, że dobry programista wiesza się razem ze swoim programem. Jeżeli
          jednak wychylisz szklaneczkę, lepiej nie skuś się na kolejną, gdyż resetowanie pamięci (własnej, na kacu) następnego ranka może nie być tym co
          będziesz lubił robić codziennie.
        </p>
        <p>
          Czy możesz w końcu zostać zdemaskowany? Absolutnie nie. Odpowiedzialnym ekspertom obeznanym z blefem to nie grozi. Już nim prawie jesteś, przecież
          przeczytałeś tego bloga prawie do końca. No chyba, że przy stole znajdzie się cwaniaczek, który na kolanach trzyma system Dare. Co to takiego?
          Sztucznie inteligentny wariograf, stworzony przez naukowców z amerykańskiego uniwersytetów w Maryland i Dartmouth. Jego zadaniem jest wykrywanie
          kłamstw na salach sądowych, gdzie więksi od nas blefmeni przysięgają mówić prawdę i tylko prawdę. Dare sprawdzi czy blefujemy bez mrugnięcia okiem.
        </p>
        <p>Dlatego przyjacielu, Twoim zadaniem nie jest użeranie się z wieszającym się komputerem, ale doskonalenie się w blefowaniu.</p>
        <p>
          Ja osobiście bardziej obawiam się projektu prowadzony przez polskich badaczy, w którym algorytmy będą analizować, czy teksty pisane są wiarygodne, czy
          nie, na podstawie gramatycznych i stylistycznych cech.
        </p>
        <p>Może od razu umówmy się, że nie będziecie z tego korzystać 😀</p>
      </Details.Content2>
      <Details.Footer>
        <Details.Footer1>
          <p>Roman Bocheński</p>
        </Details.Footer1>
        <Details.Footer2>18 listopada 2023</Details.Footer2>
      </Details.Footer>
    </Details>
  );
}
