// component css styles
import styles from "./index.module.css";

// react
import { ReactNode } from "react";

// components
import Header, { Header1 } from "./Header";
import Icon from "./Icon";
import { Content1, Content2 } from "./Content";

// types
interface HeroProps {
  children: ReactNode;
}

export default function Hero({ children }: HeroProps) {
  return <article className={styles["hero"]}>{children}</article>;
}

Hero.Header = Header;
Hero.Header1 = Header1;
Hero.Icon = Icon;
Hero.Content1 = Content1;
Hero.Content2 = Content2;
