// react
import { ReactNode, useCallback, useState, useRef, useEffect } from "react";

// other libraries
import { FormActionResult } from "@/lib/formActionTypes";
import { useContactFormStore } from "@/stores/contactFormProvider";

// components
import Toastify from "@/components/Toastify";

// assets
import { CheckBadgeIcon, CircleStackIcon, ClipboardDocumentCheckIcon } from "@heroicons/react/24/outline";

// types
interface UseContactActionFeedbackProps {
  onResetClicked: () => void;
}

export default function useContactActionFeedback({ onResetClicked }: UseContactActionFeedbackProps) {
  // Are we prepared to provide feedback to the user?
  const [feedback, setFeedback] = useState<ReactNode>(undefined);

  const name = useContactFormStore((state) => state.name);
  const nameRef = useRef(name);

  const email = useContactFormStore((state) => state.email);
  const emailRef = useRef(email);

  const telno = useContactFormStore((state) => state.telno);
  const telnoRef = useRef(telno);

  useEffect(() => {
    nameRef.current = name;
    emailRef.current = email;
    telnoRef.current = telno;
  }, [name, email, telno]);

  const showFeedback = useCallback(
    (actionStatus: FormActionResult["actionStatus"]) => {
      if (actionStatus === "succeeded") {
        setFeedback(
          <Toastify type={"success"} onTimedOut={() => onResetClicked()}>
            <CheckBadgeIcon width={64} height={64} className="m-auto" />
            <p className="text-center font-font-1 text-xl">Dziękujemy!</p>
            <p className="text-center">Twoja wiadomość została wysłana!</p>
            <div className="m-auto max-w-72 overflow-x-auto">
              <table className="m-auto border-separate border border-accent-foreground text-center">
                <tbody>
                  <tr>
                    <th className="bg-accent-foreground p-2 uppercase text-accent">Imię i nazwisko</th>
                  </tr>
                  <tr>
                    <td className="p-2">{nameRef.current}</td>
                  </tr>
                  <tr>
                    <th className="bg-accent-foreground p-2 uppercase text-accent">Twój e-mail</th>
                  </tr>
                  <tr>
                    <td className="p-2">{emailRef.current}</td>
                  </tr>
                  <tr>
                    <th className="bg-accent-foreground p-2 uppercase text-accent">Nr telefonu</th>
                  </tr>
                  <tr>
                    <td className="p-2">{telnoRef.current}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Toastify>,
        );
      } else if (actionStatus === "invalid") {
        setFeedback(
          <Toastify onTimedOut={() => setFeedback(undefined)}>
            <ClipboardDocumentCheckIcon width={64} height={64} className="m-auto" />
            <p className="text-center font-font-1 text-xl">Brakujące pola!</p>
            <p className="text-center">Popraw pola formularza kontaktowego i spróbuj ponownie.</p>
          </Toastify>,
        );
      } else if (actionStatus === "failed") {
        setFeedback(
          <Toastify type={"warning"} onTimedOut={() => setFeedback(undefined)}>
            <CircleStackIcon width={64} height={64} className="m-auto" />
            <p className="text-center font-font-1 text-xl">Błąd serwera!</p>
            <p className="text-center">Wiadomość nie została pomyślnie wysłana; Spróbuj ponownie później.</p>
          </Toastify>,
        );
      }
    },
    [onResetClicked],
  );

  return { feedback, showFeedback };
}
