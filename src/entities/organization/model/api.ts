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
    return res.data;
  } catch (error) {
    throw error;
  }
}

export const updateOrganization = async (id: string, data: FormData) => {
  try {
    const token = localStorage.getItem("token");
    const res = await axiosInstance.patch(`/organizations/${id}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data'
      }
    });
    return res.data;
  } catch (error) {
    throw error;
  }
}