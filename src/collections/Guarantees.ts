import type { CollectionConfig } from "payload";

import textArea from "./fields/textArea";

export const Guarantees: CollectionConfig = {
  slug: "guarantees",

  labels: {
    singular: {
      en: "Guarantee",
      pl: "Gwarancja Jakości",
    },
    plural: {
      en: "Guarantees",
      pl: "Gwarancje Jakości",
    },
  },

  admin: {
    defaultColumns: ["guarantee"],
    hideAPIURL: true,
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
};
