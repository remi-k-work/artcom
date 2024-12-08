import type { CollectionConfig } from "payload";

import text from "./fields/text";
import textArea from "./fields/textArea";

export const Courses: CollectionConfig = {
  slug: "courses",

  labels: {
    singular: {
      en: "Course",
      pl: "Kurs",
    },
    plural: {
      en: "Courses",
      pl: "Kursy",
    },
  },

  admin: {
    defaultColumns: ["name", "headerImg", "type"],
    useAsTitle: "name",
    hideAPIURL: true,
  },

  fields: [
    {
      name: "headerImg",
      type: "upload",
      relationTo: "media",
      required: true,

      label: { en: "Header Image", pl: "Obraz Nagłówka" },
    },

    {
      ...text(
        "name",
        24,
        128,
        "Course Name",
        "Nazwa Kursu",
        "Computer graphics - Corel Draw and Adobe Photoshop",
        "Grafika komputerowa - Corel Draw i Adobe Photoshop",
      ),
    },

    {
      name: "type",
      type: "select",
      required: true,

      label: {
        en: "Type of Course",
        pl: "Rodzaj Kursu",
      },

      options: [
        { label: { en: "IT Courses", pl: "Kursy Informatyczne" }, value: "it-courses" },
        { label: { en: "Foreign Languages", pl: "Języki Obce" }, value: "foreign-languages" },
        { label: { en: "HR and Others", pl: "HR i Inne" }, value: "hr-and-others" },
      ],

      defaultValue: "it-courses",
    },

    {
      ...textArea(
        "intro",
        268,
        undefined,
        "Introduction",
        "Wprowadzenie",
        "A comprehensive computer graphics course for people who want to professionally or privately deal with photo processing, creating illustrations, designing commercial forms such as posters, covers, business cards, advertising articles, graphics for websites, etc.",
        "Kompleksowy kurs grafiki komputerowej dla osób, które chcą zawodowo lub prywatnie zajmować się przetwarzanie zdjęć, tworzeniem ilustracji, projektowaniem form użytkowych takich jak np. plakaty, okładki, wizytówki, artykuły reklamowe, grafikę na strony internetowe itp.",
      ),
    },
  ],
};
