import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { CartItem } from "./store/features/cart/cartSlice"
import crypto from "node:crypto";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

function getSHA256Hash(input: string) {
  return crypto
    .createHash('sha256')
    .update(input)
    .digest('hex');
}

export function hashTheItem(payload: CartItem): string {
  // hashing
  const jsonString = JSON.stringify({ ...payload, qty: undefined });
  const hash = getSHA256Hash(jsonString).toString();
  return hash
}