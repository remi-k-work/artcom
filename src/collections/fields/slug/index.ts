import type { TextField } from "payload";

import { formatSlugHook } from "./formatSlug";

export default function slug(fieldToUse: string = "name", overrides: Partial<TextField> = {}): TextField {
  // Expect ts error here because of typescript mismatching Partial<TextField> with TextField
  // @ts-expect-error
  return {
    name: "slug",
    type: "text",
    index: true,
    unique: true,

    ...overrides,

    label: { en: "Slug", pl: "Klucz" },
    admin: { position: "sidebar", readOnly: true, ...overrides?.admin },

    hooks: {
      // Kept this in for hook or API based updates
      beforeValidate: [formatSlugHook(fieldToUse)],
    },
  };
}
