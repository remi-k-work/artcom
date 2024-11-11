// component css styles
import styles from "./Content.module.css";

// react
import { ReactNode } from "react";

// next
import Image, { StaticImageData } from "next/image";

// types
interface ContentProps {
  imageSrc: StaticImageData;
  children: ReactNode;
}

export default function Content({ imageSrc, children }: ContentProps) {
  return (
    <article className={styles["content"]}>
      <Image src={imageSrc} alt="" sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" priority />
      {children}
    </article>
  );
}
