// node.js
import path from "path";
import { fileURLToPath } from "url";

import type { CollectionConfig } from "payload";

import text from "./fields/text";

// Get the filename and directory name from the current file's url
const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

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
        "Image Description",
        "Opis Obrazu lub Grafiki",
        "Grapefruit slice atop a pile of other slices.",
        "Plasterek grejpfruta położony na stosie innych plasterków.",
      ),
    },
  ],

  upload: {
    // Upload to the public/media directory in next.js making them publicly accessible even outside of payload
    // staticDir: path.resolve(dirname, "../../public/media"),

    mimeTypes: ["image/*"],
    disableLocalStorage: true,
    // adminThumbnail: ({ doc }) => `${process.env.NEXT_PUBLIC_BLOB_BASE_URL}/${doc.filename}`,
    adminThumbnail: "thumbnail",
    imageSizes: [
      {
        name: "thumbnail",
        width: 150,
      },
    ],
  },
};
