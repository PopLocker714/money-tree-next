"use client";
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

export interface ICartItem {
  id: string;
  quantity: number;
}

interface CartContextType {
  cart: Record<string, ICartItem>;
  setCart: (cart: Record<string, ICartItem>) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCartState] = useState<Record<string, ICartItem>>({});
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    if (typeof window !== "undefined") {
      const savedCart = localStorage.getItem("cart");
      setCartState(savedCart ? JSON.parse(savedCart) : {});
    }
  }, []);

  useEffect(() => {
    if (isMounted) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, isMounted]);

  const setCart = (newCart: Record<string, ICartItem>) => {
    setCartState(newCart);
  };

  if (!isMounted) {
    // Возвращаем пустой элемент при первом рендеринге, чтобы избежать расхождений между сервером и клиентом
    return null;
  }

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
