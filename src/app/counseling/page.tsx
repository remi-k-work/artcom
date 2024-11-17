// next
import type { Metadata } from "next";
import Link from "next/link";

// components
import Accordion from "@/components/ui/custom/accordion";
import { default as AccordionContent } from "@/components/ui/custom/accordion/Content";
import { default as AccordionItem } from "@/components/ui/custom/accordion/Item";
import { default as AccordionTrigger } from "@/components/ui/custom/accordion/Trigger";
import { Button } from "@/components/ui/custom/button";
import Hero from "@/components/hero-b";
import { DRAW, MotionPath, MotionSvg } from "@/components/AnimComps";

// assets
import { AtSymbolIcon } from "@heroicons/react/24/outline";
import heroImg from "@/assets/images/hero/counseling.webp";

export const metadata: Metadata = {
  title: "ArtCom ► Doradztwo Zawodowe",
};

export default function Page() {
  return (
    <Hero>
      <Hero.Header>
        <Hero.Header1>Doradztwo Zawodowe</Hero.Header1>
        <Hero.Header2>
          Jeśli stawiasz pierwsze kroki na rynku pracy lub zamierzasz się przekwalifikować, potrzebujesz porady oraz profesjonalnych dokumentów aplikacyjnych a
          potem dodatkowych konsultacji. Przyjdź na indywidualne spotkanie.
        </Hero.Header2>
      </Hero.Header>
      <Hero.Icon
        icon={
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
              d="M7.5 5.25a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0 1 12 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 0 1 7.5 5.455V5.25Zm7.5 0v.09a49.488 49.488 0 0 0-6 0v-.09a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5Zm-3 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
              clipRule="evenodd"
              variants={DRAW}
            />
            <MotionPath
              strokeLinecap="round"
              strokeLinejoin="round"
              fillRule="evenodd"
              d="M3 18.4v-2.796a4.3 4.3 0 0 0 .713.31A26.226 26.226 0 0 0 12 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 0 1-6.477-.427C4.047 21.128 3 19.852 3 18.4Z"
              clipRule="evenodd"
              variants={DRAW}
            />
          </MotionSvg>
        }
      />
      <Hero.Image imageSrc={heroImg} />
      <Hero.Content>
        <Accordion type="single" defaultValue="item1">
          <AccordionItem value="item1">
            <AccordionTrigger>Korzyści z rozmowy z doradcą zawodowym</AccordionTrigger>
            <AccordionContent>
              <p>
                Zdobędziesz wiedzę na temat rynku pracy - doradca zawodowy powie jakie są obecnie trendy, jakie kompetencje są poszukiwane przez pracodawców.
                Ponadto wskaże możliwości zdobywania doświadczenia zawodowego. To pozwoli Ci w podjęciu decyzji, w jakie obszary warto inwestować oraz gdzie
                skierować swoją uwagę, by osiągnąć sukces.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item2">
            <AccordionTrigger>Zdiagnozujesz swoje predyspozycje zawodowe i personalne</AccordionTrigger>
            <AccordionContent>
              <p>
                Doradca zawodowy podpowie Ci, jakie zawody i typy pracy byłyby dla Ciebie najlepsze – zgodne z Twoimi predyspozycjami, kompetencjami,
                zainteresowaniami i wykształceniem.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item3">
            <AccordionTrigger>Wybierzesz ścieżkę kariery</AccordionTrigger>
            <AccordionContent>
              <p>
                Przedyskutuj wybór studiów odpowiednich do predyspozycji i planów życiowych lub omówienie sensu wybranego już kierunku studiów. Proces doradztwa
                to również wsparcie w przypadku chęci zmiany zawodu, identyfikacji ze swoją rolą w zawodzie lub zaplanowanie nowej kariery zawodowej.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item4">
            <AccordionTrigger>Zaplanujesz własną działalność gospodarczą</AccordionTrigger>
            <AccordionContent>
              <p>
                Doradca zawodowy podpowie, gdzie szukać wsparcia informacyjno-finansowego na otworzenie własnej działalności gospodarczej oraz jak krok po kroku
                założyć własną firmę.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Hero.Content>
      <Hero.Footer>
        <Hero.Footer1>
          <Button asChild>
            <Link href="/contact-us">
              <AtSymbolIcon width={24} height={24} />
              Kontakt
            </Link>
          </Button>
        </Hero.Footer1>
      </Hero.Footer>
    </Hero>
  );
}
