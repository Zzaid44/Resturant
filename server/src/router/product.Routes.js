import express from "express"
import { createCategory, deleteCategory, getAllCategories, getAllCategoriesById, getAllCategoryById, getAllCategoryByName, updateCategory } from "../controller/categories.Controller.js"
const router = express.Router()
router.post('/product',createCategory)
router.get('/product', getAllCategories)
router.get('/product/:id', getAllCategoryById)
router.get('/product/name', getAllCategoryByName)
router.put('/product/:id',updateCategory )
router.delete('/product/:id',deleteCategory)
export default  router;