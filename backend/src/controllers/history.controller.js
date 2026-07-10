import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";

import historyService from "../services/history.service.js";

/**
 * GET /api/history/:patientId
 */
export const getPatientHistory = asyncHandler(async (req, res) => {
  const history = await historyService.getPatientHistory(
    req.params.patientId
  );

  return res.status(200).json(
    new ApiResponse(
      200,
      history,
      "Patient history fetched successfully"
    )
  );
});

/**
 * GET /api/history/:patientId/latest
 */
export const getLatestVisit = asyncHandler(async (req, res) => {
  const latestVisit = await historyService.getLatestVisit(
    req.params.patientId
  );

  return res.status(200).json(
    new ApiResponse(
      200,
      latestVisit,
      "Latest visit fetched successfully"
    )
  );
});

/**
 * GET /api/history/details/:appointmentId
 */
export const getHistoryDetails = asyncHandler(async (req, res) => {
  const history = await historyService.getHistoryByAppointmentId(
    req.params.appointmentId
  );

  return res.status(200).json(
    new ApiResponse(
      200,
      history,
      "History details fetched successfully"
    )
  );
});