import { IWord, WordCard } from "@entities/word";
import styles from "./WordsGrid.module.scss";

interface Props {
  words: IWord[];
}

export const WordsGrid: React.FC<Props> = ({ words }) => {
  return (
    <div className={styles.grid}>
      {words.map((word) => (
        <WordCard word={word} key={word._id} />
      ))}
    </div>
  );
};
