// component css styles
import styles from "./List.module.css";

// react
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";

// other libraries
import { cn } from "@/lib/utils";
import { List as RdxList } from "@radix-ui/react-navigation-menu";

const List = forwardRef<ElementRef<typeof RdxList>, ComponentPropsWithoutRef<typeof RdxList>>(({ className, ...props }, ref) => (
  <RdxList ref={ref} className={cn(styles["list"], className)} {...props} />
));
List.displayName = RdxList.displayName;

export default List;
