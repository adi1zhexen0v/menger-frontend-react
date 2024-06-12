import { axiosInstance } from "@shared/api";
import { ICreateSentenceTaskRequest } from "./types";

export const createSentenceTask = async (data: ICreateSentenceTaskRequest) => {
  try {
    const token = localStorage.getItem("token");
    const res = await axiosInstance.post("/sentence-task", data, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return res.data;
  } catch (error) {
    throw error;
  }
}