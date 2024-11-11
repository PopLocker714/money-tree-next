"use client";
import { useCart } from "@/src/components/app/CardContext";
import React from "react";

export default function ProductListCart() {
  const { cart } = useCart();
  return <pre>{JSON.stringify(cart, null, 2)}</pre>;
}
