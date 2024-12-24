// component css styles
import styles from "./Footer.module.css";

// react
import { ReactNode } from "react";

// payload and db access
import type { Post } from "@/payload-types";
import { RichText } from "@payloadcms/richtext-lexical/react";

// other libraries
import { cn } from "@/lib/utils";
import { formatDate, formatDateForTimeEl } from "@/lib/formatters";

// types
interface FooterProps {
  footerContent: Post["footerContent"];
  children: ReactNode;
}

interface Footer1Props {
  populatedAuthors: Post["populatedAuthors"];
}

interface Footer2Props {
  publishedAt: Post["publishedAt"];
}

export default function Footer({ footerContent, children }: FooterProps) {
  return (
    <footer className={styles["footer"]}>
      {footerContent && <RichText data={footerContent} disableIndent disableTextAlign className={cn(styles["footer__content"], "prose dark:prose-invert")} />}
      {children}
    </footer>
  );
}

export function Footer1({ populatedAuthors }: Footer1Props) {
  return <ul className={styles["footer__footer1"]}>{populatedAuthors?.map((author) => <li key={author.id}>{author.name}</li>)}</ul>;
}

export function Footer2({ publishedAt }: Footer2Props) {
  return (
    <time dateTime={formatDateForTimeEl(publishedAt)} className={styles["footer__footer2"]}>
      {formatDate(publishedAt)}
    </time>
  );
}
