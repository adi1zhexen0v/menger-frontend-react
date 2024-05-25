import { useMutation, useQuery } from "react-query"
import { addManagerToOrganization, addStudentToOrganization, getAllOrganizations, getOrganizationBySlug, updateOrganization } from "../model/api"
import { IAddUserToOrganizationRequest } from "../model";

export const useOrganizations = () => {
  return useQuery("organizations", getAllOrganizations);
}

export const useOrganizationBySlug = (slug: string) => {
  return useQuery(["organization", slug], () => getOrganizationBySlug(slug));
}

export const useUpdateOrganization = (id: string) => {
  const {
    mutate,
    isLoading,
    isError
  } = useMutation((data: FormData) => updateOrganization(id, data));

  return {
    mutate,
    isLoading,
    isError,
  };
}

export const useAddStudentToOrganization = (id: string) => {
  const {
    mutate,
    isLoading,
    isError
  } = useMutation((data: IAddUserToOrganizationRequest) => addStudentToOrganization(id, data));

  return {
    mutate,
    isLoading,
    isError,
  };
}

export const useAddManagerToOrganization = (id: string) => {
  const {
    mutate,
    isLoading,
    isError
  } = useMutation((data: IAddUserToOrganizationRequest) => addManagerToOrganization(id, data));

  return {
    mutate,
    isLoading,
    isError,
  };
}