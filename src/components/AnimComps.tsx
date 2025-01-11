"use client";

// react
import { ComponentPropsWithoutRef } from "react";

// next
import Link from "next/link";

// other libraries
import { motion, MotionProps, Variants } from "motion/react";
import { useUserSettingsStore } from "@/stores/userSettingsProvider";

// components
import Accordion from "@/components/ui/custom/accordion";
import { default as AccordionItem } from "@/components/ui/custom/accordion/Item";

// types
type MotionAccordionProps = {
  initial?: MotionProps["initial"];
  whileInView?: MotionProps["whileInView"];
  transition?: MotionProps["transition"];
  variants?: MotionProps["variants"];
} & ComponentPropsWithoutRef<typeof Accordion>;

type MotionAccordionItemProps = {
  initial?: MotionProps["initial"];
  whileInView?: MotionProps["whileInView"];
  transition?: MotionProps["transition"];
  variants?: MotionProps["variants"];
} & ComponentPropsWithoutRef<typeof AccordionItem>;

interface MotionUnListProps extends ComponentPropsWithoutRef<"ul"> {
  initial?: MotionProps["initial"];
  whileInView?: MotionProps["whileInView"];
  transition?: MotionProps["transition"];
  variants?: MotionProps["variants"];
}

interface MotionListItemProps extends ComponentPropsWithoutRef<"li"> {
  initial?: MotionProps["initial"];
  whileInView?: MotionProps["whileInView"];
  transition?: MotionProps["transition"];
  variants?: MotionProps["variants"];
}

interface MotionLinkProps extends ComponentPropsWithoutRef<typeof Link> {
  initial?: MotionProps["initial"];
  whileInView?: MotionProps["whileInView"];
  transition?: MotionProps["transition"];
  variants?: MotionProps["variants"];
}

interface MotionArticleProps extends ComponentPropsWithoutRef<"article"> {
  initial: MotionProps["initial"];
  whileInView: MotionProps["whileInView"];
  transition?: MotionProps["transition"];
  variants?: MotionProps["variants"];
}

interface MotionSvgProps extends ComponentPropsWithoutRef<"svg"> {
  initial: MotionProps["initial"];
  whileInView: MotionProps["whileInView"];
}

interface MotionPathProps extends ComponentPropsWithoutRef<"path"> {
  variants: MotionProps["variants"];
}

const Motion_Accordion = motion.create(Accordion);
const Motion_AccordionItem = motion.create(AccordionItem);
const Motion_Link = motion.create(Link);
const Motion_Article = motion.create("article");
const Motion_Svg = motion.create("svg");
const Motion_Path = motion.create("path");
const Motion_UnList = motion.create("ul");
const Motion_ListItem = motion.create("li");

export const FADE_IN = { initial: { opacity: 0 }, whileInView: { opacity: 1 }, transition: { duration: 1 } } satisfies MotionProps;

export const BANNER_LIST_VAR = {
  hidden: { opacity: 0, transition: { when: "afterChildren" } },
  visible: { opacity: 1, transition: { when: "beforeChildren", staggerChildren: 0.3 } },
} satisfies Variants;
export const BANNER_ITEM_VAR = {
  hidden: { opacity: 0, scale: 0, rotate: 180 },
  visible: { opacity: 1, scale: 1, rotate: 0, transition: { duration: 1 } },
} satisfies Variants;

export const ACCORDION_LIST_VAR = {
  hidden: { opacity: 0, transition: { when: "afterChildren" } },
  visible: { opacity: 1, transition: { when: "beforeChildren", staggerChildren: 0.3 } },
} satisfies Variants;
export const ACCORDION_ITEM_VAR_L = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
} satisfies Variants;
export const ACCORDION_ITEM_VAR_R = {
  hidden: { opacity: 0, x: +100 },
  visible: { opacity: 1, x: 0 },
} satisfies Variants;

export const DRAW = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: { pathLength: 1, opacity: 1, transition: { pathLength: { type: "spring", duration: 10, bounce: 0 }, opacity: { duration: 0.25 } } },
} satisfies Variants;

export function MotionUnList({ initial, whileInView, transition, variants, ...props }: MotionUnListProps) {
  // Are the animations enabled or disabled by the user?
  const enableAnim = useUserSettingsStore((state) => state.enableAnim);

  if (enableAnim)
    return (
      <Motion_UnList
        initial={initial}
        whileInView={whileInView}
        transition={transition}
        variants={variants}
        viewport={{ once: true }}
        {...(props as ComponentPropsWithoutRef<typeof Motion_UnList>)}
      />
    );
  return <ul {...props} />;
}

export function MotionListItem({ initial, whileInView, transition, variants, ...props }: MotionListItemProps) {
  // Are the animations enabled or disabled by the user?
  const enableAnim = useUserSettingsStore((state) => state.enableAnim);

  if (enableAnim)
    return (
      <Motion_ListItem
        initial={initial}
        whileInView={whileInView}
        transition={transition}
        variants={variants}
        viewport={{ once: true }}
        {...(props as ComponentPropsWithoutRef<typeof Motion_ListItem>)}
      />
    );
  return <li {...props} />;
}

export function MotionAccordion({ initial, whileInView, transition, variants, ...props }: MotionAccordionProps) {
  // Are the animations enabled or disabled by the user?
  const enableAnim = useUserSettingsStore((state) => state.enableAnim);

  if (enableAnim)
    return (
      <Motion_Accordion
        initial={initial}
        whileInView={whileInView}
        transition={transition}
        variants={variants}
        viewport={{ once: true }}
        {...(props as ComponentPropsWithoutRef<typeof Motion_Accordion>)}
      />
    );
  return <Accordion {...props} />;
}

export function MotionAccordionItem({ initial, whileInView, transition, variants, ...props }: MotionAccordionItemProps) {
  // Are the animations enabled or disabled by the user?
  const enableAnim = useUserSettingsStore((state) => state.enableAnim);

  if (enableAnim)
    return (
      <Motion_AccordionItem
        initial={initial}
        whileInView={whileInView}
        transition={transition}
        variants={variants}
        viewport={{ once: true }}
        {...(props as ComponentPropsWithoutRef<typeof Motion_AccordionItem>)}
      />
    );
  return <AccordionItem {...props} />;
}

export function MotionLink({ initial, whileInView, transition, variants, ...props }: MotionLinkProps) {
  // Are the animations enabled or disabled by the user?
  const enableAnim = useUserSettingsStore((state) => state.enableAnim);

  if (enableAnim)
    return (
      <Motion_Link
        initial={initial}
        whileInView={whileInView}
        transition={transition}
        variants={variants}
        viewport={{ once: true }}
        {...(props as ComponentPropsWithoutRef<typeof Motion_Link>)}
      />
    );
  return <Link {...props} />;
}

export function MotionArticle({ initial, whileInView, transition, variants, ...props }: MotionArticleProps) {
  // Are the animations enabled or disabled by the user?
  const enableAnim = useUserSettingsStore((state) => state.enableAnim);

  if (enableAnim)
    return (
      <Motion_Article
        initial={initial}
        whileInView={whileInView}
        transition={transition}
        variants={variants}
        viewport={{ once: true }}
        {...(props as ComponentPropsWithoutRef<typeof Motion_Article>)}
      />
    );
  return <article {...props} />;
}

export function MotionSvg({ initial, whileInView, ...props }: MotionSvgProps) {
  // Are the animations enabled or disabled by the user?
  const enableAnim = useUserSettingsStore((state) => state.enableAnim);

  if (enableAnim)
    return <Motion_Svg initial={initial} whileInView={whileInView} viewport={{ once: true }} {...(props as ComponentPropsWithoutRef<typeof Motion_Svg>)} />;
  return <svg {...props} />;
}

export function MotionPath({ variants, ...props }: MotionPathProps) {
  // Are the animations enabled or disabled by the user?
  const enableAnim = useUserSettingsStore((state) => state.enableAnim);

  if (enableAnim) return <Motion_Path variants={variants} {...(props as ComponentPropsWithoutRef<typeof Motion_Path>)} />;
  return <path {...props} />;
}
