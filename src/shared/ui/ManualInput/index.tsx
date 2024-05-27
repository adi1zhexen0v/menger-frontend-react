import { ChangeEvent, HTMLInputTypeAttribute, useState } from "react";
import { IconType } from "react-icons/lib";
import { BsQuestionCircle } from "react-icons/bs";
import styles from "./ManualInput.module.scss";

interface Props {
  title: string;
  placeholder: string;
  Icon: IconType;
  type?: HTMLInputTypeAttribute;
  value: string;
  setValue: (value: string) => void;
  message?: string;
}

export const ManualInput: React.FC<Props> = ({
  title,
  placeholder,
  Icon,
  type = "text",
  value,
  setValue,
  message
}) => {
  const [isShown, setIsShown] = useState<boolean>(false);

  return (
    <div>
      <div className={styles.header}>
        <p className={styles.title}>{title}</p>
        {message && (
          <div className={styles.question}>
            <BsQuestionCircle
              onMouseEnter={() => setIsShown(true)}
              onMouseLeave={() => setIsShown(false)}
            />
            {isShown && <div className={styles.message}>{message}</div>}
          </div>
        )}
      </div>
      <div className={styles.block}>
        <input
          type={type}
          className={styles.input}
          placeholder={placeholder}
          value={value}
          onChange={(event: ChangeEvent<HTMLInputElement>) => setValue(event.target.value)}
        />
        <div className={styles.icon}>
          <Icon />
        </div>
      </div>
    </div>
  );
};
