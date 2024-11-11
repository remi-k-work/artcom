"use client";

// react
import { createContext, useContext, ReactNode } from "react";

// other libraries
import { AllFieldErrors } from "@/lib/formActionTypes";

// types
interface AllFieldErrorsContextType {
  allFieldErrors: AllFieldErrors;
}

interface AllFieldErrorsProviderProps {
  allFieldErrors: AllFieldErrors;
  children: ReactNode;
}

const AllFieldErrorsContext = createContext<AllFieldErrorsContextType | undefined>(undefined);

export function AllFieldErrorsProvider({ allFieldErrors, children }: AllFieldErrorsProviderProps) {
  return <AllFieldErrorsContext.Provider value={{ allFieldErrors }}>{children}</AllFieldErrorsContext.Provider>;
}

export function useAllFieldErrorsContext() {
  const context = useContext(AllFieldErrorsContext);
  if (context === undefined) throw new Error("useAllFieldErrorsContext must be used within a AllFieldErrorsProvider.");
  return context;
}
