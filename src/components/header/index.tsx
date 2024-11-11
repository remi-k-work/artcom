// component css styles
import styles from "./index.module.css";

// components
import Logo from "./Logo";
import NavBar from "./NavBar";
import Theme from "./Theme";

export default function Header() {
  return (
    <header className={styles["header"]}>
      <Logo />
      <NavBar />
      <Theme />
    </header>
  );
}
