// component css styles
import styles from "./Footer.module.css";

// payload and db access
import type { Course } from "@/payload-types";
import { RichText } from "@payloadcms/richtext-lexical/react";

// other libraries
import { cn } from "@/lib/utils";

// types
interface FooterProps {
  footerContent: Course["footerContent"];
}

export default function Footer({ footerContent }: FooterProps) {
  return <RichText data={footerContent} disableIndent disableTextAlign className={cn(styles["footer"], "prose dark:prose-invert")} />;
}
