import { useState } from "react";
import { UseFormSetValue } from "react-hook-form";
import { SiGoogletranslate } from "react-icons/si";
import { useTranslateToKazakh } from "@entities/translate";
import { Button, Toast } from "@shared/ui";

interface Props {
  name: string;
  title: string;
  value: string;
  setValue: UseFormSetValue<any>;
}

export const TranslateToKazakhButton: React.FC<Props> = ({ title, name, value, setValue }) => {
  const [valueIsEmpty, setValueIsEmpty] = useState<boolean>(false);
  const { mutate, isLoading, isError } = useTranslateToKazakh();

  const translate = () => {
    console.log(value);
    setValueIsEmpty(false);
    if (value.length === 0) {
      setValueIsEmpty(true);
    }

    mutate(value, {
      onSuccess: (res) => {
        setValue(name, res.translatedText);
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
      <Button title={title} ReactIcon={SiGoogletranslate} isLoading={isLoading} func={translate} />
    </>
  );
};
