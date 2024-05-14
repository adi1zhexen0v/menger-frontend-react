import { ChangeEvent } from "react";
import { SubmitHandler, UseFormSetValue, useForm } from "react-hook-form";
import classNames from "classnames";
import { faCalendar, faCreditCard, faKey, faUser } from "@fortawesome/free-solid-svg-icons";
import { RootState } from "@app/store";
import { useTransferCoursesFromCartToCourses } from "@entities/user";
import { ICourse } from "@entities/course";
import { useAppSelector } from "@shared/lib/hooks";
import { Button, Input, Loader, Toast } from "@shared/ui";
import styles from "./CartPaymentForm.module.scss";

interface PaymentHookForm {
  cardNumber: string;
  name: string;
  month: string;
  year: string;
  cvv: string;
}

export const CartPaymentForm: React.FC = () => {
  const cart: ICourse[] = useAppSelector((state: RootState) => state.user.user?.cart!);
  const { mutate, isLoading, isError } = useTransferCoursesFromCartToCourses();

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors }
  } = useForm<PaymentHookForm>();

  const handleCardInputChange = (
    event: ChangeEvent<HTMLInputElement>,
    setValue: UseFormSetValue<PaymentHookForm>
  ) => {
    const cardNumber: string = event.target.value
      .replace(/\s+/g, "")
      .replace(/(\d{4})/g, "$1 ")
      .trim();
    setValue("cardNumber", cardNumber);
  };

  const validateCardNumber = (value: string) => {
    const normalizedNumber = value.replace(/\s+/g, "");
    return /^\d{16}$/.test(normalizedNumber) ? true : "Карта нөмірі 16 саннан тұру керек";
  };

  const validateFullName = (fullName: string) => {
    const parts = fullName.trim().split(/\s+/);
    return parts.length >= 2 ? true : "Карта иесінің аты мен тегі болуы керек";
  };

  const validateMonth = (value: string) => {
    const num = parseInt(value, 10);
    return (num >= 1 && num <= 12) || "Ай мәні 01 мен 12 арасында болуы керек";
  };

  const validateYear = (value: string) => {
    const currentYear: number = +new Date().getFullYear().toString().slice(-2);
    const num = parseInt(value, 10);
    return (
      (num >= currentYear && num <= 99) || `Жыл мәні ${currentYear} пен 99 арасында болуы керек`
    );
  };

  const validateCVV = (cvv: string) => {
    const cvvRegex = /^[0-9]{3}$/;
    return cvvRegex.test(cvv) ? true : "CVV мәні 3 саннан тұру керек";
  };

  const onSubmit: SubmitHandler<PaymentHookForm> = () => {
    mutate();
    reset();
  };

  return (
    <>
      <form
        className={classNames(styles.form, { [styles.disabled]: !cart.length })}
        onSubmit={handleSubmit(onSubmit)}>
        <Input
          title="Кредит картасының нөмірі"
          placeholder="XXXX XXXX XXXX XXXX"
          icon={faCreditCard}
          name="cardNumber"
          register={register}
          errors={errors}
          validator={{
            required: { value: true, message: "Кредит картасының нөмерің енгізу керек" },
            validate: validateCardNumber
          }}
          isSmallError={true}
          onChangeFunc={handleCardInputChange}
          args={[setValue]}
          inputAttributes={{ maxLength: 19 }}
        />
        <Input
          title="Карта иесінің аты-жөні"
          placeholder="Адиль Жексенов"
          icon={faUser}
          name="name"
          register={register}
          errors={errors}
          validator={{
            required: { value: true, message: "Карта иесінің аты-жөнің енгізу керек" },
            validate: validateFullName
          }}
          isSmallError={true}
        />
        <div className={styles.grid}>
          <div className={styles.date}>
            <Input
              title="Ай"
              placeholder="05"
              icon={faCalendar}
              name="month"
              register={register}
              errors={errors}
              validator={{
                required: { value: true, message: "Ай уақытын енгізу керек" },
                validate: validateMonth
              }}
              isSmallError={true}
              inputAttributes={{ maxLength: 2 }}
            />
            <Input
              title="Жыл"
              placeholder="24"
              icon={faCalendar}
              name="year"
              register={register}
              errors={errors}
              validator={{
                required: { value: true, message: "Жыл уақытын енгізу керек" },
                validate: validateYear
              }}
              isSmallError={true}
              inputAttributes={{ maxLength: 2 }}
            />
          </div>
          <Input
            title="CVV"
            placeholder="XXX"
            icon={faKey}
            name="cvv"
            register={register}
            errors={errors}
            validator={{
              required: { value: true, message: "CVV енгізу керек" },
              validate: validateCVV
            }}
            isSmallError={true}
            inputAttributes={{ maxLength: 3 }}
          />
        </div>
        <Button title="Төлемді рәсімдеу" />
      </form>
      {isLoading && <Loader isFullPage={true} />}
      {isError && (
        <Toast
          isFail={true}
          title="Қате пайда болды"
          text="Курстарды сатып алу кезінде қате пайда болды"
        />
      )}
    </>
  );
};
