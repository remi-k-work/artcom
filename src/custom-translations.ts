import type { Config } from "payload";

export const customTranslations: Config["i18n"] = {
  translations: {
    en: {
      custom: {
        valInvalidUrl: "Please enter a valid URL",
      },
    },

    pl: {
      custom: {
        valInvalidUrl: "Proszę podać właściwy adres URL",
      },
    },
  },
};

export type CustomTranslationsObject = typeof customTranslations.translations;
export type CustomTranslationsKeys = "custom:valInvalidUrl";
