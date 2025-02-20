"use client";
import { ICartProduct } from "@/src/app/api/cart/route";
import { useCart } from "@/src/components/app/CardContext";
import React, { useEffect, useState } from "react";
import CartTable from "./CartTable";
import { CartColumn } from "./CartColumn";
import { getProductsForCart } from "@/src/lib/api/getProductsForCart";

export default function ProductListCart() {
  const { cart, total, setTotal, deliveryCost } = useCart();
  const [products, setProducts] = useState<ICartProduct[]>([]);

  useEffect(() => {
    if (Object.keys(cart).length === 0) {
      setProducts([]);
      setTotal(0);
    } else {
      getProductsForCart(cart).then((res) => {
        setProducts(res.products);
        setTotal(res.total + deliveryCost);
      });
    }
  }, [cart, deliveryCost]);

  return (
    <div className="flex flex-col gap-4">
      <CartTable data={products} columns={CartColumn} />
      <p className="text-right">
        Итого:{" "}
        <span className="font-bold">
          {new Intl.NumberFormat("ru-RU", {
            style: "currency",
            currency: "RUB",
            maximumFractionDigits: 0,
          }).format(total)}
        </span>
      </p>
    </div>
  );
}
