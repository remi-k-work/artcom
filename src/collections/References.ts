import type { CollectionConfig } from "payload";

import text from "./fields/text";
import urlAddress from "./fields/urlAddress";
import textArea from "./fields/textArea";

export const References: CollectionConfig<"references"> = {
  slug: "references",

  labels: { singular: { en: "Reference", pl: "Referencja" }, plural: { en: "References", pl: "Referencje" } },
  admin: { defaultColumns: ["customerName", "theirLocation"], useAsTitle: "customerName", hideAPIURL: true },
  defaultPopulate: { customerName: true, theirLocation: true },

  fields: [
    {
      ...text("customerName", undefined, 128, "Customer Name", "Nazwa Klienta", "BWI Poland Technologies Sp. z o.o.", "BWI Poland Technologies Sp. z o.o."),
    },

    {
      ...text("theirLocation", undefined, undefined, "Their Location", "Ich Lokalizacja", "Rzeszów, Poland", "Rzeszów, Polska"),
    },

    {
      ...urlAddress("theirWebsite", "Their Website", "Ich Strona Internetowa", "http://cras.org.pl", "http://cras.org.pl"),
    },

    {
      ...textArea(
        "reference",
        undefined,
        undefined,
        "Reference Description",
        "Opis Referencji/Opinii Klienta",
        "The training was organized according to a previously established program. The company showed great commitment both at the stage of program construction and its implementation. The preparation and conduct of the training was carried out in a professional and efficient manner.",
        "Szkolenie zostało zorganizowane zgodnie z wcześniej ustalonym programem. Firma wykazała się dużym zaangażowaniem zarówno na etapie konstruowania programu jaki jego realizacji. Przygotowanie i przeprowadzenie szkolenia odbyło się w sposób fachowy i sprawny.",
      ),
    },
  ],
};
