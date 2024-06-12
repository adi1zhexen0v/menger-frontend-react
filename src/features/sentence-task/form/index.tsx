import { useCreateSentenceTask } from "@entities/sentence-task/lib/hooks";
import { ICreateSentenceTaskRequest } from "@entities/sentence-task/model";
import { Button, DynamicInputList, Input, Loader, ManualInput, Toast } from "@shared/ui";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { MdErrorOutline } from "react-icons/md";
import styles from "./AddSentenceTaskForm.module.scss";
import classNames from "classnames";
import { IoCheckmarkOutline, IoDiamondSharp, IoTextOutline } from "react-icons/io5";
import { RiEnglishInput } from "react-icons/ri";
import { TranslateToEnglishButton, TranslateToKazakhButton } from "@entities/translate";
import { GetWrongOptionsOfSentenceTaskButton } from "@entities/gpt";

interface Props {
  closeForm: () => void;
}

export const AddSentenceTaskForm: React.FC<Props> = ({ closeForm }) => {
  const { id } = useParams();
  const [wrongOptions, setWrongOptions] = useState<string[]>(["", "", ""]);
  const [kaz, setKaz] = useState<string>("");
  const [eng, setEng] = useState<string>("");
  const [isKazakh, setIsKazakh] = useState<boolean>(false);

  const { mutate, isError, isLoading } = useCreateSentenceTask();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ICreateSentenceTaskRequest>({
    defaultValues: {
      levelId: id,
      points: 40,
      diamonds: 15
    }
  });

  const onSubmit: SubmitHandler<ICreateSentenceTaskRequest> = (data) => {
    mutate(
      {
        points: +data.points,
        diamonds: +data.diamonds,
        levelId: data.levelId,
        wrongOptions,
        isKazakh,
        kaz,
        eng
      },
      {
        onSuccess: () => {
          reset();
          closeForm();
        }
      }
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.inputs}>
        <div className={styles.part}>
          <ManualInput
            message="Сөйлемнің ағылшынша аудармасың толтырып, Google Translate арқылы cөйлемнің қазақша аудармасың ала аласыз"
            title="Сөйлемнің қазақша аудармасы"
            placeholder="Сөйлемнің қазақша аудармасың еңгізіңіз"
            Icon={IoTextOutline}
            value={kaz}
            setValue={setKaz}
          />
          <TranslateToKazakhButton value={eng} setValue={setKaz} />
        </div>
        <div className={styles.part}>
          <ManualInput
            message="Сөйлемнің қазақша аудармасың толтырып, Google Translate арқылы cөйлемнің ағылшынша аудармасың ала аласыз"
            title="Сөйлемнің ағылшынша аудармасы"
            placeholder="Сөйлемнің ағылшынша аудармасың еңгізіңіз"
            Icon={RiEnglishInput}
            value={eng}
            setValue={setEng}
          />
          <TranslateToEnglishButton value={kaz} setValue={setEng} />
        </div>
      </div>
      <div className={styles.form}>
        <div className={styles.inputs}>
          <Input
            title="Жиналатын ұпай саны"
            placeholder="Жиналатын ұпай саның еңгізіңіз"
            register={register}
            name="points"
            type="number"
            errors={errors}
            ReactIcon={IoCheckmarkOutline}
            validator={{
              required: { value: true, message: "Курстың аты болуы керек" }
            }}
          />
          <Input
            title="Жиналатын кристалл саны"
            placeholder="Жиналатын кристалл саның еңгізіңіз"
            register={register}
            name="diamonds"
            type="number"
            errors={errors}
            ReactIcon={IoDiamondSharp}
            validator={{
              required: { value: true, message: "Курстың аты болуы керек" }
            }}
          />
          <div>
            <p className={styles.title}>Тапсырма қазақ тілінде ма?</p>
            <div
              className={classNames(styles.switch, { [styles.active]: isKazakh })}
              onClick={() => setIsKazakh(!isKazakh)}>
              <span></span>
            </div>
          </div>
        </div>
        <div className={styles.inputs}>
          <DynamicInputList
            title="Қате сөйлем бөлшектері"
            placeholder="Қате сөйлем бөлшектерің еңгізіңіз"
            value={wrongOptions}
            onChange={setWrongOptions}
            Icon={MdErrorOutline}
          />
          <GetWrongOptionsOfSentenceTaskButton
            value={isKazakh ? eng : kaz}
            count={wrongOptions.length}
            setValue={setWrongOptions}
          />
          <Button title="Сөйлем тапсырмасың қосу" />
        </div>
      </div>

      {isLoading && <Loader isFullPage={true} />}
      {isError && (
        <Toast
          isFail={true}
          title="Қате пайда болды"
          text="Жаңа сөйлем тапсырмасың қосу кезінде қате пайда болды"
        />
      )}
    </form>
  );
};
