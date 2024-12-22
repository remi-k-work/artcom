// components
import ContentModal from "@/components/ContentModal";
import PostView from "@/components/PostView";

// types
interface PageProps {
  params: Promise<{ slug?: string }>;
}

export default async function Page({ params: paramsPromise }: PageProps) {
  const { slug = "" } = await paramsPromise;

  return (
    <ContentModal>
      <PostView slug={slug} />
    </ContentModal>
  );
}
