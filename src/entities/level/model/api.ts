import { axiosInstance } from "@shared/api"
import { ICreateLevelRequest, ILevel } from "./types";

export const createLevel = async (data: ICreateLevelRequest) => {
  try {
    const token = localStorage.getItem("token");
    const res = await axiosInstance.post<ILevel>("/level", data, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return res.data;
  } catch (error) {
    throw error;
  }
}

export const getLevelById = async (id: string) => {
  try {
    const token = localStorage.getItem("token");
    const res = await axiosInstance.get<ILevel>(`/level/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return res.data;
  } catch (error) {
    throw error;
  }
} 