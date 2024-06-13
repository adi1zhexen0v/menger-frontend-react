import { axiosInstance } from "@shared/api";
import { ICreateSentenceTaskRequest, ISentenceTask, IUpdateSentenceTasksProgress } from "./types";

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

export const getAllSentenceTaskOfLevel = async (id: string) => {
  try {
    const token = localStorage.getItem("token");
    const res = await axiosInstance.get<ISentenceTask[]>(`/sentence-task/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return res.data;
  } catch (error) {
    throw error;
  }
}

export const updateSentenceTasksProgress = async (data: IUpdateSentenceTasksProgress) => {
  try {
    const res = await axiosInstance.post('/progress/sentence-tasks', data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    });
    return res.data;
  } catch (error) {
    throw error;
  }
}