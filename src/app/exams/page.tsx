// next
import type { Metadata } from "next";

// components
import Accordion from "@/components/ui/custom/accordion";
import { default as AccordionContent } from "@/components/ui/custom/accordion/Content";
import { default as AccordionItem } from "@/components/ui/custom/accordion/Item";
import { default as AccordionTrigger } from "@/components/ui/custom/accordion/Trigger";
import Hero from "@/components/hero-a";
import Secondary from "@/components/secondary";
import Exam, { ExamHeader, ExamContent } from "@/components/exam";
import { DRAW, MotionPath, MotionSvg } from "@/components/AnimComps";

// assets
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
      <Hero
        model={
          <MotionSvg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            strokeWidth={0.5}
            stroke="hsl(var(--accent))"
            fill="currentColor"
            initial="hidden"
            whileInView="visible"
          >
            <MotionPath
              strokeLinecap="round"
              strokeLinejoin="round"
              fillRule="evenodd"
              d="M7.502 6h7.128A3.375 3.375 0 0 1 18 9.375v9.375a3 3 0 0 0 3-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 0 0-.673-.05A3 3 0 0 0 15 1.5h-1.5a3 3 0 0 0-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6ZM13.5 3A1.5 1.5 0 0 0 12 4.5h4.5A1.5 1.5 0 0 0 15 3h-1.5Z"
              clipRule="evenodd"
              variants={DRAW}
            />
            <MotionPath
              strokeLinecap="round"
              strokeLinejoin="round"
              fillRule="evenodd"
              d="M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 0 1 3 20.625V9.375Zm9.586 4.594a.75.75 0 0 0-1.172-.938l-2.476 3.096-.908-.907a.75.75 0 0 0-1.06 1.06l1.5 1.5a.75.75 0 0 0 1.116-.062l3-3.75Z"
              clipRule="evenodd"
              variants={DRAW}
            />
          </MotionSvg>
        }
      >
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
          <ExamHeader imageSrc={examHeaderImgA}>Europejski Certyfikat Umiejętności Komputerowych (ECDL)</ExamHeader>
          <ExamContent>
            Idea Europejskiego Certyfikatu Umiejętności Komputerowych (ECDL) podjęta została z poparciem Rady Europy w 1996 roku. Certyfikat wprowadzony został
            w całej Zjednoczonej Europie. W Polsce CDL propaguje i wdraża Polskie Towarzystwo Informatyczne.
          </ExamContent>
        </Exam>
        <Exam detailsHref="/exams/b">
          <ExamHeader imageSrc={examHeaderImgB}>Certificate of Vocational Qualification</ExamHeader>
          <ExamContent>
            VCC jest nowym systemem kształcenia i certyfikacji, który powstał z myślą o integracji wiedzy oraz umiejętności zawodowych osób pracujących zarówno
            na ojczystym, jak i międzynarodowym rynku pracy.
          </ExamContent>
        </Exam>
        <Exam detailsHref="/exams/c">
          <ExamHeader imageSrc={examHeaderImgC}>Autodesk® Certificate of Completion</ExamHeader>
          <ExamContent>
            Ten certyfikat jest jednym z podstawowych dokumentów wymaganych dla inżynierów i konstruktorów w wielu branżach, gdzie w studiach projektowych
            zaczyna powstawać koncepcja końcowego produktu, którym może być dom, samochód czy np. odkurzacz.
          </ExamContent>
        </Exam>
        <Exam detailsHref="/exams/d">
          <ExamHeader imageSrc={examHeaderImgD}>TELC Language Tests</ExamHeader>
          <ExamContent>
            Certyfikat TELC można uzyskać po zdaniu egzaminu, który sprawdza znajomość języka, kładąc szczególny nacisk na umiejętność porozumiewania się, a nie
            na znajomość gramatyki. TELC nie ocenia znajomości reguł gramatycznych i ilości popełnionych błędów, lecz umiejętność wykorzystania języka do
            osiągnięcia różnych celów.
          </ExamContent>
        </Exam>
      </Secondary>
    </>
  );
}
