import { useMutation } from "react-query"
import { ICreateLevelRequest } from "../model"
import { createLevel } from "../model/api"

export const useCreateLevel = () => {
  const { mutate, isLoading, isError } = useMutation((data: ICreateLevelRequest) => createLevel(data));

  return { mutate, isLoading, isError }
}