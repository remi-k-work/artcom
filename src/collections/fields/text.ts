import type { TextField } from "payload";

export default function text(name: string, maxLength: number = 50): TextField {
  return {
    name,
    type: "text",
    required: true,
    minLength: 1,
    maxLength,

    hooks: {
      beforeChange: [
        ({ value }) => {
          // Field data that will be saved to the document is valid (trim the content)
          return (value as string).trim();
        },
      ],
    },
  };
}
