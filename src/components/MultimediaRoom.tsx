"use client";

// component css styles
import styles from "./MultimediaRoom.module.css";

// next
import Image from "next/image";

// components
import { FADE_IN, MotionArticle } from "@/components/AnimComps";

// assets
import headerImg from "@/assets/images/room-rental/multimedia-room.jpg";

export default function MultimediaRoom() {
  return (
    <MotionArticle className={styles["multimedia-room"]} {...FADE_IN}>
      <h3>Sala Multimedialna</h3>
      <Image src={headerImg} alt="" sizes="33vw" className="object-contain" />
      <article className="prose dark:prose-invert">
        <ul>
          <li>25 m2</li>
          <li>12+1 stanowisk szkoleniowych z dostępem do Internetu (światłowód, WiFi)</li>
          <li>dobre naturalne oświetlenie</li>
          <li>projektor multimedialny</li>
          <li>ekran projekcyjny</li>
          <li>tablica suchościeralna</li>
          <li>sprzęt audio/video</li>
        </ul>
      </article>
    </MotionArticle>
  );
}
