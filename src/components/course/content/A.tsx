// components
import Details from "@/components/course/details";

// assets
import headerImgA from "@/assets/images/courses/a-header.webp";

export default function A() {
  return (
    <Details>
      <Details.Header imageSrc={headerImgA}>Grafika komputerowa - Corel Draw i Adobe Photoshop</Details.Header>
      <Details.Content1>
        <p>
          Kompleksowy kurs grafiki komputerowej dla osób, które chcą zawodowo lub prywatnie zajmować się przetwarzanie zdjęć, tworzeniem ilustracji,
          projektowaniem form użytkowych takich jak np. plakaty, okładki, wizytówki, artykuły reklamowe, grafikę na strony internetowe itp.
        </p>
        <p>
          Oferujemy szkolenie zarówno od podstaw, jak również dla osób zaawansowanych. Przygotowujemy również programy szkolenia dopasowane do indywidualnych
          potrzeb Klienta.
        </p>
      </Details.Content1>
      <Details.Content2>
        <h2>Zakres tematyczny</h2>
        <ol>
          <li>Grafika wektorowa - Corel Draw - od podstaw.</li>
          <li>Grafika rastrowa - Adobe Photoshop - od podstaw.</li>
          <li>Pre-press - zagadnienia praktyczne w projektowaniu graficznym.</li>
          <li>Wykorzystanie modeli sztucznej inteligencji w pracach graficznych.</li>
        </ol>
      </Details.Content2>
      <Details.Footer>
        <p>
          Minimalna liczba godzin szkolenia: <b>60</b>
        </p>
        <p>Proponujemy także indywidualną możliwość uzgodnienia zakresu szkolenia i liczby godzin.</p>
      </Details.Footer>
    </Details>
  );
}
