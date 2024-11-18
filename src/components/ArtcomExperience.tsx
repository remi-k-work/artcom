"use client";

// component css styles
import styles from "./ArtcomExperience.module.css";

// other libraries
import { cn } from "@/lib/utils";

// components
import { ENABLE_ANIM } from "@/components/AnimComps";

export default function ArtcomExperience() {
  return (
    <article className={cn(styles["artcom-experience"], ENABLE_ANIM && styles["artcom-experience--anim"])}>
      <h2>
        ARTCOM 1994-2024
        <br />
        <small className="text-text-2">skorzystaj z naszego doświadczenia</small>
      </h2>
    </article>
  );
}
