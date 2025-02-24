import { Metadata } from "next";
import db from "../../../lib/db/db";
import ProductCard, {
  IProductCard,
} from "@/src/components/app/ui/sections/ProductSell/ProductCard";
import { $Products, TProductInsert } from "@/src/lib/db/schema";
import { and, eq, inArray } from "drizzle-orm";
import Aside from "@/src/components/app/ui/layout/main/Catalog/Aside";
import { getCategoryById } from "@/src/lib/categories/getCategoryById";

export const metadata: Metadata = {
  title: "Каталог",
  description: "",
};

export default async function Catalog({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  let categoryData = (await searchParams).category || "[]";

  if (Array.isArray(categoryData)) {
    categoryData = "[]";
  }

  const category: number[] = JSON.parse(categoryData);

  let data: TProductInsert[] = [];

  if (category.length > 0) {
    data = await db.query.$Products.findMany({
      where: and(
        inArray(
          $Products.categoryId,
          category.map((c) => Number(c))
        ),
        eq($Products.isActive, true)
      ),
    });
  } else {
    data = await db.query.$Products.findMany({
      where: eq($Products.isActive, true),
    });
  }

  const products: IProductCard[] = data.map((product) => {
    return {
      cost: product.price || 0,
      discount: product.discount || 0,
      title: product.title,
      image: product.previewImage,
      id: product.id?.toString() || "",
    };
  });

  const categoryContent = await getCategoryById(category[0]);

  return (
    <section className="container">
      <div className="flex flex-col">
        <Aside />
        <div className="flex-1">
          <div className="grid grid-cols-4 gap-4 ">
            {products.map((product) => {
              return <ProductCard key={product.id} {...product} />;
            })}
          </div>
        </div>
        {categoryContent?.content && (
          <>
            <h2 className="text-3xl font-medium mt-8 mb-2">
              {categoryContent.name}
            </h2>
            <p className="text-lg ">{categoryContent.content}</p>
          </>
        )}
      </div>
    </section>
  );
}
