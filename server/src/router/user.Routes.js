import express from "express"
import { createCategory, deleteCategory, getAllCategories,  getAllCategoryById, getAllCategoryByName, updateCategory } from "../controller/categories.Controller.js"
import { protect } from "../middleware/protect.middleware.js"
const router = express.Router()

router.get('/users',protect , getAllCategories)
router.get('/user/:id',protect , getAllCategoryById)
router.get('/user-email',protect , getAllCategoryByName)
router.put('/user',updateCategory )
router.delete('/user/:id',protect, deleteCategory)
export default  router;