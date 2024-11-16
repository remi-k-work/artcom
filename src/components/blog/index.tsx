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
interface BlogProps {
  detailsHref: string;
  blogDate: string;
  children: ReactNode;
}

const MotionLink = motion.create(Link);

export default function Blog({ detailsHref, blogDate, children }: BlogProps) {
  return (
    <MotionLink
      href={detailsHref}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 3, type: "spring" }}
      className={styles["blog"]}
    >
      {children}
      <footer>
        <section className={styles["footer__footer1"]}>
          <Button type="button">
            <InformationCircleIcon width={24} height={24} />
            Czytaj więcej
          </Button>
        </section>
        <section className={styles["footer__footer2"]}>{blogDate}</section>
      </footer>
    </MotionLink>
  );
}

export { Header as BlogHeader, Content as BlogContent };
