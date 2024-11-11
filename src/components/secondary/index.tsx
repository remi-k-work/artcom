// component css styles
import styles from "./index.module.css";

// react
import { ReactNode } from "react";

// types
interface SecondaryProps {
  header: string;
  children: ReactNode;
}

export default function Secondary({ header, children }: SecondaryProps) {
  return (
    <article className={styles["secondary"]}>
      <section className="mx-[--size-8] h-2 bg-surface-2"></section>
      <section className="mx-[--size-5] h-2 bg-surface-3"></section>
      <section className={styles["secondary__content"]}>
        <h2>{header}</h2>
        <article>{children}</article>
      </section>
    </article>
  );
}
