import { ChangeEvent, HTMLInputTypeAttribute } from "react";
import { FieldErrors, RegisterOptions, UseFormRegister } from "react-hook-form";
import { IconType } from "react-icons/lib";
import classNames from "classnames";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Error } from "../Error";
import styles from "./Input.module.scss";

interface InputAttributes {
  maxLength?: number;
  minLength?: number;
  maxValue?: number;
  minValue?: number;
  step?: number;
}

interface Props {
  isTextarea?: boolean;
  title: string;
  placeholder: string;
  icon?: IconDefinition;
  ReactIcon?: IconType;
  type?: HTMLInputTypeAttribute;
  register: UseFormRegister<any>;
  name: string;
  validator?: RegisterOptions<any, string>;
  errors: FieldErrors<any>;
  isSmallError?: boolean;
  onChangeFunc?: (...args: any[]) => void;
  args?: any[];
  inputAttributes?: InputAttributes;
}

export const Input: React.FC<Props> = ({
  isTextarea = false,
  title,
  placeholder,
  icon,
  ReactIcon,
  type = "text",
  register,
  name,
  validator,
  errors,
  isSmallError = false,
  onChangeFunc,
  args,
  inputAttributes
}) => {
  return (
    <div>
      <p className={styles.title}>{title}</p>
      <div className={styles.block}>
        {isTextarea ? (
          <>
            <textarea
              placeholder={placeholder}
              className={classNames(styles.input, styles.textarea)}
              {...register(name, validator && validator)}
              {...inputAttributes}></textarea>
            {errors[name] && errors[name]?.type === "required" && (
              <Error>{errors[name]?.message?.toString()}</Error>
            )}
          </>
        ) : (
          <>
            <input
              type={type}
              className={styles.input}
              placeholder={placeholder}
              {...register(name, validator && validator)}
              {...inputAttributes}
              onChange={(event: ChangeEvent<HTMLInputElement>) => onChangeFunc?.(event, ...args!)}
            />
            {errors[name] && (
              <Error isSmallError={isSmallError}>{errors[name]?.message?.toString()}</Error>
            )}
          </>
        )}
        <div className={styles.icon}>
          {icon && <FontAwesomeIcon icon={icon} />}
          {ReactIcon && <ReactIcon />}
        </div>
      </div>
    </div>
  );
};
