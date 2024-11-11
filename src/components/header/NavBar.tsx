"use client";

// component css styles
import styles from "./NavBar.module.css";

// components
import Menu from "./Menu";

export default function NavBar() {
  return (
    <section className={styles["nav-bar"]}>
      <Menu />
    </section>
  );
}
