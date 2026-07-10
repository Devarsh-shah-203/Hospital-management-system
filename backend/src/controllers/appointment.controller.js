import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";
import { createAppointmentService,getDoctorAvailabilityService,getMyAppointmentsService,cancelAppointmentService } from "../services/appointment.service.js";

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

export const getMyAppointments = asyncHandler(async (req, res) => {
  const appointments = await getMyAppointmentsService(req.user.id);

  return res.status(200).json(
    new ApiResponse(
      200,
      appointments,
      "Appointments fetched successfully"
    )
  );
});

export const cancelAppointment = asyncHandler(async (req, res) => {
  const appointment = await cancelAppointmentService(
    req.params.appointmentId,
    req.user.id
  );

  return res.status(200).json(
    new ApiResponse(
      200,
      appointment,
      "Appointment cancelled successfully"
    )
  );
});

export const getDoctorAvailability = asyncHandler(async (req, res) => {
  const { doctorId } = req.params;
  const { date } = req.query;

  if (!date) {
    return res.status(400).json(
      new ApiResponse(400, null, "Date is required")
    );
  }

  const availability = await getDoctorAvailabilityService(
    doctorId,
    date
  );

  return res.status(200).json(
    new ApiResponse(
      200,
      availability,
      "Doctor availability fetched successfully"
    )
  );
});

