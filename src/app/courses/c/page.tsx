// next
import type { Metadata } from "next";

// components
import Details from "@/components/course/details";

// assets
import headerImgC from "@/assets/images/courses/c-header.webp";

export const metadata: Metadata = {
  title: "ArtCom ► Projektowanie w AutoCAD - kurs podstawowy",
};

export default function Page() {
  return (
    <Details>
      <Details.Header imageSrc={headerImgC}>Projektowanie w AutoCAD - kurs podstawowy</Details.Header>
      <Details.Content1>
        <p>
          <b>AutoCAD®</b> to najbardziej rozpoznawalne na świecie oprogramowanie, które służy do komputerowego wspomagania projektowania&nbsp;
          <b>CAD - Computer Aided Design</b>.
        </p>
        <p>Na dzisiejszym skomplikowanym rynku pracy możliwość udowodnienia swoich umiejętności jest niezwykle cenna.</p>
        <p>
          Taką możliwość daje Tobie skorzystanie z naszego kursu AutoCAD-a, oprogramowaniu przyspieszającym pracę twórczą i przeznaczonym dla branży
          inżynierskiej. Dzięki niemu zdobędziesz umiejętności przy tworzeniu dokumentacji technicznej oraz projektowaniu. Jeżeli chcesz poznać lub chcesz
          utrwalić swoją wiedzę i umiejętności to kurs Autodesk AutoCAD jest właśnie dla Ciebie.
        </p>
        <h2>Dla kogo jest ten kurs?</h2>
        <ul>
          <li>Osób planujących nauczyć się profesjonalnego oprogramowania przeznaczonego dla branży inżynierskiej.</li>
          <li>Osób chcących uzupełnić kwalifikacje zawodowe o nowe techniki projektowania CAD.</li>
          <li>Specjalistów w zakresie produkcji, projektowania i tworzenia dokumentacji technicznej.</li>
        </ul>
      </Details.Content1>
      <Details.Content2>
        <h2>Czego się nauczysz?</h2>
        <p>
          W trakcie szkolenia poznasz środowisko projektowe i tryby pracy programu AutoCAD. Dowiesz się m. innymi jak konstruować rysunki, co to są warstwy, jak
          tworzyć własne szablony. Poznasz właściwości obiektów oraz sposoby na wymiarowanie, edycję i opisywanie rysunków. Nauczysz się wiązań wymiarowych jak
          i geometrycznych. Będziesz potrafi projektować i modyfikować podstawowe elementy 2D. Stworzysz swój własny projekt, dowiesz się jak go publikować,
          drukować i eksportować.
        </p>
        <h2>Międzynarodowy certyfikat</h2>
        <p>
          Po ukończonym szkoleniu uczestnik otrzymuje: Międzynarodowy Certyfikat <b>Autodesk® Certificate of Completion</b> wydany przez Autodesk (USA), po
          zdanym międzynarodowym egzaminie: <b>Certyfikat Autodesk Certified User (ACU)</b> uznany przez pracodawców na całym świecie, potwierdzający znajomość
          zastosowania oprogramowania w pracy projektowej.
        </p>
        <p>
          <b>Certyfikat firmy Autodesk</b> stanowi pewny dowód umiejętności i specjalistycznej wiedzy posiadacza, uznawanej przez pracodawców i klientów z
          całego świata, jest poważnym atutem specjalistów zajmujących się projektowaniem. Ponadto posiadanie Certyfikatu Autodesk daje wymierne możliwości
          otrzymania propozycji interesującej pracy, a przede wszystkim sprostania wymogom aplikacyjnym podczas&nbsp;
          <b>rekrutacji pracowników na krajowym i międzynarodowym rynku pracy</b>.
        </p>
      </Details.Content2>
      <Details.Footer>
        <p>
          Zapisz się na kurs zakończony międzynarodowym certyfikatem, uznawanym przez pracodawców na całym świecie:&nbsp;
          <b>AUTODESK® Certificate of Completion - Essentials, Advanced</b>.
        </p>
      </Details.Footer>
    </Details>
  );
}
