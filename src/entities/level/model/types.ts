import { ICourse } from "@entities/course";
import { ISentenceTask } from "@entities/sentence-task";
import { IWordTask } from "@entities/word-task";

export interface ILevel {
  _id: string;
  title: string;
  description: string;
  order: number;
  courseId: ICourse;
  theoryId: string;
  wordsTasks: IWordTask[];
  sentenceTasks: ISentenceTask[];
}

export type ICreateLevelRequest = Pick<ILevel, "title" | "description"> & {
  courseId: string
};