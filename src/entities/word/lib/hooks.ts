import { useQuery } from "react-query"
import { getAllWords } from "../model"

export const useWords = () => {
  return useQuery("words", getAllWords);
}