// component css styles
import styles from "./Footer.module.css";

// react
import { ReactNode } from "react";

// payload and db access
import type { Post } from "@/payload-types";
import { RichText } from "@payloadcms/richtext-lexical/react";

// other libraries
import { cn } from "@/lib/utils";
import { formatDate } from "@/lib/formatters";

// types
interface FooterProps {
  children: ReactNode;
}

interface Footer1Props {
  footerContent: Post["footerContent"];
}

interface Footer2Props {
  publishedAt: Post["publishedAt"];
}

export default function Footer({ children }: FooterProps) {
  return <footer className={styles["footer"]}>{children}</footer>;
}

export function Footer1({ footerContent }: Footer1Props) {
  return footerContent && <RichText data={footerContent} disableIndent disableTextAlign className={cn(styles["footer__footer1"], "prose dark:prose-invert")} />;
}

export function Footer2({ publishedAt }: Footer2Props) {
  return <section className={styles["footer__footer2"]}>{formatDate(publishedAt)}</section>;
}
