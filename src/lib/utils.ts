import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export default function getExpAuthTime() {
  return new Date(Date.now() + Number(process.env.AUTH_EXP_TIME) * 1000);
}
