// next
import type { Metadata } from "next";

// components
import { default as AccordionContent } from "@/components/ui/custom/accordion/Content";
import { default as AccordionTrigger } from "@/components/ui/custom/accordion/Trigger";
import Hero from "@/components/hero-a";
import CoursesMatchingYou from "@/components/CoursesMatchingYou";
import Secondary from "@/components/secondary";
import ExamsList from "@/components/ExamsList";
import { ACCORDION_ITEM_VAR_L, ACCORDION_LIST_VAR, DRAW, MotionAccordion, MotionAccordionItem, MotionPath, MotionSvg } from "@/components/AnimComps";

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
          <MotionAccordion type="single" defaultValue="item1" initial="hidden" whileInView="visible" variants={ACCORDION_LIST_VAR}>
            <MotionAccordionItem value="item1" variants={ACCORDION_ITEM_VAR_L}>
              <AccordionTrigger>Nasi wykładowcy</AccordionTrigger>
              <AccordionContent>
                <p>
                  Od ponad 30 lat wykładowcy i instruktorzy PZI ARTCOM oferują swoje wieloletnie doświadczenie i pasję zawodową w prowadzeniu szkoleń. Posiadają
                  i przekazują praktyczne umiejętności, niezbędne w rozwoju i pracy zawodowej.
                </p>
              </AccordionContent>
            </MotionAccordionItem>
            <MotionAccordionItem value="item2" variants={ACCORDION_ITEM_VAR_L}>
              <AccordionTrigger>Aktualne i zrozumiałe materiały szkoleniowe</AccordionTrigger>
              <AccordionContent>
                <p>
                  Nasze kursy bazują na aktualnych podręcznikach i skryptach (w tym własnych publikacjach) które są zgodne z najnowszymi trendami w technologii
                  informatycznej oraz metodami nauki języków obcych.
                </p>
              </AccordionContent>
            </MotionAccordionItem>
            <MotionAccordionItem value="item3" variants={ACCORDION_ITEM_VAR_L}>
              <AccordionTrigger>Praktyczna nauka</AccordionTrigger>
              <AccordionContent>
                <p>
                  Na naszych kursach komputerowych uczymy umiejętności, które uczestnicy mogą sprawdzić w rzeczywistych sytuacjach. Nasze praktyczne zajęcia
                  obejmują przede wszystkim tworzenie ciekawych projektów i radzenia sobie z nietypowymi sytuacjami.
                </p>
              </AccordionContent>
            </MotionAccordionItem>
            <MotionAccordionItem value="item4" variants={ACCORDION_ITEM_VAR_L}>
              <AccordionTrigger>Sprzęt i oprogramowanie</AccordionTrigger>
              <AccordionContent>
                <p>
                  Dysponujemy salami szkoleniowymi wyposażonymi w niezbędny, nowoczesny sprzęt komputerowy i licencjonowane oprogramowanie, co umożliwia
                  zastosowanie praktycznego sposobu prowadzenia zajęć. Naukę wspomagają systemy audio i wideo.
                </p>
              </AccordionContent>
            </MotionAccordionItem>
            <MotionAccordionItem value="item5" variants={ACCORDION_ITEM_VAR_L}>
              <AccordionTrigger>Oceny</AccordionTrigger>
              <AccordionContent>
                <p>
                  Posiadamy liczne referencje od klientów i systematycznie zbieramy opinie od uczestników szkoleń. Oceniamy swoje doświadczenie, aby stale
                  doskonalić nasze programy szkoleniowe.
                </p>
              </AccordionContent>
            </MotionAccordionItem>
            <MotionAccordionItem value="item6" variants={ACCORDION_ITEM_VAR_L}>
              <AccordionTrigger>Certyfikaty i kwalifikacje</AccordionTrigger>
              <AccordionContent>
                <p>
                  Współpracujemy z międzynarodowymi instytucjami certyfikującymi, aby nasi uczestnicy mogli uzyskać certyfikaty i kwalifikacje, które są cenione
                  na rynku pracy.
                </p>
              </AccordionContent>
            </MotionAccordionItem>
            <MotionAccordionItem value="item7" variants={ACCORDION_ITEM_VAR_L}>
              <AccordionTrigger>Wsparcie po szkoleniu</AccordionTrigger>
              <AccordionContent>
                <p>
                  Nasza gwarancja jakości nie kończy się na kursie. Oferujemy wsparcie i konsultacje po szkoleniu, aby nasi uczestnicy mieli dostęp do wiedzy
                  praktycznej.
                </p>
              </AccordionContent>
            </MotionAccordionItem>
            <MotionAccordionItem value="item8" variants={ACCORDION_ITEM_VAR_L}>
              <AccordionTrigger>Dostępność i elastyczność</AccordionTrigger>
              <AccordionContent>
                <p>
                  Staramy się o dostępność programów dla różnych grup wiekowych i zawodowych. Nasza szeroka oferta pozwala dopasować terminy zajęć do możliwości
                  uczestników. Dlatego prowadzimy zajęcia zarówno w godzinach rannych jak i popołudniowych.
                </p>
              </AccordionContent>
            </MotionAccordionItem>
            <MotionAccordionItem value="item9" variants={ACCORDION_ITEM_VAR_L}>
              <AccordionTrigger>Nasza gwarancja jakości</AccordionTrigger>
              <AccordionContent>
                <p>Gwarantujemy najwyższą jakość szkoleń. Poznaj nasze 5 punktów Gwarancji jakości.</p>
              </AccordionContent>
            </MotionAccordionItem>
            <MotionAccordionItem value="item10" variants={ACCORDION_ITEM_VAR_L}>
              <AccordionTrigger>Staże i pomoc w pozyskiwaniu miejsc pracy</AccordionTrigger>
              <AccordionContent>
                <p>
                  PZI ARTCOM uczestniczy w pomocy w pozyskiwaniu miejsc pracy, prowadzi doradztwo zawodowe oraz wykonuje szkolenia zawodowe dla osób kierowanych
                  przez Powiatowe Urzędy Pracy. Prowadzimy również staże dla uczestników projektów współfinansowanych przez Unię Europejską.
                </p>
              </AccordionContent>
            </MotionAccordionItem>
          </MotionAccordion>
        </Hero.Content>
      </Hero>
      <CoursesMatchingYou />
      <Secondary header="Nasze Egzaminy">
        <ExamsList />
      </Secondary>
    </>
  );
}
