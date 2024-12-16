// components
import ContentModal from "@/components/ContentModal";
import CourseView from "@/components/CourseView";

// types
interface PageProps {
  params: Promise<{ slug?: string }>;
}

export default async function Page({ params: paramsPromise }: PageProps) {
  const { slug = "" } = await paramsPromise;

  return (
    <ContentModal>
      <CourseView slug={slug} />
    </ContentModal>
  );
}
