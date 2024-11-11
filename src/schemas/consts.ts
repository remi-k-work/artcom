// other libraries
import { flattenValidationErrors, ValidationErrors } from "next-safe-action";
import { contactFormSchema } from "./contactForm";
import { AllFieldErrors } from "@/lib/formActionTypes";

// Customize validation errors format
export const handleValidationErrorsShape = (ve: ValidationErrors<typeof contactFormSchema>): AllFieldErrors => flattenValidationErrors(ve).fieldErrors;
