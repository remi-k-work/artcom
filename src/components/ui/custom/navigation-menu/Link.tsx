// component css styles
import styles from "./Link.module.css";

// react
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";

// next
import { usePathname } from "next/navigation";
import { default as NextLink } from "next/link";

// other libraries
import { Link as RdxLink } from "@radix-ui/react-navigation-menu";

const Link = forwardRef<ElementRef<typeof RdxLink>, ComponentPropsWithoutRef<typeof RdxLink>>(({ href, className, children, ...props }, ref) => {
  const pathname = usePathname();
  const isActive = href === pathname;

  return (
    <RdxLink ref={ref} asChild active={isActive} {...props}>
      <NextLink href={href!} className={styles["link"]}>
        <div className={className}>{children}</div>
      </NextLink>
    </RdxLink>
  );
});
Link.displayName = RdxLink.displayName;

export default Link;
