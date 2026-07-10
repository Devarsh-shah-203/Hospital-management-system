import express from "express";

import authenticate from "../middlewares/authenticate.middleware.js";

import {
 
  getMyQueue,
} from "../controllers/queue.controller.js";

const router = express.Router();

router.get("/myQueue", authenticate, getMyQueue);

export default router;