import { ILevel, IMyLevel } from "./types";

export const sortLevelsByOrder = (levels: ILevel[]): ILevel[] => {
  return levels.sort((a, b) => a.order - b.order);
};

export const sortMyLevelsByOrder = (levels: IMyLevel[]): IMyLevel[] => {
  return levels.sort((a, b) => a.order - b.order);
};