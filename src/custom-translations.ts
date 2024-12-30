import type { Config } from "payload";

export const customTranslations: Config["i18n"] = {
  translations: {
    en: {
      custom: {
        valInvalidUrl: "Please enter a valid URL",
        demoModeErrChange: "Changes cannot be saved in demo mode!",
        demoModeErrDelete: "You cannot delete data in demo mode!",
      },
    },

    pl: {
      custom: {
        valInvalidUrl: "Proszę podać właściwy adres URL",
        demoModeErrChange: "Zmian nie można zapisać w trybie demonstracyjnym!",
        demoModeErrDelete: "Nie można usuwać danych w trybie demonstracyjnym!",
      },
    },
  },
};

export type CustomTranslationsObject = typeof customTranslations.translations;
export type CustomTranslationsKeys = "custom:valInvalidUrl" | "custom:demoModeErrChange" | "custom:demoModeErrDelete";
