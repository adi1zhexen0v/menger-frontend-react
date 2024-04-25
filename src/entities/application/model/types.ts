export interface IApplication {
  _id: string;
  fullName: string;
  organizationName: string;
  email: string;
  phoneNumber: string;
  text: string;
  meetingStartUrl: string;
  meetingJoinUrl: string;
  isAccepted: boolean;
  meetingDate: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export type ICreateApplicationRequest = Pick<IApplication, "fullName" | "organizationName" | "email" | "phoneNumber" | "text" | "meetingDate">;