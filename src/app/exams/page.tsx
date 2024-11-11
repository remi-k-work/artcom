// next
import type { Metadata } from "next";

// components
import Accordion from "@/components/ui/custom/accordion";
import { default as AccordionContent } from "@/components/ui/custom/accordion/Content";
import { default as AccordionItem } from "@/components/ui/custom/accordion/Item";
import { default as AccordionTrigger } from "@/components/ui/custom/accordion/Trigger";
import Hero from "@/components/hero-a";
import Secondary from "@/components/secondary";
import Exam from "@/components/exam";

// assets
import { ClipboardDocumentCheckIcon } from "@heroicons/react/24/solid";
import examHeaderImgA from "@/assets/images/exams/a-header-0.webp";
import examHeaderImgB from "@/assets/images/exams/b-header-0.webp";
import examHeaderImgC from "@/assets/images/exams/c-header-0.webp";
import examHeaderImgD from "@/assets/images/exams/d-header-0.webp";

export const metadata: Metadata = {
  title: "ArtCom ► Egzaminy",
};

export default function Page() {
  return (
    <>
      <Hero model={<ClipboardDocumentCheckIcon />}>
        <Hero.Header>Egzaminy</Hero.Header>
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
      <Secondary header="Nasze Egzaminy">
        <Exam detailsHref="/exams/a">
          <Exam.Header imageSrc={examHeaderImgA}>Europejski Certyfikat Umiejętności Komputerowych (ECDL)</Exam.Header>
          <Exam.Content>
            Idea Europejskiego Certyfikatu Umiejętności Komputerowych (ECDL) podjęta została z poparciem Rady Europy w 1996 roku. Certyfikat wprowadzony został
            w całej Zjednoczonej Europie. W Polsce CDL propaguje i wdraża Polskie Towarzystwo Informatyczne.
          </Exam.Content>
        </Exam>
        <Exam detailsHref="/exams/b">
          <Exam.Header imageSrc={examHeaderImgB}>Certificate of Vocational Qualification</Exam.Header>
          <Exam.Content>
            VCC jest nowym systemem kształcenia i certyfikacji, który powstał z myślą o integracji wiedzy oraz umiejętności zawodowych osób pracujących zarówno
            na ojczystym, jak i międzynarodowym rynku pracy.
          </Exam.Content>
        </Exam>
        <Exam detailsHref="/exams/c">
          <Exam.Header imageSrc={examHeaderImgC}>Autodesk® Certificate of Completion</Exam.Header>
          <Exam.Content>
            Ten certyfikat jest jednym z podstawowych dokumentów wymaganych dla inżynierów i konstruktorów w wielu branżach, gdzie w studiach projektowych
            zaczyna powstawać koncepcja końcowego produktu, którym może być dom, samochód czy np. odkurzacz.
          </Exam.Content>
        </Exam>
        <Exam detailsHref="/exams/d">
          <Exam.Header imageSrc={examHeaderImgD}>TELC Language Tests</Exam.Header>
          <Exam.Content>
            Certyfikat TELC można uzyskać po zdaniu egzaminu, który sprawdza znajomość języka, kładąc szczególny nacisk na umiejętność porozumiewania się, a nie
            na znajomość gramatyki. TELC nie ocenia znajomości reguł gramatycznych i ilości popełnionych błędów, lecz umiejętność wykorzystania języka do
            osiągnięcia różnych celów.
          </Exam.Content>
        </Exam>
      </Secondary>
    </>
  );
}
