// react
import { cache } from "react";

// payload and db access
import { getPayload } from "payload";
import config from "@payload-config";

// Gather all posts, but only the enabled ones
export const allPosts = cache(async () => {
  const payload = await getPayload({ config });

  const { docs } = await payload.find({
    collection: "posts",
    pagination: false,
    sort: "-id",
    select: { slug: true, publishedAt: true, title: true, headerImage: true, intro: true },
    where: { enableDoc: { equals: true } },
  });

  return docs;
});

// Gather all of the information about the selected post, but only the enabled one
export const getPostBySlug = cache(async (slug: string) => {
  const payload = await getPayload({ config });

  const { docs } = await payload.find({
    collection: "posts",
    limit: 1,
    pagination: false,
    where: { and: [{ slug: { equals: slug } }, { enableDoc: { equals: true } }] },
  });

  return docs;
});

// Gather all of the information about the latest post, but only the enabled one
export const getLatestPost = cache(async () => {
  const payload = await getPayload({ config });

  const { docs } = await payload.find({
    collection: "posts",
    limit: 1,
    pagination: false,
    sort: "-publishedAt",
    select: { slug: true, publishedAt: true, title: true, headerImage: true, intro: true },
    where: { enableDoc: { equals: true } },
  });

  return docs;
});
