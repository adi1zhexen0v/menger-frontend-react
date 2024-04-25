import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IForWhom } from "../model";
import styles from "./ForWhom.module.scss";

interface Props {
  forWhom: IForWhom;
}

export const ForWhomItem: React.FC<Props> = ({ forWhom }) => {
  return (
    <div className={styles.item}>
      <div className={styles.icon} style={{ background: forWhom.bgColor }}>
        <FontAwesomeIcon icon={forWhom.icon} color={forWhom.iconColor} />
      </div>
      <h6 className={styles.title}>{forWhom.title}</h6>
      <p className={styles.text}>{forWhom.text}</p>
    </div>
  );
};
