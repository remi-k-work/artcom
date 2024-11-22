"use client";

// component css styles
import styles from "./ArtcomExperience.module.css";

// other libraries
import { cn } from "@/lib/utils";
import { useUserSettingsStore } from "@/stores/userSettingsProvider";

export default function ArtcomExperience() {
  // Are the animations enabled or disabled by the user?
  const enableAnim = useUserSettingsStore((state) => state.enableAnim);

  return (
    <article className={cn(styles["artcom-experience"], enableAnim && styles["artcom-experience--anim"])}>
      <h2>
        ARTCOM 1994-2024
        <br />
        <small className="text-text-2">skorzystaj z naszego doświadczenia</small>
      </h2>
    </article>
  );
}
