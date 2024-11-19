"use client";

// component css styles
import styles from "./CheckOurReferences.module.css";

// components
import { FADE_IN, MotionLink } from "@/components/AnimComps";

// assets
import { InformationCircleIcon } from "@heroicons/react/24/outline";

export default function CheckOurReferences() {
  return (
    <MotionLink href="#references" className={styles["check-our-references"]} {...FADE_IN}>
      <h2>
        <InformationCircleIcon width={36} height={36} className="flex-none" />
        <span className="flex-1">Zobacz nasze Referencje</span>
      </h2>
    </MotionLink>
  );
}
