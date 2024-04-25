import { HTMLInputTypeAttribute } from "react";
import { RegisterOptions, UseFormRegister } from "react-hook-form";
import classNames from "classnames";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
}

export const Input: React.FC<Props> = ({
  isTextarea = false,
  title,
  placeholder,
  icon,
  type = "text",
  register,
  name
}) => {
  return (
    <div>
      <p className={styles.title}>{title}</p>
      <div className={styles.block}>
        {isTextarea ? (
          <textarea
            placeholder={placeholder}
            className={classNames(styles.input, styles.textarea)}
            {...register(name)}></textarea>
        ) : (
          <input
            type={type}
            className={styles.input}
            placeholder={placeholder}
            {...register(name)}
          />
        )}
        <div className={styles.icon}>
          <FontAwesomeIcon icon={icon} />
        </div>
      </div>
    </div>
  );
};
