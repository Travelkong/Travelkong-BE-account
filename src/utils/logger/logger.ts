import logger from "~/configs/winston.config"

export class Logger {
  public error = (err: any) => {
    logger.log({
      level: "error",
      message: err.message,
    })
  }
}
