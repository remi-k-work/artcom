import type { CollectionConfig } from "payload";

export const References: CollectionConfig = {
  slug: "references",

  labels: {
    singular: {
      en: "Reference",
      pl: "Referencja",
    },
    plural: {
      en: "References",
      pl: "Referencje",
    },
  },

  fields: [
    {
      name: "customerName",
      type: "text",
      required: true,
      minLength: 1,
      maxLength: 256,

      label: {
        en: "Customer Name",
        pl: "Nazwa Klienta",
      },

      admin: {
        placeholder: {
          en: "Example: BWI Poland Technologies Sp. z o.o.",
          pl: "Przykład: BWI Poland Technologies Sp. z o.o.",
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

    {
      name: "theirLocation",
      type: "text",
      required: true,
      minLength: 1,
      maxLength: 50,

      label: {
        en: "Their Location",
        pl: "Ich Lokalizacja",
      },

      admin: {
        placeholder: {
          en: "Example: Rzeszów, Poland",
          pl: "Przykład: Rzeszów, Polska",
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

    {
      name: "theirWebsite",
      type: "text",
      required: true,
      minLength: 1,
      maxLength: 512,

      label: {
        en: "Their Website",
        pl: "Ich Strona Internetowa",
      },

      admin: {
        placeholder: {
          en: "Example: http://cras.org.pl",
          pl: "Przykład: http://cras.org.pl",
        },
      },

      // *** TODO: Need to add URL validation and error message in both en/pl ***
      hooks: {
        beforeChange: [
          ({ value }) => {
            // Field data that will be saved to the document is valid (trim the content)
            return (value as string).trim();
          },
        ],
      },
    },

    {
      name: "reference",
      type: "textarea",
      required: true,
      minLength: 1,
      maxLength: 512,

      label: {
        en: "Reference Description",
        pl: "Opis Referencji/Opinii Klienta",
      },

      admin: {
        placeholder: {
          en: "Example: The training was organized according to a previously established program. The company showed great commitment both at the stage of program construction and its implementation. The preparation and conduct of the training was carried out in a professional and efficient manner.",
          pl: "Przykład: Szkolenie zostało zorganizowane zgodnie z wcześniej ustalonym programem. Firma wykazała się dużym zaangażowaniem zarówno na etapie konstruowania programu jaki jego realizacji. Przygotowanie i przeprowadzenie szkolenia odbyło się w sposób fachowy i sprawny.",
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
