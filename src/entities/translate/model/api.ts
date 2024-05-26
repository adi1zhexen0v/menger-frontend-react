import { axiosInstance } from "@shared/api";
import { ITranslateRequest, ITranslateResponse } from "./types";

export const translateToEnglish = async (text: string) => {
  try {
    const data: ITranslateRequest = { text };
    const res = await axiosInstance.post<ITranslateResponse>("/translate/en", data);
    console.log(res);
    return res.data;
  } catch (error) {
    throw error;
  }
}

export const translateToKazakh = async (text: string) => {
  try {
    const data: ITranslateRequest = { text };
    const res = await axiosInstance.post<ITranslateResponse>("/translate/kk", data);
    return res.data;
  } catch (error) {
    throw error;
  }
}