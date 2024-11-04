CREATE TABLE `products` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`sku` text NOT NULL,
	`title` text NOT NULL,
	`description` text,
	`price` integer DEFAULT 0 NOT NULL,
	`discount` integer DEFAULT 0,
	`stock` integer DEFAULT 0 NOT NULL,
	`previewImage` text,
	`images` text,
	`category_id` integer,
	`keywordsSearch` text,
	`isFeatured` integer DEFAULT false,
	`isActive` integer DEFAULT true,
	`createdAt` text DEFAULT '2024-11-04T06:15:51.097Z',
	`updatedAt` text DEFAULT '2024-11-04T06:15:51.097Z',
	FOREIGN KEY (`category_id`) REFERENCES `categories`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE UNIQUE INDEX `products_sku_unique` ON `products` (`sku`);