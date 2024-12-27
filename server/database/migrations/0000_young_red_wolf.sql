CREATE TABLE `tlg_users` (
	`id` integer PRIMARY KEY NOT NULL,
	`id2` text,
	`first_name` text,
	`last_name` text,
	`username` text,
	`language_code` text,
	`settings` text DEFAULT '{}',
	`created_at` integer,
	`updated_at` integer,
	`last_seen_at` integer
);
--> statement-breakpoint
CREATE UNIQUE INDEX `tlg_users_id2_unique` ON `tlg_users` (`id2`);