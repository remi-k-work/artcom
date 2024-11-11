// other libraries
import { z } from "zod";
import { contactFormSchema } from "./contactForm";
import { FormActionResult } from "@/lib/formActionTypes";

// types
export interface ContactFormActionResult extends FormActionResult {}

// Export the type of the schema object and the type of the errors
export type ContactFormSchemaType = z.infer<typeof contactFormSchema>;
export type ContactFormFormattedErrors = z.inferFormattedError<typeof contactFormSchema>;
export type ContactFormFlattenedErrors = z.inferFlattenedErrors<typeof contactFormSchema>;
