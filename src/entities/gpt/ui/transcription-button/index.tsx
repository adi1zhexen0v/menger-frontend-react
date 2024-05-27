import { useState, MouseEvent } from "react";
import { AiOutlineOpenAI } from "react-icons/ai";
import classNames from "classnames";
import { Toast, Loader } from "@shared/ui";
import { useTranscriptionOfWord } from "@entities/gpt";
import styles from "./GetTranscriptionOfWordButton.module.scss";

interface Props {
  value: string;
  setValue: (value: string) => void;
}

export const GetTranscriptionOfWordButton: React.FC<Props> = ({ value, setValue }) => {
  const [valueIsEmpty, setValueIsEmpty] = useState<boolean>(false);
  const { mutate, isLoading, isError } = useTranscriptionOfWord();

  const getTranscription = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    setValueIsEmpty(false);
    if (value.length === 0) {
      setValueIsEmpty(true);
    }

    mutate(value, {
      onSuccess: (res) => {
        setValue(res.transcription);
      }
    });
  };

  return (
    <>
      {isError && (
        <Toast
          isFail={true}
          title="Қате пайда болды"
          text="Сөздің транскрипциясын алу кезінде қате пайда болды"
        />
      )}
      {valueIsEmpty && (
        <Toast
          isFail={true}
          title="Ағылшынша аудармасың толтырыңыз"
          text="Сөздің транскрипциясын алу үшін қазақша аудармасың толтырыңыз"
        />
      )}
      <button
        onClick={getTranscription}
        className={classNames(styles.button, { [styles.disabled]: isLoading })}>
        {isLoading ? <Loader isSmall={true} /> : <AiOutlineOpenAI />}
      </button>
    </>
  );
};
