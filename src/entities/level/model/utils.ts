import { ILevel } from "./types";

export const sortLevelsByOrder = (levels: ILevel[]): ILevel[] => {
  return levels.sort((a, b) => a.order - b.order);
};