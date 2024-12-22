// component css styles
import styles from "./Content.module.css";

// react
import { ReactNode } from "react";

// next
import Image from "next/image";

// payload and db access
import type { Media } from "@/payload-types";

// types
interface ContentProps {
  contentImage: Media;
  children: ReactNode;
}

export default function Content({ contentImage: { filename, width, height }, children }: ContentProps) {
  return (
    <article className={styles["content"]}>
      <Image
        src={process.env.NEXT_PUBLIC_BLOB_BASE_URL + "/" + filename}
        width={width!}
        height={height!}
        alt=""
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="object-cover"
        priority
      />
      {children}
    </article>
  );
}
