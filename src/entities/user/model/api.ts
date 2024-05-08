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