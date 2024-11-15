"use client";

// component css styles
import styles from "./index.module.css";

// react
import { ReactNode } from "react";

// next
import Link from "next/link";

// other libraries
import { motion } from "motion/react";

// components
import { Button } from "@/components/ui/custom/button";
import Header from "./Header";
import Content from "./Content";

// assets
import { InformationCircleIcon } from "@heroicons/react/24/outline";

// types
interface CourseProps {
  detailsHref: string;
  children: ReactNode;
}

export default function Course({ detailsHref, children }: CourseProps) {
  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 3, type: "spring" }}>
      <Link href={detailsHref} className={styles["course"]}>
        {children}
        <footer>
          <Button type="button">
            <InformationCircleIcon width={24} height={24} />
            Czytaj więcej
          </Button>
        </footer>
      </Link>
    </motion.div>
  );
}

export { Header as CourseHeader, Content as CourseContent };
