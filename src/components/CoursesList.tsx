// payload and db access
import { getPayload } from "payload";
import config from "@payload-config";
import { Course as CourseT, Media } from "@/payload-types";

// components
import Course, { CourseHeader, CourseContent } from "@/components/course";

// types
interface CoursesListProps {
  courseType: CourseT["type"];
}

export default async function CoursesList({ courseType }: CoursesListProps) {
  const payload = await getPayload({ config });

  // Gather all courses of a specific type
  const { docs } = await payload.find({
    collection: "courses",
    pagination: false,
    sort: "-id",
    select: { headerImg: true, name: true, intro: true },
    where: { type: { equals: courseType } },
  });

  return (
    <>
      {docs.map(({ id, headerImg, name, intro }) => (
        <Course key={id} detailsHref="/courses/a">
          <CourseHeader headerImg={headerImg as Media}>{name}</CourseHeader>
          <CourseContent>{intro}</CourseContent>
        </Course>
      ))}
    </>
  );
}
