
import { ProductColumn, TProductColumn } from "@/src/components/app/ui/layout/dashboard/products/ProductColumn";
import ProductTable from "@/src/components/app/ui/layout/dashboard/products/ProductTable";
import getAllProducts from "@/src/lib/product/getAllProducts";
import { Metadata } from "next";
import { connection } from "next/server";

export const metadata: Metadata = {
  title: "Products Dashboard",
  description: "",
};

export default async function Products() {
  await connection();
  const res = await getAllProducts();
  const data: TProductColumn[] = res.map((item) => {
    return {
      id: item.id,
      title: item.title,
      sku: item.sku,
      price: item.price,
      discount: item.discount || 0,
    };
  });

  return (
    <div className="my-6">
      <h1 className="h3 mb-4">Товары</h1>
      <ProductTable columns={ProductColumn} data={data} />
    </div>
  );
}
