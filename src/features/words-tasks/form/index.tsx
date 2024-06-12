import { useState } from "react";
import { useParams } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import classNames from "classnames";
import { MdErrorOutline } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { IoCheckmarkOutline, IoDiamondSharp } from "react-icons/io5";
import { IWord, WordSelectCard } from "@entities/word";
import { ICreateWordTaskRequest, useCreateWordTask } from "@entities/word-task";
import { GetWrongOptionsOfWordTaskButton } from "@entities/gpt";
import { ManualInput, Input, Loader, Toast, Button } from "@shared/ui";
import styles from "./AddWordTaskForm.module.scss";

interface Props {
  words: IWord[];
  closeForm: () => void;
}

export const AddWordTaskForm: React.FC<Props> = ({ words, closeForm }) => {
  const { id } = useParams();
  const [activeId, setActiveId] = useState<string>("");
  const [firstWrongOption, setFirstWrongOption] = useState<string>("");
  const [secondWrongOption, setSecondWrongOption] = useState<string>("");
  const [thirdWrongOption, setThirdWrongOption] = useState<string>("");
  const [searchValue, setSearchValue] = useState<string>("");
  const [isKazakh, setIsKazakh] = useState<boolean>(false);

  const { mutate, isError, isLoading } = useCreateWordTask();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ICreateWordTaskRequest>({
    defaultValues: {
      levelId: id,
      wordId: activeId,
      points: 25,
      diamonds: 10
    }
  });

  const onSubmit: SubmitHandler<ICreateWordTaskRequest> = (data) => {
    mutate(
      {
        points: +data.points,
        diamonds: +data.diamonds,
        wordId: activeId,
        levelId: data.levelId,
        wrongOptions: [firstWrongOption, secondWrongOption, thirdWrongOption],
        isKazakh
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
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div>
        <ManualInput
          title="Керек сөзді таңдау"
          placeholder="Сөздің ағылшынша немесе қазақша аудармасың еңгізіңіз"
          Icon={CiSearch}
          value={searchValue}
          setValue={setSearchValue}
        />
        <div className={styles.words}>
          {words.filter(word => word.eng.includes(searchValue) || word.kaz.includes(searchValue)).map((item) => (
            <WordSelectCard word={item} activeId={activeId} setActiveId={setActiveId} />
          ))}
        </div>
      </div>
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
        <ManualInput
          title="Бірінші қате жауап"
          placeholder="Бірінші қате жауапты еңгізіңіз"
          Icon={MdErrorOutline}
          value={firstWrongOption}
          setValue={setFirstWrongOption}
        />
        <ManualInput
          title="Екінші қате жауап"
          placeholder="Екінші қате жауапты еңгізіңіз"
          Icon={MdErrorOutline}
          value={secondWrongOption}
          setValue={setSecondWrongOption}
        />
        <ManualInput
          title="Үшінші қате жауап"
          placeholder="Үшінші қате жауапты еңгізіңіз"
          Icon={MdErrorOutline}
          value={thirdWrongOption}
          setValue={setThirdWrongOption}
        />
        <GetWrongOptionsOfWordTaskButton
          value={
            isKazakh
              ? words.find((item) => item._id === activeId)?.eng
              : words.find((item) => item._id === activeId)?.kaz
          }
          setFirstValue={setFirstWrongOption}
          setSecondValue={setSecondWrongOption}
          setThirdValue={setThirdWrongOption}
        />
        <Button title="Сөздік тапсырманы қосу" />
      </div>
      {isLoading && <Loader isFullPage={true} />}
      {isError && (
        <Toast
          isFail={true}
          title="Қате пайда болды"
          text="Жаңа сөздік тапсырманы қосу кезінде қате пайда болды"
        />
      )}
    </form>
  );
};
