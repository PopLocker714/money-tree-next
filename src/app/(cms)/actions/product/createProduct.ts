"use server";
import db from "@/src/lib/db/db";
import { $Products, insertProductSchema } from "@/src/lib/db/schema";
import saveFile from "@/src/lib/files/saveFile";
import { IReturnProductAction, TImageItem, TImageItemPromise } from "./types";

export default async function createProductActon(_: IReturnProductAction, fromData: FormData): Promise<IReturnProductAction> {
  const validatedFields = insertProductSchema.safeParse({
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

  const imagePreviewFile = fromData.get("preview");

  const galleryImages = [
    fromData.get("image1"),
    fromData.get("image2"),
    fromData.get("image3"),
    fromData.get("image4"),
    fromData.get("image5"),
  ];

  let imagesPromise: TImageItemPromise[] = [];

  try {
    imagesPromise = galleryImages.map(async (file, index): Promise<TImageItem> => {
      if (!file || !(file instanceof Blob)) {
        throw new Error("Файл не найден или неправильный формат");
      }

      if (file.size === 0) {
        return null;
      }

      const res = await saveFile(file, `${index}`);

      if (!res.ok) {
        throw new Error(res.error || "Не удалось сохранить изображение");
      }

      if (typeof res.data === "string") {
        return res.data;
      }

      return null;
    });
  } catch (error) {
    if (error instanceof Error) {
      return {
        ok: false,
        error: error.message,
        data: {},
      };
    }
  }

  console.log("promise images", await Promise.all(imagesPromise));

  const images = await Promise.all(imagesPromise)
    .then((images) => JSON.stringify(images))
    .catch((error) => {
      console.error(error);
      return "[]";
    });

  let previewImage: string | null = null;

  if (!imagePreviewFile || !(imagePreviewFile instanceof Blob)) {
    return {
      error: "Файл не найден или неправильный формат",
      ok: false,
      data: {},
    };
  }

  if (imagePreviewFile && imagePreviewFile.size > 0) {
    const res = await saveFile(imagePreviewFile, "preview");

    if (res.error) {
      return {
        error: res.error,
        ok: false,
        data: {},
      };
    }

    if (typeof res.data === "string") {
      previewImage = res.data;
    }
  }

  try {
    await db.insert($Products).values({ ...validatedFields.data, previewImage, images });

    return {
      ok: true,
      error: null,
      data: {},
    };
  } catch (error) {
    if (error instanceof Error) {
      return {
        ok: false,
        data: {},
        error: error.message,
      };
    }
    return {
      error: "Something went wrong",
      ok: false,
      data: {},
    };
  }
}
