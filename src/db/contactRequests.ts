// payload and db access
import { getPayload } from "payload";
import config from "@payload-config";

// Create a new contact request
export const newContactRequest = async (name: string, email: string, telno: string, message: string): Promise<void> => {
  const payload = await getPayload({ config });

  await payload.create({ collection: "contact-requests", data: { name, email, telno, message } });
};
