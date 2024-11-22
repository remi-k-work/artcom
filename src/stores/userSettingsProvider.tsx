"use client";

// react
import { ReactNode, createContext, useRef, useContext } from "react";

// other libraries
import { useStore } from "zustand";
import { UserSettingsStore, UserSettingsStoreApi, createUserSettingsStore } from "./userSettings";

// types
interface UserSettingsProviderProps {
  children: ReactNode;
}

const UserSettingsStoreContext = createContext<UserSettingsStoreApi | undefined>(undefined);

export const UserSettingsStoreProvider = ({ children }: UserSettingsProviderProps) => {
  const storeRef = useRef<UserSettingsStoreApi>(undefined);
  if (!storeRef.current) storeRef.current = createUserSettingsStore();

  return <UserSettingsStoreContext.Provider value={storeRef.current}>{children}</UserSettingsStoreContext.Provider>;
};

export const useUserSettingsStore = <T,>(selector: (store: UserSettingsStore) => T): T => {
  const userSettingsStoreContext = useContext(UserSettingsStoreContext);
  if (!userSettingsStoreContext) throw new Error("useUserSettingsStore must be used within a UserSettingsStoreProvider.");
  return useStore(userSettingsStoreContext, selector);
};
