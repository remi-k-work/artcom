"use client";

// next
import Image from "next/image";

// other libraries
import Autoplay from "embla-carousel-autoplay";

// components
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

// assets
import slideImgA from "@/assets/images/room-rental/computer-room.jpg";
import slideImgB from "@/assets/images/room-rental/multimedia-room.jpg";
import slideImgC from "@/assets/images/room-rental/respan.jpg";

export default function Slides() {
  return (
    <Carousel className="m-auto w-[80%]" plugins={[Autoplay({ delay: 6000 })]}>
      <CarouselContent>
        <CarouselItem>
          <Image src={slideImgA} alt="" sizes="(max-width: 1024px) 100vw, 50vw" className="h-full w-full object-cover" priority />
        </CarouselItem>
        <CarouselItem>
          <Image src={slideImgB} alt="" sizes="(max-width: 1024px) 100vw, 50vw" className="h-full w-full object-cover" />
        </CarouselItem>
        <CarouselItem>
          <Image src={slideImgC} alt="" sizes="(max-width: 1024px) 100vw, 50vw" className="h-full w-full object-cover" />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious variant="default" />
      <CarouselNext variant="default" />
    </Carousel>
  );
}
