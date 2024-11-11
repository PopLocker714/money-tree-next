import { Metadata } from "next";
import { connection } from "next/server";
import db from "../../../lib/db/db";
import ProductCard, { IProductCard } from "@/src/components/app/ui/sections/ProductSell/ProductCard";
import Aside from "@/src/components/app/ui/layout/main/Catalog/Aside";

export const metadata: Metadata = {
  title: "Каталог",
  description: "",
};

export default async function Catalog() {
  await connection();
  const data = await db.query.$Products.findMany();

  const products: IProductCard[] = data.map((product) => {
    return {
      cost: product.price || 0,
      discount: product.discount || 0,
      title: product.title,
      image: product.previewImage,
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
