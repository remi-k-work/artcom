import type { Config } from "payload";

export const customTranslations: Config["i18n"] = {
  translations: {
    en: {
      custom: {
        valInvalidUrl: "Please enter a valid URL",
        demoModeErrChange: "Changes cannot be saved in Demo Mode!",
        demoModeErrDelete: "You cannot delete data in Demo Mode!",
        demoMode: "Demo Mode",
      },
    },

    pl: {
      custom: {
        valInvalidUrl: "Proszę podać właściwy adres URL",
        demoModeErrChange: "Zmian nie można zapisać w Trybie Demonstracyjnym!",
        demoModeErrDelete: "Nie można usuwać danych w Trybie Demonstracyjnym!",
        demoMode: "Tryb Demo",
      },
    },
  },
};

export type CustomTranslationsObject = typeof customTranslations.translations;
export type CustomTranslationsKeys = "custom:valInvalidUrl" | "custom:demoModeErrChange" | "custom:demoModeErrDelete" | "custom:demoMode";
