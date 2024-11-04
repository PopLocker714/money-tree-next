/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";
import { eq } from "drizzle-orm";
import db from "../lib/db/db";
import { $Products, insertProductSchema } from "../lib/db/schema";
import { redirect } from "next/navigation";

export async function createProductActon(previousState: any, fromData: FormData) {
  const validatedFields = insertProductSchema.safeParse({
    title: fromData.get("title"),
    description: fromData.get("description"),
    sku: fromData.get("sku"),
    price: Number(fromData.get("price")) || undefined,
    discount: Number(fromData.get("discount")) || undefined,
    stock: Number(fromData.get("stock")) || undefined,
    previewImage: fromData.get("previewImage"),
    images: fromData.get("images"),
    categoryId: Number(fromData.get("categoryId")) || undefined,
    keywordsSearch: fromData.get("keywordsSearch"),
    isFeatured: fromData.get("isFeatured") === "on",
    isActive: fromData.get("isActive") === "on",
  });

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    const result = await db.insert($Products).values(validatedFields.data);
    return {
      error: null,
      data: result,
    };
  } catch (error) {
    if (error instanceof Error) {
      return {
        error: error.message,
      };
    }
    return {
      error: "Something went wrong",
    };
  }
}

export async function updateProductActon(previousState: any, fromData: FormData) {
  const validatedFields = insertProductSchema.safeParse({
    id: Number(fromData.get("id")),
    title: fromData.get("title"),
    description: fromData.get("description"),
    sku: fromData.get("sku"),
    price: Number(fromData.get("price")) || undefined,
    discount: Number(fromData.get("discount")) || undefined,
    stock: Number(fromData.get("stock")) || undefined,
    previewImage: fromData.get("previewImage"),
    images: fromData.get("images"),
    categoryId: Number(fromData.get("categoryId")) || undefined,
    keywordsSearch: fromData.get("keywordsSearch"),
    isFeatured: fromData.get("isFeatured") === "on",
    isActive: fromData.get("isActive") === "on",
  });

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors,
    };
  }

  if (!validatedFields.data.id) {
    return {
      error: "Something went wrong",
    };
  }

  try {
    const result = await db
      .update($Products)
      .set({ ...validatedFields.data, updatedAt: new Date().toISOString() })
      .where(eq($Products.id, validatedFields.data.id));
    return {
      error: null,
      data: result,
    };
  } catch (error) {
    if (error instanceof Error) {
      return {
        error: error.message,
      };
    }
    return {
      error: "Something went wrong",
    };
  }
}

export async function deleteProductActon(previousState: any, fromData: FormData) {
  const productId = fromData.get("id");

  if (!productId) {
    return {
      error: "Something went wrong",
    };
  }

  try {
    const res = await db.delete($Products).where(eq($Products.id, Number(productId)));
    return {
      error: null,
      data: res,
    }
  } catch (error) {
    if (error instanceof Error) {
      return {
        error: error.message,
      };
    }
    return {
      error: "Something went wrong",
    };
  }

  redirect("/dashboard");
}

export const getAllProducts = async () => {
  try {
    const products = await db.query.$Products.findMany();
    return products;
  } catch (error) {
    console.log(error);
    return [];
  }
};
