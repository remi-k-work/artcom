"use client";

// component css styles
import styles from "./Guarantees.module.css";

// components
import { DRAW, FADE_IN, MotionArticle, MotionPath, MotionSvg } from "@/components/AnimComps";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export default function Guarantees() {
  return (
    <MotionArticle className={styles["guarantees"]} {...FADE_IN}>
      <h3>5 punktów GWARANCJI jakości naszych szkoleń</h3>
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
          d="M5.166 2.621v.858c-1.035.148-2.059.33-3.071.543a.75.75 0 0 0-.584.859 6.753 6.753 0 0 0 6.138 5.6 6.73 6.73 0 0 0 2.743 1.346A6.707 6.707 0 0 1 9.279 15H8.54c-1.036 0-1.875.84-1.875 1.875V19.5h-.75a2.25 2.25 0 0 0-2.25 2.25c0 .414.336.75.75.75h15a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-2.25-2.25h-.75v-2.625c0-1.036-.84-1.875-1.875-1.875h-.739a6.706 6.706 0 0 1-1.112-3.173 6.73 6.73 0 0 0 2.743-1.347 6.753 6.753 0 0 0 6.139-5.6.75.75 0 0 0-.585-.858 47.077 47.077 0 0 0-3.07-.543V2.62a.75.75 0 0 0-.658-.744 49.22 49.22 0 0 0-6.093-.377c-2.063 0-4.096.128-6.093.377a.75.75 0 0 0-.657.744Zm0 2.629c0 1.196.312 2.32.857 3.294A5.266 5.266 0 0 1 3.16 5.337a45.6 45.6 0 0 1 2.006-.343v.256Zm13.5 0v-.256c.674.1 1.343.214 2.006.343a5.265 5.265 0 0 1-2.863 3.207 6.72 6.72 0 0 0 .857-3.294Z"
          clipRule="evenodd"
          variants={DRAW}
        />
      </MotionSvg>
      <article>
        <Carousel className="m-auto w-[80%]">
          <CarouselContent>
            <CarouselItem>
              <div className={styles["guarantee"]}>
                <span>1</span>
                <p className="text-center">
                  Najlepszą gwarancją jakości naszych szkoleń są liczne referencje od Klientów, opinie i polecenia naszych Kursantów, a także przyjazna&nbsp;
                  <b>kadra trenerska z wieloletnim doświadczeniem</b> szkoleniowym i praktycznym zawodowym.
                </p>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className={styles["guarantee"]}>
                <span>2</span>
                <p className="text-center">
                  W celu zapewnienia najwyższej jakości szkoleń, każdorazowo <b>przeprowadzamy testy i ankiety przed szkoleniowe</b>, dokonujemy analizy
                  materiałów szkoleniowych i dostosowujemy je do potrzeb uczestników każdego prowadzonego szkolenia.
                </p>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className={styles["guarantee"]}>
                <span>3</span>
                <p className="text-center">
                  Kończąc zajęcia, prosimy o wyrażenie opinii na karcie oceny jakości szkolenia. <b>Rezygnujemy z wynagrodzenia</b> gdy grupa (min. 5 osób)
                  oceni zajęcia poniżej wartości 4 w skali 1-5.
                </p>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className={styles["guarantee"]}>
                <span>4</span>
                <p className="text-center">
                  Uczestnicy zajęć mogą uzyskać <b>kwalifikacje i certyfikaty</b> o znaczeniu międzynarodowym, które są cenione na rynku pracy. Każdorazowo
                  wydajemy świadectwa ukończenia kursów uznawane przez pracodawców i instytucje w Polsce.
                </p>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className={styles["guarantee"]}>
                <span>5</span>
                <p className="text-center">
                  Nasza gwarancja jakości nie kończy się na kursie. Oferujemy <b>bezpłatne wsparcie i konsultacje</b> po szkoleniu aby nasi uczestnicy kursów
                  zawsze mieli dostęp do wiedzy praktycznej.
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
