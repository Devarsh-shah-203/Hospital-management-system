import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";
import { createAppointmentService } from "../services/appointment.service.js";

export const createAppointment = asyncHandler(async (req, res) => {
  const patientId = req.user.id;

  const {
    doctorId,
    appointmentDate,
    appointmentTime,
  } = req.body;

  const appointment = await createAppointmentService({
    patientId,
    doctorId,
    appointmentDate,
    appointmentTime,
  });

  return res.status(201).json(
    new ApiResponse(
      201,
      appointment,
      "Appointment booked successfully"
    )
  );
});