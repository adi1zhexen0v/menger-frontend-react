import { useState, MouseEvent } from "react";
import { SiGoogletranslate } from "react-icons/si";
import classNames from "classnames";
import { useTranslateToKazakh } from "@entities/translate";
import { Loader, Toast } from "@shared/ui";
import styles from "./TranslateToKazakhButton.module.scss";

interface Props {
  value: string;
  setValue: (value: string) => void;
}

export const TranslateToKazakhButton: React.FC<Props> = ({ value, setValue }) => {
  const [valueIsEmpty, setValueIsEmpty] = useState<boolean>(false);
  const { mutate, isLoading, isError } = useTranslateToKazakh();

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
          text="Қазақшаға аудару кезінде қате пайда болды"
        />
      )}
      {valueIsEmpty ? (
        <Toast
          isFail={true}
          title="Ағылшынша аудармасың толтырыңыз"
          text="Қазақшаға аудару үшін қазақша аудармасың толтырыңыз"
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
