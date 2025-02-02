// next
import type { Metadata } from "next";
import Link from "next/link";

// components
import { default as AccordionContent } from "@/components/ui/custom/accordion/Content";
import { default as AccordionTrigger } from "@/components/ui/custom/accordion/Trigger";
import { Button } from "@/components/ui/custom/button";
import Hero from "@/components/hero-b";
import { ACCORDION_ITEM_VAR_R, ACCORDION_LIST_VAR, DRAW, MotionAccordion, MotionAccordionItem, MotionPath, MotionSvg } from "@/components/AnimComps";

// assets
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
              d="M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .707A8.237 8.237 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886V4.533ZM12.75 20.636A8.214 8.214 0 0 1 18 18.75c.966 0 1.89.166 2.75.47a.75.75 0 0 0 1-.708V4.262a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533v16.103Z"
              clipRule="evenodd"
              variants={DRAW}
            />
          </MotionSvg>
        }
      />
      <Hero.Image imageSrc={heroImg} />
      <Hero.Content>
        <MotionAccordion type="single" defaultValue="item1" initial="hidden" whileInView="visible" variants={ACCORDION_LIST_VAR}>
          <MotionAccordionItem value="item1" variants={ACCORDION_ITEM_VAR_R}>
            <AccordionTrigger>Materiał podręcznika zawiera</AccordionTrigger>
            <AccordionContent>
              <p>
                Wiedzę niezbędną do zdobycia jednego z certyfikatów ECDL Profile DIGCOMP oraz ECDL Base. W pełni pokrywa ramy kompetencji na poziomach A i B
                zgodnie z wymaganiami dla kompetencji cyfrowych w obszarze edukacji w ramach Programu Operacyjnego Wiedza Edukacja Rozwój i Regionalnych
                Programów Operacyjnych współfinansowanych ze środków Europejskiego Funduszu Społecznego.
              </p>
            </AccordionContent>
          </MotionAccordionItem>
          <MotionAccordionItem value="item2" variants={ACCORDION_ITEM_VAR_R}>
            <AccordionTrigger>W książce zostały opisane następujące moduły</AccordionTrigger>
            <AccordionContent>
              <ul className="border border-background text-center">
                <li className="bg-background p-2">
                  <p className="m-auto text-text-2">Podstawy pracy z komputerem</p>
                  <p className="m-auto text-sm text-text-1">MODUŁ B1</p>
                </li>
                <li className="p-2">
                  <p className="m-auto text-text-2">Podstawy pracy w sieci</p>
                  <p className="m-auto text-sm text-text-1">MODUŁ B2</p>
                </li>
                <li className="bg-background p-2">
                  <p className="m-auto text-text-2">Przetwarzanie tekstów</p>
                  <p className="m-auto text-sm text-text-1">MODUŁ B3</p>
                </li>
                <li className="p-2">
                  <p className="m-auto text-text-2">Arkusze kalkulacyjne</p>
                  <p className="m-auto text-sm text-text-1">MODUŁ B4</p>
                </li>
                <li className="bg-background p-2">
                  <p className="m-auto text-text-2">IT Security</p>
                  <p className="m-auto text-sm text-text-1">MODUŁ S3</p>
                </li>
                <li className="p-2">
                  <p className="m-auto text-text-2">Rozwiązywanie problemów</p>
                  <p className="m-auto text-sm text-text-1">MODUŁ S9</p>
                </li>
              </ul>
            </AccordionContent>
          </MotionAccordionItem>
        </MotionAccordion>
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
          <table className="border-separate border border-background text-center">
            <thead>
              <tr>
                <td className="bg-background p-2 text-text-2">Wydawca</td>
                <td className="bg-background p-2 text-text-2">Rok wydania</td>
                <td className="bg-background p-2 text-text-2">Liczba stron</td>
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
