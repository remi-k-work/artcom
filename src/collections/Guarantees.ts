// payload and db access
import type { CollectionConfig } from "payload";

// fields
import textArea from "./fields/textArea";

import { adminDemoModeBeforeChange, adminDemoModeBeforeDelete } from "./hooks/adminDemoMode";

// access control functions
import { isAdmin } from "@/access/isAdmin";

export const Guarantees: CollectionConfig<"guarantees"> = {
  slug: "guarantees",

  labels: { singular: { en: "Guarantee", pl: "Gwarancja Jakości" }, plural: { en: "Guarantees", pl: "Gwarancje Jakości" } },
  admin: { defaultColumns: ["guarantee"], hideAPIURL: true, listSearchableFields: ["guarantee"] },

  access: {
    // Only admins can create, update, and delete guarantees (everyone can read)
    create: isAdmin,
    update: isAdmin,
    delete: isAdmin,
  },

  fields: [
    {
      ...textArea(
        "guarantee",
        undefined,
        undefined,
        "Guarantee Description",
        "Opis Gwarancji",
        "The best guarantee of the quality of our training is the numerous references from our Clients, opinions and recommendations of our Trainees, as well as a friendly training staff with many years of training and practical professional experience.",
        "Najlepszą gwarancją jakości naszych szkoleń są liczne referencje od Klientów, opinie i polecenia naszych Kursantów, a także przyjazna kadra trenerska z wieloletnim doświadczeniem szkoleniowym i praktycznym zawodowym.",
      ),
    },
  ],

  hooks: {
    // Prevent any modifications to the documents in the admin panel from being saved if the user is in demo mode
    beforeChange: [adminDemoModeBeforeChange],
    beforeDelete: [adminDemoModeBeforeDelete],
  },
};
