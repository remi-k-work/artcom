// component css styles
import styles from "./Header.module.css";

// react
import { ReactNode } from "react";

// types
interface HeaderProps {
  children: ReactNode;
}

export default function Header({ children }: HeaderProps) {
  return <header className={styles["header"]}>{children}</header>;
}

export function Header1({ children }: HeaderProps) {
  return <h1>{children}</h1>;
}

export function Header2({ children }: HeaderProps) {
  return <h2>{children}</h2>;
}
