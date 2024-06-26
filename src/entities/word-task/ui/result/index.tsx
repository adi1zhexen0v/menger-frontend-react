import { useEffect } from "react";
import { useAddWordsToDictionary } from "@entities/user";
import { Button, Loader, Toast } from "@shared/ui";
import correctImg from "@img/correct.png";
import pointsImg from "@img/xp.png";
import diamondsImg from "@img/diamond.png";
import styles from "./WordsTasksModuleResult.module.scss";

interface Props {
  wordsIds: string[];
  time: string;
  points: number;
  diamonds: number;
  link: string;
}

export const WordsTasksModuleResult: React.FC<Props> = ({
  time,
  points,
  diamonds,
  link,
  wordsIds
}) => {
  const { mutate, isLoading, isError } = useAddWordsToDictionary();

  useEffect(() => {
    mutate(wordsIds);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.correct}>
          <img src={correctImg} alt="Correct!" />
          <h2>Тапсырма сәтті аяқталды!</h2>
        </div>
        <div className={styles.result}>
          <div>
            <h6 className={styles.title}>Орындауға жұмсалған уақыт:</h6>
            <p className={styles.time}>{time}</p>
          </div>
          <div>
            <h6 className={styles.title}>Сөздікке қосылған сөздер саны:</h6>
            <p className={styles.time}>{wordsIds.length}</p>
          </div>
          <div>
            <h6 className={styles.title}>Жиналған ұпай саны:</h6>
            <div className={styles.numbers}>
              <div className={styles.points}>
                <img src={pointsImg} alt="Points" />
                <p>+{points}</p>
              </div>
              <div className={styles.diamonds}>
                <img src={diamondsImg} alt="Diamonds" />
                <p>+{diamonds}</p>
              </div>
            </div>
          </div>
          <Button isLink={true} link={link} title="Курстың бетіне оралу" />
        </div>
      </div>
      {isLoading && <Loader isFullPage={true} />}
      {isError && (
        <Toast
          isFail={true}
          title="Қате пайда болды"
          text="Сөздікке жаңа сөздерді қосу кезінде қате пайда болды"
        />
      )}
    </div>
  );
};
