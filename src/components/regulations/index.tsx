// component css styles
import styles from "./index.module.css";

// react
import { ReactNode } from "react";

// components
import Header from "./Header";
import { Content1, Content2 } from "./Content";

// types
interface RegulationsProps {
  children: ReactNode;
}

export default function Regulations({ children }: RegulationsProps) {
  return <article className={styles["regulations"]}>{children}</article>;
}

export { Header as RegulationsHeader, Content1 as RegulationsContent1, Content2 as RegulationsContent2 };
