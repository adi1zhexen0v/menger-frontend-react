import { useMutation, useQuery } from "react-query"
import { ICreateLevelRequest } from "../model"
import { createLevel, getLevelById } from "../model/api"

export const useCreateLevel = () => {
  const { mutate, isLoading, isError } = useMutation((data: ICreateLevelRequest) => createLevel(data));

  return { mutate, isLoading, isError }
}

export const useLevelById = (id: string) => {
  return useQuery(["level", id], () => getLevelById(id));
}