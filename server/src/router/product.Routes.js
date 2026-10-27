import express from "express"
import { createCategory, deleteCategory, getAllCategories, getAllCategoriesById, getAllCategoryById, getAllCategoryByName, updateCategory } from "../controller/categories.Controller.js"
const router = express.Router()
router.post('/product',protect,createCategory)
router.get('/product', getAllCategories)
router.get('/product/:id', getAllCategoryById)
router.get('/product/name', getAllCategoryByName)
router.put('/product/:id',protect,updateCategory )
router.delete('/product/:id',protect,deleteCategory)
export default  router;