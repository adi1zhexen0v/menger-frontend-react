import { axiosInstance } from "@shared/api";
import { ICreateWordTaskRequest, IWordTask } from "./types";

export const createWordTask = async (data: ICreateWordTaskRequest) => {
  try {
    const token = localStorage.getItem("token");
    const res = await axiosInstance.post<IWordTask>("/words-tasks", data, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return res.data;
  } catch (error) {
    throw error;
  }
}