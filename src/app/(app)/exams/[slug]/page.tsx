// next
import type { Metadata } from "next";
import { notFound } from "next/navigation";

// payload and db access
import { getExamBySlug } from "@/db/exams";

// components
import ExamView from "@/components/ExamView";

// types
interface PageProps {
  params: Promise<{ slug?: string }>;
}

export async function generateMetadata({ params: paramsPromise }: PageProps): Promise<Metadata> {
  const { slug = "" } = await paramsPromise;

  // Gather all of the information about the selected exam, but only the enabled one
  const docs = await getExamBySlug(slug);

  if (docs.length === 0) notFound();
  const { name, intro } = docs[0];

  return { title: `ArtCom ► ${name}`, description: intro };
}

export default async function Page({ params: paramsPromise }: PageProps) {
  const { slug = "" } = await paramsPromise;

  return <ExamView slug={slug} />;
}
