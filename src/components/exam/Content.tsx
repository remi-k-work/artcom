// component css styles
import styles from "./Content.module.css";

// react
import { ReactNode } from "react";

// types
interface ContentProps {
  children: ReactNode;
}

export default function Content({ children }: ContentProps) {
  return (
    <article className={styles["content"]}>
      <p className="line-clamp-6 text-center">{children}</p>
    </article>
  );
}
