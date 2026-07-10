import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";

import {
  getDashboardStats,
  getTodayAppointments,
  getAppointmentDetails,
  completeAppointment,
  cancelAppointment,
} from "../services/doctor.service.js";

/**
 * GET /api/doctor/dashboard
 */
export const getDashboard = asyncHandler(async (req, res) => {
  const data = await getDashboardStats(req.user._id);

  return res.status(200).json(
    new ApiResponse(
      200,
      data,
      "Dashboard fetched successfully"
    )
  );
});

/**
 * GET /api/doctor/today
 */
export const getTodayAppointmentsController = asyncHandler(async (req, res) => {
  const appointments = await getTodayAppointments(req.user._id);

  return res.status(200).json(
    new ApiResponse(
      200,
      appointments,
      "Today's appointments fetched successfully"
    )
  );
});

/**
 * GET /api/doctor/appointment/:id
 */
export const getAppointmentController = asyncHandler(async (req, res) => {
  const appointment = await getAppointmentDetails(
    req.params.id,
    req.user._id
  );

  return res.status(200).json(
    new ApiResponse(
      200,
      appointment,
      "Appointment details fetched successfully"
    )
  );
});

/**
 * PATCH /api/doctor/appointment/:id/complete
 */
export const completeAppointmentController = asyncHandler(async (req, res) => {
  const { notes } = req.body;

  const appointment = await completeAppointment(
    req.params.id,
    req.user._id,
    notes
  );

  return res.status(200).json(
    new ApiResponse(
      200,
      appointment,
      "Appointment marked as completed"
    )
  );
});

/**
 * PATCH /api/doctor/appointment/:id/cancel
 */
export const cancelAppointmentController = asyncHandler(async (req, res) => {
  const { cancellationReason } = req.body;

  const appointment = await cancelAppointment(
    req.params.id,
    req.user._id,
    cancellationReason
  );

  return res.status(200).json(
    new ApiResponse(
      200,
      appointment,
      "Appointment cancelled successfully"
    )
  );
});