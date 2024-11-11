import NavLink from "@/src/components/app/ui/layout/main/NavLink";
import db from "@/src/lib/db/db";
import { $Products } from "@/src/lib/db/schema";
import { TPropsPage } from "@/src/types/props";
import { eq } from "drizzle-orm";
import { Metadata } from "next";
import GalleryProduct from "./components/GalleryProduct";
import AddCart from "./components/AddCart";

export async function generateMetadata({ params }: TPropsPage): Promise<Metadata> {
  const id = (await params).id;

  const product = await db.query.$Products.findFirst({ where: eq($Products.id, +id) });

  if (!product) {
    return {
      title: "Товар не найден",
      description: "Товар не найден",
    };
  }

  return {
    title: product.title,
    description: product.description,
  };
}

export default async function Product({ params }: TPropsPage) {
  const id = (await params).id;

  const product = await db.query.$Products.findFirst({ where: eq($Products.id, +id) });
  // const product = (await db.select().from($Products).where(eq($Products.id, id)));

  if (!product) {
    return <div className="container">Product not found</div>;
  }

  const { discount, title, price: cost, description, sku, stock } = product;

  const formatted = new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "RUB",
    maximumFractionDigits: 0,
  }).format(cost);

  const formattedDiscount = new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "RUB",
    maximumFractionDigits: 0,
  }).format(cost - (discount || 0));

  return (
    <div className="container">
      <div className="flex my-4">
        <NavLink text="Главная" href=".." /> <span className="px-2">/</span> <NavLink text="Каталог" href="/catalog" />
        <span className="px-2">/</span> {title}
      </div>

      <div className="flex justify-between mb-4">
        <div className="flex-1 max-w-[48%]">
          <GalleryProduct images={product.images} />
        </div>
        <div className="flex-1 max-w-[48%] relative">
          <h1 className="text-3xl mb-4">{product.title}</h1>
          <div className="flex flex-col">
            <p className="text-1xl mb-6 text-gray-500">Артикул: {sku} </p>
            {!discount ? (
              <p className="flex items-center text-4xl font-bold text-green-400 w-fit">{formatted}</p>
            ) : (
              <p className="text-green-400 flex items-center text-4xl font-bold w-fit">
                {formattedDiscount}
                <span className="line-through ml-1 text-gray-400 text-xl">{formatted}</span>
              </p>
            )}
          </div>
          <AddCart id={id} max={stock} />
        </div>
      </div>
      <div>
        <h2 className="text-2xl mb-2">Описание</h2>
        {description}
      </div>
      {/* <pre>{JSON.stringify(product, null, 2)}</pre> */}
    </div>
  );
}
