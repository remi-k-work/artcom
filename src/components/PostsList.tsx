// payload and db access
import { getPayload } from "payload";
import config from "@payload-config";
import type { Media } from "@/payload-types";

// components
import Blog, { BlogHeader, BlogContent } from "@/components/blog";

export default async function PostsList() {
  const payload = await getPayload({ config });

  // Gather all posts, but only the enabled ones
  const { docs } = await payload.find({
    collection: "posts",
    pagination: false,
    sort: "-id",
    select: { slug: true, publishedAt: true, title: true, headerImage: true, intro: true },
    where: { enableDoc: { equals: true } },
  });

  return (
    <>
      {docs.map(({ id, slug, publishedAt, title, headerImage, intro }) => (
        <Blog key={id} detailsHref={`/blog/${slug}`} blogDate={publishedAt}>
          <BlogHeader>{title}</BlogHeader>
          <BlogContent contentImage={headerImage as Media}>{intro}</BlogContent>
        </Blog>
      ))}
    </>
  );
}
