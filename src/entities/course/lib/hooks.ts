import { useMutation, useQuery } from "react-query";
import { getCourseBySlug, getLatestCourses, getPublicCourses, getAllCourses, getAllLevelsOfCourse, createCourse, updateCourse } from "../model";

export const useAllCourses = () => {
  return useQuery("courses", getAllCourses);
}

export const usePublicCourses = () => {
  return useQuery("courses", getPublicCourses);
}

export const useLatestCourses = () => {
  return useQuery("courses", getLatestCourses);
}

export const useCourseBySlug = (slug: string) => {
  return useQuery(["course", slug], () => getCourseBySlug(slug));
}

export const useLevelsOfCourse = (id: string) => {
  return useQuery(["course", id], () => getAllLevelsOfCourse(id));
}

export const useCreateCourse = () => {
  const { mutate, isLoading, isError } = useMutation((data: FormData) => createCourse(data));

  return { mutate, isLoading, isError };
}

export const useUpdateCourse = (id: string) => {
  const {
    mutate,
    isLoading,
    isError
  } = useMutation((data: FormData) => updateCourse(id, data));

  return {
    mutate,
    isLoading,
    isError
  };
}