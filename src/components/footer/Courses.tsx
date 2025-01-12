// component css styles
import styles from "./Courses.module.css";

// next
import Link from "next/link";

// components
import TransitionLink from "@/components/TransitionLink";

export default function Courses() {
  return (
    <section className={styles["courses"]}>
      <h4 className="max-w-none text-center md:text-start">Nasze Szkolenia</h4>
      <ul className="grid gap-x-3 text-center md:grid-cols-[1fr_1fr] md:text-start">
        <li>
          <TransitionLink href="/courses#courses1">Kursy Informatyczne</TransitionLink>
        </li>
        <li>
          <TransitionLink href="/courses#courses2">Języki Obce</TransitionLink>
        </li>
        <li>
          <TransitionLink href="/courses#courses3">HR i Inne</TransitionLink>
        </li>
        <li>
          <Link href="/regulations">Regulamin Szkoleń</Link>
        </li>
      </ul>
    </section>
  );
}
