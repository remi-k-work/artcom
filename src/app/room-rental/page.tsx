// next
import type { Metadata } from "next";

// components
import Hero from "@/components/hero-d";
import Secondary from "@/components/secondary";
import Slides from "@/components/Slides";
import ComputerRoom from "@/components/ComputerRoom";
import MultimediaRoom from "@/components/MultimediaRoom";

// assets
import { BuildingOfficeIcon } from "@heroicons/react/24/solid";

export const metadata: Metadata = {
  title: "ArtCom ► Wynajem Sal",
};

export default function Page() {
  return (
    <>
      <Hero>
        <Hero.Header>
          <Hero.Header1>Wynajem Sal</Hero.Header1>
        </Hero.Header>
        <Hero.Icon icon={<BuildingOfficeIcon />} />
        <Hero.Content1>
          <Slides />
        </Hero.Content1>
        <Hero.Content2>
          <ComputerRoom />
          <MultimediaRoom />
        </Hero.Content2>
      </Hero>
      <Secondary header="Nasze sale zapewniają">
        <ul className="mt-[--size-6] text-center text-xl">
          <li className="bg-surface-3 p-6">
            <p className="m-auto text-text-2">Dogodną Lokalizację</p>
            <p className="m-auto text-base text-text-1">Znane centrum handlowo-biurowe RESPAN w Rzeszowie</p>
          </li>
          <li className="p-6">
            <p className="m-auto text-surface-1">Dostępne (również bezpłatne) parkingi przy budynku</p>
          </li>
          <li className="bg-surface-3 p-6">
            <p className="m-auto text-text-2">Winda oraz brak barier dla osób niepełnosprawnych</p>
          </li>
          <li className="p-6">
            <p className="m-auto text-surface-1">Opcjonalny wynajem sprzętu komputerowego (laptopy), ksero itp.</p>
          </li>
          <li className="bg-surface-3 p-6">
            <p className="m-auto text-text-2">Możliwość organizacji cateringu (obiad, przerwy kawowe)</p>
          </li>
          <li className="p-6">
            <p className="m-auto text-surface-1">Sala Informatyczna</p>
            <p className="m-auto text-base text-surface-2">od 30 zł netto/godzina lub od 200 zł netto/dzień</p>
          </li>
          <li className="bg-surface-3 p-6">
            <p className="m-auto text-text-2">Sala Multimedialna</p>
            <p className="m-auto text-base text-text-1">od 25 zł netto/godzina lub od 180 zł netto/dzień</p>
          </li>
          <li className="p-6">
            <p className="m-auto text-base text-surface-1">
              * Ceny uzgadniane są w zależności od liczby osób na szkoleniu, dodatkowego wyposażenia, liczby godzin/dni wynajmu sal.
            </p>
          </li>
        </ul>
      </Secondary>
    </>
  );
}
