// next
import { notFound } from "next/navigation";

// payload and db access
import { getExamBySlug } from "@/db/exams";
import type { Media } from "@/payload-types";

// components
import Details, { DetailsHeader, DetailsContent1, DetailsContent2, DetailsFooter } from "@/components/exam/details";

// types
interface ExamViewProps {
  slug: string;
}

export default async function ExamView({ slug }: ExamViewProps) {
  // Gather all of the information about the selected exam, but only the enabled one
  const docs = await getExamBySlug(slug);

  if (docs.length === 0) notFound();
  const { name, contentImage1, contentImage2, contentColumn1, contentColumn2, footerImage1, footerImage2, footerContent } = docs[0];

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
