"use server";

// next
import { revalidatePath } from "next/cache";

// payload and db access
import { newContactRequest } from "@/db/contactRequests";

// other libraries
import { actionClient } from "@/lib/safeAction";
import { contactFormSchema } from "@/schemas/contactForm";
import { ContactFormActionResult } from "@/schemas/types";
import { handleValidationErrorsShape } from "@/schemas/consts";

export const newContact = actionClient
  .schema(contactFormSchema, { handleValidationErrorsShape })
  .action(async ({ parsedInput }): Promise<ContactFormActionResult> => {
    // Collect and prepare validated data
    const { name, email, telno, message } = parsedInput;

    try {
      // Create a new contact request
      await newContactRequest(name, email, telno, message);
    } catch (error) {
      // If any error occurs, rethrow, which means action simply "failed"
      throw error;
    }

    // Revalidate, so the fresh data will be fetched from the server next time this path is visited
    revalidatePath("/");
    revalidatePath("/contact-us");

    // Return the new action state so that we can provide feedback to the user
    return { actionStatus: "succeeded" };
  });
