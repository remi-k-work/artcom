import type { CollectionConfig } from "payload";

import text from "./fields/text";

export const PostCategories: CollectionConfig = {
  slug: "post-categories",

  labels: {
    singular: {
      en: "Post Category",
      pl: "Kategoria Postu",
    },
    plural: {
      en: "Post Categories",
      pl: "Kategorie Postów",
    },
  },

  admin: {
    defaultColumns: ["name"],
    useAsTitle: "name",
    hideAPIURL: true,
  },

  fields: [
    {
      ...text("name", undefined, undefined, "Name", "Nazwa", "Technology, Lifestyle, Business, Entertainment", "Technologia, Styl, Biznes, Rozrywka"),

      index: true,
      unique: true,
    },
  ],
};
