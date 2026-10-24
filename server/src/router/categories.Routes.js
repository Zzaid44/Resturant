import express from "express"
import { createCategory } from "../controller/categories.Controller.js"
const router = express.Router()
router.post('/category',createCategory)

export default  router