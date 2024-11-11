// react
import { useCallback, useEffect, useRef } from "react";

export default function useIsMounted() {
  // Is the component currently mounted?
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;

    return () => {
      isMounted.current = false;
    };
  }, []);

  return useCallback(() => isMounted.current, []);
}
