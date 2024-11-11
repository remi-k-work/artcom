// component css styles
import styles from "./Trigger.module.css";

// react
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";

// other libraries
import { cn } from "@/lib/utils";
import { Header, Trigger as RdxTrigger } from "@radix-ui/react-accordion";

// assets
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const Trigger = forwardRef<ElementRef<typeof RdxTrigger>, ComponentPropsWithoutRef<typeof RdxTrigger>>(({ className, children, ...props }, ref) => (
  <Header className="flex max-w-none">
    <RdxTrigger ref={ref} className={cn(styles["trigger"], className)} {...props}>
      {children}
      <ChevronDownIcon width={24} height={24} className={styles["caret-down"]} aria-hidden="true" />
    </RdxTrigger>
  </Header>
));
Trigger.displayName = RdxTrigger.displayName;

export default Trigger;
