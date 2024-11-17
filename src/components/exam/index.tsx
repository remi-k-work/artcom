"use client";

// component css styles
import styles from "./index.module.css";

// react
import { ReactNode } from "react";

// components
import { FADE_IN, MotionLink } from "@/components/AnimComps";
import { Button } from "@/components/ui/custom/button";
import Header from "./Header";
import Content from "./Content";

// assets
import { InformationCircleIcon } from "@heroicons/react/24/outline";

// types
interface ExamProps {
  detailsHref: string;
  children: ReactNode;
}

export default function Exam({ detailsHref, children }: ExamProps) {
  return (
    <MotionLink href={detailsHref} className={styles["exam"]} {...FADE_IN}>
      {children}
      <footer>
        <Button type="button">
          <InformationCircleIcon width={24} height={24} />
          Czytaj więcej
        </Button>
      </footer>
    </MotionLink>
  );
}

export { Header as ExamHeader, Content as ExamContent };
