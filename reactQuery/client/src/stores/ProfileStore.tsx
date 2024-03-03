import { create } from "zustand";

interface ProfileStore {
  isUpdating: boolean;
  setIsUpdating: (by: boolean) => void;
}

const useProfileStore = create<ProfileStore>((set) => ({
  isUpdating: false,
  setIsUpdating: (by) => set(() => ({ isUpdating: by })),
}));

export const useIsUpdating = () => useProfileStore((state) => state.isUpdating);
export const useSetUpdate = () =>
  useProfileStore((state) => state.setIsUpdating);
