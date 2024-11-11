import { Metadata } from "next";
import { connection } from "next/server";
import logout from "../actions/auth/logout";
import CategoriesBoard from "@/src/components/app/ui/layout/dashboard/category/CategoriesBoard";
import ProductsBoard from "@/src/components/app/ui/layout/dashboard/products/ProductsBoard";

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
