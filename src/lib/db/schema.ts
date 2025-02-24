import { relations } from "drizzle-orm";
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
  content: text("content"),
  parentId: integer("parent_id").references((): AnySQLiteColumn => $Categories.id, { onDelete: "cascade" }),
});

export const insertCategorySchema = createInsertSchema($Categories);
export const selectCategorySchema = createSelectSchema($Categories);
export type TCategoryInsert = typeof $Categories.$inferInsert;
export type TCategorySelect = typeof $Categories.$inferSelect;

export const CategoryRelations = relations($Categories, ({ one }) => ({
  children: one($Categories, {
    fields: [$Categories.parentId],
    references: [$Categories.id],
  }),
}));

export const $Products = sqliteTable("products", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  sku: text("sku").notNull().unique(),
  title: text("title").notNull(),
  description: text("description"),
  price: integer("price").notNull().default(0),
  discount: integer("discount").default(0),
  stock: integer("stock").notNull().default(0),
  previewImage: text("previewImage"),
  images: text("images")
    .notNull()
    .$default(() => JSON.stringify([null, null, null, null, null])),
  categoryId: integer("category_id").references(() => $Categories.id, { onDelete: "set null" }),
  keywordsSearch: text("keywordsSearch"),
  isFeatured: integer("isFeatured", { mode: "boolean" }).default(false),
  isActive: integer("isActive", { mode: "boolean" }).default(true),
  deliveryInfo: text("deliveryInfo").default(""),
  createdAt: text("createdAt").$defaultFn(() => new Date().toISOString()).notNull(),
  updatedAt: text("updatedAt").$defaultFn(() => new Date().toISOString()).notNull(),
});

export const insertProductSchema = createInsertSchema($Products);
export const selectProductSchema = createSelectSchema($Products);
export type TProductInsert = typeof $Products.$inferInsert;
export type TProductSelect = typeof $Products.$inferSelect;

export const ProductRelations = relations($Products, ({ one }) => ({
  category: one($Categories, {
    fields: [$Products.categoryId],
    references: [$Categories.id],
  }),
}));
