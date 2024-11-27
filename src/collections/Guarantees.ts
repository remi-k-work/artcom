import type { CollectionConfig } from "payload";

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

  fields: [
    {
      name: "guarantee",
      type: "textarea",
      required: true,
      minLength: 1,
      maxLength: 512,

      label: {
        en: "Guarantee Description",
        pl: "Opis Gwarancji",
      },

      admin: {
        placeholder: {
          en: "Example: The best guarantee of the quality of our training is the numerous references from our Clients, opinions and recommendations of our Trainees, as well as a friendly training staff with many years of training and practical professional experience.",
          pl: "Przykład: Najlepszą gwarancją jakości naszych szkoleń są liczne referencje od Klientów, opinie i polecenia naszych Kursantów, a także przyjazna kadra trenerska z wieloletnim doświadczeniem szkoleniowym i praktycznym zawodowym.",
        },
      },

      hooks: {
        beforeChange: [
          ({ value }) => {
            // Field data that will be saved to the document is valid (remove leading and trailing whitespace, newline characters, and carriage return characters)
            return (value as string).trim().replace(/\n/g, "").replace(/\r/g, "");
          },
        ],
      },
    },
  ],
};
