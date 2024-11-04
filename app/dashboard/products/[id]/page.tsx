import db from "@/app/lib/db/db";
import { $Products, TProductInsert } from "@/app/lib/db/schema";
import DeleteProductForm from "@/app/ui/layout/dashboard/products/forms/DeleteForm";
import UpdateProductForm from "@/app/ui/layout/dashboard/products/forms/UpdateProductForm";
import ProductCard from "@/app/ui/sections/ProductSell/ProductCard";
import { eq } from "drizzle-orm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product Dashboard",
  description: "",
};

export default async function ProductDashboard({ params }: { params: Promise<{ id: number }> }) {
  const { id } = await params;
  let data: TProductInsert | undefined = undefined;
  try {
    data = await db.query.$Products.findFirst({ where: eq($Products.id, id) });
  } catch (error) {
    console.log(error);
    return null;
  }

  if (!data) {
    return (
      <div className="container">
        <h1>Product not found</h1>
      </div>
    );
  }

  return (
    <div className="container">
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <div className="">
        <ProductCard
          cost={data.price || 0}
          discount={data.discount || 0}
          id={data.id?.toString() || ""}
          image={data.previewImage || "/products/product-1.jpg"}
          title={data.title}
        />
        <UpdateProductForm product={data} />
        <DeleteProductForm product={data} />
      </div>
    </div>
  );
}
