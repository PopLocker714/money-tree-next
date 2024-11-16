"use client";
import { ICartProduct, ICartResponse } from "@/src/app/api/cart/route";
import { ICartItem, useCart } from "@/src/components/app/CardContext";
import React, { useEffect, useState } from "react";
import CartTable from "./CartTable";
import { CartColumn } from "./CartColumn";

const getProductsForCart = async (body: Record<string, ICartItem>) => {
  const res = await fetch("/api/cart", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  }).then((res) => res.json()).catch((err) => console.log(err));

  return res;
};

export default function ProductListCart() {
  const { cart } = useCart();
  const [products, setProducts] = useState<ICartProduct[]>([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    getProductsForCart(cart).then((res: ICartResponse) => {
      setProducts(res.products);
      setTotal(res.total);
    });
  }, [cart]);

  return (
    <div className="flex flex-col gap-4">
      <CartTable data={products} columns={CartColumn} />
      <p className="text-right">
        Итого:{" "}
        <span className="font-bold">
          {new Intl.NumberFormat("ru-RU", {
            style: "currency",
            currency: "RUB",
          }).format(total)}
        </span>
      </p>
    </div>
  );
}
