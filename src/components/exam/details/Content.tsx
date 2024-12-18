// component css styles
import styles from "./Content.module.css";

// payload and db access
import type { Exam } from "@/payload-types";
import { RichText } from "@payloadcms/richtext-lexical/react";

// other libraries
import { cn } from "@/lib/utils";

// types
interface Content1Props {
  contentColumn1: Exam["contentColumn1"];
}

interface Content2Props {
  contentColumn2: Exam["contentColumn2"];
}

export function Content1({ contentColumn1 }: Content1Props) {
  return <RichText data={contentColumn1} disableIndent disableTextAlign className={cn(styles["content1"], "prose dark:prose-invert")} />;
}

export function Content2({ contentColumn2 }: Content2Props) {
  return <RichText data={contentColumn2} disableIndent disableTextAlign className={cn(styles["content2"], "prose dark:prose-invert")} />;
}
