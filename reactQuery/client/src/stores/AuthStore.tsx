import { DefaultTheme } from "styled-components";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface AuthStore {
  darkMode: boolean;
  isAuthenticated: boolean;
  setIsAuthenticated: (by: boolean) => void;
  toggleDarkMode: () => void;
}

const useAuthStore = create(
  persist<AuthStore>(
    (set) => ({
      darkMode: false,
      isAuthenticated: false,
      setIsAuthenticated: (by) => set(() => ({ isAuthenticated: by })),
      toggleDarkMode: () =>
        set((state) => ({
          darkMode: !state.darkMode,
        })),
    }),
    { name: "user-info", storage: createJSONStorage(() => sessionStorage) }
  )
);

export const useAuth = () => useAuthStore((state) => state.isAuthenticated);
export const useDarkMode = () => useAuthStore((state) => state.darkMode);
export const useAuthActions = () =>
  useAuthStore((state) => state.setIsAuthenticated);
export const useToggleDarkMode = () =>
  useAuthStore((state) => state.toggleDarkMode);
