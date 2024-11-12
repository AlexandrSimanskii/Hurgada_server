import express from "express";

import {getNightLive} from "../controllers/night.controller.js"

const router = express.Router();
router.get("/get",getNightLive );

export default router;