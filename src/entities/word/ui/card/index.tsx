import { useRef } from "react";
import { AiFillSound } from "react-icons/ai";
import { IWord } from "@entities/word/model";
import styles from "./WordCard.module.scss";

interface Props {
  word: IWord;
}

export const WordCard: React.FC<Props> = ({ word }) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <img src={word.imageUrl} alt={word._id} />
        <button onClick={handlePlay} className={styles.audio}>
          <AiFillSound />
        </button>
        <audio ref={audioRef} src={word.audioUrl}></audio>
      </div>
      <div className={styles.info}>
        <div>
          <h4 className={styles.title}>Қазақша аудармасы</h4>
          <p className={styles.text}>{word.kaz}</p>
        </div>
        <div>
          <h4 className={styles.title}>Ағылшынша аудармасы</h4>
          <p className={styles.text}>{word.eng}</p>
        </div>
        <div>
          <h4 className={styles.title}>Сөздің транскрипциясы</h4>
          <p className={styles.text}>{word.transcription}</p>
        </div>
      </div>
    </div>
  );
};
