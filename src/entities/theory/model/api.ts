import { axiosInstance } from "@shared/api";
import { ITheory, IUpdateTheoryProgress } from "./types";
import { IUser } from "@entities/user";

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

export const getTheoryById = async (id: string) => {
  try {
    const res = await axiosInstance.get<ITheory>(`/theory/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      }
    });
    console.log(res);
    return res.data;
  } catch (error) {
    throw error;
  }
}

export const updateTheoryProgress = async (data: IUpdateTheoryProgress) => {
  try {
    const res = await axiosInstance.post<IUser>('/progress/theory', data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    });
    console.log("updateTheoryProgress", res);
    return res.data;
  } catch (error) {
    throw error;
  }
}