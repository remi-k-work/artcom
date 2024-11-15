// next
import type { Metadata } from "next";

// components
import Accordion from "@/components/ui/custom/accordion";
import { default as AccordionContent } from "@/components/ui/custom/accordion/Content";
import { default as AccordionItem } from "@/components/ui/custom/accordion/Item";
import { default as AccordionTrigger } from "@/components/ui/custom/accordion/Trigger";
import Hero from "@/components/hero-a";
import Secondary from "@/components/secondary";
import Course, { CourseHeader, CourseContent } from "@/components/course";

// assets
import { AcademicCapIcon } from "@heroicons/react/24/solid";
import courseHeaderImgA from "@/assets/images/courses/a-header.webp";
import courseHeaderImgB from "@/assets/images/courses/b-header.webp";
import courseHeaderImgC from "@/assets/images/courses/c-header.webp";
import courseHeaderImgD from "@/assets/images/courses/d-header.webp";
import courseHeaderImgE from "@/assets/images/courses/e-header.webp";
import courseHeaderImgF from "@/assets/images/courses/f-header.webp";
import courseHeaderImgG from "@/assets/images/courses/g-header.webp";
import courseHeaderImgH from "@/assets/images/courses/h-header.webp";
import courseHeaderImgI from "@/assets/images/courses/i-header.webp";
import courseHeaderImgJ from "@/assets/images/courses/j-header.webp";

export const metadata: Metadata = {
  title: "ArtCom ► Szkolenia i Kursy",
};

export default function Page() {
  return (
    <>
      <Hero model={<AcademicCapIcon />}>
        <Hero.Header>Szkolenia i Kursy</Hero.Header>
        <Hero.Content>
          <Accordion type="single" defaultValue="item1">
            <AccordionItem value="item1">
              <AccordionTrigger>Nasi wykładowcy</AccordionTrigger>
              <AccordionContent>
                <p>
                  Od ponad 30 lat wykładowcy i instruktorzy PZI ARTCOM oferują swoje wieloletnie doświadczenie i pasję zawodową w prowadzeniu szkoleń. Posiadają
                  i przekazują praktyczne umiejętności, niezbędne w rozwoju i pracy zawodowej.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item2">
              <AccordionTrigger>Aktualne i zrozumiałe materiały szkoleniowe</AccordionTrigger>
              <AccordionContent>
                <p>
                  Nasze kursy bazują na aktualnych podręcznikach i skryptach (w tym własnych publikacjach) które są zgodne z najnowszymi trendami w technologii
                  informatycznej oraz metodami nauki języków obcych.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item3">
              <AccordionTrigger>Praktyczna nauka</AccordionTrigger>
              <AccordionContent>
                <p>
                  Na naszych kursach komputerowych uczymy umiejętności, które uczestnicy mogą sprawdzić w rzeczywistych sytuacjach. Nasze praktyczne zajęcia
                  obejmują przede wszystkim tworzenie ciekawych projektów i radzenia sobie z nietypowymi sytuacjami.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item4">
              <AccordionTrigger>Sprzęt i oprogramowanie</AccordionTrigger>
              <AccordionContent>
                <p>
                  Dysponujemy salami szkoleniowymi wyposażonymi w niezbędny, nowoczesny sprzęt komputerowy i licencjonowane oprogramowanie, co umożliwia
                  zastosowanie praktycznego sposobu prowadzenia zajęć. Naukę wspomagają systemy audio i wideo.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item5">
              <AccordionTrigger>Oceny</AccordionTrigger>
              <AccordionContent>
                <p>
                  Posiadamy liczne referencje od klientów i systematycznie zbieramy opinie od uczestników szkoleń. Oceniamy swoje doświadczenie, aby stale
                  doskonalić nasze programy szkoleniowe.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item6">
              <AccordionTrigger>Certyfikaty i kwalifikacje</AccordionTrigger>
              <AccordionContent>
                <p>
                  Współpracujemy z międzynarodowymi instytucjami certyfikującymi, aby nasi uczestnicy mogli uzyskać certyfikaty i kwalifikacje, które są cenione
                  na rynku pracy.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item7">
              <AccordionTrigger>Wsparcie po szkoleniu</AccordionTrigger>
              <AccordionContent>
                <p>
                  Nasza gwarancja jakości nie kończy się na kursie. Oferujemy wsparcie i konsultacje po szkoleniu, aby nasi uczestnicy mieli dostęp do wiedzy
                  praktycznej.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item8">
              <AccordionTrigger>Dostępność i elastyczność</AccordionTrigger>
              <AccordionContent>
                <p>
                  Staramy się o dostępność programów dla różnych grup wiekowych i zawodowych. Nasza szeroka oferta pozwala dopasować terminy zajęć do możliwości
                  uczestników. Dlatego prowadzimy zajęcia zarówno w godzinach rannych jak i popołudniowych.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item9">
              <AccordionTrigger>Nasza gwarancja jakości</AccordionTrigger>
              <AccordionContent>
                <p>Gwarantujemy najwyższą jakość szkoleń. Poznaj nasze 5 punktów Gwarancji jakości.</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item10">
              <AccordionTrigger>Staże i pomoc w pozyskiwaniu miejsc pracy</AccordionTrigger>
              <AccordionContent>
                <p>
                  PZI ARTCOM uczestniczy w pomocy w pozyskiwaniu miejsc pracy, prowadzi doradztwo zawodowe oraz wykonuje szkolenia zawodowe dla osób kierowanych
                  przez Powiatowe Urzędy Pracy. Prowadzimy również staże dla uczestników projektów współfinansowanych przez Unię Europejską.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </Hero.Content>
      </Hero>
      <Secondary header="Nasze Szkolenia i Kursy">
        <h2 id="courses1">Kursy Informatyczne</h2>
        <Course detailsHref="/courses/a">
          <CourseHeader imageSrc={courseHeaderImgA}>Grafika komputerowa - Corel Draw i Adobe Photoshop</CourseHeader>
          <CourseContent>
            Kompleksowy kurs grafiki komputerowej dla osób, które chcą zawodowo lub prywatnie zajmować się przetwarzanie zdjęć, tworzeniem ilustracji,
            projektowaniem form użytkowych takich jak np. plakaty, okładki, wizytówki, artykuły reklamowe, grafikę na strony internetowe itp.
          </CourseContent>
        </Course>
        <Course detailsHref="/courses/b">
          <CourseHeader imageSrc={courseHeaderImgB}>AutoCAD GEOLIPS - tworzenie map numerycznych</CourseHeader>
          <CourseContent>
            To specjalistyczny kurs na którym otrzymasz wiedzę z zakresu tworzenia i aktualizacji map numerycznych wykorzystywanych m. innymi w geodezji i
            kartografii. W ten sposób uzyskasz nowe kompetencje zawodowe w zakresie technologii geo-informatycznych.
          </CourseContent>
        </Course>
        <Course detailsHref="/courses/c">
          <CourseHeader imageSrc={courseHeaderImgC}>Projektowanie w AutoCAD - kurs podstawowy</CourseHeader>
          <CourseContent>
            AutoCAD® to najbardziej rozpoznawalne na świecie oprogramowanie, które służy do komputerowego wspomagania projektowania CAD - Computer Aided
            Design. Na dzisiejszym skomplikowanym rynku pracy możliwość udowodnienia swoich umiejętności jest niezwykle cenna.
          </CourseContent>
        </Course>
        <Course detailsHref="/courses/a">
          <CourseHeader imageSrc={courseHeaderImgD}>Sztuczna inteligencja w biznesie</CourseHeader>
          <CourseContent>
            Nasz kurs to przewaga konkurencyjna dzięki AI oraz optymalizacja procesów biznesowych w oparciu o nowoczesne technologie. Skuteczne zautomatyzowanie
            procesów, obniżenie kosztów w Twojej firmie, wyższy poziom marketingu ze sztuczną inteligencją.
          </CourseContent>
        </Course>
        <Course detailsHref="/courses/a">
          <CourseHeader imageSrc={courseHeaderImgE}>Analityk baz danych</CourseHeader>
          <CourseContent>
            Nasz kurs Analityk baz danych przeznaczony jest dla wszystkich osób planujących rozpocząć karierę analityka danych albo rozwinąć swoje umiejętności
            analityczne i zyskać kompetencje do pracy w świecie Data science.
          </CourseContent>
        </Course>
        <Course detailsHref="/courses/a">
          <CourseHeader imageSrc={courseHeaderImgF}>Python - język programowania</CourseHeader>
          <CourseContent>
            Python to uniwersalny, stosunkowo prosty, bardzo popularny i szybko rozwijający się język programowania. Najszerzej stosowany jest do tworzenia
            sieciowych aplikacji `biznesowych` oraz w analizie danych.
          </CourseContent>
        </Course>
        <h2 id="courses2">Języki Obce</h2>
        <Course detailsHref="/courses/a">
          <CourseHeader imageSrc={courseHeaderImgG}>Język angielski - indywidualnie lub grupowo</CourseHeader>
          <CourseContent>
            Otwórz się na świat z angielskim! Nasz kurs języka angielskiego to klucz do sukcesu, podróży, nawiązania nowych znajomości i podniesienia
            kwalifikacji zawodowych. Z nami nauczysz się płynnie komunikować w języku Shakespeara.
          </CourseContent>
        </Course>
        <Course detailsHref="/courses/a">
          <CourseHeader imageSrc={courseHeaderImgH}>Język niemiecki - indywidualnie lub grupowo</CourseHeader>
          <CourseContent>
            Opanuj język niemiecki w naszej szkole! Zdobądź solidne podstawy i poszerzaj swoje umiejętności w komfortowym tempie. Nasi doświadczeni lektorzy
            zapewnią Ci skuteczną naukę, a różnorodne materiały edukacyjne ułatwią Ci przyswajanie wiedzy.
          </CourseContent>
        </Course>
        <Course detailsHref="/courses/a">
          <CourseHeader imageSrc={courseHeaderImgI}>Język hiszpański - indywidualnie lub grupowo</CourseHeader>
          <CourseContent>
            Naucz się hiszpańskiego z nami! Odkryj urok tego romantycznego języka i rozszerz swoje horyzonty. Nasz kurs języka hiszpańskiego to idealna okazja,
            aby zdobyć nową umiejętność. Nasi doświadczeni nauczyciele pomogą Ci osiągnąć mistrzostwo w mówieniu, czytaniu i rozumieniu hiszpańskiego.
          </CourseContent>
        </Course>
        <h2 id="courses3">HR i Inne</h2>
        <Course detailsHref="/courses/a">
          <CourseHeader imageSrc={courseHeaderImgJ}>Specjalista ds. sprzedaży</CourseHeader>
          <CourseContent>
            Specjaliści ds. Sprzedaży napędzają sprzedaż i rozwój biznesu. Często to właśnie od nich zależy, czy inne działy w firmie będą miały pracę! Muszą
            dobrze sprzedać produkt lub usługę, przekonać do niej klienta, a następnie często go utrzymać! To właśnie specjaliści ds. sprzedaży mają solidną
            wiedzę na temat wszystkich produktów i usług firmy oraz umiejętności wymagane do ich sprzedaży.
          </CourseContent>
        </Course>
      </Secondary>
    </>
  );
}
