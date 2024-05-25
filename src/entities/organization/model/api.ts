import { axiosInstance } from "@shared/api";
import { IAddUserToOrganizationRequest, IOrganization } from "./types";

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

export const addStudentToOrganization = async (id: string, data: IAddUserToOrganizationRequest) => {
  try {
    const token = localStorage.getItem("token");
    const res = await axiosInstance.patch(`/organizations/student/${id}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    });
    return res.data;
  } catch (error) {
    throw error;
  }
}

export const addManagerToOrganization = async (id: string, data: IAddUserToOrganizationRequest) => {
  try {
    const token = localStorage.getItem("token");
    const res = await axiosInstance.patch(`/organizations/manager/${id}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    });
    return res.data;
  } catch (error) {
    throw error;
  }
}