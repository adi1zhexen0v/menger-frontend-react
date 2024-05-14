import { SubmitHandler, useForm } from "react-hook-form";
import { faAt, faBuilding, faEnvelope, faPhone, faUser } from "@fortawesome/free-solid-svg-icons";
import { ICreateApplicationRequest, useCreateApplication } from "@entities/application";
import { Button, Error, Input, Loader, Modal } from "@shared/ui";
import { ApplicationModal } from "../modal";
import styles from "./ApplicationForm.module.scss";

export const ApplicationForm: React.FC = () => {
  const { mutate, data, isLoading, isError } = useCreateApplication();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ICreateApplicationRequest>();
  const onSubmit: SubmitHandler<ICreateApplicationRequest> = (data) => {
    mutate(data, {
      onSuccess: () => {
        reset();
      }
    });
  };

  const validateDate = (value: string) => {
    const selectedDate = new Date(value);
    const now = new Date();
    now.setSeconds(0, 0);
    return selectedDate > now || "Сіз өтіп кеткен уақытты таңдай алмайсыз";
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
          validator={{
            required: { value: true, message: "Аты-жөнің енгізу керек" }
          }}
          errors={errors}
        />
        <Input
          title="Ұйымның Аты"
          placeholder="Ұйымның атын енгізіңіз"
          icon={faBuilding}
          name="organizationName"
          register={register}
          validator={{
            required: { value: true, message: "Ұйымның атың енгізу керек" }
          }}
          errors={errors}
        />
        <Input
          title="E-mail"
          placeholder="example@mail.kz"
          icon={faAt}
          type="email"
          name="email"
          register={register}
          validator={{
            required: { value: true, message: "Электрондық пошта болуы керек" },
            pattern: {
              value: /^\S+@\S+\.\S+$/,
              message: "Электрондық поштасында `@` символы болу керек"
            }
          }}
          errors={errors}
        />
        <Input
          title="Телефон номері"
          placeholder="87771234567"
          icon={faPhone}
          type="tel"
          name="phoneNumber"
          register={register}
          validator={{
            required: { value: true, message: "Телефон номері болуы керек" },
            pattern: {
              value: /^\d+$/,
              message: "Телефон номері `871234567890` болуы керек"
            }
          }}
          errors={errors}
        />
      </div>
      <div className={styles.list}>
        <Input
          title="Қоңырау уакыты"
          placeholder=""
          icon={faPhone}
          type="datetime-local"
          name="meetingDate"
          register={register}
          validator={{
            required: { value: true, message: "Қоңырау уақыты болу керек" },
            validate: validateDate
          }}
          errors={errors}
        />
        <Input
          title="Өтініш мазмұны"
          placeholder="Өтінішізді барынша толықтырып енгізіңіз..."
          icon={faEnvelope}
          name="text"
          register={register}
          isTextarea={true}
          validator={{
            required: { value: true, message: "Өтініш мазмұны болу керек" }
          }}
          errors={errors}
        />
      </div>
      <Button title="Өтініш қалдыру" marginTop={24} />
      {isLoading && <Loader isFullPage={true} />}
      {data && (
        <Modal paddingVertical={60}>
          <ApplicationModal email={data.email} date={data.meetingDate} />
        </Modal>
      )}
      {isError && <Error marginTop={16}>Өтініш жіберу барысында қателік пайда болды</Error>}
    </form>
  );
};
