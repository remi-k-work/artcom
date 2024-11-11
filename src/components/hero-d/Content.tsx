// component css styles
import styles from "./Content.module.css";

// react
import { ReactNode } from "react";

// types
interface ContentProps {
  children: ReactNode;
}

export function Content1({ children }: ContentProps) {
  return <article className={styles["content1"]}>{children}</article>;
}

export function Content2({ children }: ContentProps) {
  return <article className={styles["content2"]}>{children}</article>;
}
