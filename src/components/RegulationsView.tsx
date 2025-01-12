// next
import { notFound } from "next/navigation";

// payload and db access
import { getTrainingRegulations } from "@/db/trainingRegulations";
import type { Media } from "@/payload-types";

// components
import Regulations, { RegulationsHeader, RegulationsContent1, RegulationsContent2 } from "@/components/regulations";

export default async function RegulationsView() {
  // Gather all of the information about the training regulations
  const glob = await getTrainingRegulations();

  if (!glob) notFound();
  const { title, headerImage, contentColumn1, contentColumn2 } = glob;

  return (
    <Regulations>
      <RegulationsHeader headerImage={headerImage as Media}>{title}</RegulationsHeader>
      <RegulationsContent1 contentColumn1={contentColumn1} />
      <RegulationsContent2 contentColumn2={contentColumn2} />
    </Regulations>
  );
}
