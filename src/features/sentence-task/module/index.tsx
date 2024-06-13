import { useEffect, useState, useRef } from "react";
import { ISentenceTask, SentenceTasksModuleResult } from "@entities/sentence-task";
import { AudioPlayer, Loader, PageTitle, ProgressBar, Submit, Toast } from "@shared/ui";
import styles from "./SentenceTaskModule.module.scss";
import { formatTime, shuffleArray } from "@shared/utils";
import { ToastTypes } from "@shared/consts/enums";
import classNames from "classnames";
import { useUpdateSentenceTasksProgress } from "@entities/sentence-task/lib/hooks";
import { useAppDispatch, useAppSelector } from "@shared/lib/hooks";
import { RootState } from "@app/store";
import { updatePoints } from "@entities/user/model";

interface Props {
  sentenceTasks: ISentenceTask[];
  link: string;
  levelId: string;
  courseId: string;
}

export const SentenceTaskModule: React.FC<Props> = ({ sentenceTasks, link, levelId, courseId }) => {
  const dispatch = useAppDispatch();
  const userId = useAppSelector((state: RootState) => state.user.user!._id);

  const [toast, setToast] = useState<ToastTypes>(ToastTypes.NONE);
  const [activeId, setActiveId] = useState<string>(sentenceTasks[0]._id);
  const [correctTasks, setCorrectTasks] = useState<string[]>([]);
  const [notCompletedTasks, setNotCompletedTasks] = useState<ISentenceTask[]>(sentenceTasks);
  const [points, setPoints] = useState<number>(0);
  const [diamonds, setDiamonds] = useState<number>(0);
  const activeTask = notCompletedTasks.find((item) => item._id === activeId);
  const audioRef = useRef<HTMLAudioElement>(null);
  const progressPercentage = Math.round((correctTasks.length / sentenceTasks.length) * 100);

  useEffect(() => {
    const totalPoints = sentenceTasks.reduce((acc, task) => acc + task.points, 0);
    const totalDiamonds = sentenceTasks.reduce((acc, task) => acc + task.diamonds, 0);
    setPoints(totalPoints);
    setDiamonds(totalDiamonds);
  }, [sentenceTasks]);

  const [elapsedTime, setElapsedTime] = useState<number>(0);
  const timerRef = useRef<number | null>(null);

  const { mutate, isError, isLoading } = useUpdateSentenceTasksProgress();

  useEffect(() => {
    timerRef.current = window.setInterval(() => {
      setElapsedTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  const [selectedWords, setSelectedWords] = useState<string[]>([]);
  const [words, setWords] = useState<string[]>([]);

  useEffect(() => {
    if (activeTask) {
      const combinedWords = [
        ...activeTask.wrongOptions,
        ...(activeTask.isKazakh ? activeTask.kaz.split(" ") : activeTask.eng.split(" "))
      ];
      setWords(shuffleArray(combinedWords));
    }
  }, [activeId]);

  const toggleWord = (word: string) => {
    if (selectedWords.includes(word)) {
      setSelectedWords((prevSelectedWords) => prevSelectedWords.filter((w) => w !== word));
    } else {
      setSelectedWords((prevSelectedWords) => [...prevSelectedWords, word]);
    }
  };

  const chunkArray = (arr: string[], chunkSize: number) => {
    const chunks = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      chunks.push(arr.slice(i, i + chunkSize));
    }
    return chunks;
  };

  const availableWords = words.filter((word) => !selectedWords.includes(word));
  const chunkedWords = chunkArray(availableWords, 6);
  const chunkedSelectedWords = chunkArray(selectedWords, 6);

  const checkAnswer = () => {
    const correctAnswer: string = activeTask!.isKazakh ? activeTask!.kaz : activeTask!.eng;
    const myAnswer: string = selectedWords.join(" ");
    if (correctAnswer === myAnswer) {
      setToast(ToastTypes.CORRECT);
    } else {
      setToast(ToastTypes.MISTAKE);
    }

    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  const submit = () => {
    let updatedNotCompletedTasks = notCompletedTasks.filter((task) => task._id !== activeId);

    if (toast === ToastTypes.CORRECT) {
      setCorrectTasks([...correctTasks, activeId]);
    } else {
      updatedNotCompletedTasks = [
        ...updatedNotCompletedTasks,
        ...notCompletedTasks.filter((task) => task._id === activeId)
      ];
    }

    setNotCompletedTasks(updatedNotCompletedTasks);

    if (updatedNotCompletedTasks.length > 0) {
      setActiveId(updatedNotCompletedTasks[0]._id);
    } else {
      dispatch(updatePoints({ points, diamonds }));
      mutate({ levelId, courseId, points, diamonds, userId });
    }

    setToast(ToastTypes.NONE);
    setSelectedWords([]);
  };

  if (notCompletedTasks.length === 0) {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    return (
      <SentenceTasksModuleResult
        link={link}
        points={points}
        diamonds={diamonds}
        time={formatTime(elapsedTime)}
      />
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <PageTitle isSmall={true}>Cөйлемнің аудармасын төмендегі сөздер арқылы жина:</PageTitle>
        <ProgressBar progressPercentage={progressPercentage} />
      </div>
      <div className={styles.wrapper}>
        <div className={styles.question}>
          {activeTask!.isKazakh ? activeTask!.eng : activeTask!.kaz}
          {activeTask!.audioUrl && <audio src={activeTask!.audioUrl} ref={audioRef}></audio>}
        </div>
        <div className={styles.sentence}>
          {chunkedSelectedWords.map((chunk, index) => (
            <div className={styles.line} key={index}>
              {chunk.map((word, i) => (
                <button
                  key={i}
                  className={styles["sentence-item"]}
                  onClick={() => toggleWord(word)}>
                  {word}
                </button>
              ))}
            </div>
          ))}
        </div>
        {toast === ToastTypes.NONE ? (
          <div className={styles.words}>
            {chunkedWords.map((chunk, index) => (
              <div className={styles.line} key={index}>
                {chunk.map((word, i) => (
                  <button key={i} className={styles["words-item"]} onClick={() => toggleWord(word)}>
                    {word}
                  </button>
                ))}
              </div>
            ))}
          </div>
        ) : (
          <div className={styles.toast}>
            <div
              className={classNames(styles.border, {
                [styles.red]: toast === ToastTypes.MISTAKE
              })}></div>
            <div className={styles["toast-header"]}>
              <h4>
                {toast === ToastTypes.CORRECT
                  ? "Cіз дұрыс жауап бердіңіз!"
                  : "Cіз қате жауап бердіңіз!"}
              </h4>
              {activeTask!.audioUrl && <AudioPlayer audioUrl={activeTask!.audioUrl} />}
            </div>
            <p>{activeTask?.isKazakh ? activeTask?.kaz : activeTask?.eng}</p>
          </div>
        )}
      </div>
      <Submit func={toast === ToastTypes.NONE ? checkAnswer : submit} />
      {isLoading && <Loader isFullPage={true} />}
      {isError && (
        <Toast
          isFail={true}
          title="Қате пайда болды"
          text="Сөйлем тапсырмалардың нәтижесін сақтау кезінде қате пайда болды"
        />
      )}
    </div>
  );
};
