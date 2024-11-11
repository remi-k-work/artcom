// other libraries
import { z } from "zod";
import { zfd } from "zod-form-data";
import { errorMap } from "zod-validation-error";

// A custom error map to use with zod and get user-friendly messages automatically
z.setErrorMap(errorMap);

export const contactFormSchema = zfd.formData({
  name: zfd.text(
    z
      .string()
      .trim()
      .min(1, { message: "Proszę podać swoje imię i nazwisko; jest to pole niezbędne" })
      .max(25, { message: "Imię i nazwisko powinno mieć maksymalnie 25 znaków" })
      .default(""),
  ),
  email: zfd.text(
    z
      .string()
      .trim()
      .min(1, { message: "Podaj swój adres e-mail, tak abyśmy mogli się z Tobą skontaktować; e-mail jest polem obowiązkowym" })
      .email({ message: "Podany adres e-mail wydaje się być nieprawidłowy; zaktualizuj to" })
      .default(""),
  ),
  telno: zfd.text(
    z
      .string()
      .trim()
      .min(1, { message: "Podaj swój numer telefonu, tak abyśmy mogli się z Tobą skontaktować; numer telefonu jest polem obowiązkowym" })
      .regex(/^[0-9]{3}-[0-9]{3}-[0-9]{3}$/, { message: "Podany numer telefonu wydaje się być nieprawidłowy; użyj następującego formatu: xxx-xxx-xxx" })
      .default(""),
  ),
  message: zfd.text(
    z
      .string()
      .trim()
      .min(1, { message: "Jaką wiadomość chcesz wysłać? Jest to pole obowiązkowe" })
      .max(2048, { message: "Wiadomość nie może mieć więcej niż 2048 znaków" })
      .default(""),
  ),
  regulations: z.union([zfd.checkbox(), z.coerce.boolean()]).refine((val) => val, { message: "Proszę potwierdzić zapoznanie się z Regulaminem szkoleń" }),
});
