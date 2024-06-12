import classNames from "classnames";
import { IoAddOutline } from "react-icons/io5";
import { IWordTask } from "@entities/word-task/model";
import { shuffleArray } from "@shared/utils";
import styles from "./ListOfWordsTasks.module.scss";

interface Props {
  wordsTasks: IWordTask[];
  func: () => void;
}

export const ListOfWordsTasks: React.FC<Props> = ({ wordsTasks, func }) => {
  const options: string[] = ["A", "B", "C", "D"];

  return (
    <div>
      <p className={styles.title}>Сөздік тапсырмалар тізімі</p>
      <div className={styles.grid}>
        <div onClick={func} className={styles.open}>
          <IoAddOutline />
          <p>Жаңа сөздік тапсырманы қосу</p>
        </div>
        {wordsTasks.map((item) => {
          const word = item.wordId;
          const correctAnswer = item.isKazakh ? word.kaz : word.eng;
          const wrongOptions = shuffleArray([correctAnswer, ...item.wrongOptions]);

          return (
            <div className={styles.item}>
              <div className={styles.word}>
                <img src={word.imageUrl} alt={word._id} />
                <p>{item.isKazakh ? word.eng : word.kaz}</p>
              </div>
              <div className={styles.list}>
                {wrongOptions.map((option, i) => (
                  <div
                    className={classNames(styles.task, {
                      [styles.active]: correctAnswer === option
                    })}>
                    {options[i]}. {option}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
