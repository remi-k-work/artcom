// payload and db access
import { allCoursesByType } from "@/db/courses";
import type { Course as CourseT, Media } from "@/payload-types";

// components
import Course, { CourseHeader, CourseContent } from "@/components/course";

// types
interface CoursesListProps {
  courseType: CourseT["type"];
}

export default async function CoursesList({ courseType }: CoursesListProps) {
  // Gather all courses of a specific type, but only the enabled ones
  const docs = await allCoursesByType(courseType);

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
