import type { TextareaField } from "payload";

export default function textArea(
  name: string,
  minLength: number = 50,
  maxLength: number = 512,
  labelEn: string,
  labelPl: string,
  placeholderEn: string,
  placeholderPl: string,
  overrides: Partial<TextareaField> = {},
): TextareaField {
  return {
    name,
    type: "textarea",
    required: true,
    minLength,
    maxLength,

    ...overrides,

    label: { en: labelEn, pl: labelPl },
    admin: { placeholder: { en: "💡 Tip → " + placeholderEn, pl: "💡 Wskazówka → " + placeholderPl }, ...overrides?.admin },

    hooks: {
      beforeValidate: [
        ({ value }) => {
          // Remove leading and trailing whitespace, newline characters, and carriage return characters from content before it undergoes validation
          return (value as string).trim().replace(/\n/g, "").replace(/\r/g, "").replace(/\s+/g, " ");
        },
      ],
    },
  };
}
