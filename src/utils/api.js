import axios from "axios";

// Simple axios instance
const api = axios.create({
  baseURL: "https://gtw-backend-qhwv.onrender.com/",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: false, // you can set true later if you add cookies/auth
});

export default api;
