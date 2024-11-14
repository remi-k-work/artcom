// component css styles
import styles from "./Shortcut.module.css";

// next
import Link from "next/link";

export default function Shortcut() {
  return (
    <section className={styles["shortcut"]}>
      <h4 className="max-w-none text-center md:text-start">Na Skróty</h4>
      <ul className="grid gap-x-3 text-center md:grid-cols-[1fr_1fr] md:text-start">
        <li>
          <Link href="/">O Nas</Link>
        </li>
        <li>
          <Link href="/courses">Szkolenia i Kursy</Link>
        </li>
        <li>
          <Link href="/exams">Egzaminy</Link>
        </li>
        <li>
          <Link href="/textbooks">Podręczniki</Link>
        </li>
        <li>
          <Link href="/counseling">Doradztwo Zawodowe</Link>
        </li>
        <li>
          <Link href="/room-rental">Wynajem Sal</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/contact-us">Kontakt</Link>
        </li>
      </ul>
    </section>
  );
}
