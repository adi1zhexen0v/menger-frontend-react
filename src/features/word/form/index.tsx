import { useForm } from "react-hook-form";
import { IoText } from "react-icons/io5";
import { RiEnglishInput } from "react-icons/ri";
import { CgTranscript } from "react-icons/cg";
import { ICreateWord } from "@entities/word";
import { TranslateToEnglishButton, TranslateToKazakhButton } from "@entities/translate";
import { Input } from "@shared/ui";
import styles from "./CreateWordForm.module.scss";
import { useState, useEffect } from "react";

export const CreateWordForm: React.FC = () => {
  const {
    register,
    formState: { errors },
    setValue,
    watch
  } = useForm<ICreateWord>();

  const [kazValue, setKazValue] = useState("");
  const [engValue, setEngValue] = useState("");

  const watchKaz = watch("kaz");
  const watchEng = watch("eng");

  useEffect(() => {
    setKazValue(watchKaz);
  }, [watch]);

  useEffect(() => {
    setEngValue(watchEng);
  }, [watch]);

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
          />
          <TranslateToEnglishButton
            title="Сөзді ағылшыншаға аудару"
            name="eng"
            value={kazValue}
            setValue={setValue}
          />
        </div>
        <Input
          register={register}
          name="transcription"
          errors={errors}
          placeholder="Сөздің транскрипциясың еңгізіңіз"
          title="Сөздің транскрипциясы"
          ReactIcon={CgTranscript}
        />
      </div>
    </form>
  );
};
