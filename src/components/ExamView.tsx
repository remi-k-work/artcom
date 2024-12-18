// next
import { notFound } from "next/navigation";

// payload and db access
import { getPayload } from "payload";
import config from "@payload-config";
import type { Media } from "@/payload-types";

// components
import Details, { DetailsHeader, DetailsContent1, DetailsContent2, DetailsFooter } from "@/components/exam/details";

// types
interface ExamViewProps {
  slug: string;
}

export default async function ExamView({ slug }: ExamViewProps) {
  const payload = await getPayload({ config });

  // Gather all of the information about the selected exam, but only the enabled one
  const result = await payload.find({
    collection: "exams",
    limit: 1,
    pagination: false,
    where: { and: [{ slug: { equals: slug } }, { enableDoc: { equals: true } }] },
  });

  if (result.docs.length === 0) notFound();
  const { name, contentImage1, contentImage2, contentColumn1, contentColumn2, footerImage1, footerImage2, footerContent } = result.docs[0];

  return (
    <Details>
      <DetailsHeader contentImage1={contentImage1 as Media} contentImage2={contentImage2 as Media}>
        {name}
      </DetailsHeader>
      <DetailsContent1 contentColumn1={contentColumn1} />
      <DetailsContent2 contentColumn2={contentColumn2} />
      <DetailsFooter footerImage1={footerImage1 as Media} footerImage2={footerImage2 as Media} footerContent={footerContent} />
    </Details>
  );
}
