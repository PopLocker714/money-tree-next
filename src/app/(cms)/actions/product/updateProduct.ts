"use server";
import db from "@/src/lib/db/db";
import { $Products, insertProductSchema, TProductSelect } from "@/src/lib/db/schema";
import deleteFile from "@/src/lib/files/deleteFile";
import saveFile from "@/src/lib/files/saveFile";
import { eq } from "drizzle-orm";
import { IReturnProductAction, TImageItem, TImageItemPromise } from "./types";
import { revalidateTag } from "next/cache";

export default async function updateProductActon(_: IReturnProductAction, fromData: FormData): Promise<IReturnProductAction> {
  const validatedFields = insertProductSchema.safeParse({
    id: Number(fromData.get("id")),
    title: fromData.get("title"),
    description: fromData.get("description"),
    sku: fromData.get("sku"),
    price: Number(fromData.get("price")) || undefined,
    discount: Number(fromData.get("discount")) || undefined,
    stock: Number(fromData.get("stock")) || undefined,
    categoryId: Number(fromData.get("categoryId")) || undefined,
    keywordsSearch: fromData.get("keywordsSearch"),
    isFeatured: fromData.get("isFeatured") === "on",
    isActive: fromData.get("isActive") === "on",
  });

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors,
      ok: false,
      data: {},
    };
  }

  if (!validatedFields.data.id) {
    return {
      error: "Something went wrong",
      ok: false,
      data: {},
    };
  }

  const galleryImages = [
    fromData.get("image1"),
    fromData.get("image2"),
    fromData.get("image3"),
    fromData.get("image4"),
    fromData.get("image5"),
  ];

  let imagesPromise: TImageItemPromise[] = [];
  let product: TProductSelect | undefined;

  try {
    product = await db.query.$Products.findFirst({
      where: eq($Products.id, validatedFields.data.id),
    });

    const savedImages: TImageItem[] = product?.images ? JSON.parse(product.images) : [null, null, null, null, null];

    if (!product) {
      throw new Error("Product not found");
    }

    imagesPromise = galleryImages.map(async (file, index): Promise<TImageItem> => {
      if (!file || !(file instanceof Blob)) {
        throw new Error("Файл не найден или неправильный формат");
      }

      if (file.size === 0) {
        return savedImages[index];
      }

      const res = await saveFile(file, `${index}`);

      if (savedImages[index]) {
        await deleteFile(savedImages[index]);
      }

      if (!res.ok) {
        throw new Error(res.error || "Не удалось сохранить изображение");
      }

      if (typeof res.data === "string") {
        return res.data;
      }

      return null;
    });
  } catch (error) {
    console.log(error);

    if (error instanceof Error) {
      return {
        ok: false,
        error: error.message,
        data: {},
      };
    }
    return {
      ok: false,
      error: "Unknown error",
      data: {},
    };
  }

  const file = fromData.get("preview");

  if (!file || !(file instanceof Blob)) {
    return {
      error: "Файл не найден или неправильный формат",
      ok: false,
      data: {},
    };
  }

  let newFilePath: TImageItem = null;

  if (file && file.size > 0) {
    const res = await saveFile(file, "preview");
    if (typeof res.data === "string") {
      newFilePath = res.data;
      if (product?.previewImage) {
        await deleteFile(product.previewImage);
      }
    }

    if (res.error) {
      return {
        error: res.error,
        ok: false,
        data: {},
      };
    }
  }

  try {
    if (newFilePath) {
      validatedFields.data.previewImage = newFilePath;
    }

    const images = JSON.stringify(await Promise.all(imagesPromise));

    const updatedProduct = {
      ...validatedFields.data,
      updatedAt: new Date().toISOString(),
      images,
    };

    const result = await db.update($Products).set(updatedProduct).where(eq($Products.id, validatedFields.data.id)).returning();

    revalidateTag("product-home");
    return {
      error: null,
      data: result,
      ok: true,
    };
  } catch (error) {
    if (error instanceof Error) {
      return {
        error: error.message,
        ok: false,
        data: {},
      };
    }
    return {
      error: "Something went wrong",
      ok: false,
      data: {},
    };
  }

  // return { error: "Something went wrong [10]", ok: false, data: {} };
}
