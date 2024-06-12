import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faTengeSign } from "@fortawesome/free-solid-svg-icons";
import { RootState } from "@app/store";
import {
  COURSES_PAGE_ROUTE,
  DASHBOARD_COURSES_PAGE_ROUTE,
  DASHBOARD_EDIT_COURSE_PAGE_ROUTE
} from "@shared/consts/routes";
import { UserRole } from "@shared/consts/enums";
import { useAppSelector } from "@shared/lib/hooks";
import { ICourse } from "../../model";
import styles from "./CourseCard.module.scss";

interface Props {
  course: ICourse;
}

export const CourseCard: React.FC<Props> = ({ course }) => {
  const location = useLocation();
  const isDashboard = location.pathname.includes("dashboard");
  const role: UserRole | undefined = useAppSelector((state: RootState) => state.user.user?.role);

  const getCorrectLink = (slug: string): string => {
    if (!role) {
      return `${COURSES_PAGE_ROUTE}/${slug}`;
    }

    if (!isDashboard) {
      return `${COURSES_PAGE_ROUTE}/${slug}`;
    }

    if (role === UserRole.STUDENT) {
      return `${DASHBOARD_COURSES_PAGE_ROUTE}/${slug}`;
    }

    return DASHBOARD_EDIT_COURSE_PAGE_ROUTE.replace(":slug", slug);
  };

  return (
    <div className={styles.course}>
      <div className={styles.image}>
        <img src={course.imageUrl} alt={course.title} />
      </div>
      <div className={styles.body}>
        <h4 className={styles.title}>{course.title}</h4>
        <div className={styles.footer}>
          <h6 className={styles.price}>
            {course.price} <FontAwesomeIcon icon={faTengeSign} />
          </h6>
          <Link to={getCorrectLink(course.slug)} className={styles.link}>
            Толығырақ <FontAwesomeIcon icon={faAngleRight} />
          </Link>
        </div>
      </div>
    </div>
  );
};


