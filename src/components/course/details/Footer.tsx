// component css styles
import styles from "./Footer.module.css";

// react
import { ReactNode } from "react";

// other libraries
import { cn } from "@/lib/utils";

// types
interface FooterProps {
  children: ReactNode;
}

export default function Footer({ children }: FooterProps) {
  return <footer className={cn(styles["footer"], "prose")}>{children}</footer>;
}
