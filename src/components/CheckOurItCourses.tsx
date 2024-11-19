"use client";

// component css styles
import styles from "./CheckOurItCourses.module.css";

// components
import { FADE_IN, MotionLink } from "@/components/AnimComps";

// assets
import { InformationCircleIcon } from "@heroicons/react/24/outline";

export default function CheckOurItCourses() {
  return (
    <MotionLink href="/courses#courses1" className={styles["check-our-it-courses"]} {...FADE_IN}>
      <h2>
        <InformationCircleIcon width={36} height={36} className="flex-none" />
        <span className="flex-1">Sprawdź nasze kursy IT</span>
      </h2>
    </MotionLink>
  );
}
