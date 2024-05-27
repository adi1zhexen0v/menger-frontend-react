import { VoiceType } from "@shared/consts/enums";
import jamesImg from "@img/voices/james.png";
import williamImg from "@img/voices/william.png";
import harryImg from "@img/voices/harry.png";
import emmaImg from "@img/voices/emma.png";
import oliviaImg from "@img/voices/olivia.png";
import sophiaImg from "@img/voices/sophia.png";
import { IVoice } from "./types";

export const voices: IVoice[] = [
  {
    name: "James",
    voiceType: VoiceType.JAMES,
    audioUrl: "https://storage.googleapis.com/menger-bucket/records/0898aa77-4bc6-44ff-85f6-08d483f046aa.mp3",
    imageUrl: jamesImg
  },
  {
    name: "William",
    voiceType: VoiceType.WILLIAM,
    audioUrl: "https://storage.googleapis.com/menger-bucket/records/077e9677-b898-4596-952b-5155ef821d72.mp3",
    imageUrl: williamImg
  },
  {
    name: "Harry",
    voiceType: VoiceType.HARRY,
    audioUrl: "https://storage.googleapis.com/menger-bucket/records/ae68dd88-6386-4ad4-9808-2f63fa046534.mp3",
    imageUrl: harryImg
  },
  {
    name: "Emma",
    voiceType: VoiceType.EMMA,
    audioUrl: "https://storage.googleapis.com/menger-bucket/records/3257c42b-bf8c-4726-8e21-1d8244f2181c.mp3",
    imageUrl: emmaImg
  },
  {
    name: "Olivia",
    voiceType: VoiceType.OLIVIA,
    audioUrl: "https://storage.googleapis.com/menger-bucket/records/a62dfcc6-dcac-4932-9e6d-a9c5be6553bc.mp3",
    imageUrl: oliviaImg
  },
  {
    name: "Sophia",
    voiceType: VoiceType.SOPHIA,
    audioUrl: "https://storage.googleapis.com/menger-bucket/records/de36c63d-a6c4-4216-a061-f3d79ed4e670.mp3",
    imageUrl: sophiaImg
  }
];