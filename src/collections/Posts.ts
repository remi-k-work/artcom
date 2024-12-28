// payload and db access
import type { CollectionConfig } from "payload";

// fields
import slug from "./fields/slug";
import enableDoc from "./fields/enableDoc";
import text from "./fields/text";
import textArea from "./fields/textArea";

import { populateAuthors } from "./hooks/populateAuthors";

// access control functions
import { isAdminOrBlogger } from "@/access/isAdminOrBlogger";

export const Posts: CollectionConfig<"posts"> = {
  slug: "posts",

  labels: { singular: { en: "Post", pl: "Post" }, plural: { en: "Posts", pl: "Posty" } },
  admin: { defaultColumns: ["title", "authors", "publishedAt"], useAsTitle: "title", hideAPIURL: true },
  defaultPopulate: { slug: true, title: true, categories: true },

  access: {
    // Only admins and bloggers can create, update, and delete posts (everyone can read)
    create: isAdminOrBlogger,
    update: isAdminOrBlogger,
    delete: isAdminOrBlogger,
  },

  fields: [
    { ...slug("title") },
    { ...enableDoc() },

    {
      name: "authors",
      type: "relationship",
      required: true,
      hasMany: true,
      relationTo: "users",

      label: { en: "Authors", pl: "Autorzy" },
      admin: { position: "sidebar" },
    },

    {
      name: "publishedAt",
      type: "date",
      required: true,

      label: { en: "Published At", pl: "Opublikowano" },
      admin: { position: "sidebar", date: { pickerAppearance: "dayOnly", displayFormat: "d MMM yyy" } },
    },

    {
      name: "relatedPosts",
      type: "relationship",
      hasMany: true,
      relationTo: "posts",

      // Users are allowed to add related posts only when updating an existing post (a validation error happens while creating a new post)
      access: { create: () => false },

      label: { en: "Related Posts", pl: "Powiązane Posty" },
      admin: { position: "sidebar" },

      filterOptions: ({ id }) => ({ id: { not_in: [id] } }),
    },

    {
      name: "categories",
      type: "relationship",
      hasMany: true,
      relationTo: "post-categories",

      label: { en: "Post Categories", pl: "Kategorie Postu" },
      admin: { position: "sidebar" },
    },

    {
      type: "tabs",
      tabs: [
        {
          label: {
            en: "Header",
            pl: "Nagłówek",
          },

          fields: [
            {
              ...text(
                "title",
                18,
                128,
                "Post Title",
                "Tytuł Postu",
                "I am an expert, or how to bluff that I know computers?",
                "Jestem ekspertem, czyli jak blefować, że znam się na komputerach?",
              ),
            },

            {
              name: "headerImage",
              type: "upload",
              relationTo: "media",
              required: true,

              label: { en: "Header Image", pl: "Obraz Nagłówka" },
            },

            {
              ...textArea(
                "intro",
                368,
                undefined,
                "Introduction",
                "Wprowadzenie",
                'Temat wydaje się trochę dziwny? Dzisiaj już przecież wszyscy "znają się" na komputerach 😀. No, może nie wszyscy, ale kto się przyzna? Dlatego nawet jeśli się znamy, to zawsze w towarzystwie znajdzie się ktoś, kto zna się lepiej. Wtedy dobrze jest zablefować, tak aby WSZYSCY zobaczyli że jesteśmy komputerowym ekspertem.',
                'The topic seems a bit strange? After all, everyone "knows" about computers these days 😀. Well, maybe not everyone, but who would admit it? That\'s why even if we know each other, there is always someone in the company who knows better. Then it is good to bluff, so that EVERYONE sees that we are a computer expert.',
              ),
            },
          ],
        },

        {
          label: {
            en: "Content",
            pl: "Treść",
          },

          fields: [
            {
              type: "row",
              fields: [
                {
                  name: "contentColumn1",
                  type: "richText",
                  required: true,

                  label: { en: "Column 1 Content", pl: "Treść Kolumny 1" },
                  admin: { width: "50%" },
                },
                {
                  name: "contentColumn2",
                  type: "richText",
                  required: true,

                  label: { en: "Column 2 Content", pl: "Treść Kolumny 2" },
                  admin: { width: "50%" },
                },
              ],
            },
          ],
        },

        {
          label: {
            en: "Footer",
            pl: "Stopka",
          },

          fields: [
            {
              name: "footerContent",
              type: "richText",

              label: { en: "Footer Content", pl: "Treść Stopki" },
            },
          ],
        },
      ],
    },

    // This field is only used to populate the user data via the `populateAuthors` hook
    // This is because the `user` collection has access control locked to protect user privacy
    // GraphQL will also not return mutated user data that differs from the underlying schema
    {
      name: "populatedAuthors",
      type: "array",
      access: {
        update: () => false,
      },
      admin: {
        disabled: true,
        readOnly: true,
      },
      fields: [
        {
          name: "id",
          type: "text",
        },
        {
          name: "name",
          type: "text",
        },
      ],
    },
  ],

  hooks: { afterRead: [populateAuthors] },
};
