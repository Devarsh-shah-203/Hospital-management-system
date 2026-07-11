import api from "./axios";

// Dashboard
export const getDashboard = async () => {
  const response = await api.get("/doctor/dashboard");
  return response.data.data;
};

// Today's Appointments
export const getTodayAppointments = async () => {
  const response = await api.get("/doctor/today");
  return response.data.data;
};

// Complete Appointment
export const completeAppointment = async (
  appointmentId,
  diagnosis,
  prescription
) => {
  const response = await api.patch(
    `/doctor/appointment/${appointmentId}/complete`,
    {
      diagnosis,
      prescription,
    }
  );

  return response.data.data;
};

// Cancel Appointment
export const cancelAppointment = async (appointmentId) => {
  const response = await api.patch(
    `/doctor/appointment/${appointmentId}/cancel`,
    {
      cancellationReason: "Cancelled by doctor",
    }
  );

  return response.data.data;
};