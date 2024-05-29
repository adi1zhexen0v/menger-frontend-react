import { ILevel } from "@entities/level";
import { IOrganization } from "@entities/organization";

export interface ICourse {
  _id: string;
  title: string;
  slug: string;
  description: string;
  benefits: string[];
  price: number;
  imageUrl: string;
  isPublic: boolean;
  levels: ILevel[];
  organizaionId: IOrganization;
  createdAt: string;
  updatedAt: string;
}

export type ICreateCourseRequest = Pick<ICourse, "title" | "slug" | "description" | "price">;