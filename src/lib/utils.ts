import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export default function getExpAuthTime() {
  return new Date(Date.now() + Number(process.env.AUTH_EXP_TIME) * 1000);
}

const RANDOM_CHARS = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

export function generateRandomString(length: number) {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += RANDOM_CHARS.charAt(Math.floor(Math.random() * RANDOM_CHARS.length));
  }
  return result;
}
