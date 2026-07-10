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

  if (!doctor || doctor.role !== "DOCTOR" || !doctor.isAvailable) {
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


const generateTimeSlots = (start, end, duration) => {
  const slots = [];

  const [startHour, startMinute] = start.split(":").map(Number);
  const [endHour, endMinute] = end.split(":").map(Number);

  let current = new Date();
  current.setHours(startHour, startMinute, 0, 0);

  const endTime = new Date();
  endTime.setHours(endHour, endMinute, 0, 0);

  while (current < endTime) {
    slots.push(
      current.toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      })
    );

    current = new Date(current.getTime() + duration * 60000);
  }

  return slots;
};

export const getDoctorAvailabilityService = async (
  doctorId,
  appointmentDate
) => {
  const doctor = await User.findById(doctorId);

  if (!doctor)
    throw new ApiError(404, "Doctor not found");

  if (doctor.role !== "DOCTOR")
    throw new ApiError(400, "Invalid doctor");

  if (!doctor.isAvailable)
    throw new ApiError(400, "Doctor is unavailable");

  const bookedAppointments = await Appointment.find({
    doctor: doctorId,
    appointmentDate: new Date(appointmentDate),
    status: {
      $nin: ["CANCELLED", "NO_SHOW"],
    },
  }).select("appointmentTime");

  const bookedSlots = bookedAppointments.map(
    (appointment) => appointment.appointmentTime
  );

  const allSlots = generateTimeSlots(
    doctor.workingHours.start,
    doctor.workingHours.end,
    doctor.consultationDuration
  );

  const availableSlots = allSlots.map((slot) => ({
    time: slot,
    available: !bookedSlots.includes(slot),
  }));

  return {
    doctorId,
    appointmentDate,
    consultationDuration: doctor.consultationDuration,
    slots: availableSlots,
  };
};

export const getMyAppointmentsService = async (patientId) => {
  const appointments = await Appointment.find({
    patient: patientId,
  })
    .populate(
      "doctor",
      " specialization department"
    )
    .sort({
      appointmentDate: 1,
      appointmentTime: 1,
    });

  return appointments;
};

export const cancelAppointmentService = async (
  appointmentId,
  patientId
) => {
  const appointment = await Appointment.findOne({
    _id: appointmentId,
    patient: patientId,
  });

  if (!appointment) {
    throw new ApiError(404, "Appointment not found");
  }

  if (appointment.status === "CANCELLED") {
    throw new ApiError(400, "Appointment already cancelled");
  }

  if (appointment.status === "COMPLETED") {
    throw new ApiError(
      400,
      "Completed appointments cannot be cancelled"
    );
  }

  appointment.status = "CANCELLED";

  await appointment.save();

  return appointment;
};