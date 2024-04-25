import { Link } from "react-router-dom";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Button.module.scss";

interface Props {
  title: string;
  icon?: IconDefinition;
  isLink?: boolean;
  link?: string;
  isInverse?: boolean;
  marginTop?: number;
}

export const Button: React.FC<Props> = ({ isLink = false, title, icon, link, marginTop }) => {
  return isLink ? (
    <Link to={link!} className={styles.button} style={{ marginTop: `${marginTop}px` }}>
      {icon && <FontAwesomeIcon icon={icon} />}
      {title}
    </Link>
  ) : (
    <button type="submit" className={styles.button} style={{ marginTop: `${marginTop}px` }}>
      {icon && <FontAwesomeIcon icon={icon} />}
      {title}
    </button>
  );
};
