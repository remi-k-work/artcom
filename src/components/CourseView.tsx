// next
import { notFound } from "next/navigation";

// payload and db access
import { getCourseBySlug } from "@/db/courses";
import type { Media } from "@/payload-types";

// components
import Details, { DetailsHeader, DetailsContent1, DetailsContent2, DetailsFooter } from "@/components/course/details";

// types
interface CourseViewProps {
  slug: string;
}

export default async function CourseView({ slug }: CourseViewProps) {
  // Gather all of the information about the selected course, but only the enabled one
  const docs = await getCourseBySlug(slug);

  if (docs.length === 0) notFound();
  const { name, headerImage, contentColumn1, contentColumn2, footerContent } = docs[0];

  return (
    <Details>
      <DetailsHeader headerImage={headerImage as Media}>{name}</DetailsHeader>
      <DetailsContent1 contentColumn1={contentColumn1} />
      <DetailsContent2 contentColumn2={contentColumn2} />
      <DetailsFooter footerContent={footerContent} />
    </Details>
  );
}
