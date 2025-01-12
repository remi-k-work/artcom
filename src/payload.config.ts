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
import { Exams } from "./collections/Exams";
import { PostCategories } from "./collections/PostCategories";
import { Posts } from "./collections/Posts";
import { ContactRequests } from "./collections/ContactRequests";
import { TrainingRegulations } from "./collections/TrainingRegulations";

import { customTranslations } from "./custom-translations";
import { defaultLexical } from "./collections/fields/defaultLexical";

// Get the filename and directory name from the current file's url
const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    components: {
      beforeNavLinks: ["@/components/payload/Logo", "@/components/payload/LineBreak"],

      graphics: {
        Icon: "@/components/payload/Icon",
        Logo: "@/components/payload/Logo",
      },

      actions: ["@/components/payload/DemoMode"],
    },

    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },

    // For demonstration reasons, forgo requiring the user to log in to access the admin panel and instead prefill the login form with the demo user credentials
    autoLogin: process.env.NEXT_PUBLIC_ENABLE_AUTOLOGIN === "true" ? { username: "demo", email: "demo@demo.com", password: "demo", prefillOnly: true } : false,

    // Enforce dark mode for the admin panel
    theme: "dark",
  },

  collections: [Users, Media, Guarantees, References, Courses, Exams, PostCategories, Posts, ContactRequests],
  globals: [TrainingRegulations],

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

  async onInit(payload) {
    // Check if the demo user exists
    const { docs } = await payload.find({
      collection: "users",
      limit: 1,
      pagination: false,
      select: { username: true },
      where: { username: { equals: "demo" } },
    });

    // If the demo user does not exist, create it
    if (!docs.length) {
      await payload.create({ collection: "users", data: { username: "demo", email: "demo@demo.com", password: "demo", role: "admin", name: "Demo User" } });
    } else {
      // If the demo user exists, ensure it always has the correct role and the same password
      await payload.update({ collection: "users", id: docs[0].id, data: { password: "demo", role: "admin", name: "Demo User" } });
    }
  },
});
