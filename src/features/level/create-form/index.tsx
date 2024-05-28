import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { IoText } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { CiTextAlignJustify } from "react-icons/ci";
import { ICreateLevelRequest, ILevel, useCreateLevel } from "@entities/level";
import { Input, Button, Loader, Toast } from "@shared/ui";
import styles from "./CreateLevelForm.module.scss";

interface Props {
  courseId: string;
  levels: ILevel[];
  setLevels: (levels: ILevel[]) => void;
}

export const CreateLevelForm: React.FC<Props> = ({ courseId, levels, setLevels }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { mutate, isLoading, isError } = useCreateLevel();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ICreateLevelRequest>({ defaultValues: { courseId } });

  const onSubmit: SubmitHandler<ICreateLevelRequest> = (data) => {
    mutate(data, {
      onSuccess: (res) => {
        setLevels([...levels, res]);
        reset();
      }
    });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <h4 className={styles.title} onClick={() => setIsOpen(!isOpen)}>
        Жаңа модуль қосу <IoIosArrowDown style={{ transform: `rotate(${isOpen ? 180 : 0}deg)` }} />
      </h4>
      {isOpen && (
        <>
          <Input
            title="Модульдың аты"
            placeholder="Модульдың атың енгізіңіз"
            register={register}
            errors={errors}
            name="title"
            ReactIcon={IoText}
          />
          <Input
            title="Модульдың анықтамасы"
            placeholder="Модульдың анықтамасың енгізіңіз"
            register={register}
            errors={errors}
            name="description"
            ReactIcon={CiTextAlignJustify}
            isTextarea={true}
          />
          <Button title="Жаңа модульді қосу" />
          {isLoading && <Loader isFullPage={true} />}
          {isError && (
            <Toast
              isFail={true}
              title="Қате пайда болды"
              text="Жаңа модуль қосу кезінде қате пайда болды"
            />
          )}
        </>
      )}
    </form>
  );
};
