// payload and db access
import type { CollectionConfig } from "payload";

// fields
import slug from "./fields/slug";
import enableDoc from "./fields/enableDoc";
import text from "./fields/text";
import textArea from "./fields/textArea";

import { adminDemoModeBeforeChange, adminDemoModeBeforeDelete } from "./hooks/adminDemoMode";

// access control functions
import { isAdmin } from "@/access/isAdmin";

export const Exams: CollectionConfig<"exams"> = {
  slug: "exams",

  labels: { singular: { en: "Exam", pl: "Egzamin" }, plural: { en: "Exams", pl: "Egzaminy" } },
  admin: { defaultColumns: ["name"], useAsTitle: "name", hideAPIURL: true, listSearchableFields: ["name", "intro"] },
  defaultPopulate: { slug: true, name: true },

  access: {
    // Only admins can create, update, and delete courses (everyone can read)
    create: isAdmin,
    read: () => true,
    update: isAdmin,
    delete: isAdmin,
  },

  fields: [
    { ...slug() },
    { ...enableDoc() },

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
                "name",
                18,
                128,
                "Exam Name",
                "Nazwa Egzaminu",
                "European Computer Driving Licence (ECDL)",
                "Europejski Certyfikat Umiejętności Komputerowych (ECDL)",
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
                268,
                undefined,
                "Introduction",
                "Wprowadzenie",
                "The idea of the European Computer Driving Licence (ECDL) was taken up with the support of the Council of Europe in 1996. The certificate was introduced throughout the United Europe. In Poland, the CDL is promoted and implemented by the Polish Information Processing Society.",
                "Idea Europejskiego Certyfikatu Umiejętności Komputerowych (ECDL) podjęta została z poparciem Rady Europy w 1996 roku. Certyfikat wprowadzony został w całej Zjednoczonej Europie. W Polsce CDL propaguje i wdraża Polskie Towarzystwo Informatyczne.",
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
                  name: "contentImage1",
                  type: "upload",
                  relationTo: "media",
                  required: false,

                  label: { en: "Optional Content Image 1", pl: "Opcjonalny Obraz w Treści 1" },
                  admin: { width: "50%" },
                },
                {
                  name: "contentImage2",
                  type: "upload",
                  relationTo: "media",
                  required: false,

                  label: { en: "Optional Content Image 2", pl: "Opcjonalny Obraz w Treści 2" },
                  admin: { width: "50%" },
                },
              ],
            },

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
              type: "row",
              fields: [
                {
                  name: "footerImage1",
                  type: "upload",
                  relationTo: "media",
                  required: false,

                  label: { en: "Optional Footer Image 1", pl: "Opcjonalny Obraz w Stopce 1" },
                  admin: { width: "50%" },
                },
                {
                  name: "footerImage2",
                  type: "upload",
                  relationTo: "media",
                  required: false,

                  label: { en: "Optional Footer Image 2", pl: "Opcjonalny Obraz w Stopce 2" },
                  admin: { width: "50%" },
                },
              ],
            },

            {
              name: "footerContent",
              type: "richText",
              required: true,

              label: { en: "Footer Content", pl: "Treść Stopki" },
            },
          ],
        },
      ],
    },
  ],

  hooks: {
    // Prevent any modifications to the documents in the admin panel from being saved if the user is in demo mode
    beforeChange: [adminDemoModeBeforeChange],
    beforeDelete: [adminDemoModeBeforeDelete],
  },
};
