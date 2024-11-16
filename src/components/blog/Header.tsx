// component css styles
import styles from "./Header.module.css";

// react
import { ReactNode } from "react";

// types
interface HeaderProps {
  children: ReactNode;
}

export default function Header({ children }: HeaderProps) {
  return <h3 className={styles["header"]}>{children}</h3>;
}
