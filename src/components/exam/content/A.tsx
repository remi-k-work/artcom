// components
import Details from "@/components/exam/details";

// assets
import headerImg1 from "@/assets/images/exams/a-header-1.webp";
import headerImg2 from "@/assets/images/exams/a-header-2.webp";
import footerImg1 from "@/assets/images/exams/a-footer-1.webp";

export default function A() {
  return (
    <Details>
      <Details.Header image1Src={headerImg1} image2Src={headerImg2}>
        Europejski Certyfikat Umiejętności Komputerowych (ECDL)
      </Details.Header>
      <Details.Content1>
        <p>
          <b>Idea Europejskiego Certyfikatu Umiejętności Komputerowych (ECDL)</b> podjęta została z poparciem Rady Europy w 1996 roku. Certyfikat wprowadzony
          został w całej Zjednoczonej Europie. W Polsce CDL propaguje i wdraża Polskie Towarzystwo Informatyczne.
        </p>
        <p>
          Certyfikat umiejętności komputerowych nie przypadkiem został nazwany European Computer Driving Licence, w tłumaczeniu „Europejskie Komputerowe Prawo
          Jazdy”
        </p>
        <p>
          W dynamicznym społeczeństwie informacyjnym <b>wartość ECDL można śmiało porównać ze znaczeniem, jakie ma dziś prawo jazdy</b>: choć można bez niego
          przeżyć, to zdecydowanie lepiej je posiadać.
        </p>
      </Details.Content1>
      <Details.Content2>
        <p>
          ECDL opracowano również z myślą o pracodawcach, którzy dostają pewność, że nowy pracownik nie będzie tracić czasu na zgłębianie podstawowych funkcji
          oprogramowania ani też na ręczne wykonywanie czasochłonnych operacji, które można wykonać kilkoma kliknięciami myszki.
        </p>
        <p>
          ARTCOM od wielu lat oferuje możliwość uzyskania niemal wszystkich dostępnych certyfikatów ECDL. Prowadzimy naukę na kursach, gdzie przygotowujemy do
          zdania egzaminów ECDL. <b>Jesteśmy autoryzowanym laboratorium egzaminacyjnym tego europejskiego certyfikatu</b>.
        </p>
        <p>
          Przez 30 lat z naszych szkoleń skorzystało kilka tysięcy osób, przeprowadziliśmy z powodzeniem setki egzaminów ECDL i wydaliśmy również wiele
          certyfikaktów ECDL.
        </p>
      </Details.Content2>
      <Details.Footer image1Src={footerImg1}>
        <p>U nas podniesiesz swoje kwalifikacje zawodowe z uznawanym w całej Europie certyfikatem ECDL.</p>
        <p>Serdecznie zapraszamy.</p>
      </Details.Footer>
    </Details>
  );
}
