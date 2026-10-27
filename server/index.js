import dotenv from "dotenv"
import express from "express"
import cors from "cors"
import { connectDB } from "./src/config/db.js"
import categoriesRoutes from "./src/router/categories.Routes.js"
import productRoutes from "./src/router/product.Routes.js"
import authRoutes from "./src/router/auth.Routes.js"
import userRoutes from "./src/router/user.Routes.js"

dotenv.config()

const app = express ()
app.use(express.json)
connectDB()


app.use( '/api' , categoriesRoutes)
app.use( '/api' , productRoutes)
app.use( '/api' ,authRoutes)
app.use( '/api' ,userRoutes)



const port = process.env.PORT

app.listen(port, () => {
    console.log("the Server is connection on port:",port)
})

