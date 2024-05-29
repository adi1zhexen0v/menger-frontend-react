import { ICourse } from "@entities/course";

export interface ILevel {
  _id: string;
  title: string;
  description: string;
  order: number;
  courseId: ICourse;
}

export type ICreateLevelRequest = Pick<ILevel, "title" | "description"> & {
  courseId: string
};