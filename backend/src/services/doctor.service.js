import Appointment from "../models/appointment.model.js";
import ApiError from "../utils/ApiError.js";
import User from "../models/user.model.js";

const getTodayRange = () => {
  const start = new Date();
  start.setHours(0, 0, 0, 0);

  const end = new Date();
  end.setHours(23, 59, 59, 999);

  return { start, end };
};

export const getDashboardStats = async (doctorId) => {
  const { start, end } = getTodayRange();

  const appointments = await Appointment.find({
    doctor: doctorId,
    appointmentDate: {
      $gte: start,
      $lte: end,
    },
  });

  return {
    totalAppointments: appointments.length,

    booked: appointments.filter(
      (item) => item.status === "BOOKED"
    ).length,

    checkedIn: appointments.filter(
      (item) => item.status === "CHECKED_IN"
    ).length,

    inProgress: appointments.filter(
      (item) => item.status === "IN_PROGRESS"
    ).length,

    completed: appointments.filter(
      (item) => item.status === "COMPLETED"
    ).length,

    cancelled: appointments.filter(
      (item) => item.status === "CANCELLED"
    ).length,

    noShow: appointments.filter(
      (item) => item.status === "NO_SHOW"
    ).length,
  };
};

export const getTodayAppointments = async (doctorId) => {
  const { start, end } = getTodayRange();

  return await Appointment.find({
    doctor: doctorId,
    appointmentDate: {
      $gte: start,
      $lte: end,
    },
  })
    .populate("patient", "username email phone")
    .sort({ appointmentTime: 1 });
};

export const getAppointmentDetails = async (
  appointmentId,
  doctorId
) => {
  const appointment = await Appointment.findOne({
    _id: appointmentId,
    doctor: doctorId,
  })
    .populate("patient", "username email phone")
    .populate(
      "doctor",
      "username specialization department"
    );

  if (!appointment) {
    throw new ApiError(404, "Appointment not found");
  }

  return appointment;
};

export const completeAppointment = async (
  appointmentId,
  doctorId,
  diagnosis,
  prescription
) => {
  const appointment = await Appointment.findOneAndUpdate(
    {
      _id: appointmentId,
      doctor: doctorId,
    },
    {
      status: "COMPLETED",
      diagnosis,
      prescription
    },
    {
      new: true,
      runValidators: true,
    }
  );

  if (!appointment) {
    throw new ApiError(404, "Appointment not found");
  }

  return appointment;
};

export const cancelAppointment = async (
  appointmentId,
  doctorId,
  cancellationReason
) => {
  const appointment = await Appointment.findOneAndUpdate(
    {
      _id: appointmentId,
      doctor: doctorId,
    },
    {
      status: "CANCELLED",
      cancellationReason,
    },
    {
      new: true,
      runValidators: true,
    }
  );

  if (!appointment) {
    throw new ApiError(404, "Appointment not found");
  }

  return appointment;
};


export const getAllDoctorsService = async () => {
  const doctors = await User.find({
    role: "DOCTOR",
    isAvailable: true,
    isActive: true,
  })
    .select(
      "_id fullName specialization department experience consultationDuration workingHours"
    )
    .sort({ fullName: 1 });

  if (!doctors.length) {
    throw new ApiError(404, "No doctors found");
  }

  return doctors;
};