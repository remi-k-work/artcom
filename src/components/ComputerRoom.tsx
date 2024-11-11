// component css styles
import styles from "./ComputerRoom.module.css";

// next
import Image from "next/image";

// assets
import headerImg from "@/assets/images/room-rental/computer-room.jpg";

export default function ComputerRoom() {
  return (
    <article className={styles["computer-room"]}>
      <h3>Sala Informatyczna</h3>
      <Image src={headerImg} alt="" sizes="33vw" className="object-contain" />
      <article className="prose">
        <ul>
          <li>40 m2</li>
          <li>12+1 stanowisk komputerowych</li>
          <li>światłowodowe połączenie do sieci internetowej</li>
          <li>dobre naturalne oświetlenie sali</li>
          <li>rzutnik multimedialny</li>
          <li>sieć LAN</li>
          <li>tablica suchościeralna</li>
          <li>VNC Viewer - system przekazywania obrazu trener/kursant</li>
          <li>klimatyzacja</li>
        </ul>
      </article>
    </article>
  );
}
