import { ICourse } from "@entities/course";

export interface ITheory {
  _id: string;
  videoUrl: string;
  previewUrl: string;
  isYouTube: boolean;
  points: number;
  diamonds: number;
  levelId: string;
  courseId: ICourse;
}

export type ICreateTheoryRequest = Pick<ITheory, "levelId" | "points" | "diamonds">;

export interface IUpdateTheoryProgress {
  userId: string;
  levelId: string;
  courseId: string;
  points: number;
  diamonds: number;
}