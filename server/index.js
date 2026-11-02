import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { connectDB } from "./src/config/db.js";
import categoriesRoutes from "./src/router/categories.Routes.js";
import productRoutes from "./src/router/product.Routes.js";
import authRoutes from "./src/router/auth.Routes.js";
import userRoutes from "./src/router/user.Routes.js";

dotenv.config();
connectDB();

const app = express();
connectDB();
app.use(express.json());
app.use(
  cors({
      origin: "http://localhost:5173",
      credentials: true,
      methods: ['GET', 'POST','PUT','DELETE','PATCH']
      
  }),
);
app.get("/", (req, res) => {
  res.send("ok");
});

app.use("/api", categoriesRoutes);
 app.use("/api", productRoutes);
 app.use("/api", authRoutes);
 app.use("/api", userRoutes);

const port = process.env.PORT;

app.listen(port, () => {
  console.log("the Server is connection on port:", port);
});
