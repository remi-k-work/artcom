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

export { Header as DetailsHeader, Content1 as DetailsContent1, Content2 as DetailsContent2, Footer as DetailsFooter };
