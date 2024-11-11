// component css styles
import styles from "./Footer.module.css";

// react
import { ReactNode } from "react";

// next
import Image, { StaticImageData } from "next/image";

// other libraries
import { cn } from "@/lib/utils";

// types
interface FooterProps {
  image1Src?: StaticImageData;
  image2Src?: StaticImageData;
  children: ReactNode;
}

export default function Footer({ image1Src, image2Src, children }: FooterProps) {
  return (
    <footer className={cn(styles["footer"], !image2Src && styles["footer--one-img"])}>
      {image1Src && <Image src={image1Src} alt="" sizes="50vw" className={cn(styles["footer__image1"], "object-cover")} />}
      {image2Src && <Image src={image2Src} alt="" sizes="50vw" className={cn(styles["footer__image2"], "object-cover")} />}
      <article className="prose">{children}</article>
    </footer>
  );
}
