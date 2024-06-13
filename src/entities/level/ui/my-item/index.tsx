import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { CiTextAlignCenter } from "react-icons/ci";
import { FaBookBookmark } from "react-icons/fa6";
import { RiFolderVideoLine } from "react-icons/ri";
import { IMyLevel } from "@entities/level";
import { Button, PageText } from "@shared/ui";
import styles from "./MyLevelItem.module.scss";
import { DASHBOARD_THEORY_PAGE_ROUTE, DASHBOARD_WORD_TASK_PAGE_ROUTE } from "@shared/consts/routes";

interface Props {
  level: IMyLevel;
}

export const MyLevelItem: React.FC<Props> = ({ level }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isTheoryCompleted, setIsTheoryCompleted] = useState<boolean>(false);
  const [areWordsTasksCompleted, setAreWordsTasksCompleted] = useState<boolean>(false);
  const [areSentenceTasksCompleted, setAreSentenceTasksCompleted] = useState<boolean>(false);

  useEffect(() => {
    const theoryTask = level.tasks.find((task) => task.type === "theory");
    const wordsTasks = level.tasks.filter((task) => task.type === "wordsTask");
    const sentenceTasks = level.tasks.filter((task) => task.type === "sentenceTask");

    setIsTheoryCompleted(theoryTask ? theoryTask.isCompleted : false);
    setAreWordsTasksCompleted(
      wordsTasks.length > 0 && wordsTasks.every((task) => task.isCompleted)
    );
    setAreSentenceTasksCompleted(
      sentenceTasks.length > 0 && sentenceTasks.every((task) => task.isCompleted)
    );
  }, [level]);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h6 className={styles.title}>
          <span>Модуль {level.order}: </span>
          {level.title}
        </h6>
        <FontAwesomeIcon
          style={{ transform: `rotate(${isOpen ? 180 : 0}deg)` }}
          icon={faAngleDown}
          onClick={toggleOpen}
        />
      </div>
      {isOpen && (
        <div className={styles.body}>
          <PageText>{level.description}</PageText>
          <div className={styles.buttons}>
            <div className={styles.a}>
              <Button
                title={isTheoryCompleted ? "Видео-сабақ қаралған" : "Видео-сабақты ашу"}
                ReactIcon={RiFolderVideoLine}
                isLink={true}
                link={DASHBOARD_THEORY_PAGE_ROUTE.replace(":id", level._id)}
                disabled={isTheoryCompleted}
              />
            </div>
            <div className={styles.b}>
              <Button
                title={
                  areWordsTasksCompleted
                    ? "Сөздік тапсырмалар өтілген"
                    : "Сөздік тапсырмаларды бастау"
                }
                ReactIcon={FaBookBookmark}
                disabled={!isTheoryCompleted || areWordsTasksCompleted}
                isLink={true}
                link={DASHBOARD_WORD_TASK_PAGE_ROUTE.replace(":id", level._id)}
              />
            </div>
            <div className={styles.c}>
              <Button
                title={
                  areSentenceTasksCompleted
                    ? "Сөйлем тапсырмалар өтілген"
                    : "Сөйлем тапсырмаларды бастау"
                }
                ReactIcon={CiTextAlignCenter}
                disabled={
                  !isTheoryCompleted || !areWordsTasksCompleted || areSentenceTasksCompleted
                }
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
