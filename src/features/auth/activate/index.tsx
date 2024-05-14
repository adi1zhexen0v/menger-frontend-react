import { useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { faKey } from "@fortawesome/free-solid-svg-icons";
import { IAuthActiveRequest, useAccountActivate } from "@entities/user";
import { Button, Error, Input, Loader, PageText } from "@shared/ui";
import { MAIN_PAGE_ROUTE } from "@shared/consts/routes";
import styles from "./AccountActivateForm.module.scss";

export const AccountActivateForm: React.FC = () => {
  const navigate = useNavigate();
  const { mutate, isLoading, isError } = useAccountActivate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<IAuthActiveRequest>();
  const onSubmit: SubmitHandler<IAuthActiveRequest> = (data) => {
    mutate(data, {
      onSuccess: () => {
        reset();
        navigate(MAIN_PAGE_ROUTE);
      }
    });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <Input
        title="Растау коды"
        placeholder="ХХХХХХ"
        icon={faKey}
        name="activationCode"
        type="number"
        register={register}
        validator={{
          required: { value: true, message: "Растау коды болуы керек" },
          pattern: {
            value: /^\d{6}$/,
            message: "Растау коды 6 саннан тұру керек"
          }
        }}
        errors={errors}
        inputAttributes={{ maxLength: 6 }}
      />
      <PageText>
        Қолданушы аккаунтың растау үшін сіз жазған электрондық поштаға 6-сандық растау коды
        енгізіңіз.
      </PageText>
      <div className={styles.link}>
        <Button title="Аккаунтты растау" />
      </div>
      {isLoading && <Loader isFullPage={true} />}
      {isError && <Error>Аккаунтты растау кезінде қате пайда болды</Error>}
    </form>
  );
};
