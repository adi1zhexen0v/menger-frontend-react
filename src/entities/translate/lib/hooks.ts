import { useMutation } from "react-query";
import { translateToEnglish, translateToKazakh } from "../model/api";

export const useTranslateToEnglish = () => {
  const {
    mutate,
    isLoading,
    isError
  } = useMutation((data: string) => translateToEnglish(data));

  return {
    mutate,
    isLoading,
    isError,
  };
}

export const useTranslateToKazakh = () => {
  const {
    mutate,
    isLoading,
    isError
  } = useMutation((data: string) => translateToKazakh(data));

  return {
    mutate,
    isLoading,
    isError,
  };
}