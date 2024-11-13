// components
import Details from "@/components/blog/details";

// assets
import headerImgD from "@/assets/images/blog/d-header.webp";

export default function D() {
  return (
    <Details>
      <Details.Header imageSrc={headerImgD}>Komputery kwantowe - czy już istnieją?</Details.Header>
      <Details.Content1>
        <p>
          Komputery kwantowe są uważane za jedną z najbardziej obiecujących technologii. Przetwarzają dane w sposób zdecydowanie szybszy niż obecne
          &quot;tradycyjne&quot; komputery, co oczywiście może mieć ogromne znaczenie w rozwoju nauki, badaniach np. nad nowymi lekami na nieuleczalne dziś
          choroby lub nowymi antybiotykami albo nad nowymi materiałami. Na komputery kwantowe niecierpliwie czeka sztuczna inteligencja, mająca ogromne potrzeby
          jeśli chodzi moc obliczeniową, której zaczyna brakować tradycyjnym komputerom. Jednocześnie mówi się, że to dopiero możliwości komputera kwantowego
          pozwolą stworzyć &quot;prawdziwą&quot; niezwykle zaawansowaną AI, której dzisiaj jeszcze nie ma.
        </p>
        <p>Czy AI z komputerem kwantowym zdziała więc cuda? Zobaczymy.</p>
        <p>
          Dzisiejsze komputery pracują w oparciu o bit - podstawową jednostkę obliczeniową. Bit może przyjmować jedynie wartości 0 lub 1. W efekcie,
          wykorzystanie miliardów bitów i błyskawicznych zmian ich wartości, powoduje funkcjonowanie komputera w obecnej technologii. Taki komputer mówi tak lub
          nie. Innej opcji nie ma, co w jego pamięci jest reprezentowane liczbami, odpowiednio, 1 albo 0. Z obsługą większych liczb radzi sobie stosując system
          dwójkowy.
        </p>
      </Details.Content1>
      <Details.Content2>
        <p>
          Komputery kwantowe mają zdecydowanie większe możliwości Dzięki wykorzystaniu mechaniki kwantowej każdy bit tzw. kubit może przyjmować dowolny stan
          pomiędzy 0 a 1. Przyjmując jednak, że stan 0 jest czarny, a 1 odzwierciedla biały – i tylko takimi kolorami może operować zwykły komputer - to kubit w
          komputerze kwantowym może przyjąć dowolną barwę. Komputery kwantowe wyznaczają stopień prawdopodobieństwa, z jakim wydarzy się 1 lub 0. Można
          powiedzieć, że kwantowy komputer widzi świat matematyczny, który jest nieskończony do momentu zderzenia ze światem skończonym, w którym żyjemy i w
          którym działają nasze współczesne komputery zero jedynkowe. Dlatego w zasadzie klasyczne komputery a komputery kwantowe nie są porównywalne. Działają
          kompletnie inaczej.
        </p>
        <p>
          Podsumowując, dla komputera kwantowego możliwe jest wykonywanie wielu obliczeń równocześnie a odpowiedzi na złożone problemy mogą pojawić się
          zdecydowanie szybciej niż sobie dzisiaj wyobrażamy. Magia komputera kwantowego dopiero pojawia się na horyzoncie zdarzeń. Praktyczne wykorzystanie
          jego możliwości to jeszcze kwestia lat. Problemów do rozwiązania jest jeszcze wiele. Trwają eksperymenty naukowe IBM-a i nawet Googla. Dlatego nasz
          blog o komputerach kwantowych będzie rozwijał się razem z nimi. Czekajcie cierpliwie 😀
        </p>
      </Details.Content2>
      <Details.Footer>
        <Details.Footer1>
          <p>Roman Bocheński</p>
        </Details.Footer1>
        <Details.Footer2>18 października 2023</Details.Footer2>
      </Details.Footer>
    </Details>
  );
}
