// next
import type { Metadata } from "next";

// components
import RegulationsView from "@/components/RegulationsView";

export const metadata: Metadata = {
  title: "ArtCom ► Regulamin Usług Szkoleniowych",
};

export default function Page() {
  return <RegulationsView />;
}
