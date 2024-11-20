"use client";

// component css styles
import styles from "./CheckOurBanners.module.css";

// components
import { BANNER_LIST_VAR, MotionArticle } from "@/components/AnimComps";
import CheckOurItCourses from "@/components/CheckOurItCourses";
import AkademiaProject from "@/components/AkademiaProject";
import CheckOurReferences from "@/components/CheckOurReferences";

export default function CheckOurBanners() {
  return (
    <MotionArticle className={styles["check-our-banners"]} initial="hidden" whileInView="visible" variants={BANNER_LIST_VAR}>
      <CheckOurItCourses />
      <AkademiaProject />
      <CheckOurReferences />
    </MotionArticle>
  );
}
