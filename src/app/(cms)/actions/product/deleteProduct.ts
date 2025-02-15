"use server";
import db from "@/src/lib/db/db";
import { $Products } from "@/src/lib/db/schema";
import deleteFile from "@/src/lib/files/deleteFile";
import { eq } from "drizzle-orm";
import { IReturnProductAction, TImageItem } from "./types";
import { revalidateTag } from "next/cache";

export async function deleteProductActon(_: unknown, fromData: FormData): Promise<IReturnProductAction> {
  const productId = fromData.get("id");

  if (!productId) {
    return {
      error: "Something went wrong",
      ok: false,
      data: {},
    };
  }

  try {
    const product = await db.query.$Products.findFirst({
      where: eq($Products.id, Number(productId)),
    });

    if (product) {
      if (product.previewImage) await deleteFile(product.previewImage);

      if (product.images) {
        const images: TImageItem[] = JSON.parse(product.images);
        for (const image of images) {
          if (image) await deleteFile(image);
        }
      }
    }

    const res = await db.delete($Products).where(eq($Products.id, Number(productId)));

    revalidateTag("product-home");

    return {
      error: null,
      data: res,
      ok: false,
    };
  } catch (error) {
    if (error instanceof Error) {
      return {
        error: error.message,
        data: {},
        ok: false,
      };
    }
    return {
      error: "Something went wrong",
      data: {},
      ok: false,
    };
  }
}
