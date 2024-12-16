// next
import { notFound } from "next/navigation";

// payload and db access
import { getPayload } from "payload";
import config from "@payload-config";
import type { Media } from "@/payload-types";

// components
import Details, { DetailsHeader, DetailsContent1, DetailsContent2, DetailsFooter } from "@/components/course/details";

// types
interface CourseViewProps {
  slug: string;
}

export default async function CourseView({ slug }: CourseViewProps) {
  const payload = await getPayload({ config });

  // Gather all of the information about the selected course, but only the enabled one
  const result = await payload.find({
    collection: "courses",
    limit: 1,
    pagination: false,
    where: { and: [{ slug: { equals: slug } }, { enableDoc: { equals: true } }] },
  });

  if (result.docs.length === 0) notFound();
  const { name, headerImage, contentColumn1, contentColumn2, footerContent } = result.docs[0];

  return (
    <Details>
      <DetailsHeader headerImage={headerImage as Media}>{name}</DetailsHeader>
      <DetailsContent1 contentColumn1={contentColumn1} />
      <DetailsContent2 contentColumn2={contentColumn2} />
      <DetailsFooter footerContent={footerContent} />
    </Details>
  );
}
