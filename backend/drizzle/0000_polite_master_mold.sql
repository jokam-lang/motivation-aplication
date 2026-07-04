CREATE TABLE `flashcards` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`front` text NOT NULL,
	`back` text NOT NULL,
	`interval` integer DEFAULT 0 NOT NULL,
	`repetition` integer DEFAULT 0 NOT NULL,
	`efactor` real DEFAULT 2.5 NOT NULL,
	`next_review_date` integer NOT NULL,
	`created_at` integer
);
--> statement-breakpoint
CREATE TABLE `habits` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`target_duration_minutes` integer DEFAULT 60 NOT NULL,
	`actual_duration_minutes` integer DEFAULT 0 NOT NULL,
	`date` text NOT NULL,
	`created_at` integer
);
--> statement-breakpoint
CREATE TABLE `tasks` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`title` text NOT NULL,
	`description` text,
	`type` text DEFAULT 'static' NOT NULL,
	`start_time` text,
	`end_time` text,
	`context` text,
	`motivation_message` text,
	`is_completed` integer DEFAULT false NOT NULL,
	`created_at` integer
);
