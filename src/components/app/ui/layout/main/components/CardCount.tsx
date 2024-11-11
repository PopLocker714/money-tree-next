"use client";
import { useCart } from "@/src/components/app/CardContext";

export default function CardCount() {
  const { cart } = useCart();
  const totalCount = Object.values(cart).reduce((sum, item) => sum + item.quantity, 0);

  return <div>{totalCount}</div>;
}
