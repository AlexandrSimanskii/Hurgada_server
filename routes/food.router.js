import express from "express";

import { getFoods } from "../controllers/food.controller.js";

const router = express.Router();
router.get("/get",getFoods);

export default router;