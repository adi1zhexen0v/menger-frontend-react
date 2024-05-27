import { VoiceType } from "@shared/consts/enums";

export interface IVoice {
  name: string;
  voiceType: VoiceType;
  audioUrl: string;
  imageUrl: string;
}