// component css styles
import styles from "./index.module.css";

// react
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";

// other libraries
import { cn } from "@/lib/utils";
import { Root as RdxRoot } from "@radix-ui/react-navigation-menu";

// components
import Viewport from "./Viewport";

const NavigationMenu = forwardRef<ElementRef<typeof RdxRoot>, ComponentPropsWithoutRef<typeof RdxRoot>>(({ className, children, ...props }, ref) => (
  <RdxRoot ref={ref} className={cn(styles["root"], className)} {...props}>
    {children}
    <Viewport />
  </RdxRoot>
));
NavigationMenu.displayName = RdxRoot.displayName;

export default NavigationMenu;
