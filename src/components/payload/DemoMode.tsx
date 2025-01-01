// payload and db access
import type { ServerProps } from "payload";
import type { DefaultTranslationKeys, TFunction } from "@payloadcms/translations";

import { CustomTranslationsKeys } from "@/custom-translations";

export default function DemoMode({ user, i18n }: ServerProps) {
  // Show a demo mode indicator if the user is in demo mode
  if (user?.username !== "demo") return null;

  const t = i18n.t as TFunction<CustomTranslationsKeys | DefaultTranslationKeys>;
  return <span className="rounded bg-accent px-2 py-1 font-bold text-accent-foreground">{t("custom:demoMode")}</span>;
}
