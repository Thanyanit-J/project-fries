import {
  drizzle,
  type BetterSQLite3Database,
} from "drizzle-orm/better-sqlite3";
import Database from "better-sqlite3";

import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

const comp = sqliteTable("comp", {
  location: text("location"),
  menu: text("menu"),
  id: integer("id"),
  price: integer("price"),
  amount: integer("amount"),
});

export async function load() {
  const sqlite = new Database("db/mc.db");
  const db: BetterSQLite3Database = drizzle(sqlite);
  const result = db.select().from(comp).all();

  return {
    result,
  };
}
