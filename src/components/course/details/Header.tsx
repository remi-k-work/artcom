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
  imageSrc: StaticImageData;
  children: ReactNode;
}

export default function Header({ imageSrc, children }: HeaderProps) {
  return (
    <header className={styles["header"]}>
      <Image src={imageSrc} alt="" sizes="100vw" className={cn(styles["header__image"], "object-cover")} priority />
      <h1>{children}</h1>
    </header>
  );
}
