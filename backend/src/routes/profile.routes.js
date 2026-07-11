import express from "express";

import authenticate from "../middlewares/authenticate.middleware.js";

import {
  getMyProfile,
  updateMyProfile,
} from "../controllers/profile.controller.js";

const router = express.Router();

router.get("/me", authenticate, getMyProfile);

router.patch("/me", authenticate, updateMyProfile);

export default router;