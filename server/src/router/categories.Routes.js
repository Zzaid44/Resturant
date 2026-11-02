import express from "express";
import {
  createCategory,
  deleteCategory,
  getAllCategories,
  getAllCategoryById,
  getAllCategoryByName,
  updateCategory,
} from "../controller/categories.Controller.js";
import { protect } from "../middleware/protect.middleware.js";
const router = express.Router();

router.post("/category", protect, createCategory);
router.get("/categorise", getAllCategories);
router.get("/category/:id", getAllCategoryById);
router.get("/category/name", getAllCategoryByName);
router.put("/category/:id", protect, updateCategory);
router.delete("/category/:id", protect, deleteCategory);
export default router;
