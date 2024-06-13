import { ICourse } from "@entities/course";
import { ILevel } from "@entities/level";
import { IWord } from "@entities/word";

export interface IWordTask {
  _id: string;
  wordId: IWord;
  levelId: ILevel;
  wrongOptions: string[];
  points: number;
  diamonds: number;
  isKazakh: boolean;
  courseId: ICourse;
  __v: number;
}

export type ICreateWordTaskRequest = Pick<IWordTask, "points" | "diamonds" | "isKazakh" | "wrongOptions"> & {
  wordId: string;
  levelId: string;
}

export interface IUpdateWordsTasksProgress {
  userId: string;
  levelId: string;
  courseId: string;
  points: number;
  diamonds: number;
}