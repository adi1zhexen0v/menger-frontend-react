import { useState } from "react";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import styles from "./FaqItem.module.scss";

interface FaqItemProps {
  question: string;
  answer: string;
}

export const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className={isOpen ? classNames(styles.item, styles.item__active) : styles.item}>
      <h4 className={styles.question}>{question}</h4>
      {isOpen && <p className={styles.answer}>{answer}</p>}
      <div
        className={isOpen ? classNames(styles.btn, styles.btn__active) : styles.btn}
        onClick={() => setIsOpen(!isOpen)}>
        <FontAwesomeIcon icon={isOpen ? faMinus : faPlus} />
      </div>
    </div>
  );
};
