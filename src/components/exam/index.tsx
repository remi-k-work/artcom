// component css styles
import styles from "./index.module.css";

// react
import { ReactNode } from "react";

// next
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

// other libraries
import { cn } from "@/lib/utils";

// components
import { Button } from "@/components/ui/custom/button";

// assets
import { InformationCircleIcon } from "@heroicons/react/24/outline";

// types
interface ExamProps {
  detailsHref: string;
  children: ReactNode;
}

interface ExamHeaderProps {
  imageSrc: StaticImageData;
  children: ReactNode;
}

interface ExamContentProps {
  children: ReactNode;
}

export default function Exam({ detailsHref, children }: ExamProps) {
  return (
    <Link href={detailsHref} className={styles["exam"]}>
      {children}
      <footer>
        <Button type="button">
          <InformationCircleIcon width={24} height={24} />
          Czytaj więcej
        </Button>
      </footer>
    </Link>
  );
}

Exam.Header = function ExamHeader({ imageSrc, children }: ExamHeaderProps) {
  return (
    <>
      <Image src={imageSrc} alt="" sizes="50vw" className={cn(styles["header__image"], "object-cover")} />
      <h3>{children}</h3>
    </>
  );
};

Exam.Content = function ExamContent({ children }: ExamContentProps) {
  return (
    <article>
      <p className="line-clamp-6 text-center sm:line-clamp-4 sm:text-justify">{children}</p>
    </article>
  );
};
