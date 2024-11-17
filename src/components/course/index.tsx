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
interface CourseProps {
  detailsHref: string;
  children: ReactNode;
}

export default function Course({ detailsHref, children }: CourseProps) {
  return (
    <MotionLink href={detailsHref} className={styles["course"]} {...FADE_IN}>
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

export { Header as CourseHeader, Content as CourseContent };
