// react
import { cache } from "react";

// payload and db access
import { getPayload } from "payload";
import config from "@payload-config";

// Gather all of the information about the training regulations
export const getTrainingRegulations = cache(async () => {
  const payload = await getPayload({ config });

  return await payload.findGlobal({ slug: "training-regulations" });
});
