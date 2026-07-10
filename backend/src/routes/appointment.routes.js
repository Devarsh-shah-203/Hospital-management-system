import express from "express";
import { createAppointment,getDoctorAvailability,getMyAppointments,cancelAppointment } from "../controllers/appointment.controller.js";

import authenticate from "../middlewares/authenticate.middleware.js";

const router = express.Router();

router.post("/create", authenticate, createAppointment);

router.get(
    "/availability/:doctorId",
    authenticate,
    getDoctorAvailability
  );

router.get(
    "/viewAppointments",
    authenticate,
    getMyAppointments
  );

router.patch(
    "/:appointmentId/cancel",
    authenticate,
    cancelAppointment
  );

export default router;