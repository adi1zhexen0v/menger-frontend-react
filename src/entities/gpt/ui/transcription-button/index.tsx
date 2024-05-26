import { useState } from "react";
import { UseFormSetValue } from "react-hook-form";
import { AiOutlineOpenAI } from "react-icons/ai";
import { Button, Toast } from "@shared/ui";
import { useTranscriptionOfWord } from "@entities/gpt/lib/hooks";

interface Props {
  name: string;
  title: string;
  value: string;
  setValue: UseFormSetValue<any>;
}

export const GetTranscriptionOfWordButton: React.FC<Props> = ({ title, name, value, setValue }) => {
  const [valueIsEmpty, setValueIsEmpty] = useState<boolean>(false);
  const { mutate, isLoading, isError } = useTranscriptionOfWord();

  const getTranscription = () => {
    setValueIsEmpty(false);
    if (value.length === 0) {
      setValueIsEmpty(true);
    }
    console.log(value);
    mutate(value, {
      onSuccess: (res) => {
        setValue(name, res.transcription);
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
      <Button
        title={title}
        ReactIcon={AiOutlineOpenAI}
        isLoading={isLoading}
        func={getTranscription}
      />
    </>
  );
};
