import { useState, MouseEvent } from "react";
import { AiOutlineOpenAI } from "react-icons/ai";
import classNames from "classnames";
import { Toast, Loader } from "@shared/ui";
import { useWrongOptionsOfSentenceTask } from "@entities/gpt";
import styles from "./GetWrongOptionsOfSentenceTaskButton.module.scss";

interface Props {
  value: string | undefined;
  count: number;
  setValue: (value: string[]) => void;
}

export const GetWrongOptionsOfSentenceTaskButton: React.FC<Props> = ({
  value,
  count,
  setValue
}) => {
  const [valueIsEmpty, setValueIsEmpty] = useState<boolean>(false);
  const { mutate, isLoading, isError } = useWrongOptionsOfSentenceTask();

  const getWrongOptionsOfSentenceTask = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    setValueIsEmpty(false);
    if (!value) {
      setValueIsEmpty(true);
      return;
    }

    mutate(
      { sentence: value, numberOfWrongOptions: count },
      {
        onSuccess: (res) => {
          console.log("Response:", res);
          setValue(res);
        }
      }
    );
  };

  return (
    <>
      {isError && (
        <Toast
          isFail={true}
          title="Қате пайда болды"
          text="Сөйлем тапсырмасының қате жауаптарың алу кезінде қате пайда болды"
        />
      )}
      {valueIsEmpty && (
        <Toast
          isFail={true}
          title="Сөйлемнің ағылшынща немесе қазақша аудармасың толтырыңыз"
          text="Сөйлемнің қате жауаптарың генерациялау үшін ағылшынща немесе қазақша аудармасың толтырыңыз"
        />
      )}
      <button
        onClick={getWrongOptionsOfSentenceTask}
        className={classNames(styles.button, { [styles.disabled]: isLoading })}>
        {isLoading ? (
          <Loader isSmall={true} />
        ) : (
          <>
            <AiOutlineOpenAI />
            <p>Қате жауаптарды генерациялау</p>
          </>
        )}
      </button>
    </>
  );
};
