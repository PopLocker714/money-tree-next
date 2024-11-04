import { AnySQLiteColumn, int, integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";

export const $Users = sqliteTable("users", {
  id: int().primaryKey({ autoIncrement: true }),
  email: text().notNull().unique(),
  password_hash: text().notNull(),
  salt: text().notNull(),
});

export const $Categories = sqliteTable("categories", {
  id: int().primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  parentId: integer("parent_id").references((): AnySQLiteColumn => $Categories.id, { onDelete: "cascade" }),
});

export const insertCategorySchema = createInsertSchema($Categories);
export const selectCategorySchema = createSelectSchema($Categories);
export type TCategoryInsert = typeof $Categories.$inferInsert;
export type TCategorySelect = typeof $Categories.$inferSelect;

export const $Products = sqliteTable("products", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  sku: text("sku").notNull().unique(),
  title: text("title").notNull(),
  description: text("description"),
  price: integer("price").notNull().default(0),
  discount: integer("discount").default(0),
  stock: integer("stock").notNull().default(0),
  previewImage: text("previewImage"),
  images: text("images"), // Сохраняем массив изображений как JSON-строку
  categoryId: integer("category_id").references(() => $Categories.id, { onDelete: "set null" }), // Внешний ключ для связи с таблицей категорий
  keywordsSearch: text("keywordsSearch"), // Можно сохранить ключевые слова как строку, разделённую запятыми
  isFeatured: integer("isFeatured", { mode: "boolean" }).default(false),
  isActive: integer("isActive", { mode: "boolean" }).default(true),
  createdAt: text("createdAt").default(new Date().toISOString()),
  updatedAt: text("updatedAt").default(new Date().toISOString()),
});

export const insertProductSchema = createInsertSchema($Products);
export const selectProductSchema = createSelectSchema($Products);
export type TProductInsert = typeof $Products.$inferInsert;
export type TProductSelect = typeof $Products.$inferSelect;
