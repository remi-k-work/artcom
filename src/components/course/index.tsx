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
interface CourseProps {
  detailsHref: string;
  children: ReactNode;
}

interface CourseHeaderProps {
  imageSrc: StaticImageData;
  children: ReactNode;
}

interface CourseContentProps {
  children: ReactNode;
}

export default function Course({ detailsHref, children }: CourseProps) {
  return (
    <Link href={detailsHref} className={styles["course"]}>
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

Course.Header = function CourseHeader({ imageSrc, children }: CourseHeaderProps) {
  return (
    <>
      <Image src={imageSrc} alt="" sizes="50vw" className={cn(styles["header__image"], "object-cover")} />
      <h3>{children}</h3>
    </>
  );
};

Course.Content = function CourseContent({ children }: CourseContentProps) {
  return (
    <article>
      <p className="line-clamp-6 text-center sm:line-clamp-4 sm:text-justify">{children}</p>
    </article>
  );
};
