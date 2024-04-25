import { SubmitHandler, useForm } from "react-hook-form";
import { faAt, faLock } from "@fortawesome/free-solid-svg-icons";
import { IAuthLoginRequest, useLogin } from "@entities/user";
import { Button, Error, Input, Loader } from "@shared/ui";
import styles from "./LoginForm.module.scss";
import { Link } from "react-router-dom";
import { REGISTER_PAGE_ROUTE } from "@shared/consts/routes";

export const LoginForm: React.FC = () => {
  const { mutate, data, isLoading, error } = useLogin();

  const { register, handleSubmit, reset } = useForm<IAuthLoginRequest>();
  const onSubmit: SubmitHandler<IAuthLoginRequest> = (data) => {
    mutate(data);
    reset();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <Input
        title="E-mail"
        placeholder="Электрондық поштанызды енгізіңіз"
        icon={faAt}
        name="email"
        register={register}
      />
      <Input
        title="Құпия сөз"
        placeholder="Құпия сөзді енгізіңіз"
        icon={faLock}
        name="password"
        type="password"
        register={register}
      />
      <div className={styles.link}>
        <Button title="Кіру" />
        <Link to={REGISTER_PAGE_ROUTE}>Сіздің аккаунтыныз бар ма?</Link>
      </div>
      {isLoading && <Loader isFullPage={true} />}
      {error && (
        <Error>
          Кіру кезінде қате пайда болды: электрондық пошта мекенжайы немесе құпия сөз дұрыс емес
        </Error>
      )}
    </form>
  );
};
