// next
import dynamic from "next/dynamic";

// components
import Accordion from "@/components/ui/custom/accordion";
import { default as AccordionContent } from "@/components/ui/custom/accordion/Content";
import { default as AccordionItem } from "@/components/ui/custom/accordion/Item";
import { default as AccordionTrigger } from "@/components/ui/custom/accordion/Trigger";
import Hero from "@/components/hero-a";
import ArtcomExperience from "@/components/ArtcomExperience";
import Secondary from "@/components/secondary";
import Guarantees from "@/components/Guarantees";
import References from "@/components/References";
import { DRAW, MotionPath, MotionSvg } from "@/components/AnimComps";

// const Wizard = dynamic(() => import("@/components/models/Wizard"), { ssr: false });
// const Cursor = dynamic(() => import("@/components/models/Cursor"), { ssr: false });

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
              d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z"
              clipRule="evenodd"
              variants={DRAW}
            />
          </MotionSvg>
        }
      >
        <Hero.Header>O Nas</Hero.Header>
        <Hero.Content>
          <Accordion type="single" defaultValue="item1">
            <AccordionItem value="item1">
              <AccordionTrigger>Jesteśmy zespołem specjalistów z bogatym doświadczeniem</AccordionTrigger>
              <AccordionContent>
                <p>
                  Jesteśmy zespołem specjalistów z bogatym doświadczeniem w realizacji szkoleń informatycznych oraz nauki języków obcych w naszej Szkole Języków
                  Europejskich. Obecnie prowadzimy także szereg innych specjalistycznych kursów zawodowych. Realizujemy również projekty współfinansowane ze
                  środków Unii Europejskiej.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item2">
              <AccordionTrigger>Naszym celem jest rozwój osobisty i zawodowy</AccordionTrigger>
              <AccordionContent>
                <p>
                  Naszym celem jest rozwój osobisty i zawodowy każdego z naszych Klientów i Przyjaciół. Oferujemy skuteczne szkolenia, oparte na praktycznej
                  formule warsztatowej, prowadzone przez prawdziwych pasjonatów w swoich specjalnościach. Doskonalimy się w tym od 1994 roku, dlatego możesz na
                  nas polegać.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item3">
              <AccordionTrigger>Nasze kursy bazują na aktualnych materiałach źródłowych</AccordionTrigger>
              <AccordionContent>
                <p>
                  Nasze kursy bazują na aktualnych materiałach źródłowych, które są zgodne z najnowszymi trendami w technologii informatycznej. Uczymy nie tylko
                  obsługi programów, ale staramy się rozwijać praktyczne umiejętności, analityczne myślenie, zaangażowanie w zadania i projekty, które
                  uczestnicy naszych kursów mogą wykorzystać w życiu zawodowym.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item4">
              <AccordionTrigger>My również cały czas się uczymy</AccordionTrigger>
              <AccordionContent>
                <p>
                  My również cały czas się uczymy, doskonalimy umiejętności, zdobywamy akredytacje, przeprowadzamy egzaminy. Systematycznie zbieramy opinie i
                  referencje, aby ocenić swoje doświadczenie i stale doskonalić nasze programy szkoleń.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item5">
              <AccordionTrigger>Wydajemy i oferujemy własne podręczniki</AccordionTrigger>
              <AccordionContent>
                <p>
                  Od kilku lat wydajemy i oferujemy własne podręczniki do nauki systemów i aplikacji komputerowych. Tworzymy też autorskie programy szkoleń i
                  zajęć warsztatowych, które zapewniają skuteczną naukę.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item6">
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
            </AccordionItem>
            <AccordionItem value="item7">
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
            </AccordionItem>
          </Accordion>
        </Hero.Content>
      </Hero>
      <ArtcomExperience />
      <Secondary header="Od 30 lat pracujemy dla Twojego rozwoju i satysfakcji">
        <Guarantees />
        <References />
      </Secondary>
    </>
  );
}
