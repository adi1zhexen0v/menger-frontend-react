import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: 'https://menger-backend-nestjs.onrender.com',
  headers: {
    'Content-Type': 'application/json',
  },
});