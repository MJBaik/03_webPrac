import { DefaultTheme } from "styled-components";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface AuthStore {
  darkMode: boolean; // 다크모드 여부
  isAuthenticated: boolean; // 로그인 여부
  setIsAuthenticated: (by: boolean) => void;
  toggleDarkMode: () => void;
}

interface LoginStore {
  isSignup: boolean; // 로그인 화면 사이드바 회원가입 여부
  setIsSignup: (isSignup: boolean) => void;
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

const useLoginBar = create<LoginStore>((set) => ({
  isSignup: false,
  setIsSignup: (isSignup) => set(() => ({ isSignup: isSignup })),
}));

export const useAuth = () => useAuthStore((state) => state.isAuthenticated);
export const useDarkMode = () => useAuthStore((state) => state.darkMode);
export const useAuthActions = () =>
  useAuthStore((state) => state.setIsAuthenticated);
export const useToggleDarkMode = () =>
  useAuthStore((state) => state.toggleDarkMode);

export const useIsSignup = () => useLoginBar((state) => state.isSignup);
export const useSetisSignup = () => useLoginBar((state) => state.setIsSignup);
