import { useMutation } from "react-query"
import { ICreateWordTaskRequest } from "../model/types"
import { createWordTask } from "../model/api"

export const useCreateWordTask = () => {
  const { mutate, isLoading, isError } = useMutation((data: ICreateWordTaskRequest) => createWordTask(data));
  return { mutate, isLoading, isError };
}