import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { IoIosArrowDown } from "react-icons/io";
import { faAt, faPlus, faUser } from "@fortawesome/free-solid-svg-icons";
import { IAddUserToOrganizationRequest, useAddStudentToOrganization } from "@entities/organization";
import { IUser } from "@entities/user";
import { Button, Input, Loader, Toast } from "@shared/ui";
import styles from "./AddStudentToOrganizationForm.module.scss";

interface Props {
  id: string;
  onUserAdded: (user: IUser) => void;
}

export const AddStudentToOrganizationForm: React.FC<Props> = ({ id, onUserAdded }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { mutate, isLoading, isError } = useAddStudentToOrganization(id);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<IAddUserToOrganizationRequest>();

  const onSubmit: SubmitHandler<IAddUserToOrganizationRequest> = (userData) => {
    mutate(userData, {
      onSuccess: (res) => {
        reset();
        onUserAdded(res);
        setIsOpen(false);
      }
    });
  };

  return (
    <>
      <div className={styles.toggle} onClick={() => setIsOpen(!isOpen)}>
        Жаңа студентті қосу
        <IoIosArrowDown style={{ transform: `rotate(${isOpen ? 180 : 0}deg)` }} />
      </div>
      {isOpen && (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.line}>
            <div className={styles.input}>
              <Input
                title="Есімі"
                placeholder="Есімінізді енгізіңіз"
                icon={faUser}
                name="firstName"
                register={register}
                validator={{
                  required: { value: true, message: "Қолданушыдың есімі болуы керек" }
                }}
                errors={errors}
              />
            </div>
            <div className={styles.input}>
              <Input
                title="Тегі"
                placeholder="Тегіңізді енгізіңіз"
                icon={faUser}
                name="lastName"
                register={register}
                validator={{
                  required: { value: true, message: "Қолданушыдың тегі болуы керек" }
                }}
                errors={errors}
              />
            </div>
          </div>
          <div className={styles.line}>
            <div className={styles.input}>
              <Input
                title="E-mail"
                placeholder="Электрондық поштанызды енгізіңіз"
                icon={faAt}
                name="email"
                type="email"
                register={register}
                validator={{
                  required: { value: true, message: "Электрондық пошта болуы керек" }
                }}
                errors={errors}
              />
            </div>
            <div className={styles.button}>
              <Button title="" icon={faPlus} />
            </div>
          </div>
          {isLoading && <Loader isFullPage />}
          {isError && (
            <Toast
              isFail={true}
              title="Қате пайда болды"
              text="Жаңа қолданушы қосу кезінде қате пайда болды"
            />
          )}
        </form>
      )}
    </>
  );
};
