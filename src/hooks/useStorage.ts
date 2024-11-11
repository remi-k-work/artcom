// react
import { Dispatch, SetStateAction, useEffect, useState, useRef } from "react";

// The component is rendering on the server side
const IS_SERVER = typeof window === "undefined";

export function useLocalStorage<T>(key: string, initialValue: T | (() => T)) {
  return useStorage(key, initialValue, IS_SERVER ? undefined : localStorage);
}

export function useSessionStorage<T>(key: string, initialValue: T | (() => T)) {
  return useStorage(key, initialValue, IS_SERVER ? undefined : sessionStorage);
}

function useStorage<T>(key: string, initialValue: T | (() => T), webStorage?: Storage): [T, Dispatch<SetStateAction<T | undefined>>] {
  const initialValueToUse = initialValue instanceof Function ? initialValue() : initialValue;

  // To maintain referential equality and minimize excessive effect dependencies
  const webStorageRef = useRef(webStorage);

  // The original state that will eventually come from web storage
  const [storedValue, setStoredValue] = useState<T>();

  // Use an effect hook in order to prevent ssr inconsistencies and errors
  // This will update the state with the value from the web storage after the first initial value is applied
  useEffect(() => {
    function getStoredValue() {
      try {
        // We can use web storage now, so retrieve the stored value
        const item = webStorageRef.current?.getItem(key);
        return item ? (JSON.parse(item) as T) : initialValueToUse;
      } catch (error) {
        // In case of any errors, fallback to the initial value
        return initialValueToUse;
      }
    }

    // Set the value from web storage
    setStoredValue(getStoredValue());
  }, [key, initialValueToUse]);

  // Instead of replacing the setstate function, react to changes; whenever the state value changes, save it in the web storage
  useEffect(() => {
    // When the first load is complete, we will have either the initial or stored value
    if (storedValue) {
      try {
        webStorageRef.current?.setItem(key, JSON.stringify(storedValue));
      } catch (error) {}
    }
  }, [key, storedValue]);

  // Return the original usestate functions
  return [storedValue as T, setStoredValue];
}
