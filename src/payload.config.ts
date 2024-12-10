import { vercelBlobStorage } from "@payloadcms/storage-vercel-blob";
import { vercelPostgresAdapter } from "@payloadcms/db-vercel-postgres";
import path from "path";
import { buildConfig } from "payload";
import { en } from "@payloadcms/translations/languages/en";
import { pl } from "@payloadcms/translations/languages/pl";
import { fileURLToPath } from "url";
import sharp from "sharp";

import { Users } from "./collections/Users";
import { Media } from "./collections/Media";
import { Guarantees } from "./collections/Guarantees";
import { References } from "./collections/References";
import { Courses } from "./collections/Courses";

import { customTranslations } from "./custom-translations";
import { defaultLexical } from "./collections/fields/defaultLexical";

// Get the filename and directory name from the current file's url
const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    components: {
      graphics: {
        Icon: "@/components/payload/Icon",
        Logo: "@/components/payload/Logo",
      },
    },

    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, Guarantees, References, Courses],

  // This config helps us configure global or default features that the other editors can inherit
  editor: defaultLexical,

  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: vercelPostgresAdapter({ pool: { connectionString: process.env.POSTGRES_URL || "" } }),
  sharp,
  plugins: [vercelBlobStorage({ collections: { media: true }, token: process.env.BLOB_READ_WRITE_TOKEN || "" })],
  i18n: { ...customTranslations, supportedLanguages: { en, pl } },
});
