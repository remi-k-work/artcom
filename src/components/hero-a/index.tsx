// component css styles
import styles from "./index.module.css";

// react
import { ReactNode } from "react";

// components
import RenderModel from "@/components/RenderModel";

// types
interface HeroProps {
  model?: ReactNode;
  children: ReactNode;
}

interface HeroHeaderProps {
  children: ReactNode;
}

interface HeroContentProps {
  children: ReactNode;
}

interface HeroFooterProps {
  children: ReactNode;
}

export default function Hero({ model, children }: HeroProps) {
  return (
    <article className={styles["hero"]}>
      <section className={styles["hero__l-section"]}>{children}</section>

      <section className={styles["hero__r-section"]}>{model}</section>
    </article>
  );
}

Hero.Header = function HeroHeader({ children }: HeroHeaderProps) {
  return <h1>{children}</h1>;
};

Hero.Content = function HeroContent({ children }: HeroContentProps) {
  return <article>{children}</article>;
};

Hero.Footer = function HeroFooter({ children }: HeroFooterProps) {
  return <footer>{children}</footer>;
};
