import { useMutation, useQuery } from "react-query"
import { ICreateSentenceTaskRequest, IUpdateSentenceTasksProgress, createSentenceTask, getAllSentenceTaskOfLevel } from "../model"
import { updateSentenceTasksProgress } from "../model/api";

export const useCreateSentenceTask = () => {
  const { mutate, isLoading, isError } = useMutation((data: ICreateSentenceTaskRequest) => createSentenceTask(data))
  return { mutate, isLoading, isError };
}

export const useSentenceTasksOfLevel = (id: string) => {
  return useQuery(["sentenceTasks", id], () => getAllSentenceTaskOfLevel(id));
}

export const useUpdateSentenceTasksProgress = () => {
  const { mutate, isLoading, isError } = useMutation((data: IUpdateSentenceTasksProgress) => updateSentenceTasksProgress(data));

  return { mutate, isLoading, isError };
}