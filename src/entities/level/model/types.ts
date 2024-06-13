import { ICourse } from "@entities/course";
import { ISentenceTask } from "@entities/sentence-task";
import { ITheory } from "@entities/theory";
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

interface ITask {
  type: 'theory' | 'wordsTask' | 'sentenceTask';
  task: ITheory | IWordTask | ISentenceTask;
  isLocked: boolean;
  isCompleted: boolean;
}

export interface IMyLevel {
  _id: string;
  title: string;
  description: string;
  order: number;
  courseId: string;
  wordsTasks: IWordTask[];
  theoryId: ITheory;
  sentenceTasks: ISentenceTask[];
  isLocked: boolean;
  tasks: ITask[];
  __v: number;
}
