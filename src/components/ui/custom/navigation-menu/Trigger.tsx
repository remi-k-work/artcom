// component css styles
import styles from "./Trigger.module.css";

// react
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";

// other libraries
import { cn } from "@/lib/utils";
import { Trigger as RdxTrigger } from "@radix-ui/react-navigation-menu";

// assets
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const Trigger = forwardRef<ElementRef<typeof RdxTrigger>, ComponentPropsWithoutRef<typeof RdxTrigger>>(({ className, children, ...props }, ref) => (
  <RdxTrigger ref={ref} className={cn(styles["trigger"], className)} {...props}>
    {children} <ChevronDownIcon width={24} height={24} className={styles["caret-down"]} aria-hidden="true" />
  </RdxTrigger>
));
Trigger.displayName = RdxTrigger.displayName;

export default Trigger;
