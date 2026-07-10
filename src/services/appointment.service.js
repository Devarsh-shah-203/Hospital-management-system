import Appointment from "../models/appointment.model.js";
import User from "../models/user.model.js";
import ApiError from "../utils/ApiError.js";

export const createAppointmentService = async ({
  patientId,
  doctorId,
  appointmentDate,
  appointmentTime,
}) => {
  // Check doctor exists
  const doctor = await User.findById(doctorId);

  if (!doctor || doctor.role !== "doctor" || !doctor.isActive) {
    throw new ApiError(404, "Doctor not found or inactive");
  }

  // Prevent booking in the past
  const selectedDate = new Date(appointmentDate);
  const today = new Date();

  selectedDate.setHours(0, 0, 0, 0);
  today.setHours(0, 0, 0, 0);

  if (selectedDate < today) {
    throw new ApiError(400, "Appointment date cannot be in the past");
  }

  // Check if slot is already booked
  const existingAppointment = await Appointment.findOne({
    doctor: doctorId,
    appointmentDate: selectedDate,
    appointmentTime,
    status: {
      $nin: ["CANCELLED", "NO_SHOW"],
    },
  });

  if (existingAppointment) {
    throw new ApiError(409, "Selected time slot is already booked");
  }

  const appointment = await Appointment.create({
    patient: patientId,
    doctor: doctorId,
    appointmentDate: selectedDate,
    appointmentTime,
    consultationDuration:
      doctor.consultationDuration || 15,
  });

  return appointment;
};