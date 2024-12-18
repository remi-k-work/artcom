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
  contentImage1?: Media;
  contentImage2?: Media;
  children: ReactNode;
}

export default function Header({ contentImage1, contentImage2, children }: HeaderProps) {
  return (
    <header className={styles["header"]}>
      {contentImage1 && contentImage2 && (
        <>
          <Image
            src={process.env.NEXT_PUBLIC_BLOB_BASE_URL + "/" + contentImage1.filename}
            width={contentImage1.width!}
            height={contentImage1.height!}
            alt=""
            sizes="(max-width: 1024px) 100vw, 50vw"
            className={cn(styles["header__image1"], "object-cover")}
            priority
          />
          <Image
            src={process.env.NEXT_PUBLIC_BLOB_BASE_URL + "/" + contentImage2.filename}
            width={contentImage2.width!}
            height={contentImage2.height!}
            alt=""
            sizes="(max-width: 1024px) 100vw, 50vw"
            className={cn(styles["header__image2"], "object-cover")}
            priority
          />
        </>
      )}
      <h1>{children}</h1>
    </header>
  );
}
