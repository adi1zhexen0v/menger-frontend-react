import { axiosInstance } from "@shared/api";
import { ICourse } from "./types";

export const getAllCourses = async (): Promise<ICourse[]> => {
  try {
    const res = await axiosInstance.get<ICourse[]>("/courses");
    return res.data;
  } catch (error) {
    console.log(error);
    return [];
  }
}


export const getPublicCourses = async (): Promise<ICourse[]> => {
  try {
    const res = await axiosInstance.get<ICourse[]>("/courses/public");
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

export const getCourseBySlug = async (slug: string): Promise<ICourse> => {
  try {
    const res = await axiosInstance.get<ICourse>(`/courses/${slug}`);
    return res.data;
  } catch (error) {
    throw error;
  }
}

export const createCourse = async (data: FormData) => {
  try {
    const token = localStorage.getItem("token");
    const res = await axiosInstance.post<ICourse>("/courses", data, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data"
      }
    });
    return res.data;
  } catch (error) {
    throw error;
  }
}

export const updateCourse = async (id: string, data: FormData) => {
  try {
    const token = localStorage.getItem("token");
    const res = await axiosInstance.patch<ICourse>(`/courses/${id}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data"
      }
    });
    return res.data;
  } catch (error) {
    throw error;
  }
}