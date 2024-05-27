import { VoiceType } from "@shared/consts/enums";

export interface IWord {
  _id: string;
  kaz: string;
  eng: string;
  transcription: string;
  imageUrl: string;
  audioUrl: string;
  __v: number;
}

export type ICreateWordRequest = Pick<IWord, "kaz" | "eng" | "transcription"> & {
  file: File;
  voice: VoiceType;
}