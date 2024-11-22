"use client";

// react
import { MouseEvent, ReactNode } from "react";

// next
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";

// other libraries
import { delay } from "@/lib/helpers";
import { useUserSettingsStore } from "@/stores/userSettingsProvider";

// types
interface TransitionLinkProps extends LinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

export default function TransitionLink({ href, children, className, onClick, ...props }: TransitionLinkProps) {
  // Are the animations enabled or disabled by the user?
  const enableAnim = useUserSettingsStore((state) => state.enableAnim);

  const router = useRouter();

  const handleTransition = async (e: MouseEvent<HTMLAnchorElement>) => {
    if (!enableAnim) {
      onClick?.(e);
      return;
    }

    e.preventDefault();
    onClick?.(e);

    const main = document.querySelector("main");

    main?.classList.add("page-transition");

    await delay(500);
    router.push(href);
    await delay(500);

    main?.classList.remove("page-transition");
  };

  return (
    <Link href={href} onClick={handleTransition} className={className} {...props}>
      {children}
    </Link>
  );
}
