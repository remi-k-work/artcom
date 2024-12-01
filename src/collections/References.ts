import type { CollectionConfig } from "payload";

import text from "./fields/text";
import urlAddress from "./fields/urlAddress";
import textArea from "./fields/textArea";

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
      ...text("customerName", 128),

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
    },

    {
      ...text("theirLocation"),

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
    },

    {
      ...urlAddress("theirWebsite"),

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
    },

    {
      ...textArea("reference"),

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
    },
  ],
};
