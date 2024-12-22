// payload and db access
import { allPosts } from "@/db/posts";
import type { Media } from "@/payload-types";

// components
import Blog, { BlogHeader, BlogContent } from "@/components/blog";

export default async function PostsList() {
  // Gather all posts, but only the enabled ones
  const docs = await allPosts();

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
