import { Metadata } from "next";
import ProductListCart from "./components/ProductListCart";
import OrderForm from "./components/OrderForm";

export const metadata: Metadata = {
  title: "Корзина",
  description: "",
};

export default function Cart() {
  return (
    <section className="container py-10">
      <h1 className="text-3xl font-medium mb-7">Оформление заказа</h1>
      <ProductListCart />
      <OrderForm />
    </section>
  );
}
