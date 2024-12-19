// component css styles
import styles from "./Footer.module.css";

// next
import Image from "next/image";

// payload and db access
import type { Exam, Media } from "@/payload-types";
import { RichText } from "@payloadcms/richtext-lexical/react";

// other libraries
import { cn } from "@/lib/utils";

// types
interface FooterProps {
  footerImage1?: Media;
  footerImage2?: Media;
  footerContent: Exam["footerContent"];
}

export default function Footer({ footerImage1, footerImage2, footerContent }: FooterProps) {
  const areBothImagesProvided = !!footerImage1 && !!footerImage2;

  return areBothImagesProvided ? (
    <footer className={styles["footer"]}>
      <Image
        src={process.env.NEXT_PUBLIC_BLOB_BASE_URL + "/" + footerImage1.filename}
        width={footerImage1.width!}
        height={footerImage1.height!}
        alt=""
        sizes="50vw"
        className={cn(styles["footer__image1"], "object-cover")}
      />
      <Image
        src={process.env.NEXT_PUBLIC_BLOB_BASE_URL + "/" + footerImage2.filename}
        width={footerImage2.width!}
        height={footerImage2.height!}
        alt=""
        sizes="50vw"
        className={cn(styles["footer__image2"], "object-cover")}
      />
      <RichText data={footerContent} disableIndent disableTextAlign className={cn(styles["footer__content"], "prose dark:prose-invert")} />;
    </footer>
  ) : (
    <footer className={cn(styles["footer"], styles["footer--one-img"])}>
      {footerImage1 && (
        <Image
          src={process.env.NEXT_PUBLIC_BLOB_BASE_URL + "/" + footerImage1.filename}
          width={footerImage1.width!}
          height={footerImage1.height!}
          alt=""
          sizes="50vw"
          className={cn(styles["footer__image1"], "object-cover")}
        />
      )}
      {footerImage2 && (
        <Image
          src={process.env.NEXT_PUBLIC_BLOB_BASE_URL + "/" + footerImage2.filename}
          width={footerImage2.width!}
          height={footerImage2.height!}
          alt=""
          sizes="50vw"
          className={cn(styles["footer__image1"], "object-cover")}
        />
      )}
      <RichText data={footerContent} disableIndent disableTextAlign className={cn(styles["footer__content"], "prose dark:prose-invert")} />;
    </footer>
  );
}
