import type { CollectionConfig } from "payload";

import text from "./fields/text";

export const Media: CollectionConfig = {
  slug: "media",

  labels: {
    singular: {
      en: "Media File",
      pl: "Plik Multimedialny",
    },
    plural: {
      en: "Media Files",
      pl: "Pliki Multimedialne",
    },
  },

  admin: {
    hideAPIURL: true,
  },

  access: {
    read: () => true,
  },

  fields: [
    {
      ...text("alt", 128),

      label: {
        en: "Textual replacement for the image (alt)",
        pl: "Zastępstwo tekstowe dla obrazu (alt)",
      },

      admin: {
        placeholder: {
          en: "Example: Grapefruit slice atop a pile of other slices.",
          pl: "Przykład: Plasterek grejpfruta położony na stosie innych plasterków.",
        },
      },
    },
  ],

  upload: true,
};
