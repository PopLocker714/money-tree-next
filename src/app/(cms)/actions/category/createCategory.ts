'use server';
import db from "@/src/lib/db/db";
import { $Categories, insertCategorySchema } from "@/src/lib/db/schema";

export default async function createCategory(_: unknown, fromData: FormData) {
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
