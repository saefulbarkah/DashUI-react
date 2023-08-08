import { create } from 'zustand';

type TNotifStore = {
  anchorEl: HTMLElement | null;
  setAnchorEl: (s: HTMLElement | null) => void;
};

export const useNotificationStore = create<TNotifStore>((set) => ({
  anchorEl: null,
  setAnchorEl: (element) => set({ anchorEl: element }),
}));
