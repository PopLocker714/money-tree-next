import getAllProducts from "@/src/lib/product/getAllProducts";
import CreateProductForm from "./forms/CreateProductForm";
import { ProductColumn, TProductColumn } from "./ProductColumn";
import ProductTable from "./ProductTable";

export default async function ProductsBoard() {
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
    <section className="container py-6">
      <h2 className="text-3xl mb-7">Товары</h2>

      <CreateProductForm />
      <ProductTable columns={ProductColumn} data={data} />
    </section>
  );
}
