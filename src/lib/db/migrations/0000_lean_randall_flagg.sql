CREATE TABLE `categories` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`parent_id` integer,
	FOREIGN KEY (`parent_id`) REFERENCES `categories`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
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
	`createdAt` text DEFAULT '2024-11-11T06:55:38.024Z',
	`updatedAt` text DEFAULT '2024-11-11T06:55:38.024Z',
	FOREIGN KEY (`category_id`) REFERENCES `categories`(`id`) ON UPDATE no action ON DELETE set null
);
--> statement-breakpoint
CREATE UNIQUE INDEX `products_sku_unique` ON `products` (`sku`);--> statement-breakpoint
CREATE TABLE `users` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`email` text NOT NULL,
	`password_hash` text NOT NULL,
	`salt` text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `users_email_unique` ON `users` (`email`);