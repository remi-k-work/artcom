// component css styles
import styles from "./Header.module.css";

// react
import { ReactNode } from "react";

// next
import Image, { StaticImageData } from "next/image";

// types
interface HeaderProps {
  imageSrc: StaticImageData;
  children: ReactNode;
}

export default function Header({ imageSrc, children }: HeaderProps) {
  return (
    <header className={styles["header"]}>
      <Image src={imageSrc} alt="" sizes="50vw" className="object-cover" />
      <h3>{children}</h3>
    </header>
  );
}
