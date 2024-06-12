import { ICourse } from "@entities/course";
import { IWordTask } from "@entities/word-task";

export interface ILevel {
  _id: string;
  title: string;
  description: string;
  order: number;
  courseId: ICourse;
  theoryId: string;
  wordsTasks: IWordTask[];
}

export type ICreateLevelRequest = Pick<ILevel, "title" | "description"> & {
  courseId: string
};