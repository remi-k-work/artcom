// react
import { useEffect, useState, useRef } from "react";

// other libraries
import useEventListener from "./useEventListener";

export default function useMediaQuery(mediaQuery: string) {
  // Does the document currently match the media query list?
  const [isMatch, setIsMatch] = useState<boolean>();

  // Stores information on a media query applied to a document
  const mediaQueryListRef = useRef<MediaQueryList>(undefined);

  useEffect(() => {
    // Get the immediate one-time feedback
    mediaQueryListRef.current = window.matchMedia(mediaQuery);
    setIsMatch(mediaQueryListRef.current.matches);
  }, [mediaQuery]);

  // To support event-driven matching, observe a document to detect when its media queries change
  useEventListener("change", (ev) => setIsMatch((ev as MediaQueryListEvent).matches), mediaQueryListRef);

  return isMatch;
}
