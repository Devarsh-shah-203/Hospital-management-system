import express from "express";
import { createAppointment } from "../controllers/appointment.controller.js";
import authenticate from "../middlewares/authenticate.middleware.js";

const router = express.Router();

router.post("/", authenticate, createAppointment);

export default router;