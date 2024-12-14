import type { TextField } from "payload";

export default function text(
  name: string,
  minLength: number = 1,
  maxLength: number = 50,
  labelEn: string,
  labelPl: string,
  placeholderEn: string,
  placeholderPl: string,
  overrides: Partial<TextField> = {},
): TextField {
  // Expect ts error here because of typescript mismatching Partial<TextField> with TextField
  // @ts-expect-error
  return {
    name,
    type: "text",
    required: true,
    minLength,
    maxLength,

    ...overrides,

    label: { en: labelEn, pl: labelPl },
    admin: { placeholder: { en: "💡 Tip → " + placeholderEn, pl: "💡 Wskazówka → " + placeholderPl }, ...overrides?.admin },

    hooks: {
      beforeValidate: [
        ({ value }) => {
          // Trim the content before it undergoes validation (remove any extra spaces as well)
          return (value as string).trim().replace(/\s+/g, " ");
        },
      ],
    },
  };
}
