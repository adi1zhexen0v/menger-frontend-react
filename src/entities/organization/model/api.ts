import { axiosInstance } from "@shared/api";
import { IOrganization } from "./types";

export const getAllOrganizations = async () => {
  try {
    const res = await axiosInstance.get<IOrganization[]>("/organizations");
    return res.data;
  } catch (error) {
    throw error;
  }
}

export const getOrganizationBySlug = async (slug: string) => {
  try {
    const res = await axiosInstance.get<IOrganization>(`/organizations/${slug}`);
    console.log(res.data);
    return res.data;
  } catch (error) {
    throw error;
  }
}