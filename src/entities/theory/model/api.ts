import { axiosInstance } from "@shared/api";
import { ITheory } from "./types";

export const createTheory = async (data: FormData) => {
  try {
    const res = await axiosInstance.post<ITheory>("/theory", data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        "Content-Type": "multipart/form-data"
      }
    });
    return res.data;
  } catch (error) {
    throw error;
  }
}