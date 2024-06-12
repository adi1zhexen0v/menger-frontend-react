import { IWord } from "@entities/word/model";
import styles from "./WordSelectCard.module.scss";
import classNames from "classnames";

interface Props {
  word: IWord;
  activeId: string;
  setActiveId: (value: string) => void;
}

export const WordSelectCard: React.FC<Props> = ({ word, activeId, setActiveId }) => {
  return (
    <div
      className={classNames(styles.card, { [styles.active]: activeId === word._id })}
      onClick={() => setActiveId(word._id)}>
      <div className={styles.img}>
        <img src={word.imageUrl} alt={word.eng} />
      </div>
      <div className={styles.content}>
        <h4>{word.eng}</h4>
        <h6>{word.kaz}</h6>
      </div>
    </div>
  );
};
