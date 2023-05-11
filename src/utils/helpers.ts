import { LOCAL_STORAGE_KEY } from "@/data/constants";

export const clearLocalStorage = () => {
  localStorage.removeItem(LOCAL_STORAGE_KEY);
};

export const sliceText = (maxLength: number, text: string): string => {
  return text.slice(0, maxLength) + (text.length > maxLength ? "..." : "");
};
