// payload and db access
import type { CollectionConfig } from "payload";

// fields
import text from "./fields/text";

import { adminDemoModeBeforeChange, adminDemoModeBeforeDelete } from "./hooks/adminDemoMode";

// access control functions
import { isAdmin } from "@/access/isAdmin";

export const PostCategories: CollectionConfig<"post-categories"> = {
  slug: "post-categories",

  labels: { singular: { en: "Post Category", pl: "Kategoria Postu" }, plural: { en: "Post Categories", pl: "Kategorie Postów" } },
  admin: { defaultColumns: ["name"], useAsTitle: "name", hideAPIURL: true, listSearchableFields: ["name"] },

  access: {
    // Only admins can create, update, and delete post categories (everyone can read)
    create: isAdmin,
    read: () => true,
    update: isAdmin,
    delete: isAdmin,
  },

  fields: [
    {
      ...text("name", 4, undefined, "Name", "Nazwa", "Technology, Lifestyle, Business, Entertainment", "Technologia, Styl, Biznes, Rozrywka"),

      index: true,
      unique: true,
    },
  ],

  hooks: {
    // Prevent any modifications to the documents in the admin panel from being saved if the user is in demo mode
    beforeChange: [adminDemoModeBeforeChange],
    beforeDelete: [adminDemoModeBeforeDelete],
  },
};
