import { axiosInstance } from "@shared/api";
import { IGPTSentenceTaskWrongOptionsRequest, IGPTSentenceTaskWrongOptionsResponse, IGPTWordRequest, IGPTWordTaskWrongOptionsResponse, IGPTWordTranscriptResponse } from "./types";

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
    const res = await axiosInstance.post<IGPTWordTaskWrongOptionsResponse>("/gpt/words-task", data, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    return res.data;
  } catch (error) {
    throw error;
  }
}

export const getWrongOptionsOfSentenceTask = async (data: IGPTSentenceTaskWrongOptionsRequest) => {
  try {
    const token = localStorage.getItem("token");
    const res = await axiosInstance.post<IGPTSentenceTaskWrongOptionsResponse>("/gpt/sentence-task", data, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    return res.data.wrongOptions;
  } catch (error) {
    throw error;
  }
}