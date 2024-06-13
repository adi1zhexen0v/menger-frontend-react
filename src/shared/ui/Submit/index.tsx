import { faArrowRight, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Submit.module.scss";

interface Props {
  func: () => void;
  isNext?: boolean;
}

export const Submit: React.FC<Props> = ({ func, isNext = false }) => {
  return (
    <div className={styles.button} onClick={func}>
      <FontAwesomeIcon icon={isNext ? faArrowRight : faCheck} />
    </div>
  );
};
