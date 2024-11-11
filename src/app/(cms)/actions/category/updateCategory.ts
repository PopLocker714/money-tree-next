"use server";
import db from "@/src/lib/db/db";
import { $Categories } from "@/src/lib/db/schema";
import { eq } from "drizzle-orm";
import { z } from "zod";

const categoryUpdateSchema = z.object({
  id: z.number(),
  name: z.string().optional(),
  parentId: z.number().optional(),
});

export async function updateCategory(_: unknown, fromData: FormData) {
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
