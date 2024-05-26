import { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { IoText } from "react-icons/io5";
import { RiEnglishInput } from "react-icons/ri";
import { CgTranscript } from "react-icons/cg";
import { ICreateWord } from "@entities/word";
import { TranslateToEnglishButton, TranslateToKazakhButton } from "@entities/translate";
import { Input } from "@shared/ui";
import styles from "./CreateWordForm.module.scss";
import { GetTranscriptionOfWordButton } from "@entities/gpt";

export const CreateWordForm: React.FC = () => {
  const [kazValue, setKazValue] = useState<string>("");
  const [engValue, setEngValue] = useState<string>("");

  const {
    register,
    formState: { errors },
    setValue
  } = useForm<ICreateWord>();

  const handleChangeKazValue = (e: ChangeEvent<HTMLInputElement>) => {
    setKazValue(e.target.value);
  };

  const handleChangeEngValue = (e: ChangeEvent<HTMLInputElement>) => {
    setEngValue(e.target.value);
  };

  return (
    <form className={styles.form}>
      <div className={styles.inputs}>
        <div className={styles.part}>
          <Input
            register={register}
            name="kaz"
            errors={errors}
            placeholder="Сөздің қазақша аудармасың еңгізіңіз"
            title="Сөздің қазақша аудармасы"
            ReactIcon={IoText}
            onChangeFunc={handleChangeKazValue}
            args={[]}
          />
          <TranslateToKazakhButton
            title="Сөзді қазақшаға аудару"
            name="kaz"
            value={engValue}
            setValue={setValue}
          />
        </div>
        <div className={styles.part}>
          <Input
            register={register}
            name="eng"
            errors={errors}
            placeholder="Сөздің ағылшынша аудармасың еңгізіңіз"
            title="Сөздің ағылшынша аудармасы"
            ReactIcon={RiEnglishInput}
            onChangeFunc={handleChangeEngValue}
            args={[]}
          />
          <TranslateToEnglishButton
            title="Сөзді ағылшыншаға аудару"
            name="eng"
            value={kazValue}
            setValue={setValue}
          />
        </div>
        <div className={styles.part}>
          <Input
            register={register}
            name="transcription"
            errors={errors}
            placeholder="Сөздің транскрипциясың еңгізіңіз"
            title="Сөздің транскрипциясы"
            ReactIcon={CgTranscript}
          />
          <GetTranscriptionOfWordButton
            title="Сөздің транскрипциясың ЖИ арқылы алу"
            name="transcription"
            value={engValue}
            setValue={setValue}
          />
        </div>
      </div>
    </form>
  );
};
