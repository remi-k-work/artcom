// component css styles
import styles from "./Header.module.css";

// react
import { ReactNode } from "react";

// next
import Image, { StaticImageData } from "next/image";

// other libraries
import { cn } from "@/lib/utils";

// types
interface HeaderProps {
  image1Src?: StaticImageData;
  image2Src?: StaticImageData;
  children: ReactNode;
}

export default function Header({ image1Src, image2Src, children }: HeaderProps) {
  return (
    <header className={styles["header"]}>
      {image1Src && image2Src && (
        <>
          <Image src={image1Src} alt="" sizes="(max-width: 1024px) 100vw, 50vw" className={cn(styles["header__image1"], "object-cover")} priority />
          <Image src={image2Src} alt="" sizes="(max-width: 1024px) 100vw, 50vw" className={cn(styles["header__image2"], "object-cover")} priority />
        </>
      )}
      <h1>{children}</h1>
    </header>
  );
}
