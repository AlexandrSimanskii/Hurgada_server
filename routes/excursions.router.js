import express from "express";

import {
  getExcursions,
  getExcursionsCategories,
} from "../controllers/excursions.controller.js";

const router = express.Router();
router.get("/get", getExcursions);
router.get("/get/categories", getExcursionsCategories);

export default router;
