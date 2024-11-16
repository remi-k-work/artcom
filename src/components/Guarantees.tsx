// component css styles
import styles from "./Guarantees.module.css";

// components
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

// assets
import { TrophyIcon } from "@heroicons/react/24/solid";

export default function Guarantees() {
  return (
    <article className={styles["guarantees"]}>
      <h3>5 punktów GWARANCJI jakości naszych szkoleń</h3>
      <TrophyIcon />
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
    </article>
  );
}
