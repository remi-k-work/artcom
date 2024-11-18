// component css styles
import styles from "./Logo.module.css";

// next
import Image from "next/image";

// components
import TransitionLink from "@/components/TransitionLink";

// assets
import logo from "@/assets/logo-artcom.webp";

export default function Logo() {
  return (
    <TransitionLink href="/" className={styles["logo"]}>
      <Image src={logo} alt="ARTCOM" title="ARTCOM" />
    </TransitionLink>
  );
}
