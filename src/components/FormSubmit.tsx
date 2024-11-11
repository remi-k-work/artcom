"use client";

// component css styles
import styles from "./FormSubmit.module.css";

// components
import { Button } from "@/components/ui/custom/button";

// assets
import { PaperAirplaneIcon, XCircleIcon } from "@heroicons/react/24/outline";
import { Loader2 } from "lucide-react";

// types
interface FormSubmitProps {
  isExecuting: boolean;
  onResetClicked: () => void;
}

export default function FormSubmit({ isExecuting, onResetClicked }: FormSubmitProps) {
  return (
    <section className={styles["form-submit"]}>
      <Button type="submit" disabled={isExecuting}>
        {isExecuting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Proszę czekać...
          </>
        ) : (
          <>
            <PaperAirplaneIcon width={24} height={24} />
            Wyślij
          </>
        )}
      </Button>
      <Button type="reset" variant="secondary" onClick={() => onResetClicked()}>
        <XCircleIcon width={24} height={24} />
        Reset
      </Button>
    </section>
  );
}
