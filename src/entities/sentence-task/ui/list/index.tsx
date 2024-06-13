import { IoAddOutline } from "react-icons/io5";
import { ISentenceTask } from "@entities/sentence-task";
import styles from "./ListOfSentenceTasks.module.scss";
import { AudioPlayer } from "@shared/ui";

interface Props {
  sentenceTasks: ISentenceTask[];
  func: () => void;
}

export const ListOfSentenceTasks: React.FC<Props> = ({ sentenceTasks, func }) => {
  return (
    <div className={styles.list}>
      <div onClick={func} className={styles.open}>
        <IoAddOutline />
        <p>Жаңа сөздік тапсырманы қосу</p>
      </div>
      {sentenceTasks.map((item, index) => (
        <div className={styles.card}>
          <div className={styles.center}>
            <p className={styles.text}>{index + 1}</p>
          </div>
          <div className={styles.part}>
            <h4 className={styles.title}>Ағылшынша аудармасы</h4>
            <p className={styles.text}>{item.eng}</p>
          </div>
          <div className={styles.part}>
            <h4 className={styles.title}>Қазақша аудармасы</h4>
            <p className={styles.text}>{item.kaz}</p>
          </div>
          <div className={styles.part}>
            <h4 className={styles.title}>Қате жауаптар</h4>
            <p className={styles.text}>
              {item.wrongOptions.map((option, i) => (
                <span key={i}>
                  {option}
                  {i < item.wrongOptions.length - 1 && ", "}
                </span>
              ))}
            </p>
          </div>
          <div className={styles.center}>
            {item.audioUrl && <AudioPlayer audioUrl={item.audioUrl} />}
          </div>
        </div>
      ))}
    </div>
  );
};
