import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faStar } from "@fortawesome/free-solid-svg-icons";
import { faTengeSign } from "@fortawesome/free-solid-svg-icons";
import { COURSES_PAGE_ROUTE } from "@shared/consts/routes";
import { ICourse } from "../../model";
import styles from "./CourseCard.module.scss";

interface Props {
  course: ICourse;
}

export const CourseCard: React.FC<Props> = ({ course }) => {
  return (
    <div className={styles.course}>
      <div className={styles.rating}>
        <FontAwesomeIcon icon={faStar} />
        4.9
      </div>
      <div className={styles.image}>
        <img src={course.imageUrl} alt={course.title} />
      </div>
      <div className={styles.body}>
        <h4 className={styles.title}>{course.title}</h4>
        <div className={styles.footer}>
          <h6 className={styles.price}>
            {course.price} <FontAwesomeIcon icon={faTengeSign} />
          </h6>
          <Link to={`${COURSES_PAGE_ROUTE}/${course.slug}`} className={styles.link}>
            Толығырақ <FontAwesomeIcon icon={faAngleRight} />
          </Link>
        </div>
      </div>
    </div>
  );
};
