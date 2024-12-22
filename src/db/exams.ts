// react
import { cache } from "react";

// payload and db access
import { getPayload } from "payload";
import config from "@payload-config";

// Gather all exams, but only the enabled ones
export const allExams = cache(async () => {
  const payload = await getPayload({ config });

  const { docs } = await payload.find({
    collection: "exams",
    pagination: false,
    sort: "-id",
    select: { slug: true, name: true, headerImage: true, intro: true },
    where: { enableDoc: { equals: true } },
  });

  return docs;
});

// Gather all of the information about the selected exam, but only the enabled one
export const getExamBySlug = cache(async (slug: string) => {
  const payload = await getPayload({ config });

  const { docs } = await payload.find({
    collection: "exams",
    limit: 1,
    pagination: false,
    where: { and: [{ slug: { equals: slug } }, { enableDoc: { equals: true } }] },
  });

  return docs;
});
