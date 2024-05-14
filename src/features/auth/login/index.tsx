import { Link } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { faAt, faLock } from "@fortawesome/free-solid-svg-icons";
import { IAuthLoginRequest, useLogin } from "@entities/user";
import { Button, Error, Input, Loader } from "@shared/ui";
import { REGISTER_PAGE_ROUTE } from "@shared/consts/routes";
import styles from "./LoginForm.module.scss";

export const LoginForm: React.FC = () => {
  const { mutate, isLoading, isError } = useLogin();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<IAuthLoginRequest>();
  const onSubmit: SubmitHandler<IAuthLoginRequest> = (data) => {
    mutate(data, {
      onSuccess: () => {
        reset();
      }
    });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <Input
        title="E-mail"
        placeholder="Электрондық поштанызды енгізіңіз"
        icon={faAt}
        name="email"
        type="email"
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
        title="Құпия сөз"
        placeholder="Құпия сөзді енгізіңіз"
        icon={faLock}
        name="password"
        type="password"
        register={register}
        validator={{
          required: { value: true, message: "Құпиясөз болуы керек" },
          pattern: {
            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,
            message: "Cіздің құпиясөзіңіз тым жеңіл"
          }
        }}
        errors={errors}
      />
      <div className={styles.link}>
        <Button title="Кіру" />
        <Link to={REGISTER_PAGE_ROUTE}>Тіркелген жоқсыз ба?</Link>
      </div>
      {isLoading && <Loader isFullPage={true} />}
      {isError && (
        <Error>
          Кіру кезінде қате пайда болды: электрондық пошта мекенжайы немесе құпия сөз дұрыс емес
        </Error>
      )}
    </form>
  );
};
