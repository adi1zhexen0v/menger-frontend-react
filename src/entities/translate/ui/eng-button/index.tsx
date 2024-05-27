import { useState, MouseEvent } from "react";
import { SiGoogletranslate } from "react-icons/si";
import classNames from "classnames";
import { useTranslateToEnglish } from "@entities/translate";
import { Toast, Loader } from "@shared/ui";
import styles from "./TranslateToEnglishButton.module.scss";

interface Props {
  value: string;
  setValue: (value: string) => void;
}

export const TranslateToEnglishButton: React.FC<Props> = ({ value, setValue }) => {
  const [valueIsEmpty, setValueIsEmpty] = useState<boolean>(false);
  const { mutate, isLoading, isError } = useTranslateToEnglish();

  const translate = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    setValueIsEmpty(false);
    if (value.length === 0) {
      setValueIsEmpty(true);
    }
    mutate(value, {
      onSuccess: (res) => {
        setValue(res.translatedText);
      }
    });
  };

  return (
    <>
      {isError && (
        <Toast
          isFail={true}
          title="Қате пайда болды"
          text="Ағылшыншаға аудару кезінде қате пайда болды"
        />
      )}
      {valueIsEmpty ? (
        <Toast
          isFail={true}
          title="Қазақша аудармасың толтырыңыз"
          text="Ағылшыншаға аудару үшін қазақша аудармасың толтырыңыз"
        />
      ) : null}
      <button
        onClick={translate}
        className={classNames(styles.button, { [styles.disabled]: isLoading })}>
        {isLoading ? <Loader isSmall={true} /> : <SiGoogletranslate />}
      </button>
    </>
  );
};
