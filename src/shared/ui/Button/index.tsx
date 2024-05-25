import { Link } from "react-router-dom";
import classNames from "classnames";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Loader } from "../Loader";
import styles from "./Button.module.scss";

interface Props {
  title: string;
  icon?: IconDefinition;
  isLink?: boolean;
  link?: string;
  isNewBlank?: boolean;
  marginTop?: number;
  gap?: number;
  isLoading?: boolean;
  disabled?: boolean;
  func?: () => void;
}

export const Button: React.FC<Props> = ({
  isLink = false,
  isNewBlank = false,
  title,
  icon,
  link,
  marginTop,
  gap,
  isLoading,
  disabled,
  func
}) => {
  return isLink ? (
    <Link
      to={link!}
      target={isNewBlank ? "_blank" : ""}
      className={classNames(styles.button, { [styles.link]: isLink })}
      style={{ marginTop: `${marginTop}px`, gap: `${gap}px` }}>
      {icon && <FontAwesomeIcon icon={icon} />}
      {title}
    </Link>
  ) : (
    <button
      type={func ? "button" : "submit"}
      className={styles.button}
      disabled={isLoading || disabled}
      onClick={func}
      style={{ marginTop: `${marginTop}px`, gap: `${gap}px` }}>
      {icon && <FontAwesomeIcon icon={icon} />}
      {isLoading ? <Loader isSmall={true} /> : title}
    </button>
  );
};
