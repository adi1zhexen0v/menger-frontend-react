import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:4000", // 'https://menger-backend-nestjs.onrender.com',
  headers: {
    'Content-Type': 'application/json',
  },
});