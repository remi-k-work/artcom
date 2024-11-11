// other libraries
import { createStore } from "zustand/vanilla";

// types
export interface ContactFormState {
  name: string;
  email: string;
  telno: string;
  message: string;
  regulations: boolean;
}

interface ContactFormActions {
  nameChanged: (name: string) => void;
  emailChanged: (email: string) => void;
  telnoChanged: (telno: string) => void;
}

export type ContactFormStore = ContactFormState & ContactFormActions;
export type ContactFormStoreApi = ReturnType<typeof createContactFormStore>;

const defaultInitState: ContactFormState = {
  name: "",
  email: "",
  telno: "",
  message: "",
  regulations: false,
};

export const createContactFormStore = (initState: ContactFormState = defaultInitState) => {
  return createStore<ContactFormStore>()((set) => ({
    ...initState,
    nameChanged: (name) => set(() => ({ name })),
    emailChanged: (email) => set(() => ({ email })),
    telnoChanged: (telno) => set(() => ({ telno })),
  }));
};
