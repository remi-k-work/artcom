// component css styles
import styles from "./Image.module.css";

// next
import { default as NextImage, StaticImageData } from "next/image";

// other libraries
import { cn } from "@/lib/utils";

// types
interface ImageProps {
  imageSrc: StaticImageData;
}

export default function Image({ imageSrc }: ImageProps) {
  return <NextImage src={imageSrc} alt="" sizes="(max-width: 1024px) 100vw, 50vw" className={cn(styles["image"], "object-cover")} priority />;
}
