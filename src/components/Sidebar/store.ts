import { create } from 'zustand';

type TSideColappse = {
  open: { [key: string]: boolean };
  toggleOpen: (key: string, value: boolean) => void;
};

export const useSidebarCollapse = create<TSideColappse>((set) => ({
  open: {},
  toggleOpen: (key, val) =>
    set((state) => ({ open: { ...state.open, [key]: val } })),
}));
