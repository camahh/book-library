import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// get initials, show only 2 signs
export const getInitials = (fullName: string): string => fullName.split(" ").map(part => part[0]).join("").toUpperCase().slice(0, 2);

export const getName = (fullName: string): string => fullName.split(" ")[0];
