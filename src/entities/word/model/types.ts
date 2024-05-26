export interface IWord {
  _id: string;
  kaz: string;
  eng: string;
  transcription: string;
  imageUrl: string;
  audioUrl: string;
  __v: number;
}

export type ICreateWord = Pick<IWord, "kaz" | "eng" | "transcription"> & {
  file: FileList;
}