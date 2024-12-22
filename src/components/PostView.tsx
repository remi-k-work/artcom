// next
import { notFound } from "next/navigation";

// payload and db access
import { getPostBySlug } from "@/db/posts";
import type { Media } from "@/payload-types";

// components
import Details, { DetailsHeader, DetailsContent1, DetailsContent2, DetailsFooter, DetailsFooter1, DetailsFooter2 } from "@/components/blog/details";

// types
interface PostViewProps {
  slug: string;
}

export default async function PostView({ slug }: PostViewProps) {
  // Gather all of the information about the selected post, but only the enabled one
  const docs = await getPostBySlug(slug);

  if (docs.length === 0) notFound();
  const { title, headerImage, contentColumn1, contentColumn2, footerContent, publishedAt } = docs[0];

  return (
    <Details>
      <DetailsHeader headerImage={headerImage as Media}>{title}</DetailsHeader>
      <DetailsContent1 contentColumn1={contentColumn1} />
      <DetailsContent2 contentColumn2={contentColumn2} />
      <DetailsFooter>
        <DetailsFooter1 footerContent={footerContent} />
        <DetailsFooter2 publishedAt={publishedAt} />
      </DetailsFooter>
    </Details>
  );
}
