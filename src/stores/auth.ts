import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface AuthState {
  bears: number;
  increase: (by: number) => void;
}

export const useAuthStore = create<AuthState>()(
  devtools(
    persist(
      (set) => ({
        bears: 0,
        increase: (by) => set((state) => ({ bears: state.bears + by })),
      }),
      {
        name: "bear-storage",
      }
    ),
    { enabled: import.meta.env.DEV }
  )
);
