import { axiosInstance } from "@shared/api";
import { ICourse } from "./types";

export const getPublicCourses = async (): Promise<ICourse[]> => {
  try {
    const res = await axiosInstance.get<ICourse[]>("/courses");
    return res.data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export const getLatestCourses = async (): Promise<ICourse[]> => {
  try {
    const res = await axiosInstance.get<ICourse[]>("/courses/latest");
    return res.data;
  } catch (error) {
    console.log(error);
    return [];
  }
}