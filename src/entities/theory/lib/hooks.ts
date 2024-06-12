import { useMutation } from "react-query";
import { createTheory } from "../model/api";

export const useCreateTheory = () => {
  const {
    mutate,
    isLoading,
    data,
    isError,
  } = useMutation(
    (data: FormData) => createTheory(data)
  );

  return {
    mutate,
    isLoading,
    data,
    isError,
  };
};