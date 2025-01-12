"use client";

// component css styles
import styles from "./ContactForm.module.css";

// react
import { useCallback, useState } from "react";

// next
import Link from "next/link";

// server actions and mutations
import { newContact } from "@/actions/contactForm";

// other libraries
import { FormProvider } from "react-hook-form";
import { useContactFormStore } from "@/stores/contactFormProvider";
import useFormActionWithVal from "@/hooks/useFormActionWithVal";
import { contactFormSchema } from "@/schemas/contactForm";
import { ContactFormActionResult } from "@/schemas/types";
import useContactActionFeedback from "@/hooks/useContactActionFeedback";

// components
import { ContactFormStoreProvider } from "@/stores/contactFormProvider";
import { AllFieldErrorsProvider } from "@/contexts/AllFieldErrors";
import { FormCheckField, FormInputField, FormTextArea } from "@/components/FormControls";
import FormSubmit from "@/components/FormSubmit";
import { FADE_IN, MotionArticle } from "@/components/AnimComps";

// types
interface TheFormWrappedProps {
  onResetClicked: () => void;
}

export default function ContactForm() {
  // Resetting a form with a key: you can force a subtree to reset its state by giving it a different key
  const [formResetKey, setFormResetKey] = useState("ContactForm");

  const handleResetClicked = useCallback(() => setFormResetKey(`ContactForm${Date.now()}`), []);

  return (
    <ContactFormStoreProvider key={formResetKey}>
      <TheFormWrapped onResetClicked={handleResetClicked} />
    </ContactFormStoreProvider>
  );
}

function TheFormWrapped({ onResetClicked }: TheFormWrappedProps) {
  const name = useContactFormStore((state) => state.name);
  const email = useContactFormStore((state) => state.email);
  const telno = useContactFormStore((state) => state.telno);
  const message = useContactFormStore((state) => state.message);
  const regulations = useContactFormStore((state) => state.regulations);

  const nameChanged = useContactFormStore((state) => state.nameChanged);
  const emailChanged = useContactFormStore((state) => state.emailChanged);
  const telnoChanged = useContactFormStore((state) => state.telnoChanged);

  // To provide feedback to the user
  const { feedback, showFeedback } = useContactActionFeedback({ onResetClicked });

  const { useFormMethods, onSubmit, allFieldErrors, isExecuting } = useFormActionWithVal<typeof contactFormSchema, readonly [], ContactFormActionResult>({
    safeActionFunc: newContact,
    formSchema: contactFormSchema,
    showFeedback,
  });

  return (
    <MotionArticle className={styles["contact-form"]} {...FADE_IN}>
      <FormProvider {...useFormMethods}>
        <AllFieldErrorsProvider allFieldErrors={allFieldErrors}>
          <form noValidate={true} onSubmit={onSubmit}>
            {/* <form noValidate={true} onSubmit={(ev) => { ev.preventDefault(); onSubmit({} as any, ev); }}> */}
            <FormInputField
              fieldName={"name"}
              fieldLabel={"Imię i nazwisko"}
              size={40}
              maxLength={26}
              spellCheck={"false"}
              autoComplete={"name"}
              required={true}
              placeholder={"Daj nam znać kim jesteś!"}
              defaultValue={name}
              onChange={(ev) => nameChanged(ev.target.value)}
            />
            <FormInputField
              type={"email"}
              fieldName={"email"}
              fieldLabel={"Twój e-mail"}
              size={40}
              maxLength={50}
              spellCheck={"false"}
              autoComplete={"email"}
              required={true}
              placeholder={"Odpowiemy Ci tutaj"}
              defaultValue={email}
              onChange={(ev) => emailChanged(ev.target.value)}
            />
            <FormInputField
              type={"tel"}
              fieldName={"telno"}
              fieldLabel={"Nr telefonu"}
              size={40}
              maxLength={12}
              spellCheck={"false"}
              autoComplete={"tel"}
              required={true}
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}"
              placeholder={"333-444-444"}
              defaultValue={telno}
              onChange={(ev) => telnoChanged(ev.target.value)}
            />
            <FormTextArea
              fieldName={"message"}
              fieldLabel={"Treść wiadomości"}
              cols={50}
              rows={6}
              maxLength={2049}
              spellCheck={"true"}
              autoComplete={"off"}
              required={true}
              placeholder={"Jak możemy Ci dzisiaj pomóc?"}
              defaultValue={message}
            />
            <FormCheckField fieldName={"regulations"} defaultChecked={regulations}>
              <p className="text-end leading-5">
                W&nbsp;
                <Link href="/regulations" className="text-text-1 underline">
                  Regulaminie Szkoleń
                </Link>
                &nbsp;zapoznałem się z polityką prywatności i zostałem/am poinformowany, kto jest administratorem danych, w jakim celu będą one przetwarzane
                oraz jakie prawa mi przysługują.
              </p>
            </FormCheckField>
            <FormSubmit isExecuting={isExecuting} onResetClicked={onResetClicked} />
          </form>
        </AllFieldErrorsProvider>
      </FormProvider>
      {feedback}
    </MotionArticle>
  );
}
