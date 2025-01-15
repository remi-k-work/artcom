// components
import { default as AccordionContent } from "@/components/ui/custom/accordion/Content";
import { default as AccordionTrigger } from "@/components/ui/custom/accordion/Trigger";
import Hero from "@/components/hero-a";
import ArtcomExperienceSmall from "@/components/ArtcomExperienceSmall";
import CheckOurBanners from "@/components/CheckOurBanners";
import Secondary from "@/components/secondary";
import GuaranteesFetcher from "@/components/GuaranteesFetcher";
import ReferencesFetcher from "@/components/ReferencesFetcher";
import { ACCORDION_ITEM_VAR_L, ACCORDION_LIST_VAR, MotionAccordion, MotionAccordionItem } from "@/components/AnimComps";

export default function Page() {
  return (
    <>
      <Hero model={<ArtcomExperienceSmall />}>
        <Hero.Header>O Nas</Hero.Header>
        <Hero.Content>
          <MotionAccordion type="single" defaultValue="item1" initial="hidden" whileInView="visible" variants={ACCORDION_LIST_VAR}>
            <MotionAccordionItem value="item1" variants={ACCORDION_ITEM_VAR_L}>
              <AccordionTrigger>Jesteśmy zespołem specjalistów z bogatym doświadczeniem</AccordionTrigger>
              <AccordionContent>
                <p>
                  Jesteśmy zespołem specjalistów z bogatym doświadczeniem w realizacji szkoleń informatycznych oraz nauki języków obcych w naszej Szkole Języków
                  Europejskich. Obecnie prowadzimy także szereg innych specjalistycznych kursów zawodowych. Realizujemy również projekty współfinansowane ze
                  środków Unii Europejskiej.
                </p>
              </AccordionContent>
            </MotionAccordionItem>
            <MotionAccordionItem value="item2" variants={ACCORDION_ITEM_VAR_L}>
              <AccordionTrigger>Naszym celem jest rozwój osobisty i zawodowy</AccordionTrigger>
              <AccordionContent>
                <p>
                  Naszym celem jest rozwój osobisty i zawodowy każdego z naszych Klientów i Przyjaciół. Oferujemy skuteczne szkolenia, oparte na praktycznej
                  formule warsztatowej, prowadzone przez prawdziwych pasjonatów w swoich specjalnościach. Doskonalimy się w tym od 1994 roku, dlatego możesz na
                  nas polegać.
                </p>
              </AccordionContent>
            </MotionAccordionItem>
            <MotionAccordionItem value="item3" variants={ACCORDION_ITEM_VAR_L}>
              <AccordionTrigger>Nasze kursy bazują na aktualnych materiałach źródłowych</AccordionTrigger>
              <AccordionContent>
                <p>
                  Nasze kursy bazują na aktualnych materiałach źródłowych, które są zgodne z najnowszymi trendami w technologii informatycznej. Uczymy nie tylko
                  obsługi programów, ale staramy się rozwijać praktyczne umiejętności, analityczne myślenie, zaangażowanie w zadania i projekty, które
                  uczestnicy naszych kursów mogą wykorzystać w życiu zawodowym.
                </p>
              </AccordionContent>
            </MotionAccordionItem>
            <MotionAccordionItem value="item4" variants={ACCORDION_ITEM_VAR_L}>
              <AccordionTrigger>My również cały czas się uczymy</AccordionTrigger>
              <AccordionContent>
                <p>
                  My również cały czas się uczymy, doskonalimy umiejętności, zdobywamy akredytacje, przeprowadzamy egzaminy. Systematycznie zbieramy opinie i
                  referencje, aby ocenić swoje doświadczenie i stale doskonalić nasze programy szkoleń.
                </p>
              </AccordionContent>
            </MotionAccordionItem>
            <MotionAccordionItem value="item5" variants={ACCORDION_ITEM_VAR_L}>
              <AccordionTrigger>Wydajemy i oferujemy własne podręczniki</AccordionTrigger>
              <AccordionContent>
                <p>
                  Od kilku lat wydajemy i oferujemy własne podręczniki do nauki systemów i aplikacji komputerowych. Tworzymy też autorskie programy szkoleń i
                  zajęć warsztatowych, które zapewniają skuteczną naukę.
                </p>
              </AccordionContent>
            </MotionAccordionItem>
            <MotionAccordionItem value="item6" variants={ACCORDION_ITEM_VAR_L}>
              <AccordionTrigger>PZI ARTCOM posiada</AccordionTrigger>
              <AccordionContent>
                <ul className="border border-surface-1 text-center">
                  <li className="bg-surface-1 p-2">
                    Status Akademii Edukacyjnej VCC (Vacational Competence Certificate) - Certyfikat nr AE-001-364 oraz autoryzowanego Partnera Egzaminacyjnego
                    VCC Examinations.
                  </li>
                  <li className="p-2">
                    Akredytację Polskiego Towarzystwa Informatycznego dla Certyfikowanego Laboratorium ECDL (PL-LAB1582) - przeprowadza egzaminy ECDL.
                  </li>
                  <li className="bg-surface-1 p-2">Akredytację producentów (Asseco, Sage) dla szkoleń finansowo-księgowych.</li>
                  <li className="p-2">
                    Współpracujemy z Centrum Egzaminacyjnym TELC - (The Eurpean Language Certyficates) - międzynarodowe standaryzowane testy 10 języków
                    europejskich.
                  </li>
                </ul>
              </AccordionContent>
            </MotionAccordionItem>
            <MotionAccordionItem value="item7" variants={ACCORDION_ITEM_VAR_L}>
              <AccordionTrigger>W ostatnich latach prowadziliśmy również szkolenia</AccordionTrigger>
              <AccordionContent>
                <ul className="border border-surface-1 text-center">
                  <li className="bg-surface-1 p-2">
                    <p className="m-auto text-text-2">„Szkolenie - Staż - etat - edycja III”</p>
                    <p className="m-auto text-sm text-text-1">(2022 - 2023 r.)</p>
                  </li>
                  <li className="p-2">
                    <p className="m-auto text-text-2">„WORK-ON. Program kompleksowej aktywizacji zawodowej osób z niepełnosprawnościami”</p>
                    <p className="m-auto text-sm text-text-1">(2023 r.)</p>
                  </li>
                  <li className="bg-surface-1 p-2">
                    <p className="m-auto text-text-2">„Kwalifikacje cyfrowe szansą na lepszą przyszłość w społeczeństwie informacyjnym”</p>
                    <p className="m-auto text-sm text-text-1">(2022 r.)</p>
                  </li>
                  <li className="p-2">
                    <p className="m-auto text-text-2">„Młodzi na start”</p>
                    <p className="m-auto text-sm text-text-1">(2017 r.)</p>
                  </li>
                  <li className="bg-surface-1 p-2">
                    <p className="m-auto text-text-2">„Kompetencje cyfrowe dla Wszystkich”</p>
                    <p className="m-auto text-sm text-text-1">(2017 - 2018 r.)</p>
                  </li>
                  <li className="p-2">
                    <p className="m-auto text-text-2">„Praca - to się opłaca”</p>
                    <p className="m-auto text-sm text-text-1">(2017 - 2018 r.)</p>
                  </li>
                  <li className="bg-surface-1 p-2">
                    <p className="m-auto text-text-2">„POWER do pracy - edycja II”</p>
                    <p className="m-auto text-sm text-text-1">(2018 r.)</p>
                  </li>
                  <li className="p-2">
                    <p className="m-auto text-text-2">„Szkolenie - staż - etat”</p>
                    <p className="m-auto text-sm text-text-1">(2017 r.)</p>
                  </li>
                  <li className="bg-surface-1 p-2">
                    <p className="m-auto text-text-2">„Szkolenia Komputerowe Twoją szansą”</p>
                    <p className="m-auto text-sm text-text-1">(2017 - 2018 r.)</p>
                  </li>
                  <li className="p-2">
                    <p className="m-auto text-text-2">„Kompetencje na miarę XXI wieku”</p>
                    <p className="m-auto text-sm text-text-1">(2017 - 2018 r.)</p>
                  </li>
                  <li className="bg-surface-1 p-2">
                    <p className="m-auto text-text-2">„Gwarancje dla młodzieży”</p>
                    <p className="m-auto text-sm text-text-1">(2016 r.)</p>
                  </li>
                </ul>
              </AccordionContent>
            </MotionAccordionItem>
          </MotionAccordion>
        </Hero.Content>
      </Hero>
      <CheckOurBanners />
      <Secondary header="Od 30 lat pracujemy dla Twojego rozwoju i satysfakcji">
        <GuaranteesFetcher />
        <ReferencesFetcher />
      </Secondary>
    </>
  );
}
