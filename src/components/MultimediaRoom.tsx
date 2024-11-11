// component css styles
import styles from "./MultimediaRoom.module.css";

// next
import Image from "next/image";

// assets
import headerImg from "@/assets/images/room-rental/multimedia-room.jpg";

export default function MultimediaRoom() {
  return (
    <article className={styles["multimedia-room"]}>
      <h3>Sala Multimedialna</h3>
      <Image src={headerImg} alt="" sizes="33vw" className="object-contain" />
      <article className="prose">
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
    </article>
  );
}
