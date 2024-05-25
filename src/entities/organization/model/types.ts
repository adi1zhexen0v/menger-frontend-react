import { ICourse } from "@entities/course";
import { IUser } from "@entities/user";

export interface IOrganization {
  _id: string;
  name: string;
  slug: string;
  description?: string;
  imageUrl?: string;
  managers?: IUser[];
  students?: IUser[];
  courses?: ICourse[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export type IUpdateOrganizationRequest = Pick<IOrganization, "name" | "slug" | "description"> & {
  file: File;
};