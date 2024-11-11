PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_products` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`sku` text NOT NULL,
	`title` text NOT NULL,
	`description` text,
	`price` integer DEFAULT 0 NOT NULL,
	`discount` integer DEFAULT 0,
	`stock` integer DEFAULT 0 NOT NULL,
	`previewImage` text,
	`images` text NOT NULL,
	`category_id` integer,
	`keywordsSearch` text,
	`isFeatured` integer DEFAULT false,
	`isActive` integer DEFAULT true,
	`createdAt` text DEFAULT '2024-11-11T08:54:52.236Z' NOT NULL,
	`updatedAt` text DEFAULT '2024-11-11T08:54:52.236Z' NOT NULL,
	FOREIGN KEY (`category_id`) REFERENCES `categories`(`id`) ON UPDATE no action ON DELETE set null
);
--> statement-breakpoint
INSERT INTO `__new_products`("id", "sku", "title", "description", "price", "discount", "stock", "previewImage", "images", "category_id", "keywordsSearch", "isFeatured", "isActive", "createdAt", "updatedAt") SELECT "id", "sku", "title", "description", "price", "discount", "stock", "previewImage", "images", "category_id", "keywordsSearch", "isFeatured", "isActive", "createdAt", "updatedAt" FROM `products`;--> statement-breakpoint
DROP TABLE `products`;--> statement-breakpoint
ALTER TABLE `__new_products` RENAME TO `products`;--> statement-breakpoint
PRAGMA foreign_keys=ON;--> statement-breakpoint
CREATE UNIQUE INDEX `products_sku_unique` ON `products` (`sku`);