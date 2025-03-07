"use client";

// component css styles
import styles from "./index.module.css";

// react
import { ReactNode } from "react";

// payload and db access
import type { Post } from "@/payload-types";

// other libraries
import { formatDate, formatDateForTimeEl } from "@/lib/formatters";

// components
import { FADE_IN, MotionLink } from "@/components/AnimComps";
import { Button } from "@/components/ui/custom/button";
import Header from "./Header";
import Content from "./Content";

// assets
import { InformationCircleIcon } from "@heroicons/react/24/outline";

// types
interface BlogProps {
  detailsHref: string;
  publishedAt: Post["publishedAt"];
  children: ReactNode;
}

export default function Blog({ detailsHref, publishedAt, children }: BlogProps) {
  return (
    <MotionLink href={detailsHref} className={styles["blog"]} {...FADE_IN}>
      {children}
      <footer>
        <section className={styles["footer__footer1"]}>
          <Button type="button">
            <InformationCircleIcon width={24} height={24} />
            Czytaj więcej
          </Button>
        </section>
        <time dateTime={formatDateForTimeEl(publishedAt)} className={styles["footer__footer2"]}>
          {formatDate(publishedAt)}
        </time>
      </footer>
    </MotionLink>
  );
}

export { Header as BlogHeader, Content as BlogContent };
