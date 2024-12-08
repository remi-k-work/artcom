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
    defaultColumns: ["filename", "filesize", "width", "height"],
    useAsTitle: "filename",
    hideAPIURL: true,
  },

  access: {
    read: () => true,
  },

  fields: [
    {
      ...text(
        "alt",
        undefined,
        128,
        "Textual replacement for the image (alt)",
        "Zastępstwo tekstowe dla obrazu (alt)",
        "Grapefruit slice atop a pile of other slices.",
        "Plasterek grejpfruta położony na stosie innych plasterków.",
      ),
    },
  ],

  upload: {
    mimeTypes: ["image/*"],
    disableLocalStorage: true,
    adminThumbnail: ({ doc }) => `${process.env.NEXT_PUBLIC_BLOB_BASE_URL}/${doc.filename}`,
  },
};
