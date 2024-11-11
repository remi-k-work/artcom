"use client";

// component css styles
import styles from "./References.module.css";

// next
import Image from "next/image";
import Link from "next/link";

// other libraries
import Autoplay from "embla-carousel-autoplay";

// components
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

// assets
import { StarIcon } from "@heroicons/react/24/outline";

export default function References() {
  return (
    <article className={styles["references"]}>
      <h3>Referencje naszych Klientów</h3>
      <section>
        <Image
          src="https://artcom.edu.pl/files/dynamicContent/sites/sqveb4/images/pl/webpage_20/ly2rc6c9/element_215/rwdMode_1/600x348/gwarancja-jakosci.webp"
          alt=""
          fill
          sizes="33vw"
          className="object-contain"
        />
      </section>
      <article>
        <Carousel className="m-auto w-[80%]" plugins={[Autoplay({ delay: 6000 })]}>
          <CarouselContent className="items-center">
            <CarouselItem>
              <div className={styles["reference"]}>
                <span className="flex items-center justify-center gap-1 sm:justify-start">
                  <StarIcon width={24} height={24} />
                  <StarIcon width={24} height={24} />
                  <StarIcon width={24} height={24} />
                  <StarIcon width={24} height={24} />
                  <StarIcon width={24} height={24} />
                </span>
                <br />
                <p className="text-center sm:text-start">
                  Usługa szkoleniowa została przeprowadzona z dużą starannością i w pełni profesjonalnie. Zaangażowanie, komunikatywność i kompetencje trenera a
                  także jego dobry kontakt z kursantami zapewniły pełną 100% zdawalność egzaminów ECDL jak i uzyskanie certyfikatów przez wszystkich
                  uczestników, którzy ukończyli szkolenie. Na bazie naszych doświadczeń, możemy polecić PZI ARTCOM jako rzetelnego partnera, realizującego
                  szkolenia na wysokim poziomie.
                </p>
                <br />
                <p className="text-center sm:text-start">
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
                <span className="flex items-center justify-center gap-1 sm:justify-start">
                  <StarIcon width={24} height={24} />
                  <StarIcon width={24} height={24} />
                  <StarIcon width={24} height={24} />
                  <StarIcon width={24} height={24} />
                  <StarIcon width={24} height={24} />
                </span>
                <br />
                <p className="text-center sm:text-start">
                  Szkolenie zostało zorganizowane zgodnie z wcześniej ustalonym programem. Firma wykazała się dużym zaangażowaniem zarówno na etapie
                  konstruowania programu jaki jego realizacji. Przygotowanie i przeprowadzenie szkolenia odbyło się w sposób fachowy i sprawny.
                </p>
                <br />
                <p className="text-center sm:text-start">
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
                <span className="flex items-center justify-center gap-1 sm:justify-start">
                  <StarIcon width={24} height={24} />
                  <StarIcon width={24} height={24} />
                  <StarIcon width={24} height={24} />
                  <StarIcon width={24} height={24} />
                  <StarIcon width={24} height={24} />
                </span>
                <br />
                <p className="text-center sm:text-start">
                  Stwierdzamy, że Przedsiębiorstwo Zastosowań Informatyki ARTCOM Roman Bocheński w Rzeszowie wykazało się profesjonalizmem oraz solidnością w
                  realizacji usługi, zasługuje na polecenie jako partner w realizacji szkoleń.
                </p>
                <br />
                <p className="text-center sm:text-start">
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
                <span className="flex items-center justify-center gap-1 sm:justify-start">
                  <StarIcon width={24} height={24} />
                  <StarIcon width={24} height={24} />
                  <StarIcon width={24} height={24} />
                  <StarIcon width={24} height={24} />
                  <StarIcon width={24} height={24} />
                </span>
                <br />
                <p className="text-center sm:text-start">
                  Firma zaprezentowała szeroką i konkurencyjną ofertę szkoleń, dostosowaną do potrzeb uczestników i przeprowadzoną zgodnie z harmonogramem.
                  Usługa została zrealizowana profesjonalnie oraz na wysokim poziomie technicznym. Szkolenia prowadzone były w sposób komunikatywny i
                  interesujący.
                </p>
                <br />
                <p className="text-center sm:text-start">
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
                <span className="flex items-center justify-center gap-1 sm:justify-start">
                  <StarIcon width={24} height={24} />
                  <StarIcon width={24} height={24} />
                  <StarIcon width={24} height={24} />
                  <StarIcon width={24} height={24} />
                  <StarIcon width={24} height={24} />
                </span>
                <br />
                <p className="text-center sm:text-start">
                  PZI Artcom dysponowało odpowiednimi zasobami kadrowymi i technicznymi umożliwiającymi realizację kursów. Usługi zostały wykonane rzetelnie,
                  profesjonalnie i terminowo. Z prawdziwą przyjemnością rekomendujemy dla innych podmiotów szkolenia firmy PZI Artcom.
                </p>
                <br />
                <p className="text-center sm:text-start">
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
                <span className="flex items-center justify-center gap-1 sm:justify-start">
                  <StarIcon width={24} height={24} />
                  <StarIcon width={24} height={24} />
                  <StarIcon width={24} height={24} />
                  <StarIcon width={24} height={24} />
                  <StarIcon width={24} height={24} />
                </span>
                <br />
                <p className="text-center sm:text-start">
                  Szkolenie zrealizowane zostało zgodnie z naszymi oczekiwaniami, profesjonalnie, z dużym zaangażowaniem trenera, a uczestnik szkolenia miał
                  zapewniony sprzęt i oprogramowanie do realizacji zajęć. W związku z tym rekomendujemy firmę Artcom jako rzetelnego, kompetentnego i
                  terminowego wykonawcę szkoleń z zakresu grafiki komputerowej.
                </p>
                <br />
                <p className="text-center sm:text-start">
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
    </article>
  );
}
