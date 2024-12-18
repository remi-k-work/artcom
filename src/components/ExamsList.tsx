// payload and db access
import { getPayload } from "payload";
import config from "@payload-config";
import type { Media } from "@/payload-types";

// components
import Exam, { ExamHeader, ExamContent } from "@/components/exam";

export default async function ExamsList() {
  const payload = await getPayload({ config });

  // Gather all exams, but only the enabled ones
  const { docs } = await payload.find({
    collection: "exams",
    pagination: false,
    sort: "-id",
    select: { slug: true, name: true, headerImage: true, intro: true },
    where: { enableDoc: { equals: true } },
  });

  return (
    <>
      {docs.map(({ id, slug, name, headerImage, intro }) => (
        <Exam key={id} detailsHref={`/exams/${slug}`}>
          <ExamHeader headerImage={headerImage as Media}>{name}</ExamHeader>
          <ExamContent>{intro}</ExamContent>
        </Exam>
      ))}
    </>
  );
}
