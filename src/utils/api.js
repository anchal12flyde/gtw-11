import axios from "axios";

// Simple axios instance
const api = axios.create({
  baseURL: "https://gtw-backend-qhwv.onrender.com/api",
  // baseURL: "http://localhost:5000/api",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: false,
});

export default api;
