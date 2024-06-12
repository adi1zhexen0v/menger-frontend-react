import { Link } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";
import styles from "./BackLink.module.scss";

interface Props {
  link?: string;
  func?: () => void;
}

export const BackLink: React.FC<Props> = ({ link, func }) => {
  return func ? (
    <div onClick={func}>
      <IoArrowBackOutline className={styles.link} />
    </div>
  ) : (
    <Link to={link!}>
      <IoArrowBackOutline className={styles.link} />
    </Link>
  );
};
