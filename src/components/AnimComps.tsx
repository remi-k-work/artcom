"use client";

// react
import { ComponentPropsWithoutRef } from "react";

// next
import Link from "next/link";

// other libraries
import { motion, MotionProps, Variants } from "framer-motion";

// types
interface MotionLinkProps extends ComponentPropsWithoutRef<typeof Link> {
  initial: MotionProps["initial"];
  whileInView: MotionProps["whileInView"];
  transition: MotionProps["transition"];
}

interface MotionArticleProps extends ComponentPropsWithoutRef<"article"> {
  initial: MotionProps["initial"];
  whileInView: MotionProps["whileInView"];
  transition: MotionProps["transition"];
}

interface MotionSvgProps extends ComponentPropsWithoutRef<"svg"> {
  initial: MotionProps["initial"];
  whileInView: MotionProps["whileInView"];
}

interface MotionPathProps extends ComponentPropsWithoutRef<"path"> {
  variants: MotionProps["variants"];
}

// The global animation feature flag
const ENABLE_ANIM = true;

const Motion_Link = motion.create(Link);
const Motion_Article = motion.create("article");
const Motion_Svg = motion.create("svg");
const Motion_Path = motion.create("path");

export const FADE_IN = { initial: { opacity: 0 }, whileInView: { opacity: 1 }, transition: { duration: 3, type: "spring" } } satisfies MotionProps;
export const DRAW = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: { pathLength: 1, opacity: 1, transition: { pathLength: { type: "spring", duration: 10, bounce: 0 }, opacity: { duration: 0.25 } } },
} satisfies Variants;

export function MotionLink({ initial, whileInView, transition, ...props }: MotionLinkProps) {
  if (ENABLE_ANIM)
    return <Motion_Link initial={initial} whileInView={whileInView} transition={transition} {...(props as ComponentPropsWithoutRef<typeof Motion_Link>)} />;
  return <Link {...props} />;
}

export function MotionArticle({ initial, whileInView, transition, ...props }: MotionArticleProps) {
  if (ENABLE_ANIM)
    return (
      <Motion_Article initial={initial} whileInView={whileInView} transition={transition} {...(props as ComponentPropsWithoutRef<typeof Motion_Article>)} />
    );
  return <article {...props} />;
}

export function MotionSvg({ initial, whileInView, ...props }: MotionSvgProps) {
  if (ENABLE_ANIM) return <Motion_Svg initial={initial} whileInView={whileInView} {...(props as ComponentPropsWithoutRef<typeof Motion_Svg>)} />;
  return <svg {...props} />;
}

export function MotionPath({ variants, ...props }: MotionPathProps) {
  if (ENABLE_ANIM) return <Motion_Path variants={variants} {...(props as ComponentPropsWithoutRef<typeof Motion_Path>)} />;
  return <path {...props} />;
}
