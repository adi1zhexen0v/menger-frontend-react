import { useMutation, useQuery } from "react-query"
import { getAllWords } from "../model"
import { createNewWord, getAllUnusedWords } from "../model/api";

export const useWords = () => {
  return useQuery("words", getAllWords);
}

export const useUnusedWords = (id: string) => {
  return useQuery(["words", id], () => getAllUnusedWords(id));
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