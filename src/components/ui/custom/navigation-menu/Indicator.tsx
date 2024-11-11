// component css styles
import styles from "./Indicator.module.css";

// react
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";

// other libraries
import { cn } from "@/lib/utils";
import { Indicator as RdxIndicator } from "@radix-ui/react-navigation-menu";

// assets
import { ChevronUpDownIcon } from "@heroicons/react/24/outline";

const Indicator = forwardRef<ElementRef<typeof RdxIndicator>, ComponentPropsWithoutRef<typeof RdxIndicator>>(({ className, ...props }, ref) => (
  <RdxIndicator ref={ref} className={cn(styles["indicator"], className)} {...props}>
    <ChevronUpDownIcon width={24} height={24} />
  </RdxIndicator>
));
Indicator.displayName = RdxIndicator.displayName;

export default Indicator;
