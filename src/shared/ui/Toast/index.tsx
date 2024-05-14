import classNames from "classnames";
import correctMarkImg from "@img/correctmark.png";
import failMarkImg from "@img/failmark.png";
import styles from "./Toast.module.scss";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

interface Props {
  isFail?: boolean;
  title: string;
  text: string;
}

export const Toast: React.FC<Props> = ({ isFail = false, text, title }) => {
  const [animationClassName, setAnimationClassName] = useState<string>(styles.in);

  const closeToast = () => {
    setAnimationClassName(styles.out);
  };

  setTimeout(() => {
    closeToast();
  }, 5000);

  return (
    <div className={classNames(styles.container, animationClassName)}>
      <div className={styles.border} style={{ background: isFail ? "#FF808B" : "#5E81F4" }}></div>
      <div className={styles.wrapper}>
        <div className={styles.icon}>
          <img src={isFail ? failMarkImg : correctMarkImg} alt={isFail ? "Fail" : "Correct"} />
        </div>
        <div className={styles.content}>
          <h4>{title}</h4>
          <p>{text}</p>
        </div>
      </div>
      <FontAwesomeIcon icon={faX} className={styles.close} onClick={closeToast} />
    </div>
  );
};
