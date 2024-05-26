import { axiosInstance } from "@shared/api";
import { IWord } from "./types";

export const getAllWords = async () => {
  try {
    const res = await axiosInstance.get<IWord[]>("/word", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    });
    return res.data;
  } catch (error) {
    throw error;
  }
}