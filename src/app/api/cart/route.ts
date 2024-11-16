import { ICartItem } from "@/src/components/app/CardContext";
import db from "@/src/lib/db/db";
import { $Products } from "@/src/lib/db/schema";
import { inArray } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export interface ICartProduct {
  id: number;
  quantity: number;
  previewImage: string | null;
  title: string;
  price: number;
  priceTotal: number;
  stock: number;
  discount: number | null;
}

export interface ICartResponse {
  products: ICartProduct[];
  total: number;
}

export async function POST(request: NextRequest): Promise<NextResponse<ICartResponse>> {
  const body: Record<string, ICartItem> = await request.json();
  const ids = Object.keys(body);
  const ids2 = ids.map((id) => Number(id));

  const data = await db.query.$Products.findMany({
    where: inArray($Products.id, ids2),
  });

  let total = 0;

  const dataTable = {
    products: data.map((product) => {
      total += (product.price - (product.discount || 0)) * body[product.id].quantity;
      return {
        id: product.id,
        quantity: body[product.id].quantity,
        previewImage: product.previewImage,
        title: product.title,
        price: product.price,
        priceTotal: (product.price - (product.discount || 0)) * body[product.id].quantity,
        stock: product.stock,
        discount: product.discount,
      };
    }),
    total,
  };

  return NextResponse.json(dataTable);
}
