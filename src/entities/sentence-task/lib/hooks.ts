import { useMutation } from "react-query"
import { ICreateSentenceTaskRequest, createSentenceTask } from "../model"

export const useCreateSentenceTask = () => {
  const { mutate, isLoading, isError } = useMutation((data: ICreateSentenceTaskRequest) => createSentenceTask(data))
  return { mutate, isLoading, isError };
}