// next
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";

// payload and db access
import { getLatestPost } from "@/db/posts";
import type { Media } from "@/payload-types";

// other libraries
import { formatDate } from "@/lib/formatters";

// components
import { Button } from "@/components/ui/custom/button";
import Hero from "@/components/hero-e";
import Secondary from "@/components/secondary";
import PostsList from "@/components/PostsList";
import { DRAW, MotionPath, MotionSvg } from "@/components/AnimComps";

// assets
import { InformationCircleIcon } from "@heroicons/react/24/outline";

export const metadata: Metadata = {
  title: "ArtCom ► Blog",
};

export default async function Page() {
  // Gather all of the information about the latest post, but only the enabled one
  const docs = await getLatestPost();

  if (docs.length === 0) notFound();
  const { slug, publishedAt, title, headerImage, intro } = docs[0];

  return (
    <>
      <Hero>
        <Hero.Header>
          <Hero.Header1>Blog</Hero.Header1>
          <Hero.Header2>{title}</Hero.Header2>
        </Hero.Header>
        <Hero.Icon
          icon={
            <MotionSvg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeWidth={0.5}
              stroke="hsl(var(--accent))"
              fill="currentColor"
              initial="hidden"
              whileInView="visible"
            >
              <MotionPath
                strokeLinecap="round"
                strokeLinejoin="round"
                fillRule="evenodd"
                d="M4.848 2.771A49.144 49.144 0 0 1 12 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 0 1-3.476.383.39.39 0 0 0-.297.17l-2.755 4.133a.75.75 0 0 1-1.248 0l-2.755-4.133a.39.39 0 0 0-.297-.17 48.9 48.9 0 0 1-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97Z"
                clipRule="evenodd"
                variants={DRAW}
              />
            </MotionSvg>
          }
        />
        <Hero.Content contentImage={headerImage as Media}>
          <p>{intro}</p>
        </Hero.Content>
        <Hero.Footer>
          <Hero.Footer1>
            <Button asChild>
              <Link href={`/blog/${slug}`}>
                <InformationCircleIcon width={24} height={24} />
                Czytaj więcej
              </Link>
            </Button>
          </Hero.Footer1>
          <Hero.Footer2>{formatDate(publishedAt)}</Hero.Footer2>
        </Hero.Footer>
      </Hero>
      <Secondary header="Podróż w czasie przez nasz Blog">
        <PostsList />
      </Secondary>
    </>
  );
}
