import { create } from "zustand";
import { userRows } from "./data";

const useUserStore = create((set) => ({
  rows: userRows,
  setRows: (rows) => set({ rows }),
}));

export default useUserStore;
