import { useQuery } from "react-query";
import { getLatestCourses } from "../model";

export default function useLatestCourses() {
  return useQuery("courses", getLatestCourses);
}