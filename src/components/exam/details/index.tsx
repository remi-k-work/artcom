// component css styles
import styles from "./index.module.css";

// react
import { ReactNode } from "react";

// components
import Header from "./Header";
import { Content1, Content2 } from "./Content";
import Footer from "./Footer";

// types
interface DetailsProps {
  children: ReactNode;
}

export default function Details({ children }: DetailsProps) {
  return <article className={styles["details"]}>{children}</article>;
}

Details.Header = Header;
Details.Content1 = Content1;
Details.Content2 = Content2;
Details.Footer = Footer;
