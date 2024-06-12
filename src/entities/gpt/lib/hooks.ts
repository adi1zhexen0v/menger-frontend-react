import { useMutation } from "react-query"
import { getTranscriptionOfWord, getWrongOptionsOfWordTask, getWrongOptionsOfSentenceTask } from "../model";
import { IGPTSentenceTaskWrongOptionsRequest } from "../model/types";

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

export const useWrongOptionsOfSentenceTask = () => {
  const {
    mutate,
    isLoading,
    isError
  } = useMutation((data: IGPTSentenceTaskWrongOptionsRequest) => getWrongOptionsOfSentenceTask(data));

  return {
    mutate,
    isLoading,
    isError,
  };
}