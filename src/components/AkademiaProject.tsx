"use client";

// component css styles
import styles from "./AkademiaProject.module.css";

// components
import { BANNER_ITEM_VAR, MotionLink } from "@/components/AnimComps";

// assets
import { InformationCircleIcon } from "@heroicons/react/24/outline";

export default function AkademiaProject() {
  return (
    <MotionLink href="https://akademia.rze.pl" target="_blank" className={styles["akademia-project"]} variants={BANNER_ITEM_VAR}>
      <h2>
        <InformationCircleIcon width={36} height={36} className="flex-none" />
        <span className="flex-1">Dowiedz się więcej</span>
      </h2>
    </MotionLink>
  );
}
