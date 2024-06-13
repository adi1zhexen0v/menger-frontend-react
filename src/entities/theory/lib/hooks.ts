import { useMutation, useQuery } from "react-query";
import { createTheory, getTheoryById } from "../model";
import { IUpdateTheoryProgress } from "../model/types";
import { updateTheoryProgress } from "../model/api";

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

export const useTheoryById = (id: string) => {
  return useQuery(["theory", id], () => getTheoryById(id));
}

export const useUpdateTheoryProgress = () => {
  const {
    mutate,
    isLoading,
    data,
    isError,
  } = useMutation(
    (data: IUpdateTheoryProgress) => updateTheoryProgress(data)
  );

  return {
    mutate,
    isLoading,
    data,
    isError,
  };
}