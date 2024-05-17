import { ICourse } from "@entities/course";
import { UserRole } from "@shared/consts/enums";

export interface IUser {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: UserRole;
  points: number;
  diamonds: number;
  isActivated: boolean;
  profilePictureUrl?: string;
  cart: ICourse[];
  courses: ICourse[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export type IAuthRegisterRequest = Pick<IUser, "firstName" | "lastName" | "email" | "password">;
export type IAuthLoginRequest = Pick<IUser, "email" | "password">;

export interface IAuthActiveRequest {
  activationCode: string;
}

export interface IAuthResponse {
  user: IUser;
  token: string;
}

