import { Link } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";
import styles from "./BackLink.module.scss";

interface Props {
  link: string;
}

export const BackLink: React.FC<Props> = ({ link }) => {
  return (
    <Link to={link}>
      <IoArrowBackOutline className={styles.link} />
    </Link>
  );
};
