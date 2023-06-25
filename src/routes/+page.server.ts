import Database from "better-sqlite3"

export type Fries = {
  id: number
  brand: string
  location: string
  size: string
  amount: number
  weight: number
  price: number
}

export async function load() {
  const sqlite = new Database("db/fries.db")
  const query = `
    SELECT size, round(avg(amount), 2) as "avg_amount"
    FROM fries
    GROUP BY size
  `
  const query2 = `
    SELECT size, price
    FROM fries
    GROUP BY price
  `
  const query3 = `
    SELECT size
    from fries
    GROUP BY size
  `
  // Uses raw SQLite
  const result = sqlite.prepare(query).all()
  const result2 = sqlite.prepare(query2).all()
  const size_list = sqlite.prepare(query3).all()

  return { result, result2, size_list }
}
