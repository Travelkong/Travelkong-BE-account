import { Pool } from "pg"
import dotenv from "dotenv"

dotenv.config()

// using Singleton pattern
export default class PostgresConnection {
  private static instance: Pool
  private constructor() {}

  public static getInstance(): Pool {
    if (!PostgresConnection.instance) {
      const connectionString: string | undefined = process.env.POSTGRESQL_URL

      if (!connectionString) throw new Error("No PostgreSQL connection string!")

      PostgresConnection.instance = new Pool({
        connectionString: connectionString,
        // this is still Singleton since the app only has one instance of pool.
        max: 10,
      })
    }

    PostgresConnection.instance.on("connect", () => {
      console.log("Successfully connected to PostgreSQL!")
    })

    PostgresConnection.instance.on("error", (error: any) => {
      throw new Error("PostgreSQL connection error: ", error)
    })

    return PostgresConnection.instance
  }
}
