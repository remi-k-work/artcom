import type { CollectionConfig } from "payload";

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

  access: {
    read: () => true,
  },

  fields: [
    {
      name: "alt",
      type: "text",
      required: true,
      minLength: 1,
      maxLength: 256,

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

      hooks: {
        beforeChange: [
          ({ value }) => {
            // Field data that will be saved to the document is valid (trim the content)
            return (value as string).trim();
          },
        ],
      },
    },
  ],

  upload: true,
};
