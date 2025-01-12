// payload and db access
import { APIError, type GlobalBeforeChangeHook, type CollectionBeforeChangeHook, type CollectionBeforeDeleteHook } from "payload";
import type { DefaultTranslationKeys, TFunction } from "@payloadcms/translations";

import { CustomTranslationsKeys } from "@/custom-translations";

class DemoModeError extends APIError {
  constructor(message: string) {
    super(message, 400, undefined, true);
  }
}

// Prevent any modifications to the documents in the admin panel from being saved if the user is in demo mode
export const adminDemoModeBeforeChange: CollectionBeforeChangeHook = async ({ data, req: { i18n, user } }) => {
  const t = i18n.t as TFunction<CustomTranslationsKeys | DefaultTranslationKeys>;
  if (user?.username === "demo") throw new DemoModeError(t("custom:demoModeErrChange"));
  return data;
};

export const adminDemoModeBeforeChangeG: GlobalBeforeChangeHook = async ({ data, req: { i18n, user } }) => {
  const t = i18n.t as TFunction<CustomTranslationsKeys | DefaultTranslationKeys>;
  if (user?.username === "demo") throw new DemoModeError(t("custom:demoModeErrChange"));
  return data;
};

export const adminDemoModeBeforeDelete: CollectionBeforeDeleteHook = async ({ req: { i18n, user } }) => {
  const t = i18n.t as TFunction<CustomTranslationsKeys | DefaultTranslationKeys>;
  if (user?.username === "demo") throw new DemoModeError(t("custom:demoModeErrDelete"));
};
