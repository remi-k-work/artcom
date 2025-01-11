import type { EmailField } from "payload";

export default function eMail(
  name: string,
  labelEn: string,
  labelPl: string,
  placeholderEn: string,
  placeholderPl: string,
  overrides: Partial<EmailField> = {},
): EmailField {
  return {
    name,
    type: "email",
    required: true,

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
