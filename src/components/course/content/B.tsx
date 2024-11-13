// components
import Details from "@/components/course/details";

// assets
import headerImgB from "@/assets/images/courses/b-header.webp";

export default function B() {
  return (
    <Details>
      <Details.Header imageSrc={headerImgB}>AutoCAD GEOLIPS - tworzenie map numerycznych</Details.Header>
      <Details.Content1>
        <p>
          To specjalistyczny kurs na którym otrzymasz wiedzę z zakresu tworzenia i aktualizacji map numerycznych wykorzystywanych m. innymi w geodezji i
          kartografii. W ten sposób uzyskasz nowe kompetencje zawodowe w zakresie technologii geo-informatycznych. Poznasz specjalistyczny system, którego celem
          jest automatyzowanie najczęstszych prac w zakresie sporządzania dokumentacji kartograficznej, tj.: map, szkiców, wykresów i profili geologicznych.
        </p>
        <h2>Dla kogo jest ten kurs?</h2>
        <p>
          Nasz kurs jest dla każdego, kto pracuje lub będzie pracował w zawodzie geodety lub kartografa i chce poznać specjalistyczny system, którego celem jest
          automatyzowanie najczęstszych prac w zakresie sporządzania dokumentacji kartograficznej, tj.: map, szkiców, wykresów i profili geologicznych. Ten kurs
          jest ważny również dla każdego kto chce rozwinąć swoje umiejętności projektowe.
        </p>
      </Details.Content1>
      <Details.Content2>
        <h2>Czego się nauczysz?</h2>
        <ol>
          <li>Podstaw programu AutoCAD wymaganych do obsługi systemu Geolips.</li>
          <li>
            Tworzenia i aktualizacja map na podstawie danych pozyskanych zarówno z bezpośredniego pomiaru szczegółów terenowych, z istniejących map, jak również
            ze zdjęć lotniczych.
          </li>
          <li>Uzyskiwania wybranej mapy tematycznej w dowolnej skali.</li>
          <li>
            Tworzenie numerycznego modelu, wspomagane procedurami ułatwiającymi jego kontrolę i wizualizację, liczącymi objętości, interpolującymi warstwice.
          </li>
          <li>Sporządzenia wykresów i profilów podłużnych i poprzecznych stosowanych w geodezji.</li>
          <li>Automatyzacji prac przy rysowaniu mapy z pełną biblioteką znaków umownych.</li>
          <li>Dokonywania wyboru, edycji i raportu obiektów spełniających dane kryteria.</li>
          <li>Przeprowadzanie topologicznego czyszczenia rysunku.</li>
        </ol>
      </Details.Content2>
      <Details.Footer>
        <h2>Oprogramowanie/narzędzia kursu</h2>
        <p>AutoCAD Geolips, AutoCAD</p>
      </Details.Footer>
    </Details>
  );
}
