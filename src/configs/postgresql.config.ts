import { Pool } from "pg"

export default class PostgreSQLConnection {
  private static instance: Pool
  private constructor() {}

  public static getInstance(): Pool {
    if (!PostgreSQLConnection.instance) {
      PostgreSQLConnection.instance = new Pool({
        connectionString: process.env.POSTGRESQL_URL,
      })
    }

    PostgreSQLConnection.instance.on("connect", () => {
      console.log("Successfully connected to PostgreSQL!")
    })

    PostgreSQLConnection.instance.on("error", (error: any) => {
      throw new Error("PostgreSQL connection error: ", error)
    })

    return PostgreSQLConnection.instance
  }
}
