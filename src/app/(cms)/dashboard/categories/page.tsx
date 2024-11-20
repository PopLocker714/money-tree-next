import CategoriesBoard from "@/src/components/app/ui/layout/dashboard/category/CategoriesBoard";
import { Metadata } from "next";
import { connection } from "next/server";

export const metadata: Metadata = {
  title: "Categories Dashboard",
  description: "",
};

export default async function Categories() {

  await connection();
  return (
    <div className="my-6">
      <h1 className="h3 mb-4">Категории</h1>

      <CategoriesBoard />
    </div>
  );
}
