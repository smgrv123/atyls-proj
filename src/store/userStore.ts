import { LocalStorageKeys } from "@/utils/constants";
import { create } from "zustand";

type UserStore = {
  user: string | undefined;
  setUser: (user: string) => void;
  clearUser: () => void;
};

export const userStore = create<UserStore>((set) => ({
  user: undefined,
  setUser: (user: string) => set({ user }),
  clearUser: () => {
    localStorage.removeItem(LocalStorageKeys.USER);
    set({ user: undefined });
  },
}));
