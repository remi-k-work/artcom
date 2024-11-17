// component css styles
import styles from "./Icon.module.css";

// react
import { ReactNode } from "react";

// components
import RenderModel from "@/components/RenderModel";

// types
interface IconProps {
  icon: ReactNode;
  model?: ReactNode;
}

export default function Icon({ icon, model }: IconProps) {
  return (
    <section className={styles["icon"]}>
      {icon}
      {/* <RenderModel>{model}</RenderModel> */}
    </section>
  );
}
