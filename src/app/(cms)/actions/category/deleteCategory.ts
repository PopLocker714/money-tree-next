'use server';
import db from "@/src/lib/db/db";
import { $Categories } from "@/src/lib/db/schema";
import { eq } from "drizzle-orm";

export default async function deleteCategory(_: unknown, fromData: FormData) {
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
