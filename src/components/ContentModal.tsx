"use client";

// component css styles
import styles from "./ContentModal.module.css";

// react
import { ReactNode, useEffect, useRef, useState } from "react";

// next
import { useRouter } from "next/navigation";

// other libraries
import { cn } from "@/lib/utils";
import { delay } from "@/lib/helpers";

// components
import { Button } from "@/components/ui/custom/button";

// assets
import { XCircleIcon } from "@heroicons/react/24/solid";

// types
interface ContentModalProps {
  children: ReactNode;
}

export default function ContentModal({ children }: ContentModalProps) {
  // To be able to call showModal() method on the dialog
  const dialogRef = useRef<HTMLDialogElement>(null);

  // To be able to close the modal
  const { back } = useRouter();

  // Whether dialog should begin hiding itself
  const [isHiding, setIsHiding] = useState(false);

  useEffect(() => {
    // Show the dialog as a modal
    dialogRef.current?.showModal();
  }, []);

  return (
    <dialog
      ref={dialogRef}
      className={cn(styles["content-modal"], isHiding && styles["content-modal--hide"])}
      onClose={async () => {
        setIsHiding(true);
        await delay(500);
        back();
      }}
    >
      <form method="dialog">
        <header>
          <Button type="submit" size="icon" variant="ghost">
            <XCircleIcon width={36} height={36} />
          </Button>
        </header>
        <article>{children}</article>
      </form>
    </dialog>
  );
}
