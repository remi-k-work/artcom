// react
import { cache } from "react";

// payload and db access
import { getPayload } from "payload";
import config from "@payload-config";
import type { Course } from "@/payload-types";

// Gather all courses of a specific type, but only the enabled ones
export const allCoursesByType = cache(async (courseType: Course["type"]) => {
  const payload = await getPayload({ config });

  const { docs } = await payload.find({
    collection: "courses",
    pagination: false,
    sort: "-id",
    select: { slug: true, name: true, headerImage: true, intro: true },
    where: { and: [{ type: { equals: courseType } }, { enableDoc: { equals: true } }] },
  });

  return docs;
});

// Gather all of the information about the selected course, but only the enabled one
export const getCourseBySlug = cache(async (slug: string) => {
  const payload = await getPayload({ config });

  const { docs } = await payload.find({
    collection: "courses",
    limit: 1,
    pagination: false,
    where: { and: [{ slug: { equals: slug } }, { enableDoc: { equals: true } }] },
  });

  return docs;
});
