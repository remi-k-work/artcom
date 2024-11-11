// component css styles
import styles from "./Item.module.css";

// react
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";

// other libraries
import { cn } from "@/lib/utils";
import { Item as RdxItem } from "@radix-ui/react-accordion";

const Item = forwardRef<ElementRef<typeof RdxItem>, ComponentPropsWithoutRef<typeof RdxItem>>(({ className, ...props }, ref) => (
  <RdxItem ref={ref} className={cn(styles["item"], className)} {...props} />
));
Item.displayName = RdxItem.displayName;

export default Item;
