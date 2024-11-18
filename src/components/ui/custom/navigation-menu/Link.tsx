// component css styles
import styles from "./Link.module.css";

// react
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";

// next
import { usePathname } from "next/navigation";

// other libraries
import { Link as RdxLink } from "@radix-ui/react-navigation-menu";

// components
import TransitionLink from "@/components/TransitionLink";

const Link = forwardRef<ElementRef<typeof RdxLink>, ComponentPropsWithoutRef<typeof RdxLink>>(({ href, className, children, ...props }, ref) => {
  const pathname = usePathname();
  const isActive = href === pathname;

  return (
    <RdxLink ref={ref} asChild active={isActive} {...props}>
      <TransitionLink href={href!} className={styles["link"]}>
        <div className={className}>{children}</div>
      </TransitionLink>
    </RdxLink>
  );
});
Link.displayName = RdxLink.displayName;

export default Link;
