// react
import { cache } from "react";

// next
import type { Metadata } from "next";
import { notFound } from "next/navigation";

// payload and db access
import { getPayload } from "payload";
import config from "@payload-config";

// components
import ExamView from "@/components/ExamView";

// types
interface PageProps {
  params: Promise<{ slug?: string }>;
}

const queryExamBySlug = cache(async ({ slug }: { slug: string }) => {
  const payload = await getPayload({ config });

  // Gather all of the information about the selected exam, but only the enabled one
  const result = await payload.find({
    collection: "exams",
    limit: 1,
    pagination: false,
    where: { and: [{ slug: { equals: slug } }, { enableDoc: { equals: true } }] },
  });

  if (result.docs.length === 0) notFound();
  return result.docs[0];
});

export async function generateMetadata({ params: paramsPromise }: PageProps): Promise<Metadata> {
  const { slug = "" } = await paramsPromise;
  const { name, intro } = await queryExamBySlug({ slug });

  return { title: `ArtCom ► ${name}`, description: intro };
}

export default async function Page({ params: paramsPromise }: PageProps) {
  const { slug = "" } = await paramsPromise;

  return <ExamView slug={slug} />;
}
