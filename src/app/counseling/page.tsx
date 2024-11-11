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

// assets
import { BriefcaseIcon } from "@heroicons/react/24/solid";
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
      <Hero.Icon icon={<BriefcaseIcon />} />
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
