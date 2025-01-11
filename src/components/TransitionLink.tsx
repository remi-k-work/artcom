"use client";

// react
import { MouseEvent, ReactNode, useEffect, useTransition } from "react";

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

  const [isPending, startTransition] = useTransition();

  const router = useRouter();

  useEffect(() => {
    const main = document.querySelector("main");
    if (main?.classList.contains("page-transition") && !isPending) {
      main?.classList.remove("page-transition");
    }
  }, [isPending]);

  const handleTransition = (e: MouseEvent<HTMLAnchorElement>) => {
    if (!enableAnim) {
      onClick?.(e);
      return;
    }

    e.preventDefault();

    startTransition(async () => {
      const main = document.querySelector("main");
      main?.classList.add("page-transition");

      await delay(500);
      router.push(href);
      await delay(500);
    });
  };

  return (
    <Link href={href} onClick={handleTransition} className={className} {...props}>
      {children}
    </Link>
  );
}
