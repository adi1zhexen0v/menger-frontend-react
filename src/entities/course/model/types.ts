import { ILevel } from "@entities/level";

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
  createdAt: string;
  updatedAt: string;
}