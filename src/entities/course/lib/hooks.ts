import { useQuery } from "react-query";
import { getCourseBySlug, getLatestCourses, getPublicCourses } from "../model";

export const usePublicCourses = () => {
  return useQuery("courses", getPublicCourses);
}

export const useLatestCourses = () => {
  return useQuery("courses", getLatestCourses);
}

export const useCourseBySlug = (slug: string) => {
  return useQuery(["course", slug], () => getCourseBySlug(slug));
}