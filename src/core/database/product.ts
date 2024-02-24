import { integer, pgTable, serial, text, varchar } from "drizzle-orm/pg-core";


export const product = pgTable('product', {
    id: serial('id').primaryKey(),
    name: varchar('name', { length: 256 }),
    description: varchar('description'),
    color: text('color'), 
    size: text('size'), 
    price: integer('prize'),
  });