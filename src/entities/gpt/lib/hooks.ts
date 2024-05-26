import { useMutation } from "react-query"
import { getTranscriptionOfWord } from "../model";

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