import type { TextField } from "payload";

export default function text(
  name: string,
  minLength: number = 1,
  maxLength: number = 50,
  labelEn: string,
  labelPl: string,
  placeholderEn: string,
  placeholderPl: string,
): TextField {
  return {
    name,
    type: "text",
    required: true,
    minLength,
    maxLength,

    label: { en: labelEn, pl: labelPl },
    admin: { placeholder: { en: "💡 Tip → " + placeholderEn, pl: "💡 Wskazówka → " + placeholderPl } },

    hooks: {
      beforeValidate: [
        ({ value }) => {
          // Trim the content before it undergoes validation
          return (value as string).trim();
        },
      ],

      beforeChange: [
        ({ value }) => {
          // Field data that will be saved to the document is valid (trim the content)
          return (value as string).trim();
        },
      ],
    },
  };
}
