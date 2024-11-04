import { Metadata } from "next";
import CategoriesBoard from "../ui/layout/dashboard/category/CategoriesBoard";
import ProductsBoard from "../ui/layout/dashboard/products/ProductsBoard";
import { connection } from "next/server";
import { logout } from "../actions";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "",
};

export default async function Dashboard() {
  await connection();
  return (
    <main>
      <section className="container">
        <form action={logout}>
          <button type="submit">Logout</button>
        </form>
      </section>
      <CategoriesBoard />
      <ProductsBoard />
    </main>
  );
}
