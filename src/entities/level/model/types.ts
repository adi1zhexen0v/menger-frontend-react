export interface ILevel {
  _id: string;
  title: string;
  description: string;
  order: number;
  courseId: string;
}

export type ICreateLevelRequest = Pick<ILevel, "title" | "description" | "courseId">;