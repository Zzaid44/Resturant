import express from "express"
import { createCategory, deleteCategory, getAllCategories, getAllCategoriesById, getAllCategoryById, getAllCategoryByName, updateCategory } from "../controller/categories.Controller.js"
import { product } from "../middleware/protect.middleware.js"
const router = express.Router()
router.post('/category',createCategory)
router.get('/categorise', getAllCategories)
router.get('/category/:id', getAllCategoryById)
router.get('/category/name', getAllCategoryByName)
router.put('/category/:id',updateCategory )
router.delete('/category/:id',product, deleteCategory)
export default  router;
