import express from "express";

import { getFoods, getFoodCategories } from "../controllers/food.controller.js";

const router = express.Router();
router.get("/get", getFoods);
router.get("/get/categories", getFoodCategories);

export default router;
