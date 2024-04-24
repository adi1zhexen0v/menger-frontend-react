import { useQuery } from "react-query";
import { getLatestCourses } from "../model";

export const useLatestCourses = () => {
  return useQuery("courses", getLatestCourses);
}