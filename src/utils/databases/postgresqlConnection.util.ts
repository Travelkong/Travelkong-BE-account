import { Pool, PoolClient } from "pg"
import PostgresConnection from "~/configs/postgres.config"
import logger from "~/configs/winston.config"

export default class PostgresUtil {
  public database: PoolClient | undefined

  public async initdb() {
    try {
      const pool: Pool = PostgresConnection.getInstance()
      this.database = await pool.connect()
      if (!this.database)
        throw new Error("Database connection has not been initialized!")
    } catch (error: any) {
      logger.log({
        level: "error",
        message: error.message,
      })

      throw new Error("Database connection error: ", error.message)
    }
  }

  public async closeConnection(): Promise<void> {
    if(this.database) {
      this.database.release()
    }
  }

  public static async closePool(): Promise<void> {
    await PostgresConnection.getInstance().end()
  }
}
