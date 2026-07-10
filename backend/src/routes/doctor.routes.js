import { Router } from "express";

import authenticate from "../middlewares/authenticate.middleware.js";
// import authorize from "../middlewares/role.middleware.js";

import {
  getDashboard,
  getTodayAppointmentsController,
  getAppointmentController,
  completeAppointmentController,
  cancelAppointmentController,
  getAllDoctors 
} from "../controllers/doctor.controller.js";

const router = Router();

/*
    Base Route

    /api/doctor
*/

router.use(authenticate);

// If your team has role middleware, enable this
// router.use(authorize("DOCTOR"));

router.get("/dashboard", getDashboard);

router.get("/today", getTodayAppointmentsController);

router.get(
  "/appointment/:id",
  getAppointmentController
);

router.patch(
  "/appointment/:id/complete",
  completeAppointmentController
);

router.patch(
  "/appointment/:id/cancel",
  cancelAppointmentController
);


router.get("/alldoctors",authenticate, getAllDoctors);


export default router;