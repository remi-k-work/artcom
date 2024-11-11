// component css styles
import styles from "./index.module.css";

// react
import { ReactNode } from "react";

// next
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

// components
import { Button } from "@/components/ui/custom/button";

// assets
import { InformationCircleIcon } from "@heroicons/react/24/outline";

// types
interface BlogProps {
  detailsHref: string;
  blogDate: string;
  children: ReactNode;
}

interface BlogHeaderProps {
  children: ReactNode;
}

interface BlogContentProps {
  imageSrc: StaticImageData;
  children: ReactNode;
}

export default function Blog({ detailsHref, blogDate, children }: BlogProps) {
  return (
    <Link href={detailsHref} className={styles["blog"]}>
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
    </Link>
  );
}

Blog.Header = function BlogHeader({ children }: BlogHeaderProps) {
  return <h3>{children}</h3>;
};

Blog.Content = function BlogContent({ imageSrc, children }: BlogContentProps) {
  return (
    <article className="line-clamp-6 text-center sm:text-justify">
      <Image src={imageSrc} alt="" sizes="50vw" className="object-cover" />
      <p>{children}</p>
    </article>
  );
};
