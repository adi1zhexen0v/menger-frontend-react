import { axiosInstance } from "@shared/api";
import { IAuthLoginRequest, IAuthRegisterRequest, IAuthResponse } from "./types";

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