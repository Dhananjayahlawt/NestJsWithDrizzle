CREATE TABLE IF NOT EXISTS "product" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(256),
	"description" varchar,
	"color" text,
	"size" text,
	"prize" integer
);
