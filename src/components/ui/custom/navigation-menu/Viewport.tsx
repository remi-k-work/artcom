// component css styles
import styles from "./Viewport.module.css";

// react
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";

// other libraries
import { cn } from "@/lib/utils";
import { Viewport as RdxViewport } from "@radix-ui/react-navigation-menu";

const Viewport = forwardRef<ElementRef<typeof RdxViewport>, ComponentPropsWithoutRef<typeof RdxViewport>>(({ className, ...props }, ref) => (
  <div className={styles["viewport-position"]}>
    <RdxViewport ref={ref} className={cn(styles["viewport"], className)} {...props} />
  </div>
));
Viewport.displayName = RdxViewport.displayName;

export default Viewport;
