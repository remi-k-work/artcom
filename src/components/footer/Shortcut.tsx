// component css styles
import styles from "./Shortcut.module.css";

// components
import TransitionLink from "@/components/TransitionLink";

export default function Shortcut() {
  return (
    <section className={styles["shortcut"]}>
      <h4 className="max-w-none text-center md:text-start">Na Skróty</h4>
      <ul className="grid gap-x-3 text-center md:grid-cols-[1fr_1fr] md:text-start">
        <li>
          <TransitionLink href="/">O Nas</TransitionLink>
        </li>
        <li>
          <TransitionLink href="/courses">Szkolenia i Kursy</TransitionLink>
        </li>
        <li>
          <TransitionLink href="/exams">Egzaminy</TransitionLink>
        </li>
        <li>
          <TransitionLink href="/textbooks">Podręczniki</TransitionLink>
        </li>
        <li>
          <TransitionLink href="/counseling">Doradztwo Zawodowe</TransitionLink>
        </li>
        <li>
          <TransitionLink href="/room-rental">Wynajem Sal</TransitionLink>
        </li>
        <li>
          <TransitionLink href="/blog">Blog</TransitionLink>
        </li>
        <li>
          <TransitionLink href="/contact-us">Kontakt</TransitionLink>
        </li>
      </ul>
    </section>
  );
}
