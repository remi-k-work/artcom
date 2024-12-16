// payload and db access
import { getPayload } from "payload";
import config from "@payload-config";
import type { Course as CourseT, Media } from "@/payload-types";

// components
import Course, { CourseHeader, CourseContent } from "@/components/course";

// types
interface CoursesListProps {
  courseType: CourseT["type"];
}

export default async function CoursesList({ courseType }: CoursesListProps) {
  const payload = await getPayload({ config });

  // Gather all courses of a specific type, but only the enabled ones
  const { docs } = await payload.find({
    collection: "courses",
    pagination: false,
    sort: "-id",
    select: { slug: true, name: true, headerImage: true, intro: true },
    where: { and: [{ type: { equals: courseType } }, { enableDoc: { equals: true } }] },
  });

  return (
    <>
      {docs.map(({ id, slug, name, headerImage, intro }) => (
        <Course key={id} detailsHref={`/courses/${slug}`}>
          <CourseHeader headerImage={headerImage as Media}>{name}</CourseHeader>
          <CourseContent>{intro}</CourseContent>
        </Course>
      ))}
    </>
  );
}
