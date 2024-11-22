"use client";

// component css styles
import styles from "./Theme.module.css";

// react
import { useEffect } from "react";

// other libraries
import useMediaQuery from "@/hooks/useMediaQuery";
import { useUserSettingsStore } from "@/stores/userSettingsProvider";

// components
import { Button } from "@/components/ui/custom/button";

// assets
import { BoltIcon, BoltSlashIcon, MoonIcon, SunIcon } from "@heroicons/react/24/solid";

const COLOR_SCHEME_QUERY = "(prefers-color-scheme: dark)";
const THEME_ATTRIBUTE = "data-theme";
const DARK_THEME_ALIAS = "dark";
const LIGHT_THEME_ALIAS = "light";

export default function Theme() {
  // Are the animations enabled or disabled by the user?
  const enableAnim = useUserSettingsStore((state) => state.enableAnim);
  const animToggled = useUserSettingsStore((state) => state.animToggled);

  // We will try to figure out whether or not the user prefers the dark mode
  const prefersDarkMode = useMediaQuery(COLOR_SCHEME_QUERY);

  // When executed on the server, the above media query cannot be established and returns undefined
  // However, when a component renders on the client, we can set the default theme based on the user's preferences
  const defaultTheme = prefersDarkMode !== undefined ? (prefersDarkMode ? DARK_THEME_ALIAS : LIGHT_THEME_ALIAS) : undefined;

  // Try to load the last theme selected; otherwise, fallback to the user's operating system preference
  const theme = useUserSettingsStore((state) => state.theme) ?? defaultTheme;
  const themeChanged = useUserSettingsStore((state) => state.themeChanged);

  useEffect(() => {
    if (theme) {
      // Set the theme attribute at the document's global level
      document.documentElement.setAttribute(THEME_ATTRIBUTE, theme);
    }
  }, [theme]);

  return (
    <section className={styles["theme"]}>
      <Button type="button" size="icon" variant="ghost" title={enableAnim ? "Wyłącz Animację" : "Włącz Animację"} onClick={animToggled}>
        {enableAnim ? (
          <BoltIcon width={24} height={24} className="size-9 flex-none lg:size-6" />
        ) : (
          <BoltSlashIcon width={24} height={24} className="size-9 flex-none lg:size-6" />
        )}
      </Button>
      <Button
        type="button"
        size="icon"
        variant="ghost"
        title={theme && (theme === DARK_THEME_ALIAS ? "Jasny Motyw" : "Ciemny Motyw")}
        onClick={() => themeChanged(theme === DARK_THEME_ALIAS ? LIGHT_THEME_ALIAS : DARK_THEME_ALIAS)}
      >
        {theme &&
          (theme === DARK_THEME_ALIAS ? (
            <SunIcon width={24} height={24} className="size-9 flex-none lg:size-6" />
          ) : (
            <MoonIcon width={24} height={24} className="size-9 flex-none lg:size-6" />
          ))}
      </Button>
    </section>
  );
}
