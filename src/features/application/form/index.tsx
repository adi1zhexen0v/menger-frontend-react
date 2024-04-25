import { SubmitHandler, useForm } from "react-hook-form";
import { faAt, faBuilding, faEnvelope, faPhone, faUser } from "@fortawesome/free-solid-svg-icons";
import { ICreateApplicationRequest } from "@entities/application";
import { Button, Input } from "@shared/ui";
import styles from "./ApplicationForm.module.scss";

export const ApplicationForm: React.FC = () => {
  const { register, handleSubmit } = useForm<ICreateApplicationRequest>();
  const onSubmit: SubmitHandler<ICreateApplicationRequest> = (data) => console.log(data);

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.grid}>
        <Input
          title="Аты - жөні"
          placeholder="Аты - жөніңізді енгізіңіз"
          icon={faUser}
          name="fullName"
          register={register}
        />
        <Input
          title="Ұйымның Аты"
          placeholder="Ұйымның атын енгізіңіз"
          icon={faBuilding}
          name="organizationName"
          register={register}
        />
        <Input
          title="E-mail"
          placeholder="example@mail.kz"
          icon={faAt}
          type="email"
          name="email"
          register={register}
        />
        <Input
          title="Телефон номері"
          placeholder="+7 (777) 123-45-67"
          icon={faPhone}
          type="tel"
          name="phoneNumber"
          register={register}
        />
      </div>
      <div className={styles.list}>
        <Input
          title="Қоңырау уакыты"
          placeholder="+7 (777) 123-45-67"
          icon={faPhone}
          type="datetime-local"
          name="meetingDate"
          register={register}
        />
        <Input
          title="Өтініш мазмұны"
          placeholder="Өтінішізді барынша толықтырып енгізіңіз..."
          icon={faEnvelope}
          name="text"
          register={register}
          isTextarea={true}
        />
      </div>
      <Button title="Өтініш қалдыру" marginTop={24} />
    </form>
  );
};
