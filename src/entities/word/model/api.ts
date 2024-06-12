import { axiosInstance } from "@shared/api";
import { IWord } from "./types";

export const getAllWords = async () => {
  try {
    const res = await axiosInstance.get<IWord[]>("/word", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    });
    return res.data;
  } catch (error) {
    throw error;
  }
}

export const getAllUnusedWords = async (id: string) => {
  try {
    const res = await axiosInstance.get<IWord[]>(`/word/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    });
    return res.data;
  } catch (error) {
    throw error;
  }
}

export const createNewWord = async (data: FormData) => {
  try {
    const token = localStorage.getItem("token");
    const res = await axiosInstance.post<IWord>("/word/", data, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data'
      }
    });
    return res.data;
  } catch (error) {
    throw error;
  }
}