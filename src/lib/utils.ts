import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import stc from "string-to-color";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export const stringToColor = (str: string) => {
  return stc(str);
};
