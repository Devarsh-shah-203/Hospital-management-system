import Appointment from "../models/appointment.model.js";
import ApiError from "../utils/ApiError.js";

/**
 * Get complete history of a patient
 */
const getPatientHistory = async (patientId) => {
  const history = await Appointment.find({
    patient: patientId,
    status: "COMPLETED",
  })
    .populate("doctor", "username specialization department")
    .sort({ appointmentDate: -1 });

  return history;
};

/**
 * Get latest completed visit
 */
const getLatestVisit = async (patientId) => {
  const visit = await Appointment.findOne({
    patient: patientId,
    status: "COMPLETED",
  })
    .populate("doctor", "username specialization department")
    .sort({ appointmentDate: -1 });

  if (!visit) {
    throw new ApiError(404, "No patient history found");
  }

  return visit;
};

/**
 * Get appointment history details
 */
const getHistoryByAppointmentId = async (appointmentId) => {
  const appointment = await Appointment.findById(appointmentId)
    .populate("doctor", "username specialization department")
    .populate("patient", "username email phone");

  if (!appointment) {
    throw new ApiError(404, "History not found");
  }

  return appointment;
};

const historyService = {
  getPatientHistory,
  getLatestVisit,
  getHistoryByAppointmentId,
};

export default historyService;