export interface ISentenceTask {
  _id: string;
  eng: string;
  kaz: string;
  wrongOptions: string[];
  points: number;
  diamonds: number;
  isKazakh: boolean;
  levelId: string;
  courseId: string;
  __v: number;
}

export type ICreateSentenceTaskRequest = Omit<ISentenceTask, "_id" | "courseId" | "__v">;