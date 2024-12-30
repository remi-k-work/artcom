// next
import Image from "next/image";

// assets
import logo from "@/assets/logo-artcom.webp";

export default function DemoMode() {
  return <Image src={logo} alt="ARTCOM" title="ARTCOM" />;
}
