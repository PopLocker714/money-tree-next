"use client";
import { useCart } from "@/src/components/app/CardContext";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function AddCart({ id, max }: { max: number; id: string }) {
  const { cart, setCart } = useCart();
  const [count, setCount] = useState<number>(cart[id]?.quantity || 0);

  useEffect(() => {
    setCount(cart[id]?.quantity || 0);
  }, [cart, id]);

  const handleUpdateCart = (newCount: number) => {
    const updatedCart = { ...cart };
    if (newCount > 0) {
      updatedCart[id] = { id, quantity: newCount };
    } else {
      delete updatedCart[id];
    }
    setCart(updatedCart);
  };

  return (
    <div>
      {count ? (
        <div className="flex items-center my-8">
          <button
            className="bg-orange-400 rounded-2xl text-center py-4 px-6 text-base border-none text-white-100 hover:bg-orange-500 disabled:bg-gray-400"
            disabled={count === 0}
            onClick={() => {
              const newCount = count - 1;
              setCount(newCount);
              handleUpdateCart(newCount);
            }}
          >
            -
          </button>

          <p className="mx-2 text-xl">{count}</p>

          <button
            className="mr-4 bg-orange-400 rounded-2xl py-4 px-6 text-base border-none text-white-100 hover:bg-orange-500 disabled:bg-gray-400"
            disabled={count === max}
            onClick={() => {
              const newCount = count + 1;
              setCount(newCount);
              handleUpdateCart(newCount);
            }}
          >
            +
          </button>
          <Link
            className="bg-orange-400 rounded-2xl py-4 px-6 text-base border-none text-white-100 hover:bg-orange-500 disabled:bg-gray-400"
            href="/cart"
          >
            Купить
          </Link>
        </div>
      ) : (
        <>
          <button
            className="bg-orange-400 rounded-2xl py-4 px-6 text-base border-none mt-8 text-white-100 hover:bg-orange-500 disabled:bg-gray-400"
            onClick={() => {
              setCount(1);
              handleUpdateCart(1);
            }}
          >
            Добавить в корзину
          </button>
        </>
      )}
    </div>
  );
}
