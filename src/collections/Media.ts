// node.js
import path from "path";
import { fileURLToPath } from "url";

// payload and db access
import type { CollectionConfig } from "payload";

// fields
import text from "./fields/text";

import { adminDemoModeBeforeChange, adminDemoModeBeforeDelete } from "./hooks/adminDemoMode";

// access control functions
import { isAdminOrBlogger } from "@/access/isAdminOrBlogger";

// Get the filename and directory name from the current file's url
const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export const Media: CollectionConfig<"media"> = {
  slug: "media",

  labels: { singular: { en: "Media File", pl: "Plik Multimedialny" }, plural: { en: "Media Files", pl: "Pliki Multimedialne" } },
  admin: { defaultColumns: ["filename", "filesize", "width", "height"], useAsTitle: "filename", hideAPIURL: true },

  access: {
    // Only admins and bloggers can create, update, and delete media (everyone can read)
    create: isAdminOrBlogger,
    read: () => true,
    update: isAdminOrBlogger,
    delete: isAdminOrBlogger,
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

  hooks: {
    // Prevent any modifications to the documents in the admin panel from being saved if the user is in demo mode
    beforeChange: [adminDemoModeBeforeChange],
    beforeDelete: [adminDemoModeBeforeDelete],
  },
};
