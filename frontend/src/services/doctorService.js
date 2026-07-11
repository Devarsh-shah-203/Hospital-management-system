import api from "./axios";

export const getDashboard = async () => {
  const response = await api.get("/doctor/dashboard");
  return response.data.data;
};

export const getTodayAppointments = async () => {
  const response = await api.get("/doctor/today");
  return response.data.data;
};

export const completeAppointment = async (appointmentId) => {
  const response = await api.patch(
    `/doctor/appointment/${appointmentId}/complete`
  );

  return response.data;
};

export const cancelAppointment = async (appointmentId) => {
  const response = await api.patch(
    `/doctor/appointment/${appointmentId}/cancel`
  );

  return response.data;
};