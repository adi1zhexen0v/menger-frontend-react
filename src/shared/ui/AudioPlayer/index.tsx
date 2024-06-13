import { useRef } from "react";
import { AiFillSound } from "react-icons/ai";
import styles from "./AudioPlayer.module.scss";

interface Props {
  audioUrl: string;
}

export const AudioPlayer: React.FC<Props> = ({ audioUrl }) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <div>
      <button onClick={handlePlay} className={styles.audio}>
        <AiFillSound />
      </button>
      <audio ref={audioRef} src={audioUrl}></audio>
    </div>
  );
};
