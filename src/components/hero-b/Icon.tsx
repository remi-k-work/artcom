"use client";

// component css styles
import styles from "./Icon.module.css";

// react
import { ReactNode } from "react";

// other libraries
import { motion } from "motion/react";

// components
import RenderModel from "@/components/RenderModel";

// types
interface IconProps {
  icon: ReactNode;
  model?: ReactNode;
}

export default function Icon({ icon, model }: IconProps) {
  return (
    <motion.section initial={{ scale: 0 }} animate={{ scale: 1 }} className={styles["icon"]}>
      {icon}
      {/* <RenderModel>{model}</RenderModel> */}
    </motion.section>
  );
}
