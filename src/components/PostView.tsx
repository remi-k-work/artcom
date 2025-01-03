// next
import { notFound } from "next/navigation";

// payload and db access
import { getPostBySlug } from "@/db/posts";
import type { Media, Post, PostCategory } from "@/payload-types";

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
  const { relatedPosts, categories, title, headerImage, contentColumn1, contentColumn2, footerContent, populatedAuthors, publishedAt } = docs[0];

  return (
    <Details relatedPosts={relatedPosts as Post[]} categories={categories as PostCategory[]}>
      <DetailsHeader headerImage={headerImage as Media}>{title}</DetailsHeader>
      <DetailsContent1 contentColumn1={contentColumn1} />
      <DetailsContent2 contentColumn2={contentColumn2} />
      <DetailsFooter footerContent={footerContent}>
        <DetailsFooter1 populatedAuthors={populatedAuthors} />
        <DetailsFooter2 publishedAt={publishedAt} />
      </DetailsFooter>
    </Details>
  );
}
