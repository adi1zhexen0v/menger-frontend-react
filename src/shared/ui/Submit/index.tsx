import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Submit.module.scss";

interface Props {
  func: () => void;
}

export const Submit: React.FC<Props> = ({ func }) => {
  return (
    <div className={styles.button} onClick={func}>
      <FontAwesomeIcon icon={faCheck} />
    </div>
  );
};
