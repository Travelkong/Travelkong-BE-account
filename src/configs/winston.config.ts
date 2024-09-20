import winston, { format, transports } from "winston"
import { existsSync, mkdirSync } from "fs"
import path from "path"

const logDirectory: string = path.join(__dirname, "../../logs")

if (!existsSync(logDirectory)) {
  mkdirSync(logDirectory, { recursive: true })
}

const logger: winston.Logger = winston.createLogger({
  defaultMeta: { service: "user-service" },
  format: format.combine(
    format.splat(),
    format.json(),
    format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    format.colorize({ all: true }),
    format.printf((log: winston.Logform.TransformableInfo) => {
      if (log.stack) return `[${log.timestamp}] [${log.level}] [${log.stack}]`
      return `[${log.timestamp}] [${log.level}] ${log.message}`
    }),
  ),
  transports: [
    new transports.Console(),
    new transports.File({
      level: "error",
      filename: path.join(__dirname, "errors.log"),
    }),
  ],
})

export default logger
