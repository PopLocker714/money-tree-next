import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Корзина",
  description: "",
};

export default function Dashboard() {
  return (
    <section className="container py-10">
      <h1>Корзина</h1>
      <Link href="..">Домой</Link>
    </section>
  );
}
