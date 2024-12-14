// next
import type { Metadata } from "next";

// components
import { default as AccordionContent } from "@/components/ui/custom/accordion/Content";
import { default as AccordionTrigger } from "@/components/ui/custom/accordion/Trigger";
import Hero from "@/components/hero-a";
import CoursesMatchingYou from "@/components/CoursesMatchingYou";
import Secondary from "@/components/secondary";
import CoursesList from "@/components/CoursesList";
import { ACCORDION_ITEM_VAR_L, ACCORDION_LIST_VAR, DRAW, MotionAccordion, MotionAccordionItem, MotionPath, MotionSvg } from "@/components/AnimComps";

export const metadata: Metadata = {
  title: "ArtCom ► Szkolenia i Kursy",
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
              d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.615 54.615 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.123 56.123 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z"
              clipRule="evenodd"
              variants={DRAW}
            />
            <MotionPath
              strokeLinecap="round"
              strokeLinejoin="round"
              fillRule="evenodd"
              d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.711 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.66a6.727 6.727 0 0 0 .551-1.607 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z"
              clipRule="evenodd"
              variants={DRAW}
            />
            <MotionPath
              strokeLinecap="round"
              strokeLinejoin="round"
              fillRule="evenodd"
              d="M4.462 19.462c.42-.419.753-.89 1-1.395.453.214.902.435 1.347.662a6.742 6.742 0 0 1-1.286 1.794.75.75 0 0 1-1.06-1.06Z"
              clipRule="evenodd"
              variants={DRAW}
            />
          </MotionSvg>
        }
      >
        <Hero.Header>Szkolenia i Kursy</Hero.Header>
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
      <Secondary header="Nasze Szkolenia i Kursy">
        <h2 id="courses1">Kursy Informatyczne</h2>
        <CoursesList courseType="it-courses" />
        <h2 id="courses2">Języki Obce</h2>
        <CoursesList courseType="foreign-languages" />
        <h2 id="courses3">HR i Inne</h2>
        <CoursesList courseType="hr-and-others" />
      </Secondary>
    </>
  );
}
