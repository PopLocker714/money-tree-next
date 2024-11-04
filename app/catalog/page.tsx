import { Metadata } from "next";
import Aside from "../ui/layout/main/Catalog/Aside";

import ProductCard, { IProductCard } from "../ui/sections/ProductSell/ProductCard";
import { connection } from "next/server";
import db from "../lib/db/db";

export const metadata: Metadata = {
  title: "Каталог",
  description: "",
};

export default async function Dashboard() {
  await connection();
  const data = await db.query.$Products.findMany();

  const products: IProductCard[] = data.map((product) => {
    return {
      cost: product.price || 0,
      discount: product.discount || 0,
      title: product.title,
      image: product.previewImage || "/products/product-1.jpg",
      id: product.id?.toString() || "",
    };
  });

  return (
    <section className="container">
      <div className="flex justify-between">
        <Aside />
        <div className="flex-1 py-6 pl-4">
          <div className="grid grid-cols-3 gap-4">
            {products.map((product) => {
              return <ProductCard key={product.id} {...product} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
