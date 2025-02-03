// component css styles
import styles from "./Header.module.css";

// react
import { ReactNode } from "react";

// next
import Image from "next/image";

// payload and db access
import type { Media } from "@/payload-types";

// other libraries
import { cn } from "@/lib/utils";

// types
interface HeaderProps {
  headerImage: Media;
  children: ReactNode;
}

export default function Header({ headerImage: { _key, width, height }, children }: HeaderProps) {
  return (
    <header className={styles["header"]}>
      <Image
        src={process.env.NEXT_PUBLIC_BLOB_BASE_URL + "/" + _key}
        width={width!}
        height={height!}
        alt=""
        sizes="100vw"
        className={cn(styles["header__image"], "object-cover")}
      />
      <h1>{children}</h1>
    </header>
  );
}
