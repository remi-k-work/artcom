// component css styles
import styles from "./Toastify.module.css";

// react
import { ReactNode, useEffect, useRef, useState } from "react";

// other libraries
import { cn } from "@/lib/utils";

// types
interface ToastifyProps {
  hPos?: "start" | "center" | "end";
  vPos?: "top" | "middle" | "bottom";
  type?: "info" | "success" | "warning";
  onTimedOut: () => void;
  children: ReactNode;
}

export default function Toastify({ hPos = "end", vPos = "bottom", type = "info", onTimedOut, children }: ToastifyProps) {
  // To maintain referential equality and minimize excessive effect dependencies
  const onTimedOutRef = useRef(onTimedOut);

  // Whether toastify should begin hiding itself
  const [isHiding, setIsHiding] = useState(false);

  useEffect(() => {
    // Start the hiding animation 3 seconds before unmounting this toastify
    const isHidingId = setTimeout(() => setIsHiding(true), 3000);

    // On timeout, the parent component will unmount this toastify in its "ontimedout" event handler
    const timeoutId = setTimeout(onTimedOutRef.current, 6000);

    return () => {
      clearTimeout(isHidingId);
      clearTimeout(timeoutId);
    };
  }, []);

  return <article className={cn(styles["toast"], styles[hPos], styles[vPos], styles[type], isHiding && styles["toast--hide"])}>{children}</article>;
}
