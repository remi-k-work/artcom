// payload and db access
import type { CollectionConfig } from "payload";

// fields
import text from "./fields/text";
import eMail from "./fields/eMail";
import textArea from "./fields/textArea";

import { adminDemoModeBeforeChange, adminDemoModeBeforeDelete } from "./hooks/adminDemoMode";

// access control functions
import { isAdmin } from "@/access/isAdmin";

export const ContactRequests: CollectionConfig<"contact-requests"> = {
  slug: "contact-requests",

  labels: { singular: { en: "Contact Request", pl: "Prośba o Kontakt" }, plural: { en: "Contact Requests", pl: "Prośby o Kontakt" } },
  admin: { defaultColumns: ["name", "email", "telno", "createdAt"], useAsTitle: "name", hideAPIURL: true, listSearchableFields: ["name", "email", "telno"] },
  defaultPopulate: { name: true, email: true, telno: true },

  access: {
    // No one can create, ever
    create: () => false,

    // Only admins can read
    read: isAdmin,

    // No one can update, ever
    update: () => false,

    // Only admins can delete
    delete: isAdmin,
  },

  fields: [
    {
      ...text("name", 1, 25, "Name", "Imię i Nazwisko", "John Smith", "Jan Kowalski"),
    },

    {
      ...eMail("email", "Email", "Email", "john.smith@gmail.com", "jan.kowalski@gmail.com"),
    },

    {
      ...text("telno", 1, 11, "Phone", "Telefon", "555-456-789", "555-456-789"),
    },

    {
      ...textArea(
        "message",
        1,
        2048,
        "Message",
        "Wiadomość",
        "I am interested in learning Python programming. Please provide more information on beginner-level Python courses, including course schedules, instructor qualifications, and pricing. I am particularly interested in courses that focus on data analysis, web development, and machine learning.",
        "Jestem zainteresowany nauką programowania w Pythonie. Proszę o więcej informacji na temat kursów dla początkujących, w tym harmonogramów kursów, kwalifikacji instruktorów i cen. Jestem szczególnie zainteresowany kursami skupiającymi się na analizie danych, tworzeniu stron internetowych i uczeniu maszynowym.",
      ),
    },
  ],

  hooks: {
    // Prevent any modifications to the documents in the admin panel from being saved if the user is in demo mode
    beforeChange: [adminDemoModeBeforeChange],
    beforeDelete: [adminDemoModeBeforeDelete],
  },
};
