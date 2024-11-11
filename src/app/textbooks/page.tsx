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
import { BookOpenIcon } from "@heroicons/react/24/solid";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import heroImg from "@/assets/images/hero/textbooks.webp";

export const metadata: Metadata = {
  title: "ArtCom ► Podręczniki",
};

export default function Page() {
  return (
    <Hero>
      <Hero.Header>
        <Hero.Header1>Podręczniki</Hero.Header1>
        <Hero.Header2>
          <span className="text-text-1">„Wiem że zdam ECDL Profile DIGCOMP”</span>
          <br />
          Autorami podręcznika są informatycy - trenerzy i egzaminatorzy ECDL z wieloletnim doświadczeniem w branży szkoleniowej i informatycznej.
        </Hero.Header2>
      </Hero.Header>
      <Hero.Icon icon={<BookOpenIcon />} />
      <Hero.Image imageSrc={heroImg} />
      <Hero.Content>
        <Accordion type="single" defaultValue="item1">
          <AccordionItem value="item1">
            <AccordionTrigger>Materiał podręcznika zawiera</AccordionTrigger>
            <AccordionContent>
              <p>
                Wiedzę niezbędną do zdobycia jednego z certyfikatów ECDL Profile DIGCOMP oraz ECDL Base. W pełni pokrywa ramy kompetencji na poziomach A i B
                zgodnie z wymaganiami dla kompetencji cyfrowych w obszarze edukacji w ramach Programu Operacyjnego Wiedza Edukacja Rozwój i Regionalnych
                Programów Operacyjnych współfinansowanych ze środków Europejskiego Funduszu Społecznego.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item2">
            <AccordionTrigger>W książce zostały opisane następujące moduły</AccordionTrigger>
            <AccordionContent>
              <ul className="border border-surface-1 text-center">
                <li className="bg-surface-1 p-2">
                  <p className="m-auto text-text-2">Podstawy pracy z komputerem</p>
                  <p className="m-auto text-sm text-text-1">MODUŁ B1</p>
                </li>
                <li className="p-2">
                  <p className="m-auto text-text-2">Podstawy pracy w sieci</p>
                  <p className="m-auto text-sm text-text-1">MODUŁ B2</p>
                </li>
                <li className="bg-surface-1 p-2">
                  <p className="m-auto text-text-2">Przetwarzanie tekstów</p>
                  <p className="m-auto text-sm text-text-1">MODUŁ B3</p>
                </li>
                <li className="p-2">
                  <p className="m-auto text-text-2">Arkusze kalkulacyjne</p>
                  <p className="m-auto text-sm text-text-1">MODUŁ B4</p>
                </li>
                <li className="bg-surface-1 p-2">
                  <p className="m-auto text-text-2">IT Security</p>
                  <p className="m-auto text-sm text-text-1">MODUŁ S3</p>
                </li>
                <li className="p-2">
                  <p className="m-auto text-text-2">Rozwiązywanie problemów</p>
                  <p className="m-auto text-sm text-text-1">MODUŁ S9</p>
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Hero.Content>
      <Hero.Footer>
        <Hero.Footer1>
          <Button asChild>
            <Link href="https://www.testyecdl.pl/ksiazki.php" target="_blank">
              <InformationCircleIcon width={24} height={24} />
              Zobacz więcej
            </Link>
          </Button>
        </Hero.Footer1>
        <Hero.Footer2>
          <table className="border-separate border border-surface-1 text-center">
            <thead>
              <tr>
                <td className="bg-surface-1 p-2 text-text-2">Wydawca</td>
                <td className="bg-surface-1 p-2 text-text-2">Rok wydania</td>
                <td className="bg-surface-1 p-2 text-text-2">Liczba stron</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2">PZI ARTCOM Rzeszów</td>
                <td className="p-2">2021</td>
                <td className="p-2">224</td>
              </tr>
            </tbody>
          </table>
        </Hero.Footer2>
      </Hero.Footer>
    </Hero>
  );
}
