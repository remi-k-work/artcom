// component css styles
import styles from "./Content.module.css";

// react
import { ReactNode } from "react";

// other libraries
import { cn } from "@/lib/utils";

// types
interface ContentProps {
  children: ReactNode;
}

export function Content1({ children }: ContentProps) {
  return <article className={cn(styles["content1"], "prose")}>{children}</article>;
}

export function Content2({ children }: ContentProps) {
  return <article className={cn(styles["content2"], "prose")}>{children}</article>;
}
