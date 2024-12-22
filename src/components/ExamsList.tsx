// payload and db access
import { allExams } from "@/db/exams";
import type { Media } from "@/payload-types";

// components
import Exam, { ExamHeader, ExamContent } from "@/components/exam";

export default async function ExamsList() {
  // Gather all exams, but only the enabled ones
  const docs = await allExams();

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
