import type { FieldHook } from "payload";

const transliterate = (val: string): string => {
  // A simple transliteration map for polish characters
  const map: Record<string, string> = { ą: "a", ć: "c", ę: "e", ł: "l", ń: "n", ó: "o", ś: "s", ź: "z", ż: "z" } as const;

  return val.replace(/[ąćęłńóśźż]/g, (char) => map[char]);
};

const formatSlug = (val: string): string =>
  encodeURIComponent(
    transliterate(val.trim().toLowerCase())
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, ""),
  );

export const formatSlugHook =
  (fieldToUse: string): FieldHook =>
  ({ data }) =>
    // Always generate a new slug from the specified field to use
    formatSlug(data?.[fieldToUse]);
