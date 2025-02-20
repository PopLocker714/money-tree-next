import { unstable_cache } from "next/cache";
import ProductCard, { IProductCard } from "./ProductCard";
import db from "@/src/lib/db/db";
import { and, eq } from "drizzle-orm";
import { $Products } from "@/src/lib/db/schema";

const getCachedProducts = unstable_cache(
  async (): Promise<IProductCard[]> => {
    return await db.query.$Products
      .findMany({
        where: and(eq($Products.isFeatured, true), eq($Products.isActive, true)),
        limit: 4,
      })
      .then((res) =>
        res.map((item) => ({
          id: item.id.toString(),
          title: item.title,
          image: item.previewImage,
          cost: item.price,
          discount: item.discount || 0,
        }))
      );
  },
  ["product-home"],
  { revalidate: 3600, tags: ["product-home"] }
);

const ProductSell = async () => {
  const products = await getCachedProducts();
  return (
    <section className="container">
      <h2 className="text-3xl font-medium mb-7">Покупают чаще всего</h2>
      <div className="grid grid-cols-4 gap-4">
        {products.map((product) => {
          return <ProductCard className="mb-4" key={product.id} {...product} />;
        })}
      </div>
    </section>
  );
};

export default ProductSell;
