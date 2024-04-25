import { useQuery } from "react-query";
import { getLatestCourses, getPublicCourses } from "../model";

export const usePublicCourses = () => {
  return useQuery("courses", getPublicCourses);
}

export const useLatestCourses = () => {
  return useQuery("courses", getLatestCourses);
}