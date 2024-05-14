import { axiosInstance } from "@shared/api";
import { IAuthLoginRequest, IAuthRegisterRequest, IAuthResponse, IUser } from "./types";

export const register = async (data: IAuthRegisterRequest): Promise<IAuthResponse> => {
  try {
    const res = await axiosInstance.post("/auth/register", data);
    return res.data;
  } catch (error) {
    throw null;
  }
}

export const login = async (data: IAuthLoginRequest): Promise<IAuthResponse> => {
  try {
    const res = await axiosInstance.post("/auth/login", data);
    return res.data;
  } catch (error) {
    throw error;
  }
}

export const getMe = async (): Promise<IUser | null> => {
  const token = localStorage.getItem("token");
  if (!token) {
    return null;
  }

  try {
    const res = await axiosInstance.get<IUser>("/users/me", {
      headers: { Authorization: `Bearer ${token}` }
    });
    return res.data;
  } catch (error) {
    throw error;
  }
}

export const addCourseToCart = async (courseId: string): Promise<IUser> => {
  try {
    const token = localStorage.getItem("token");
    const res = await axiosInstance.patch<IUser>(`/users/cart/${courseId}`, {}, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return res.data;
  } catch (error) {
    throw error;
  }
}

export const removeCourseToCart = async (courseId: string): Promise<IUser> => {
  try {
    const token = localStorage.getItem("token");
    const res = await axiosInstance.delete<IUser>(`/users/cart/${courseId}`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return res.data;
  } catch (error) {
    throw error;
  }
}

export const transferCoursesFromCartToCourses = async (): Promise<IUser> => {
  try {
    const token = localStorage.getItem("token");
    const res = await axiosInstance.put<IUser>("/users/cart", {}, {
      headers: { Authorization: `Bearer ${token}` }
    });
    console.log(res);
    return res.data;
  } catch (error) {
    throw error;
  }
}