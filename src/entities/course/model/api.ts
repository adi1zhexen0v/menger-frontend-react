import axiosInstance from "@shared/api/instance";
import { ICourse } from "./types";

export const getLatestCourses = async (): Promise<ICourse[]> => {
  try {
    const res = await axiosInstance.get<ICourse[]>("/courses");
    return res.data;
  } catch (error) {
    console.log(error);
    return [];
  }
}