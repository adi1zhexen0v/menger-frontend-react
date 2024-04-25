import { SubmitHandler, useForm } from "react-hook-form";
import { faAt, faBuilding, faEnvelope, faPhone, faUser } from "@fortawesome/free-solid-svg-icons";
import { ICreateApplicationRequest, useCreateApplication } from "@entities/application";
import { Button, Error, Input, Loader, Modal } from "@shared/ui";
import { ApplicationModal } from "../modal";
import styles from "./ApplicationForm.module.scss";

export const ApplicationForm: React.FC = () => {
  const { mutate, data, isLoading, error } = useCreateApplication();

  const { register, handleSubmit, reset } = useForm<ICreateApplicationRequest>();
  const onSubmit: SubmitHandler<ICreateApplicationRequest> = (data) => {
    mutate(data);
    reset();
  };

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
      {isLoading && <Loader isFullPage={true} />}
      {data && (
        <Modal paddingVertical={60}>
          <ApplicationModal email={data.email} date={data.meetingDate} />
        </Modal>
      )}
      {error && <Error>Өтініш жіберу барысында қателік пайда болды</Error>}
    </form>
  );
};
