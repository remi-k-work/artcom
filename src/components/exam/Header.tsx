// component css styles
import styles from "./Header.module.css";

// react
import { ReactNode } from "react";

// next
import Image from "next/image";

// payload and db access
import type { Media } from "@/payload-types";

// types
interface HeaderProps {
  headerImage: Media;
  children: ReactNode;
}

export default function Header({ headerImage: { filename, width, height }, children }: HeaderProps) {
  return (
    <header className={styles["header"]}>
      <Image src={process.env.NEXT_PUBLIC_BLOB_BASE_URL + "/" + filename} width={width!} height={height!} alt="" sizes="50vw" className="object-cover" />
      <h3>{children}</h3>
    </header>
  );
}
