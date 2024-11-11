// component css styles
import styles from "./FormControls.module.css";

// react
import { ChangeEventHandler, ComponentPropsWithoutRef, FocusEventHandler } from "react";

// other libraries
import { cn } from "@/lib/utils";
import { RefCallBack } from "react-hook-form";
import useRegisterWithRHF from "@/hooks/useRegisterWithRHF";
import { useAllFieldErrorsContext } from "@/contexts/AllFieldErrors";
import { useFormContext, Controller } from "react-hook-form";

// components
import { Label } from "@/components/ui/label";
import { Input, InputProps } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea, TextareaProps } from "@/components/ui/textarea";

// assets
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

// types
interface FormFieldProps {
  fieldName: string;
  fieldLabel: string;
  renderErrors?: boolean;
}

interface FormInputFieldProps extends FormFieldProps, InputProps {}
interface FormTextAreaProps extends FormFieldProps, TextareaProps {}
interface FormCheckFieldProps extends Omit<FormFieldProps, "fieldLabel">, ComponentPropsWithoutRef<typeof Checkbox> {}

interface FormOutputFieldProps extends FormFieldProps, ComponentPropsWithoutRef<"output"> {
  outputFor: string;
}

interface ErrorMessageProps {
  fieldErrors: string[] | undefined;
}

export function FormInputField({ fieldName, fieldLabel, renderErrors = true, children, ...props }: FormInputFieldProps) {
  const [handleChange, handleBlur, ref, rest] = useRegisterWithRHF<"input", HTMLInputElement>({ fieldName, props });
  const { allFieldErrors } = useAllFieldErrorsContext();

  return (
    <div className={styles["form-field"]}>
      <Label htmlFor={fieldName}>{fieldLabel}</Label>
      {/* Render any {children} between the field and its label if specified (e.g., captcha) */}
      {children}
      <Input
        id={fieldName}
        name={fieldName}
        aria-invalid={allFieldErrors && allFieldErrors[fieldName] ? "true" : "false"}
        // Hook up with the react hook form
        onChange={handleChange as ChangeEventHandler<HTMLInputElement>}
        onBlur={handleBlur as FocusEventHandler<HTMLInputElement>}
        ref={ref as RefCallBack}
        {...rest}
      />
      {renderErrors && allFieldErrors[fieldName] && <ErrorMessage fieldErrors={allFieldErrors[fieldName]} />}
    </div>
  );
}

export function FormCheckField({ fieldName, renderErrors = true, children, ...props }: FormCheckFieldProps) {
  // Retrieve all needed useform hook methods and props
  const { control } = useFormContext();
  const { allFieldErrors } = useAllFieldErrorsContext();

  return (
    <>
      <div className={styles["form-field-h"]}>
        <Label htmlFor={fieldName}>{children}</Label>
        <Controller
          name={fieldName}
          control={control}
          render={({ field: { value, onChange, onBlur } }) => (
            <Checkbox
              id={fieldName}
              name={fieldName}
              aria-invalid={allFieldErrors && allFieldErrors[fieldName] ? "true" : "false"}
              // Hook up with the react hook form
              checked={value}
              onCheckedChange={onChange}
              onBlur={onBlur}
              {...props}
            />
          )}
        />
      </div>
      {renderErrors && allFieldErrors[fieldName] && <ErrorMessage fieldErrors={allFieldErrors[fieldName]} />}
    </>
  );
}

export function FormTextArea({ fieldName, fieldLabel, renderErrors = true, ...props }: FormTextAreaProps) {
  const [handleChange, handleBlur, ref, rest] = useRegisterWithRHF<"textarea", HTMLTextAreaElement>({ fieldName, props });
  const { allFieldErrors } = useAllFieldErrorsContext();

  return (
    <div className={styles["form-field"]}>
      <Label htmlFor={fieldName}>{fieldLabel}</Label>
      <Textarea
        id={fieldName}
        name={fieldName}
        aria-invalid={allFieldErrors && allFieldErrors[fieldName] ? "true" : "false"}
        // Hook up with the react hook form
        onChange={handleChange as ChangeEventHandler<HTMLTextAreaElement>}
        onBlur={handleBlur as FocusEventHandler<HTMLTextAreaElement>}
        ref={ref as RefCallBack}
        {...rest}
      />
      {renderErrors && allFieldErrors[fieldName] && <ErrorMessage fieldErrors={allFieldErrors[fieldName]} />}
    </div>
  );
}

export function FormOutputField({ outputFor, fieldName, fieldLabel, children, ...props }: FormOutputFieldProps) {
  return (
    <div className={styles["form-field"]}>
      <Label htmlFor={fieldName}>{fieldLabel}</Label>
      <output htmlFor={outputFor} id={fieldName} name={fieldName} {...props}>
        {children}
      </output>
    </div>
  );
}

export function ErrorMessage({ fieldErrors }: ErrorMessageProps) {
  return fieldErrors?.map((fieldError, errorIndex) => (
    <p key={errorIndex} role="alert" className={cn(styles["error-message"], "bg-destructive text-destructive-foreground")}>
      <ExclamationTriangleIcon width={24} height={24} className="flex-none" />
      {fieldError}
    </p>
  ));
}
