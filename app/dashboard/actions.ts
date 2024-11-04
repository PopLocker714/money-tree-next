/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { eq } from "drizzle-orm";
import db from "../lib/db/db";
import { $Categories, insertCategorySchema, TCategorySelect } from "../lib/db/schema";
import { z } from "zod";

export async function createCategory(previousState: any, fromData: FormData) {
  const validatedFields = insertCategorySchema.safeParse({
    name: fromData.get("name"),
    parentId: Number(fromData.get("parentId")) || undefined,
  });

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    const result = await db.insert($Categories).values({
      name: validatedFields.data.name,
      parentId: validatedFields.data.parentId,
    });

    return {
      error: null,
      data: result,
    };
  } catch (error) {
    console.log(error);
    return {
      error: "Something went wrong",
    };
  }
}

export async function deleteCategory(previousState: any, fromData: FormData) {
  const id = Number(fromData.get("id")) || undefined;

  if (!id) {
    return {
      error: "Something went wrong",
    };
  }

  try {
    const result = await db.delete($Categories).where(eq($Categories.id, id));
    return {
      error: null,
      data: result,
    };
  } catch (error) {
    console.log(error);
    return {
      error: "Something went wrong",
    };
  }
}

const categoryUpdateSchema = z.object({
  id: z.number(),
  name: z.string().optional(),
  parentId: z.number().optional(),
});

export async function updateCategory(previousState: any, fromData: FormData) {
  const validatedFields = categoryUpdateSchema.safeParse({
    id: Number(fromData.get("id")),
    name: fromData.get("name"),
    parentId: Number(fromData.get("parentId")) || undefined,
  });

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    const result = await db.update($Categories).set(validatedFields.data).where(eq($Categories.id, validatedFields.data.id));
    return {
      error: null,
      data: result,
    };
  } catch (error) {
    console.log(error);
    return {
      error: "Something went wrong",
    };
  }
}

export type TCategoryNode = TCategorySelect & { children: TCategoryNode[] };

function buildCategoryTree(categories: TCategorySelect[]) {
  const categoryMap: Record<number, TCategoryNode> = {};

  categories.forEach((category) => {
    categoryMap[category.id] = { ...category, children: [] };
  });

  const tree: TCategoryNode[] = [];

  categories.forEach((category) => {
    if (category.parentId === null) {
      tree.push(categoryMap[category.id]);
    } else {
      categoryMap[category.parentId].children.push(categoryMap[category.id]);
    }
  });

  return tree;
}

export const getCategory = async () => {
  const categories = await db.query.$Categories.findMany();
  return buildCategoryTree(categories);
};
