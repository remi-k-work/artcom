"use client";

// component css styles
import styles from "./CoursesMatchingYou.module.css";

// other libraries
import { cn } from "@/lib/utils";
import { useUserSettingsStore } from "@/stores/userSettingsProvider";

export default function CoursesMatchingYou() {
  // Are the animations enabled or disabled by the user?
  const enableAnim = useUserSettingsStore((state) => state.enableAnim);

  return (
    <article className={cn(styles["courses-matching-you"], enableAnim && styles["courses-matching-you--anim"])}>
      <h2>
        Szkolenia idealnie dopasowane
        <br />
        <small className="text-text-2">do Twoich planów!</small>
      </h2>
    </article>
  );
}
