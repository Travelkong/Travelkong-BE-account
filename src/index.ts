import express, {Express, Request, Response} from "express"
import dotenv from "dotenv"
import http from "http"
import cors from "cors"

import startServer from "./server"

dotenv.config()

const app: Express = express()
const server: http.Server = http.createServer(app)

app.get("/", (req: Request, res: Response) => {
    res.send("Hello world")
})

// Enable CORS middleware
app.use(cors())
app.options("*", cors())

startServer(server)