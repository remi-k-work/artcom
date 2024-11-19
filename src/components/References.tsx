"use client";

// component css styles
import styles from "./References.module.css";

// next
import Link from "next/link";

// other libraries
import Autoplay from "embla-carousel-autoplay";

// components
import { DRAW, FADE_IN, MotionArticle, MotionPath, MotionSvg } from "@/components/AnimComps";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

// assets
import { StarIcon } from "@heroicons/react/24/outline";

export default function References() {
  return (
    <MotionArticle id="references" className={styles["references"]} {...FADE_IN}>
      <h3>Referencje naszych Klientów</h3>
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
          d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
          clipRule="evenodd"
          variants={DRAW}
        />
      </MotionSvg>
      <article>
        <Carousel className="m-auto w-[80%]" plugins={[Autoplay({ delay: 6000 })]}>
          <CarouselContent>
            <CarouselItem>
              <div className={styles["reference"]}>
                <span className="flex items-center justify-center gap-1">
                  <StarIcon width={36} height={36} />
                  <StarIcon width={36} height={36} />
                  <StarIcon width={36} height={36} />
                  <StarIcon width={36} height={36} />
                  <StarIcon width={36} height={36} />
                </span>
                <br />
                <p className="text-center">
                  Usługa szkoleniowa została przeprowadzona z dużą starannością i w pełni profesjonalnie. Zaangażowanie, komunikatywność i kompetencje trenera a
                  także jego dobry kontakt z kursantami zapewniły pełną 100% zdawalność egzaminów ECDL jak i uzyskanie certyfikatów przez wszystkich
                  uczestników, którzy ukończyli szkolenie. Na bazie naszych doświadczeń, możemy polecić PZI ARTCOM jako rzetelnego partnera, realizującego
                  szkolenia na wysokim poziomie.
                </p>
                <br />
                <p className="text-center">
                  <b>Podkarpacka Wojewódzka Komenda Ochotniczych Hufców Pracy</b>
                  <br />
                  <small>
                    Rzeszów
                    <br />
                    <Link href="http://www.podkarpacka.ohp.pl" target="_blank">
                      www.podkarpacka.ohp.pl
                    </Link>
                  </small>
                </p>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className={styles["reference"]}>
                <span className="flex items-center justify-center gap-1">
                  <StarIcon width={36} height={36} />
                  <StarIcon width={36} height={36} />
                  <StarIcon width={36} height={36} />
                  <StarIcon width={36} height={36} />
                  <StarIcon width={36} height={36} />
                </span>
                <br />
                <p className="text-center">
                  Szkolenie zostało zorganizowane zgodnie z wcześniej ustalonym programem. Firma wykazała się dużym zaangażowaniem zarówno na etapie
                  konstruowania programu jaki jego realizacji. Przygotowanie i przeprowadzenie szkolenia odbyło się w sposób fachowy i sprawny.
                </p>
                <br />
                <p className="text-center">
                  <b>BWI Poland Technologies Sp. z o.o.</b>
                  <br />
                  <small>
                    Krosno
                    <br />
                    <Link href="https://www.bwigroup.pl" target="_blank">
                      www.bwigroup.pl
                    </Link>
                  </small>
                </p>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className={styles["reference"]}>
                <span className="flex items-center justify-center gap-1">
                  <StarIcon width={36} height={36} />
                  <StarIcon width={36} height={36} />
                  <StarIcon width={36} height={36} />
                  <StarIcon width={36} height={36} />
                  <StarIcon width={36} height={36} />
                </span>
                <br />
                <p className="text-center">
                  Stwierdzamy, że Przedsiębiorstwo Zastosowań Informatyki ARTCOM Roman Bocheński w Rzeszowie wykazało się profesjonalizmem oraz solidnością w
                  realizacji usługi, zasługuje na polecenie jako partner w realizacji szkoleń.
                </p>
                <br />
                <p className="text-center">
                  <b>Powiatowy Urząd Pracy w Leżajsku</b>
                  <br />
                  <small>
                    Leżajsk
                    <br />
                    <Link href="https://lezajsk.praca.gov.pl" target="_blank">
                      lezajsk.praca.gov.pl
                    </Link>
                  </small>
                </p>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className={styles["reference"]}>
                <span className="flex items-center justify-center gap-1">
                  <StarIcon width={36} height={36} />
                  <StarIcon width={36} height={36} />
                  <StarIcon width={36} height={36} />
                  <StarIcon width={36} height={36} />
                  <StarIcon width={36} height={36} />
                </span>
                <br />
                <p className="text-center">
                  Firma zaprezentowała szeroką i konkurencyjną ofertę szkoleń, dostosowaną do potrzeb uczestników i przeprowadzoną zgodnie z harmonogramem.
                  Usługa została zrealizowana profesjonalnie oraz na wysokim poziomie technicznym. Szkolenia prowadzone były w sposób komunikatywny i
                  interesujący.
                </p>
                <br />
                <p className="text-center">
                  <b>Wojewódzki Ośrodek Medycyny Pracy</b>
                  <br />
                  <small>
                    Rzeszów
                    <br />
                    <Link href="https://www.womp.rzeszow.pl" target="_blank">
                      www.womp.rzeszow.pl
                    </Link>
                  </small>
                </p>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className={styles["reference"]}>
                <span className="flex items-center justify-center gap-1">
                  <StarIcon width={36} height={36} />
                  <StarIcon width={36} height={36} />
                  <StarIcon width={36} height={36} />
                  <StarIcon width={36} height={36} />
                  <StarIcon width={36} height={36} />
                </span>
                <br />
                <p className="text-center">
                  PZI Artcom dysponowało odpowiednimi zasobami kadrowymi i technicznymi umożliwiającymi realizację kursów. Usługi zostały wykonane rzetelnie,
                  profesjonalnie i terminowo. Z prawdziwą przyjemnością rekomendujemy dla innych podmiotów szkolenia firmy PZI Artcom.
                </p>
                <br />
                <p className="text-center">
                  <b>Stowarzyszenie CRAS</b>
                  <br />
                  <small>
                    Rzeszów
                    <br />
                    <Link href="http://cras.org.pl" target="_blank">
                      cras.org.pl
                    </Link>
                  </small>
                </p>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className={styles["reference"]}>
                <span className="flex items-center justify-center gap-1">
                  <StarIcon width={36} height={36} />
                  <StarIcon width={36} height={36} />
                  <StarIcon width={36} height={36} />
                  <StarIcon width={36} height={36} />
                  <StarIcon width={36} height={36} />
                </span>
                <br />
                <p className="text-center">
                  Szkolenie zrealizowane zostało zgodnie z naszymi oczekiwaniami, profesjonalnie, z dużym zaangażowaniem trenera, a uczestnik szkolenia miał
                  zapewniony sprzęt i oprogramowanie do realizacji zajęć. W związku z tym rekomendujemy firmę Artcom jako rzetelnego, kompetentnego i
                  terminowego wykonawcę szkoleń z zakresu grafiki komputerowej.
                </p>
                <br />
                <p className="text-center">
                  <b>Nasza Drukarnia Justyna Adamiec</b>
                  <br />
                  <small>
                    Rzeszów
                    <br />
                    <Link href="https://naszadrukarnia.eu" target="_blank">
                      naszadrukarnia.eu
                    </Link>
                  </small>
                </p>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </article>
    </MotionArticle>
  );
}
