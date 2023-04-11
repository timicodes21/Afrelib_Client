import { LOCAL_STORAGE_KEY } from "@/data/constants";

export const clearLocalStorage = () => {
  localStorage.removeItem(LOCAL_STORAGE_KEY);
};
