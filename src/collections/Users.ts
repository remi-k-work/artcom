import type { CollectionConfig } from "payload";

export const Users: CollectionConfig = {
  slug: "users",

  labels: {
    singular: {
      en: "User",
      pl: "Użytkownik",
    },
    plural: {
      en: "Users",
      pl: "Użytkownicy",
    },
  },

  admin: {
    useAsTitle: "email",
    hideAPIURL: true,
  },

  auth: true,

  fields: [
    // Email added by default
    // Add more fields as needed
  ],
};
