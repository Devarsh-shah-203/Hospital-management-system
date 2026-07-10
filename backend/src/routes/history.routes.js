import { Router } from "express";

import authenticate from "../middlewares/authenticate.middleware.js";

import {
  getPatientHistory,
  getLatestVisit,
  getHistoryDetails,
} from "../controllers/history.controller.js";

const router = Router();

/*
    Base Route

    /api/history
*/

router.use(authenticate);

router.get("/:patientId", getPatientHistory);

router.get("/:patientId/latest", getLatestVisit);

router.get("/details/:appointmentId", getHistoryDetails);

export default router;