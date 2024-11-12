import express from "express";

import { getExcursions } from "../controllers/excursions.controller.js";

const router = express.Router();
router.get("/get", getExcursions);

export default router;