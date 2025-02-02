// component css styles
import styles from "./Icon.module.css";

// react
import { ReactNode } from "react";

// types
interface IconProps {
  icon: ReactNode;
  model?: ReactNode;
}

export default function Icon({ icon, model }: IconProps) {
  return <section className={styles["icon"]}>{icon}</section>;
}
