import api from "./axios";

export const getMyQueue = async () => {
  const response = await api.get("/queue/myQueue");
  return response.data.data;
};