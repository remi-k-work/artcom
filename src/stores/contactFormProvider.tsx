"use client";

// react
import { ReactNode, createContext, useRef, useContext } from "react";

// other libraries
import { useStore } from "zustand";
import { ContactFormStore, ContactFormStoreApi, createContactFormStore } from "./contactForm";

// types
interface ContactFormProviderProps {
  children: ReactNode;
}

const ContactFormStoreContext = createContext<ContactFormStoreApi | undefined>(undefined);

export const ContactFormStoreProvider = ({ children }: ContactFormProviderProps) => {
  const storeRef = useRef<ContactFormStoreApi>();
  if (!storeRef.current) storeRef.current = createContactFormStore();

  return <ContactFormStoreContext.Provider value={storeRef.current}>{children}</ContactFormStoreContext.Provider>;
};

export const useContactFormStore = <T,>(selector: (store: ContactFormStore) => T): T => {
  const contactFormStoreContext = useContext(ContactFormStoreContext);
  if (!contactFormStoreContext) throw new Error("useContactFormStore must be used within a ContactFormStoreProvider.");
  return useStore(contactFormStoreContext, selector);
};
