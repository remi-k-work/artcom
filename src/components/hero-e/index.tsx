// component css styles
import styles from "./index.module.css";

// react
import { ReactNode } from "react";

// components
import Header, { Header1, Header2 } from "./Header";
import Icon from "./Icon";
import Content from "./Content";
import Footer, { Footer1, Footer2 } from "./Footer";

// types
interface HeroProps {
  children: ReactNode;
}

export default function Hero({ children }: HeroProps) {
  return <article className={styles["hero"]}>{children}</article>;
}

Hero.Header = Header;
Hero.Header1 = Header1;
Hero.Header2 = Header2;
Hero.Icon = Icon;
Hero.Content = Content;
Hero.Footer = Footer;
Hero.Footer1 = Footer1;
Hero.Footer2 = Footer2;
