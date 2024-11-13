// component css styles
import styles from "./index.module.css";

// components
import Address from "./Address";
import Shortcut from "./Shortcut";
import Courses from "./Courses";
import Contact from "./Contact";

export default function Footer() {
  return (
    <footer className={styles["footer"]}>
      <Address />
      <Shortcut />
      <Courses />
      <Contact />
    </footer>
  );
}
