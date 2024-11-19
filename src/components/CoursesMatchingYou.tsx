"use client";

// component css styles
import styles from "./CoursesMatchingYou.module.css";

// other libraries
import { cn } from "@/lib/utils";

// components
import { ENABLE_ANIM } from "@/components/AnimComps";

export default function CoursesMatchingYou() {
  return (
    <article className={cn(styles["courses-matching-you"], ENABLE_ANIM && styles["courses-matching-you--anim"])}>
      <h2>
        Szkolenia idealnie dopasowane
        <br />
        <small className="text-text-2">do Twoich planów!</small>
      </h2>
    </article>
  );
}
