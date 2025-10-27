
import { create } from "zustand";

export const useUIStore = create((set) => ({
  isSidebarOpen: true,
  toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),

  // Active menu selection across the workspace
  activeMenu: "Painel",
  setActiveMenu: (name) => set(() => ({ activeMenu: name })),
}));
