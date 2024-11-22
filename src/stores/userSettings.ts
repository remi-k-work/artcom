// other libraries
import { createStore } from "zustand/vanilla";
import { persist } from "zustand/middleware";

// types
export interface UserSettingsState {
  enableAnim: boolean;
  theme?: string;
}

interface UserSettingsActions {
  animToggled: () => void;
  themeChanged: (theme: string) => void;
}

export type UserSettingsStore = UserSettingsState & UserSettingsActions;
export type UserSettingsStoreApi = ReturnType<typeof createUserSettingsStore>;

const defaultInitState: UserSettingsState = {
  enableAnim: true,
  theme: undefined,
};

export const createUserSettingsStore = (initState: UserSettingsState = defaultInitState) => {
  return createStore<UserSettingsStore>()(
    persist(
      (set) => ({
        ...initState,
        animToggled: () => set((state) => ({ enableAnim: !state.enableAnim })),
        themeChanged: (theme) => set(() => ({ theme })),
      }),
      { name: "userSettings" },
    ),
  );
};
