import { eq } from "drizzle-orm";
import db from "../db/db";
import { $Categories } from "../db/schema";

export const getCategoryById = (id: number) => {
  return db.query.$Categories.findFirst({
    where: eq($Categories.id, id),
  });
};
