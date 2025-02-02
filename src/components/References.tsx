"use client";

// component css styles
import styles from "./References.module.css";

// next
import Link from "next/link";

// payload and db access
import { PaginatedDocs } from "payload";
import { Reference } from "@/payload-types";

// other libraries
import Autoplay from "embla-carousel-autoplay";

// components
import { DRAW, FADE_IN, MotionArticle, MotionPath, MotionSvg } from "@/components/AnimComps";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

// assets
import { StarIcon } from "@heroicons/react/24/outline";

// types
interface ReferencesProps {
  references: PaginatedDocs<Reference>;
}

export default function References({ references: { docs } }: ReferencesProps) {
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
            {docs.map(({ id, customerName, theirLocation, theirWebsite, reference }) => (
              <CarouselItem key={id}>
                <div className={styles["reference"]}>
                  <span className="flex items-center justify-center gap-1 text-secondary">
                    <StarIcon width={36} height={36} />
                    <StarIcon width={36} height={36} />
                    <StarIcon width={36} height={36} />
                    <StarIcon width={36} height={36} />
                    <StarIcon width={36} height={36} />
                  </span>
                  <br />
                  <p className="text-center">{reference}</p>
                  <br />
                  <p className="text-center text-secondary">
                    <b>{customerName}</b>
                    <br />
                    <small>
                      {theirLocation}
                      <br />
                      <Link href={theirWebsite} target="_blank" className="underline">
                        {new URL(theirWebsite).hostname}
                      </Link>
                    </small>
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious variant="default" />
          <CarouselNext variant="default" />
        </Carousel>
      </article>
    </MotionArticle>
  );
}
