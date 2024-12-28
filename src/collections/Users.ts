// payload and db access
import type { CollectionConfig } from "payload";

// fields
import text from "./fields/text";

// access control functions
import { isAdmin, isAdminFieldLevel } from "@/access/isAdmin";
import { isAdminOrSelf } from "@/access/isAdminOrSelf";

export const Users: CollectionConfig<"users"> = {
  slug: "users",

  labels: { singular: { en: "User", pl: "Użytkownik" }, plural: { en: "Users", pl: "Użytkownicy" } },
  admin: { defaultColumns: ["username", "name", "email", "role"], useAsTitle: "username", hideAPIURL: true },

  access: {
    // Only admins can create users
    create: isAdmin,

    // Admins can read all, but any other logged-in user can only read themselves
    read: isAdminOrSelf,

    // Admins can update all, but any other logged-in user can only update themselves
    update: isAdminOrSelf,

    // Only admins can delete users
    delete: isAdmin,
  },

  auth: {
    loginWithUsername: { allowEmailLogin: true, requireEmail: true },

    // This property controls how deeply "populated" relationship docs are that are stored in the req.user
    // It should be kept as low as possible, which keeps performance fast
    depth: 0,
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
        { label: { en: "Blogger", pl: "Bloger" }, value: "blogger" },
      ],

      defaultValue: "user",

      access: {
        // Only admins can create or update a value for this field
        create: isAdminFieldLevel,
        update: isAdminFieldLevel,
      },
    },
  ],
};
