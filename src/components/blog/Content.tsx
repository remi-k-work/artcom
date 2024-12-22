// component css styles
import styles from "./Content.module.css";

// react
import { ReactNode } from "react";

// next
import Image from "next/image";

// payload and db access
import type { Media } from "@/payload-types";

// other libraries
import { cn } from "@/lib/utils";

// types
interface ContentProps {
  contentImage: Media;
  children: ReactNode;
}

export default function Content({ contentImage: { filename, width, height }, children }: ContentProps) {
  return (
    <article className={cn(styles["content"], "line-clamp-6 text-center sm:text-justify")}>
      <Image src={process.env.NEXT_PUBLIC_BLOB_BASE_URL + "/" + filename} width={width!} height={height!} alt="" sizes="50vw" className="object-cover" />
      <p>{children}</p>
    </article>
  );
}
