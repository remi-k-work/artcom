// components
import ContentModal from "@/components/ContentModal";
import ExamView from "@/components/ExamView";

// types
interface PageProps {
  params: Promise<{ slug?: string }>;
}

export default async function Page({ params: paramsPromise }: PageProps) {
  const { slug = "" } = await paramsPromise;

  return (
    <ContentModal>
      <ExamView slug={slug} />
    </ContentModal>
  );
}
