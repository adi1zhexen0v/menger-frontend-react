import { useState, MouseEvent } from "react";
import { AiOutlineOpenAI } from "react-icons/ai";
import classNames from "classnames";
import { Toast, Loader } from "@shared/ui";
import { useWrongOptionsOfWordTask } from "@entities/gpt";
import styles from "./GetWrongOptionsOfWordTaskButton.module.scss";

interface Props {
  value: string | undefined;
  setFirstValue: (value: string) => void;
  setSecondValue: (value: string) => void;
  setThirdValue: (value: string) => void;
}

export const GetWrongOptionsOfWordTaskButton: React.FC<Props> = ({
  value,
  setFirstValue,
  setSecondValue,
  setThirdValue
}) => {
  const [valueIsEmpty, setValueIsEmpty] = useState<boolean>(false);
  const { mutate, isLoading, isError } = useWrongOptionsOfWordTask();

  const getTranscription = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    setValueIsEmpty(false);
    if (!value) {
      setValueIsEmpty(true);
      return;
    }

    mutate(value, {
      onSuccess: (res) => {
        setFirstValue(res.wrongOptions[0]);
        setSecondValue(res.wrongOptions[1]);
        setThirdValue(res.wrongOptions[2]);
      }
    });
  };

  return (
    <>
      {isError && (
        <Toast
          isFail={true}
          title="Қате пайда болды"
          text="Сөздік тапсырманың қате жауаптарың алу кезінде қате пайда болды"
        />
      )}
      {valueIsEmpty && (
        <Toast
          isFail={true}
          title="Ағылшынша аудармасың толтырыңыз"
          text="Сөздік тапсырманың қате жауаптарың алу үшін сөзді таңдаңызч"
        />
      )}
      <button
        onClick={getTranscription}
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
