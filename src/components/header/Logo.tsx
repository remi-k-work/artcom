// component css styles
import styles from "./Logo.module.css";

// next
import Link from "next/link";
import Image from "next/image";

// assets
import logo from "@/assets/logo-artcom.webp";

export default function Logo() {
  return (
    <Link href="/" className={styles["logo"]}>
      <Image src={logo} alt="ARTCOM" title="ARTCOM" />
    </Link>
  );
}
