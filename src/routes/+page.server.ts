import { drizzle, type BetterSQLite3Database } from "drizzle-orm/better-sqlite3"
import Database from "better-sqlite3"

import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core"
import { eq } from "drizzle-orm"

const comp = sqliteTable("comp", {
  location: text("location"),
  menu: text("menu"),
  id: integer("id"),
  price: integer("price"),
  amount: integer("amount"),
})

export async function load() {
  const sqlite = new Database("db/mc.db")
  // Uses raw SQLite
  const resultRaw = sqlite.prepare("SELECT * FROM comp").all()

  // Uses Drizzle ORM
  const db: BetterSQLite3Database = drizzle(sqlite)
  const result = db.select().from(comp).all()
  const result2 = db.select().from(comp).where(eq(comp.id, 0)).all()

  return {
    result,
    result2,
    resultRaw,
  }
}
