import express from "express";

import {
  getNightLive,
  getNightCategories,
} from "../controllers/night.controller.js";

const router = express.Router();

router.get("/get", getNightLive);
router.get("/get/categories", getNightCategories);

export default router;
