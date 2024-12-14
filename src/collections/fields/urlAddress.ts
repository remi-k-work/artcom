import type { TextField } from "payload";
import type { DefaultTranslationKeys, TFunction } from "@payloadcms/translations";

import { text } from "payload/shared";

import { CustomTranslationsKeys } from "@/custom-translations";

export default function urlAddress(
  name: string,
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
    minLength: 1,
    maxLength: 512,

    ...overrides,

    label: { en: labelEn, pl: labelPl },
    admin: { placeholder: { en: "💡 Tip → " + placeholderEn, pl: "💡 Wskazówka → " + placeholderPl }, ...overrides?.admin },

    validate: (value, args) => {
      try {
        // We must deal with a complete url; ensure that it is parsable as well
        const parsedUrl = new URL(value as string);
        return text(value, args);
      } catch (error) {
        const {
          req: { i18n },
        } = args;
        const t = i18n.t as TFunction<CustomTranslationsKeys | DefaultTranslationKeys>;
        return t("custom:valInvalidUrl");
      }
    },

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
