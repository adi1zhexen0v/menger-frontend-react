import { useMutation, useQuery } from "react-query"
import { getAllOrganizations, getOrganizationBySlug, updateOrganization } from "../model/api"

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