// react
import { RefObject, useEffect, useRef } from "react";

export default function useEventListener(
  eventType: string,
  listener: (ev: Event | MediaQueryListEvent) => void,
  elementRef?: RefObject<HTMLElement | undefined> | RefObject<MediaQueryList | undefined>,
) {
  // The reference to the event listener
  const listenerRef = useRef(listener);

  useEffect(() => {
    // Save the reference to the event listener for later use
    listenerRef.current = listener;
  }, [listener]);

  useEffect(() => {
    // If no element is provided, the event listener will be attached to the window by default
    const element: HTMLElement | MediaQueryList | Window = elementRef?.current ?? window;

    // Extract the event handler function from the event listener reference
    const handler: typeof listener = (ev) => listenerRef.current(ev);

    // Finally, attach the event listener to the provided element
    element.addEventListener(eventType, handler);

    // Cleanup and automatically detach the event listener from the provided element (when the component unmounts)
    return () => element.removeEventListener(eventType, handler);
  }, [elementRef, eventType]);
}
