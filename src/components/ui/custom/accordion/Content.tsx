// component css styles
import styles from "./Content.module.css";

// react
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";

// other libraries
import { cn } from "@/lib/utils";
import { Content as RdxContent } from "@radix-ui/react-accordion";

const Content = forwardRef<ElementRef<typeof RdxContent>, ComponentPropsWithoutRef<typeof RdxContent>>(({ className, children, ...props }, ref) => (
  <RdxContent ref={ref} className={cn(styles["content"], className)} {...props}>
    <article>{children}</article>
  </RdxContent>
));
Content.displayName = RdxContent.displayName;

export default Content;
