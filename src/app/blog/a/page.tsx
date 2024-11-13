// next
import type { Metadata } from "next";

// components
import A from "@/components/blog/content/A";

export const metadata: Metadata = {
  title: "ArtCom ► Lepiej zamówić 2 średnie pizze czy 1 dużą?",
};

export default function Page() {
  return <A />;
}
