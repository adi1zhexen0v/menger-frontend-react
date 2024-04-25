import { axiosInstance } from "@shared/api";
import { IApplication, ICreateApplicationRequest } from "./types";

export const createNewApplication = async (data: ICreateApplicationRequest): Promise<IApplication | null> => {
  try {
    const res = await axiosInstance.post<IApplication>("/applications", data);
    return res.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}