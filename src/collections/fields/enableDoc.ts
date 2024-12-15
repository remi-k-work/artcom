import type { CheckboxField } from "payload";

export default function enableDoc(overrides: Partial<CheckboxField> = {}): CheckboxField {
  return {
    name: "enableDoc",
    type: "checkbox",
    defaultValue: true,

    ...overrides,

    label: { en: "Enable this document", pl: "Udostępniaj ten dokument" },
    admin: { position: "sidebar", ...overrides?.admin },
  };
}
