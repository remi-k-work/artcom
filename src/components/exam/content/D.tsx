// components
import Details from "@/components/exam/details";

// assets
import footerImg1 from "@/assets/images/exams/d-footer-1.webp";
import footerImg2 from "@/assets/images/exams/d-footer-2.webp";

export default function D() {
  return (
    <Details>
      <Details.Header>TELC Language Tests</Details.Header>
      <Details.Content1>
        <h2>Dlaczego certyfikaty TELC?</h2>
        <p>
          Certyfikat TELC można uzyskać po zdaniu egzaminu, który sprawdza znajomość języka, kładąc szczególny nacisk na umiejętność porozumiewania się, a nie
          na znajomość gramatyki.
        </p>
        <ul>
          <li>
            Znane na całym świecie instytucje certyfikujące ograniczają się do jednego języka, podczas gdy Telc opracowuje systemy egzaminacyjne dla 10 języków
            zachowując te same standardy i wymagania.
          </li>
          <li>
            Certyfikaty można uzyskać z 10 języków: niemieckiego, angielskiego, francuskiego, hiszpańskiego, włoskiego, portugalskiego, rosyjskiego, polskiego,
            tureckiego i arabskiego na różnych poziomach.
          </li>
          <li>
            Zaletą systemu egzaminów językowych Telc jest ich porównywalność. Oznacza to iż egzamin zdany np. z języka angielskiego na poziomie B1 (średnio
            zaawansowany) jest takim samym egzaminem jak egzamin B1 z języka niemieckiego, czy hiszpańskiego na tym samym poziomie.
          </li>
        </ul>
        <p>
          Wszystkie certyfikaty Telc opierają się na identycznym poziomie wymagań i dają - niezależnie od języka - identyczny zakres sprawności językowych.
          Certyfikaty te są opracowane wg Europejskiego Systemu Opisu Kształcenia Językowego Rady Europy i w 100% odpowiadają wymaganiom tego systemu. Telc
          uczestniczyło aktywnie w pracach Rady Europy przy jego tworzeniu.
        </p>
        <p>TELC nie ocenia znajomości reguł gramatycznych i ilości popełnionych błędów, lecz umiejętność wykorzystania języka do osiągnięcia różnych celów.</p>
      </Details.Content1>
      <Details.Content2>
        <h2>Egzaminy TELC</h2>
        <p>
          Egzamin TELC weryfikuje 4 sprawności: słuchanie, czytanie, pisanie i mówienie. Na wszystkich poziomach zaawansowania składa się z części pisemnej oraz
          ustnej. Część pisemna to teksty do czytania i słuchania ze zrozumieniem. Część ustna to rozmowa w danym języku.
        </p>
        <p>
          Część pisemna egzaminu jest sprawdzana komputerowo w Centralnym Biurze Egzaminacyjnym we Frankfurcie nad Menem. Cześć ustna jest oceniana w
          instytucjach przeprowadzających egzamin przez licencjonowanych egzaminatorów.
        </p>
        <p>
          Po zdaniu egzaminu TELC otrzymuje się certyfikat potwierdzający znajomość języka wraz z oceną z egzaminu. Certyfikaty są drukowane i przysyłane z
          Centralnego Biura Egzaminacyjnego z Niemiec.
        </p>
        <p>Certyfikaty TELC są znane i honorowane na całej terenie Unii Europejskiej.</p>
        <h2>Uznawalność certyfikatu</h2>
        <ul>
          <li>Certyfikat Telc daje możliwość podjęcia pracy m. innymi w zawodzie nauczyciela (zgodnie z rozporządzeniem MEN z dnia 1 lipca 2020 roku).</li>
          <li>Certyfikat Telc zwalnia z egzaminu końcowego oraz lektoratów na wielu polskich uczelniach.</li>
          <li>Erasmus - posiadając certyfikat Tlec można otrzymac dodatkowe punkty podczas rekrutacji do programu Erasmus.</li>
          <li>Służba cywilna - certyfikat Telc spełnia wymogi postępowania kwalifikacyjnego w służbie cywilnej.</li>
        </ul>
      </Details.Content2>
      <Details.Footer image1Src={footerImg1} image2Src={footerImg2}>
        <ul>
          <li>Administracja egzaminów jest prosta i klarowna.</li>
          <li>Terminy egzaminów ustala Centrum Egzaminacyjne indywidualnie w zależnie od potrzeb.</li>
          <li>Ceny egzaminów Telc są konkurencyjne w stosunku do innych instytucji certyfikujących.</li>
          <li>
            Egzaminy TELC przeprowadzane są w Polsce od blisko 30 lat, a obecnie uczestniczy w tym programie ponad 200 uczelni wyższych, szkół językowych i
            innych instytucji edukacyjnych. Egzaminy na certyfikaty telc są przeprowadzane jako egzaminy wstępne, wewnętrzne lub końcowe na wielu polskich
            uczelniach państwowych oraz społecznych.
          </li>
          <li>Oferta egzaminów TELC dotyczy nie tylko języka ogólnego, ale także specjalistycznego np. biznesowego czy technicznego.</li>
        </ul>
      </Details.Footer>
    </Details>
  );
}
