import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://diploma.portfolio-adilzhexenov.kz/",  //"http://localhost:4000",
  headers: {
    'Content-Type': 'application/json',
  },
});