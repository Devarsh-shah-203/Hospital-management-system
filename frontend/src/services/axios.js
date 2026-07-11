import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/api", // Change if your backend uses another port
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add Authorization header automatically
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default api;