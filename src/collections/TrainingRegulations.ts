// payload and db access
import type { GlobalConfig } from "payload";

// fields
import text from "./fields/text";

import { adminDemoModeBeforeChangeG } from "./hooks/adminDemoMode";

// access control functions
import { isAdmin } from "@/access/isAdmin";

export const TrainingRegulations: GlobalConfig = {
  slug: "training-regulations",

  label: { en: "Training Services Regulations", pl: "Regulamin Usług Szkoleniowych" },
  admin: { hideAPIURL: true },

  access: {
    // Everyone can read, but only admins can update
    read: () => true,
    update: isAdmin,
  },

  fields: [
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
              ...text("title", 18, 128, "Title", "Tytuł", "Training Services Regulations", "Regulamin Usług Szkoleniowych"),
            },

            {
              name: "headerImage",
              type: "upload",
              relationTo: "media",
              required: true,

              label: { en: "Header Image", pl: "Obraz Nagłówka" },
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
      ],
    },
  ],

  hooks: {
    // Prevent any modifications to the documents in the admin panel from being saved if the user is in demo mode
    beforeChange: [adminDemoModeBeforeChangeG],
  },
};
