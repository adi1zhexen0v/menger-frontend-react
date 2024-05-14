import { Link, useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { faAt, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { IAuthRegisterRequest, useRegister } from "@entities/user";
import { Button, Error, Input, Loader } from "@shared/ui";
import { ACCOUNT_ACTIVATE_PAGE_ROUTE, LOGIN_PAGE_ROUTE } from "@shared/consts/routes";
import styles from "./RegisterForm.module.scss";

export const RegisterForm: React.FC = () => {
  const navigate = useNavigate();
  const { mutate, isLoading, isError, error } = useRegister();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<IAuthRegisterRequest>();
  const onSubmit: SubmitHandler<IAuthRegisterRequest> = (data) => {
    mutate(data, {
      onSuccess: () => {
        reset();
        navigate(ACCOUNT_ACTIVATE_PAGE_ROUTE);
      }
    });
  };

  console.log(error);

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
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
        <Button title="Тіркелу" />
        <Link to={LOGIN_PAGE_ROUTE}>Сіздің аккаунтыныз бар ма?</Link>
      </div>
      {isLoading && <Loader isFullPage={true} />}
      {isError && (
        <Error>Тіркелу кезінде қате пайда болды немесе бұл электрондық пошта тіркелген</Error>
      )}
    </form>
  );
};
