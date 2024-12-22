// next
import type { Metadata } from "next";
import { notFound } from "next/navigation";

// payload and db access
import { getPostBySlug } from "@/db/posts";

// components
import PostView from "@/components/PostView";

// types
interface PageProps {
  params: Promise<{ slug?: string }>;
}

export async function generateMetadata({ params: paramsPromise }: PageProps): Promise<Metadata> {
  const { slug = "" } = await paramsPromise;

  // Gather all of the information about the selected post, but only the enabled one
  const docs = await getPostBySlug(slug);

  if (docs.length === 0) notFound();
  const { title, intro } = docs[0];

  return { title: `ArtCom ► ${title}`, description: intro };
}

export default async function Page({ params: paramsPromise }: PageProps) {
  const { slug = "" } = await paramsPromise;

  return <PostView slug={slug} />;
}
