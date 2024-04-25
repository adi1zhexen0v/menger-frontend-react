import { axiosInstance } from "@shared/api";
import { IAuthLoginRequest, IAuthRegisterRequest, IAuthResponse } from "./types";

export const register = async (data: IAuthRegisterRequest): Promise<IAuthResponse | null> => {
  try {
    const res = await axiosInstance.post("/auth/register", data);
    return res.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export const login = async (data: IAuthLoginRequest): Promise<IAuthResponse | null> => {
  try {
    const res = await axiosInstance.post("/auth/login", data);
    return res.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}