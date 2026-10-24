import dotenv from "dotenv"
import express from "express"
import cors from "cors"
import { connectDB } from "./src/config/db.js"

dotenv.config()

const app = express ()
connectDB()



const port = process.env.port

app.listen(port, () => {
    console.log("the Server is connection on port:",port)
})

