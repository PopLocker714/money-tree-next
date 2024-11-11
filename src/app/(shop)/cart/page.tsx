import { Metadata } from "next";
import Link from "next/link";
import ProductListCart from "./components/ProductListCart";

export const metadata: Metadata = {
  title: "Корзина",
  description: "",
};

export default function Cart() {
  return (
    <section className="container py-10">
      <h1>Корзина</h1>
      <ProductListCart />
      <Link href="..">Домой</Link>
    </section>
  );
}
