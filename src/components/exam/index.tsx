"use client";

// component css styles
import styles from "./index.module.css";

// react
import { ReactNode } from "react";

// next
import Link from "next/link";

// other libraries
import { motion } from "framer-motion";

// components
import { Button } from "@/components/ui/custom/button";
import Header from "./Header";
import Content from "./Content";

// assets
import { InformationCircleIcon } from "@heroicons/react/24/outline";

// types
interface ExamProps {
  detailsHref: string;
  children: ReactNode;
}

const MotionLink = motion.create(Link);

export default function Exam({ detailsHref, children }: ExamProps) {
  return (
    <MotionLink
      href={detailsHref}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 3, type: "spring" }}
      className={styles["exam"]}
    >
      {children}
      <footer>
        <Button type="button">
          <InformationCircleIcon width={24} height={24} />
          Czytaj więcej
        </Button>
      </footer>
    </MotionLink>
  );
}

export { Header as ExamHeader, Content as ExamContent };
