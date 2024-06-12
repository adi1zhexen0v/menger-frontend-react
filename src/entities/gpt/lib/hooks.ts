import { useMutation } from "react-query"
import { getTranscriptionOfWord, getWrongOptionsOfWordTask } from "../model";

export const useTranscriptionOfWord = () => {
  const {
    mutate,
    isLoading,
    isError
  } = useMutation((data: string) => getTranscriptionOfWord(data));

  return {
    mutate,
    isLoading,
    isError,
  };
}

export const useWrongOptionsOfWordTask = () => {
  const {
    mutate,
    isLoading,
    isError
  } = useMutation((data: string) => getWrongOptionsOfWordTask(data));

  return {
    mutate,
    isLoading,
    isError,
  };
}