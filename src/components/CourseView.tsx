// next
import { notFound } from "next/navigation";

// payload and db access
import { getPayload } from "payload";
import config from "@payload-config";
import { Media } from "@/payload-types";
import { RichText } from "@payloadcms/richtext-lexical/react";

// components
import Details from "@/components/course/details";

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
      <Details.Header headerImage={headerImage as Media}>{name}</Details.Header>
      <Details.Content1>
        <RichText data={contentColumn1} disableIndent disableTextAlign />
      </Details.Content1>
      <Details.Content2>
        <RichText data={contentColumn2} disableIndent disableTextAlign />
      </Details.Content2>
      <Details.Footer>
        <RichText data={footerContent} disableIndent disableTextAlign />
      </Details.Footer>
    </Details>
  );
}
