import { axiosInstance } from "@shared/api";
import { IApplication, ICreateApplicationRequest } from "./types";

export const createNewApplication = async (data: ICreateApplicationRequest): Promise<IApplication> => {
  try {
    const res = await axiosInstance.post<IApplication>("/applications", data);
    return res.data;
  } catch (error) {
    throw error;
  }
}

export const getAllApplications = async (): Promise<IApplication[]> => {
  try {
    const token = localStorage.getItem("token");
    const res = await axiosInstance.get<IApplication[]>("/applications", {
      headers: { Authorization: `Bearer ${token}` }
    });
    return res.data;
  } catch (error) {
    throw error;
  }
}