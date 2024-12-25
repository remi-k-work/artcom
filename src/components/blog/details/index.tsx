// component css styles
import styles from "./index.module.css";

// react
import { ReactNode } from "react";

// next
import Link from "next/link";

// payload and db access
import type { Post, PostCategory } from "@/payload-types";

// components
import Header from "./Header";
import { Content1, Content2 } from "./Content";
import Footer, { Footer1, Footer2 } from "./Footer";

// types
interface DetailsProps {
  relatedPosts: Post[];
  categories: PostCategory[];
  children: ReactNode;
}

export default function Details({ relatedPosts, categories, children }: DetailsProps) {
  return (
    <article className={styles["details"]}>
      {children}
      {(relatedPosts || categories) && (
        <aside>
          {relatedPosts && relatedPosts.length > 0 && (
            <section>
              <h3>Related Posts</h3>
              <ul>
                {relatedPosts.map(({ id, slug, title }) => (
                  <li key={id}>
                    <Link href={`/blog/${slug}`}>{title}</Link>
                  </li>
                ))}
              </ul>
            </section>
          )}
          {categories && categories.length > 0 && (
            <section>
              <h3>Categories</h3>
              <ul>
                {categories.map(({ id, name }) => (
                  <li key={id}>{name}</li>
                ))}
              </ul>
            </section>
          )}
        </aside>
      )}
    </article>
  );
}

export {
  Header as DetailsHeader,
  Content1 as DetailsContent1,
  Content2 as DetailsContent2,
  Footer as DetailsFooter,
  Footer1 as DetailsFooter1,
  Footer2 as DetailsFooter2,
};
