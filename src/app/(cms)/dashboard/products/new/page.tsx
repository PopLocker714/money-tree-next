import CreateProductForm from "@/src/components/app/ui/layout/dashboard/products/forms/CreateProductForm";
import { Metadata } from "next";
import { connection } from "next/server";

export const metadata: Metadata = {
  title: "Categories Dashboard",
  description: "",
};

export default async function NewProduct() {
  await connection();
  return (
    <div className="my-6">
      <h1 className="h3 mb-4">Добавить новый товар</h1>
      <CreateProductForm />
    </div>
  );
}
