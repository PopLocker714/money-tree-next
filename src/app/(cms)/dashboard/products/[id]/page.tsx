import DeleteProductForm from "@/src/components/app/ui/layout/dashboard/products/forms/DeleteForm";
import UpdateProductForm from "@/src/components/app/ui/layout/dashboard/products/forms/UpdateProductForm";
import ProductCard from "@/src/components/app/ui/sections/ProductSell/ProductCard";
import db from "@/src/lib/db/db";
import { $Products, TProductInsert } from "@/src/lib/db/schema";
import { eq } from "drizzle-orm";
import { Metadata } from "next";
import { redirect } from "next/navigation";

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
  }

  if (!data) {
    redirect("/dashboard");
  }

  return (
    <div className="container">
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <div>
        <ProductCard
          className="my-6"
          cost={data.price}
          discount={data.discount}
          id={data.id?.toString() || ""}
          image={data.previewImage}
          title={data.title}
        />
        <UpdateProductForm product={data} />
        <DeleteProductForm product={data} />
      </div>
    </div>
  );
}
