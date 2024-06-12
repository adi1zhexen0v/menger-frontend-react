import { axiosInstance } from "@shared/api";
import { IGPTWordRequest, IGPTWordTaskWrongOptionsResponse, IGPTWordTranscriptResponse } from "./types";

export const getTranscriptionOfWord = async (word: string) => {
  try {
    const token = localStorage.getItem("token");
    const data: IGPTWordRequest = { word };
    const res = await axiosInstance.post<IGPTWordTranscriptResponse>("/gpt/transcription", data, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    return res.data;
  } catch (error) {
    throw error;
  }
}

export const getWrongOptionsOfWordTask = async (word: string) => {
  try {
    const token = localStorage.getItem("token");
    const data: IGPTWordRequest = { word };
    const res = await axiosInstance.post<IGPTWordTaskWrongOptionsResponse>("/gpt/wrongOptions", data, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    return res.data;
  } catch (error) {
    throw error;
  }
}