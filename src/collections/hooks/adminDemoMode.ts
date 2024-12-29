// payload and db access
import type { CollectionBeforeChangeHook, CollectionBeforeDeleteHook } from "payload";

// Prevent any modifications to the documents in the admin panel from being saved if the user is in demo mode
export const adminDemoModeBeforeChange: CollectionBeforeChangeHook = async ({ data, req: { user } }) => {
  if (user?.username === "demo") throw new Error("Changes cannot be saved in demo mode.");
  return data;
};

export const adminDemoModeBeforeDelete: CollectionBeforeDeleteHook = async ({ req: { user } }) => {
  if (user?.username === "demo") throw new Error("You cannot delete data in demo mode.");
};
