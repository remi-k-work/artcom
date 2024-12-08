import type { TextareaField } from "payload";

export default function textArea(
  name: string,
  minLength: number = 1,
  maxLength: number = 512,
  labelEn: string,
  labelPl: string,
  placeholderEn: string,
  placeholderPl: string,
): TextareaField {
  return {
    name,
    type: "textarea",
    required: true,
    minLength,
    maxLength,

    label: { en: labelEn, pl: labelPl },
    admin: { placeholder: { en: "💡 Tip → " + placeholderEn, pl: "💡 Wskazówka → " + placeholderPl } },

    hooks: {
      beforeValidate: [
        ({ value }) => {
          // Remove leading and trailing whitespace, newline characters, and carriage return characters from content before it undergoes validation
          return (value as string).trim().replace(/\n/g, "").replace(/\r/g, "");
        },
      ],

      beforeChange: [
        ({ value }) => {
          // Field data that will be saved to the document is valid (remove leading and trailing whitespace, newline characters, and carriage return characters)
          return (value as string).trim().replace(/\n/g, "").replace(/\r/g, "");
        },
      ],
    },
  };
}
