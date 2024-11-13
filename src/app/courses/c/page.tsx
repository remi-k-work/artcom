// next
import type { Metadata } from "next";

// components
import C from "@/components/course/content/C";

export const metadata: Metadata = {
  title: "ArtCom ► Projektowanie w AutoCAD - kurs podstawowy",
};

export default function Page() {
  return <C />;
}
