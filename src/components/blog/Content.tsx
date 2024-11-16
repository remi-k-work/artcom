// component css styles
import styles from "./Content.module.css";

// react
import { ReactNode } from "react";

// next
import Image, { StaticImageData } from "next/image";

// other libraries
import { cn } from "@/lib/utils";

// types
interface ContentProps {
  imageSrc: StaticImageData;
  children: ReactNode;
}

export default function Content({ imageSrc, children }: ContentProps) {
  return (
    <article className={cn(styles["content"], "line-clamp-6 text-center sm:text-justify")}>
      <Image src={imageSrc} alt="" sizes="50vw" className="object-cover" />
      <p>{children}</p>
    </article>
  );
}
