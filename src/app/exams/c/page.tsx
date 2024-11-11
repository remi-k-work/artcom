// next
import type { Metadata } from "next";

// components
import Details from "@/components/exam/details";

// assets
import footerImg1 from "@/assets/images/exams/c-footer-1.webp";

export const metadata: Metadata = {
  title: "ArtCom ► Autodesk® Certificate of Completion",
};

export default function Page() {
  return (
    <Details>
      <Details.Header>Autodesk® Certificate of Completion</Details.Header>
      <Details.Content1>
        <h2>Co to jest certyfikat Autodesk® Certificate of Completion?</h2>
        <p>
          Międzynarodowy Certyfikat Autodesk® Certificate of Completion wydawany przez Autodesk (USA), po zdanym międzynarodowym egzaminie. Ten certyfikat jest
          jednym z podstawowych dokumentów wymaganych dla inżynierów i konstruktorów w wielu branżach, gdzie w studiach projektowych zaczyna powstawać koncepcja
          końcowego produktu, którym może być dom, samochód czy np. odkurzacz.
        </p>
        <h2>Dlaczego certyfikat Autodesk® Certificate of Completion?</h2>
        <p>
          <b>AutoCAD</b> oraz <b>AutoCAD Certified User</b> stanowią doskonały atut dla inżyniera w czasie wyboru i poszukiwania najlepszych ofert pracy w kraju
          i za granicą. Potwierdzona znajomość technik CAD jest umiejętnością kluczową wymaganą przez pracodawców.
        </p>
      </Details.Content1>
      <Details.Content2>
        <h2>Jak wygląda egzamin AUTODESK CERTIFIED USER?</h2>
        <p>Egzaminy w oferowanym przez naszą firmę kursie, przeprowadzane są na poziomie podstawowym.</p>
        <p>Egzamin trwający 50 minut, składa się z 30 pytań. Są to zarówno pytania teoretyczne jak i zadania praktyczne.</p>
        <ul>
          <li>Test wielokrotnego wyboru</li>
          <li>Zadania otwarte: Utworzenie lub zmodyfikowanie pliku danych w oprogramowaniu a następnie wpisanie odpowiedzi we właściwym polu.</li>
        </ul>
        <p>Egzaminy AutoCAD przeprowadzane są w języku polskim lub opcjonalnie w języku angielskim.</p>
        <p>Egzamin oceniany jest na podstawie liczby poprawnych odpowiedzi.</p>
      </Details.Content2>
      <Details.Footer image1Src={footerImg1}>
        <p>Szkolenia Autodesk AutoCAD oferowane przez ARTCOM, kończą się uzyskaniem wymienionych certyfikatów firmy Autodesk.</p>
      </Details.Footer>
    </Details>
  );
}
