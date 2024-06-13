import { useMutation, useQuery } from "react-query"
import { ICreateWordTaskRequest, IUpdateWordsTasksProgress } from "../model/types"
import { createWordTask, getWordTasksOfLevel, updateWordsTasksProgress } from "../model/api"

export const useCreateWordTask = () => {
  const { mutate, isLoading, isError } = useMutation((data: ICreateWordTaskRequest) => createWordTask(data));
  return { mutate, isLoading, isError };
}

export const useWordsTasksOfLevel = (id: string) => {
  return useQuery(["words-tasks", id], () => getWordTasksOfLevel(id));
}

export const useUpdateWordsTasksProgress = () => {
  const {
    mutate,
    isLoading,
    data,
    isError,
  } = useMutation(
    (data: IUpdateWordsTasksProgress) => updateWordsTasksProgress(data)
  );

  return {
    mutate,
    isLoading,
    data,
    isError,
  };
}