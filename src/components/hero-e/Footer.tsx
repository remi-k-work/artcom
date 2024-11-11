// component css styles
import styles from "./Footer.module.css";

// react
import { ReactNode } from "react";

// types
interface FooterProps {
  children: ReactNode;
}

export default function Footer({ children }: FooterProps) {
  return <footer className={styles["footer"]}>{children}</footer>;
}

export function Footer1({ children }: FooterProps) {
  return <section className={styles["footer__footer1"]}>{children}</section>;
}

export function Footer2({ children }: FooterProps) {
  return <section className={styles["footer__footer2"]}>{children}</section>;
}
