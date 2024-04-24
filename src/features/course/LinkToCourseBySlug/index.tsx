import { Link } from "react-router-dom";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { COURSES_PAGE_ROUTE } from "@shared/consts/routes";
import styles from "./LinkToCourseBySlug.module.scss";

interface Props {
  slug: string;
}

export const LinkToCourseBySlug: React.FC<Props> = ({ slug }) => {
  return (
    <Link to={COURSES_PAGE_ROUTE + "/" + slug} className={styles.link}>
      <p>Толығырақ</p>
      <FontAwesomeIcon icon={faAngleRight} />
    </Link>
  );
};
