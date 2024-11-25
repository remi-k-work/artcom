// next
import type { Metadata } from "next";

// components
import A from "@/components/exam/content/A";

export const metadata: Metadata = {
  title: "ArtCom ► Europejski Certyfikat Umiejętności Komputerowych (ECDL)",
};

export default function Page() {
  return <A />;
}
