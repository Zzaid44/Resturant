import dotenv from "dotenv"
import express from "express"
import cors from "cors"
import { connectDB } from "./src/config/db.js"
import Category from "./src/model/categories.Model.js"

dotenv.config()

const app = express ()
app.use(express.json)
connectDB()


app.use( '/api' , categoryRoutes)
const port = process.env.PORT

app.listen(port, () => {
    console.log("the Server is connection on port:",port)
})

