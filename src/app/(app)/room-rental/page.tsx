// next
import type { Metadata } from "next";

// components
import Hero from "@/components/hero-d";
import Secondary from "@/components/secondary";
import Slides from "@/components/Slides";
import ComputerRoom from "@/components/ComputerRoom";
import MultimediaRoom from "@/components/MultimediaRoom";
import {
  ACCORDION_ITEM_VAR_L,
  ACCORDION_ITEM_VAR_R,
  ACCORDION_LIST_VAR,
  DRAW,
  MotionListItem,
  MotionPath,
  MotionSvg,
  MotionUnList,
} from "@/components/AnimComps";

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
                d="M4.5 2.25a.75.75 0 0 0 0 1.5v16.5h-.75a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5h-.75V3.75a.75.75 0 0 0 0-1.5h-15ZM9 6a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H9Zm-.75 3.75A.75.75 0 0 1 9 9h1.5a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75ZM9 12a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H9Zm3.75-5.25A.75.75 0 0 1 13.5 6H15a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75ZM13.5 9a.75.75 0 0 0 0 1.5H15A.75.75 0 0 0 15 9h-1.5Zm-.75 3.75a.75.75 0 0 1 .75-.75H15a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75ZM9 19.5v-2.25a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-.75.75h-4.5A.75.75 0 0 1 9 19.5Z"
                clipRule="evenodd"
                variants={DRAW}
              />
            </MotionSvg>
          }
        />
        <Hero.Content1>
          <Slides />
        </Hero.Content1>
        <Hero.Content2>
          <ComputerRoom />
          <MultimediaRoom />
        </Hero.Content2>
      </Hero>
      <Secondary header="Nasze sale zapewniają">
        <MotionUnList className="mt-[--size-6] text-center text-xl" initial="hidden" whileInView="visible" variants={ACCORDION_LIST_VAR}>
          <MotionListItem className="bg-surface-3 p-6" variants={ACCORDION_ITEM_VAR_L}>
            <p className="m-auto text-text-2">Dogodną Lokalizację</p>
            <p className="m-auto text-base text-text-1">Znane centrum handlowo-biurowe RESPAN w Rzeszowie</p>
          </MotionListItem>
          <MotionListItem className="p-6" variants={ACCORDION_ITEM_VAR_R}>
            <p className="m-auto text-surface-1">Dostępne (również bezpłatne) parkingi przy budynku</p>
          </MotionListItem>
          <MotionListItem className="bg-surface-3 p-6" variants={ACCORDION_ITEM_VAR_L}>
            <p className="m-auto text-text-2">Winda oraz brak barier dla osób niepełnosprawnych</p>
          </MotionListItem>
          <MotionListItem className="p-6" variants={ACCORDION_ITEM_VAR_R}>
            <p className="m-auto text-surface-1">Opcjonalny wynajem sprzętu komputerowego (laptopy), ksero itp.</p>
          </MotionListItem>
          <MotionListItem className="bg-surface-3 p-6" variants={ACCORDION_ITEM_VAR_L}>
            <p className="m-auto text-text-2">Możliwość organizacji cateringu (obiad, przerwy kawowe)</p>
          </MotionListItem>
          <MotionListItem className="p-6" variants={ACCORDION_ITEM_VAR_R}>
            <p className="m-auto text-surface-1">Sala Informatyczna</p>
            <p className="m-auto text-base text-surface-2">od 30 zł netto/godzina lub od 200 zł netto/dzień</p>
          </MotionListItem>
          <MotionListItem className="bg-surface-3 p-6" variants={ACCORDION_ITEM_VAR_L}>
            <p className="m-auto text-text-2">Sala Multimedialna</p>
            <p className="m-auto text-base text-text-1">od 25 zł netto/godzina lub od 180 zł netto/dzień</p>
          </MotionListItem>
          <MotionListItem className="p-6" variants={ACCORDION_ITEM_VAR_R}>
            <p className="m-auto text-base text-surface-1">
              * Ceny uzgadniane są w zależności od liczby osób na szkoleniu, dodatkowego wyposażenia, liczby godzin/dni wynajmu sal.
            </p>
          </MotionListItem>
        </MotionUnList>
      </Secondary>
    </>
  );
}
