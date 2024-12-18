import type { CollectionConfig } from "payload";

import text from "./fields/text";

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
    defaultColumns: ["username", "name", "email", "role"],
    useAsTitle: "username",
    hideAPIURL: true,
  },

  auth: {
    loginWithUsername: {
      allowEmailLogin: true,
      requireEmail: false,
    },
  },

  timestamps: true,

  fields: [
    {
      ...text("name", undefined, undefined, "Name", "Nazwa", "John Smith", "Jan Kowalski"),
    },

    {
      // Will be stored in the jwt
      saveToJWT: true,

      name: "role",
      type: "select",
      required: true,

      label: {
        en: "Role",
        pl: "Rola",
      },

      options: [
        { label: { en: "Administrator", pl: "Administrator" }, value: "admin" },
        { label: { en: "User", pl: "Użytkownik" }, value: "user" },
      ],

      defaultValue: "user",
    },
  ],
};
