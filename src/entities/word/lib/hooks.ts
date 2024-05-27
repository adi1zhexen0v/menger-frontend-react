import { useMutation, useQuery } from "react-query"
import { getAllWords } from "../model"
import { createNewWord } from "../model/api";

export const useWords = () => {
  return useQuery("words", getAllWords);
}

export const useCreateNewWord = () => {
  const {
    mutate,
    isLoading,
    isError
  } = useMutation((data: FormData) => createNewWord(data));

  return {
    mutate,
    isLoading,
    isError,
  };
}