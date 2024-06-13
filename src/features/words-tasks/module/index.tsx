import {
  IWordTask,
  WordsTasksModuleResult,
  useUpdateWordsTasksProgress
} from "@entities/word-task";
import { Loader, PageTitle, ProgressBar, Submit, Toast } from "@shared/ui";
import styles from "./WordsTasksModule.module.scss";
import { useEffect, useRef, useState } from "react";
import { formatTime, shuffleArray } from "@shared/utils";
import { AiFillSound } from "react-icons/ai";
import classNames from "classnames";
import { useAppDispatch, useAppSelector } from "@shared/lib/hooks";
import { updatePoints } from "@entities/user/model";
import { RootState } from "@app/store";

interface Props {
  wordsTasks: IWordTask[];
  link: string;
  levelId: string;
  courseId: string;
}

enum ToastTypes {
  CORRECT = "correct",
  MISTAKE = "mistake",
  NONE = "none"
}

export const WordsTasksModule: React.FC<Props> = ({ wordsTasks, link, levelId, courseId }) => {
  const dispatch = useAppDispatch();
  const userId = useAppSelector((state: RootState) => state.user.user!._id);

  const [toast, setToast] = useState<ToastTypes>(ToastTypes.NONE);
  const [activeId, setActiveId] = useState<string>(wordsTasks[0]._id);
  const [activeAnswer, setActiveAnswer] = useState<string>("");
  const [correctTasks, setCorrectTasks] = useState<string[]>([]);
  const [notCompletedTasks, setNotCompletedTasks] = useState<IWordTask[]>(wordsTasks);
  const [points, setPoints] = useState<number>(0);
  const [diamonds, setDiamonds] = useState<number>(0);
  const activeTask = notCompletedTasks.find((item) => item._id === activeId);
  const activeWord = activeTask?.wordId;
  const [options, setOptions] = useState<string[]>([]);
  const [elapsedTime, setElapsedTime] = useState<number>(0);
  const timerRef = useRef<number | null>(null);
  const answerAudioRef = useRef<HTMLAudioElement>(null);
  const resultAudioRef = useRef<HTMLAudioElement>(null);
  const progressPercentage = Math.round((correctTasks.length / wordsTasks.length) * 100);

  const { mutate, isError, isLoading } = useUpdateWordsTasksProgress();

  useEffect(() => {
    if (activeTask && activeWord) {
      setOptions(
        shuffleArray([
          ...activeTask.wrongOptions,
          activeTask.isKazakh ? activeWord.kaz : activeWord.eng
        ]) as string[]
      );
    }
  }, [activeTask, activeWord]);

  useEffect(() => {
    const totalPoints = wordsTasks.reduce((acc, task) => acc + task.points, 0);
    const totalDiamonds = wordsTasks.reduce((acc, task) => acc + task.diamonds, 0);
    setPoints(totalPoints);
    setDiamonds(totalDiamonds);
  }, [wordsTasks]);

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

  const checkAnswer = (option: string) => {
    setActiveAnswer(option);
    const isCorrect = option === (activeTask?.isKazakh ? activeWord?.kaz : activeWord?.eng);
    if (isCorrect) {
      setToast(ToastTypes.CORRECT);
    } else {
      setToast(ToastTypes.MISTAKE);
    }

    if (resultAudioRef.current) {
      resultAudioRef.current.play();
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
    setActiveAnswer("");
  };

  const handlePlay = () => {
    if (answerAudioRef.current) {
      answerAudioRef.current.play();
    }
  };

  if (notCompletedTasks.length === 0) {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    return (
      <WordsTasksModuleResult
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
        <PageTitle isSmall={true}>Берілген сөздің аудармасын тап:</PageTitle>
        <ProgressBar progressPercentage={progressPercentage} />
      </div>
      <div className={styles.wrapper}>
        <div className={styles.card}>
          <img src={activeWord?.imageUrl} />
          <p>{activeTask?.isKazakh ? activeWord?.eng : activeWord?.kaz}</p>
        </div>
        <div>
          <div className={styles.grid}>
            {options.map((item) => (
              <div
                key={item}
                className={classNames(styles.answer, {
                  [styles.blue]:
                    toast === ToastTypes.CORRECT &&
                    (activeTask?.isKazakh ? activeWord?.kaz : activeWord?.eng) === item,
                  [styles.red]: toast === ToastTypes.MISTAKE && item === activeAnswer
                })}
                onClick={() => checkAnswer(item)}>
                {item}
              </div>
            ))}
          </div>
          {toast !== ToastTypes.NONE && (
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
                <button onClick={handlePlay} className={styles.audio}>
                  <AiFillSound />
                </button>
                <audio ref={answerAudioRef} src={activeWord?.audioUrl}></audio>
              </div>
              <p>{activeTask?.isKazakh ? activeWord?.kaz : activeWord?.eng}</p>
            </div>
          )}
        </div>
      </div>
      {activeAnswer && <Submit func={submit} />}
      <audio ref={resultAudioRef} src={activeWord?.audioUrl}></audio>
      {isLoading && <Loader isFullPage={true} />}
      {isError && (
        <Toast
          isFail={true}
          title="Қате пайда болды"
          text="Сөздік тапсырмалардың нәтижесін сақтау кезінде қате пайда болды"
        />
      )}
    </div>
  );
};
