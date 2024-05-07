import { HTMLInputTypeAttribute } from "react";
import { FieldErrors, RegisterOptions, UseFormRegister } from "react-hook-form";
import classNames from "classnames";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Error } from "../Error";
import styles from "./Input.module.scss";

interface Props {
  isTextarea?: boolean;
  title: string;
  placeholder: string;
  icon: IconDefinition;
  type?: HTMLInputTypeAttribute;
  register: UseFormRegister<any>;
  name: string;
  validator?: RegisterOptions<any, string>;
  errors: FieldErrors<any>;
}

export const Input: React.FC<Props> = ({
  isTextarea = false,
  title,
  placeholder,
  icon,
  type = "text",
  register,
  name,
  validator,
  errors
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
              {...register(name, validator && validator)}></textarea>
            {errors[name] && errors[name]?.type === "required" && (
              <span>{errors[name]?.message?.toString()}</span>
            )}
          </>
        ) : (
          <>
            <input
              type={type}
              className={styles.input}
              placeholder={placeholder}
              {...register(name, validator && validator)}
            />
            {errors[name] && <Error>{errors[name]?.message?.toString()}</Error>}
          </>
        )}
        <div className={styles.icon}>
          <FontAwesomeIcon icon={icon} />
        </div>
      </div>
    </div>
  );
};
