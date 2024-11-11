// component css styles
import styles from "./Theme.module.css";

// assets
import { MoonIcon } from "@heroicons/react/24/solid";

export default function Theme() {
  return (
    <section className={styles["theme"]}>
      <MoonIcon width={24} height={24} className="size-9 flex-none lg:size-6" />
    </section>
  );
}
