import Queue from "../models/queue.model.js";
import Appointment from "../models/appointment.model.js";
import ApiError from "../utils/ApiError.js";

export const createQueueEntryService = async (appointmentId) => {
  // Check appointment
  const appointment = await Appointment.findById(appointmentId);

  if (!appointment) {
    throw new ApiError(404, "Appointment not found");
  }

  if (appointment.status === "CANCELLED") {
    throw new ApiError(400, "Cannot create queue for cancelled appointment");
  }

  // Prevent duplicate queue entry
  const existingQueue = await Queue.findOne({
    appointment: appointmentId,
  });

  if (existingQueue) {
    throw new ApiError(409, "Queue entry already exists");
  }

  // Count today's queue for the doctor
  const queueCount = await Queue.countDocuments({
    doctor: appointment.doctor,
    queueDate: appointment.appointmentDate,
  });

  const queueEntry = await Queue.create({
    appointment: appointment._id,
    patient: appointment.patient,
    doctor: appointment.doctor,
    queueDate: appointment.appointmentDate,
    queueNumber: queueCount + 1,
    position: queueCount + 1,
    estimatedWaitTime:
      queueCount * appointment.consultationDuration,
  });

  return queueEntry;
};

export const getMyQueueService = async (patientId) => {
  const queue = await Queue.findOne({
    patient: patientId,
    status: {
      $in: ["WAITING", "CALLED", "IN_PROGRESS"],
    },
  })
    .populate({
      path: "appointment",
      select:
        "appointmentDate appointmentTime consultationDuration status",
    })
    .populate({
      path: "doctor",
      select: "username specialization department",
    });

  if (!queue) {
    throw new ApiError(404, "No active queue found");
  }

  return queue;
};

