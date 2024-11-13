// next
import type { Metadata } from "next";

// components
import B from "@/components/blog/content/B";

export const metadata: Metadata = {
  title: "ArtCom ► Jestem ekspertem, czyli jak blefować, że znam się na komputerach?",
};

export default function Page() {
  return <B />;
}
