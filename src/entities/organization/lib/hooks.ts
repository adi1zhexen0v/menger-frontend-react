import { useQuery } from "react-query"
import { getAllOrganizations, getOrganizationBySlug } from "../model/api"

export const useOrganizations = () => {
  return useQuery("organizations", getAllOrganizations);
}

export const useOrganizationBySlug = (slug: string) => {
  return useQuery(["organization", slug], () => getOrganizationBySlug(slug));
}