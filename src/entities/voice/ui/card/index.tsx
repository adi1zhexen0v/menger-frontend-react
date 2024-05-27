import { useRef } from "react";
import { AiFillSound } from "react-icons/ai";
import classNames from "classnames";
import { IVoice } from "@entities/voice";
import { VoiceType } from "@shared/consts/enums";
import styles from "./VoiceCard.module.scss";

interface Props {
  voice: IVoice;
  activeVoiceType: VoiceType;
  setVoice: (voiceType: VoiceType) => void;
}

export const VoiceCard: React.FC<Props> = ({ voice, activeVoiceType, setVoice }) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <div
      className={classNames(styles.wrapper, {
        [styles.active]: activeVoiceType === voice.voiceType
      })}
      onClick={() => setVoice(voice.voiceType)}>
      <div className={styles.info}>
        <img src={voice.imageUrl} alt={voice.name} className={styles.img} />
        <p className={styles.name}>{voice.name}</p>
      </div>
      <div>
        <div onClick={handlePlay} className={styles.audio}>
          <AiFillSound />
        </div>
        <audio ref={audioRef} src={voice.audioUrl}></audio>
      </div>
    </div>
  );
};
