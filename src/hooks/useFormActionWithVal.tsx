// react
import { FormEventHandler, useCallback } from "react";

// other libraries
import { Schema } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { BindArgsValidationErrors, ValidationErrors } from "next-safe-action";
import { HookSafeActionFn, useAction } from "next-safe-action/hooks";
import { AllFieldErrors, FormActionResult } from "@/lib/formActionTypes";

// types
interface UseFormActionWithValProps<S extends Schema, BAS extends readonly Schema[], Data extends FormActionResult> {
  safeActionFunc: HookSafeActionFn<string, S, BAS, ValidationErrors<S>, BindArgsValidationErrors<BAS>, Data>;
  formSchema: Schema;
  showFeedback: (actionStatus: FormActionResult["actionStatus"]) => void;
}

export default function useFormActionWithVal<S extends Schema, BAS extends readonly Schema[], Data extends FormActionResult>({
  safeActionFunc,
  formSchema,
  showFeedback,
}: UseFormActionWithValProps<S, BAS, Data>) {
  const useFormMethods = useForm<S>({ shouldUnregister: true, resolver: zodResolver(formSchema) });

  // Transform react hook form errors to conform to our own all field errors format
  const allFieldErrorsClient: AllFieldErrors = {};

  // Iterate through each field that results in a validation error
  for (const [fieldName, fieldError] of Object.entries(useFormMethods.formState.errors)) {
    // If the field is an array of fields, collect and flatten all validation errors
    if (Array.isArray(fieldError)) {
      for (let i = 0; i < fieldError.length; i++)
        allFieldErrorsClient[`${fieldName}.${i}`] = fieldError[i]?.message ? [fieldError[i].message as string] : undefined;
    } else {
      allFieldErrorsClient[fieldName] = fieldError?.message ? [fieldError.message as string] : undefined;
    }
  }

  const {
    execute,
    result: { validationErrors: allFieldErrorsServer },
    isExecuting,
  } = useAction(safeActionFunc, {
    onSuccess: ({ data }) => {
      // We are dealing with either "denied" or "succeeded" action
      if (data) showFeedback(data.actionStatus);
    },
    onError: ({ error: { validationErrors } }) => {
      // Input data fails validation
      if (validationErrors) {
        // We are dealing with an "invalid" action
        showFeedback("invalid");
      } else {
        // Any other error is considered a "failed" action
        showFeedback("failed");
      }
    },
  });

  const onSubmitRHF: SubmitHandler<S> = useCallback(
    (data, ev) => {
      // We are submitting our server action independently
      execute(new FormData(ev?.target) as any);
    },
    [execute],
  );

  const onSubmit: FormEventHandler<HTMLFormElement> = useCallback(
    (ev) => {
      ev.preventDefault();

      // Show the "invalid" feedback when react's hook form validation fails
      const { trigger, handleSubmit } = useFormMethods;
      trigger().then((isValid) => !isValid && showFeedback("invalid"));

      // Validate the data on the client-side using react's hook form, then run our server action, which validates again
      handleSubmit(onSubmitRHF)(ev);
    },
    [onSubmitRHF, showFeedback, useFormMethods],
  );

  return {
    useFormMethods,
    onSubmit,
    allFieldErrors: { ...allFieldErrorsServer, ...allFieldErrorsClient },
    isExecuting,
  };
}
