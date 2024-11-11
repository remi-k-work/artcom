// component css styles
import styles from "./index.module.css";

// react
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";

// other libraries
import { cn } from "@/lib/utils";
import { Root as RdxRoot } from "@radix-ui/react-accordion";

const Accordion = forwardRef<ElementRef<typeof RdxRoot>, ComponentPropsWithoutRef<typeof RdxRoot>>(({ className, ...props }, ref) => (
  <RdxRoot ref={ref} className={cn(styles["root"], className)} {...props} />
));
Accordion.displayName = RdxRoot.displayName;

export default Accordion;
