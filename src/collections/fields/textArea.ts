import type { TextareaField } from "payload";

export default function textArea(name: string): TextareaField {
  return {
    name,
    type: "textarea",
    required: true,
    minLength: 1,
    maxLength: 512,

    hooks: {
      beforeChange: [
        ({ value }) => {
          // Field data that will be saved to the document is valid (remove leading and trailing whitespace, newline characters, and carriage return characters)
          return (value as string).trim().replace(/\n/g, "").replace(/\r/g, "");
        },
      ],
    },
  };
}
