import axios from "axios";

const axiosInstance = axios.create({
  baseURL: 'https://menger-backend-nestjs.onrender.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;