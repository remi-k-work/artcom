// react
import { useEffect } from "react";

// other libraries
import useMediaQuery from "./useMediaQuery";
import { useLocalStorage } from "./useStorage";

// types
interface DarkModeReturn {
  isDarkMode: boolean | undefined;
  toggle: () => void;
}

const COLOR_SCHEME_QUERY = "(prefers-color-scheme: dark)";
const LOCAL_STORAGE_KEY = "theme";
const THEME_ATTRIBUTE = "data-theme";

export default function useDarkMode(darkThemeAlias: string, lightThemeAlias: string): DarkModeReturn {
  // We will try to figure out whether or not the user prefers the dark mode
  const prefersDarkMode = useMediaQuery(COLOR_SCHEME_QUERY);

  // When executed on the server, the above media query cannot be established and returns undefined
  // However, when a component renders on the client, we can set the default theme based on the user's preferences
  const defaultTheme = prefersDarkMode !== undefined ? (prefersDarkMode ? darkThemeAlias : lightThemeAlias) : undefined;

  // Try to load the last theme selected; otherwise, fallback to the user's operating system preference
  const [theme, setTheme] = useLocalStorage(LOCAL_STORAGE_KEY, defaultTheme);

  // Are we currently in dark mode?
  const isDarkMode = theme !== undefined ? theme === darkThemeAlias : undefined;

  useEffect(() => {
    if (theme) {
      // Set the theme attribute at the document's global level
      document.documentElement.setAttribute(THEME_ATTRIBUTE, theme);
    }
  }, [theme]);

  return { isDarkMode, toggle: () => setTheme(isDarkMode ? lightThemeAlias : darkThemeAlias) };
}
