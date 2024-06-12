import { useMutation, useQuery } from "react-query"
import { ICreateWordTaskRequest } from "../model/types"
import { createWordTask, getWordTasksOfLevel } from "../model/api"

export const useCreateWordTask = () => {
  const { mutate, isLoading, isError } = useMutation((data: ICreateWordTaskRequest) => createWordTask(data));
  return { mutate, isLoading, isError };
}

export const useWordsTasksOfLevel = (id: string) => {
  return useQuery(["words-tasks", id], () => getWordTasksOfLevel(id));
}